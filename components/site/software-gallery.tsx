"use client";

import { useState } from "react";
import { softwareViews, type SoftwareViewId } from "@/lib/site-data";

const viewIds: SoftwareViewId[] = ["support", "issue-tree", "ai-replies"];

export function SoftwareGallery() {
  const [viewId, setViewId] = useState<SoftwareViewId>("support");
  const view = softwareViews[viewId];

  return (
    <div className="brand-showcase software-showcase">
      <div className="showcase-heading">
        <p>INSIDE THE PLATFORM</p>
        <a href="https://apps.shopify.com/chililabs-support" target="_blank" rel="noopener noreferrer">View Shopify app</a>
      </div>
      <figure className="software-screen">
        <img id="software-image" src={`/assets/brands/${view.image}`} width={1280} height={720} loading="lazy" alt={view.alt} />
        <figcaption id="software-caption">{view.caption}</figcaption>
      </figure>
      <div className="software-tabs" role="group" aria-label="Chili Labs product views">
        {viewIds.map(id => <button type="button" key={id} data-software={id} aria-pressed={id === viewId} onClick={() => setViewId(id)}>{softwareViews[id].label}</button>)}
      </div>
    </div>
  );
}
