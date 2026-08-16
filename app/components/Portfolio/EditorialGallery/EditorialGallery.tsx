import React, { useState } from "react";
import type { PortfolioProject, GalleryItem } from "../../../data/portfolio";
import { useScrollReveal } from "../../../utils/useScrollReveal";
import styles from "./EditorialGallery.module.scss";

interface EditorialGalleryProps {
  project: PortfolioProject;
}

interface GalleryRowProps {
  items: GalleryItem[];
  rowType: "pair" | "single";
  startIndex: number;
}

interface GalleryImageProps {
  item: GalleryItem;
  index: number;
  priority?: boolean;
}

function isPortrait(item: GalleryItem): boolean {
  return item.height > item.width;
}

function GalleryImage({ item, index, priority = false }: GalleryImageProps) {
  const initialRatio =
    item.width && item.height ? item.width / item.height : 1.333;
  const [currentRatio, setCurrentRatio] = useState<number>(initialRatio);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth > 0 && naturalHeight > 0) {
      const realRatio = naturalWidth / naturalHeight;
      // If post-EXIF/decoded ratio differs significantly from CMS metadata, adapt layout dynamically
      if (Math.abs(realRatio - currentRatio) > 0.05) {
        setCurrentRatio(realRatio);
      }
    }
  };

  return (
    <figure className={styles.galleryFigure}>
      <div
        className={styles.imageWrapper}
        style={{
          aspectRatio: `${currentRatio}`,
        }}
      >
        <img
          src={item.src}
          srcSet={item.srcSet}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px"
          alt={item.alt}
          width={item.width}
          height={item.height}
          onLoad={handleImageLoad}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
      <figcaption className={styles.galleryCaption}>{item.caption}</figcaption>
    </figure>
  );
}

function GalleryRow({ items, rowType, startIndex }: GalleryRowProps) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  if (rowType === "pair" && items.length === 2) {
    const itemA = items[0];
    const itemB = items[1];

    const isA_Portrait = isPortrait(itemA);
    const isB_Portrait = isPortrait(itemB);

    let gridModifierClass = styles.gridEqual;
    if (!isA_Portrait && isB_Portrait) {
      gridModifierClass = styles.gridLandscapePortrait;
    } else if (isA_Portrait && !isB_Portrait) {
      gridModifierClass = styles.gridPortraitLandscape;
    }

    return (
      <div
        ref={revealRef}
        className={`${styles.galleryPairRow} ${gridModifierClass} ${styles.reveal}`}
      >
        <GalleryImage
          item={itemA}
          index={startIndex}
          priority={startIndex === 0}
        />
        <GalleryImage
          item={itemB}
          index={startIndex + 1}
          priority={startIndex === 0}
        />
      </div>
    );
  }

  // Single Feature Row
  const singleItem = items[0];
  if (!singleItem) return null;

  const itemIsPortrait = isPortrait(singleItem);
  const singleClass = itemIsPortrait
    ? styles.singlePortraitRow
    : styles.singleLandscapeRow;

  return (
    <div
      ref={revealRef}
      className={`${styles.gallerySingleRow} ${singleClass} ${styles.reveal}`}
    >
      <GalleryImage
        item={singleItem}
        index={startIndex}
        priority={startIndex === 0}
      />
    </div>
  );
}

export default function EditorialGallery({ project }: EditorialGalleryProps) {
  const galleryItems = project.gallery || [];
  if (galleryItems.length === 0) return null;

  // Build content-aware rows dynamically from Project_Images[]
  // Alternates Pair rows and Single Feature rows rhythmically for any count N
  const rows: {
    type: "pair" | "single";
    items: GalleryItem[];
    startIndex: number;
  }[] = [];

  let idx = 0;
  while (idx < galleryItems.length) {
    const remaining = galleryItems.length - idx;
    if (remaining >= 3) {
      // Create a Pair row followed by a Single Feature row
      rows.push({
        type: "pair",
        items: [galleryItems[idx], galleryItems[idx + 1]],
        startIndex: idx,
      });
      rows.push({
        type: "single",
        items: [galleryItems[idx + 2]],
        startIndex: idx + 2,
      });
      idx += 3;
    } else if (remaining === 2) {
      rows.push({
        type: "pair",
        items: [galleryItems[idx], galleryItems[idx + 1]],
        startIndex: idx,
      });
      idx += 2;
    } else {
      rows.push({
        type: "single",
        items: [galleryItems[idx]],
        startIndex: idx,
      });
      idx += 1;
    }
  }

  return (
    <section className={styles.gallerySection} aria-label="Project Gallery">
      <div className="container">
        {rows.map((row, rIdx) => (
          <GalleryRow
            key={rIdx}
            items={row.items}
            rowType={row.type}
            startIndex={row.startIndex}
          />
        ))}
      </div>
    </section>
  );
}
