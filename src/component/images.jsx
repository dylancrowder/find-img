import React from "react";

export function Images({ data }) {
  return (
    <div className="gallery">
      {data.map((img, index) => (
        <div className="gallery-item" key={index}>
          <img className="gallery-image" src={img.webformatURL} alt={index} />
        </div>
      ))}
    </div>
  );
}
