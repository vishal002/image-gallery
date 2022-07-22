import React, { useRef } from "react";
import { useIntersection } from "./lazyLoading";

export default function Image({ url }) {
  const imgRef = useRef(null);
  useIntersection(imgRef);

  return (
    <div className="image-container">
      <img ref={imgRef} data-src={url} alt="" height="200" width="200" />
    </div>
  );
}
