"use client";

import { useState } from "react";
import { brandLogos, productRanges, type ProductBrand } from "@/lib/site-data";

export function ProductGallery({ brand }: { brand: ProductBrand }) {
  const [page, setPage] = useState(0);
  const products = productRanges[brand];
  const perPage = 4;
  const pageCount = Math.ceil(products.length / perPage);
  const website = brand === "fastron" ? "https://www.fastron.in/all-products" : "https://www.boltzpetcare.com/all-products";

  return (
    <div className="brand-showcase" data-gallery={brand}>
      <div className="showcase-heading">
        <p>FROM THE PRODUCT RANGE</p>
        <a href={website} target="_blank" rel="noopener noreferrer">View all products</a>
      </div>
      <div className="product-grid" id={`${brand}-products`}>
        {products.map((product, index) => (
          <figure className="product" key={product.url} hidden={Math.floor(index / perPage) !== page}>
            <a className="product-image" href={product.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${product.name} on the brand website`}>
              <img src={`/assets/brands/${product.image}`} alt={product.name} loading="lazy" width={product.width} height={product.height} />
            </a>
            <figcaption><strong>{product.name}</strong><span>{product.category}</span></figcaption>
          </figure>
        ))}
      </div>
      <div className="gallery-controls">
        <p className="gallery-count" aria-live="polite">{String(page + 1).padStart(2, "0")} / {String(pageCount).padStart(2, "0")} · {products.length} selected products</p>
        <div>
          <button type="button" data-step="-1" aria-label={`Previous ${brandLogos[brand].alt} products`} disabled={page === 0} onClick={() => setPage(current => Math.max(0, current - 1))}>Previous</button>
          <button type="button" data-step="1" aria-label={`Next ${brandLogos[brand].alt} products`} disabled={page === pageCount - 1} onClick={() => setPage(current => Math.min(pageCount - 1, current + 1))}>Next</button>
        </div>
      </div>
    </div>
  );
}
