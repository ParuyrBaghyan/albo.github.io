import React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function SectionSlider() {
  return (
    <div className="section-slider-container">
      <h2>Առաջարկվող ապրանքներ</h2>
      <div className="next-prev-buttons">
        <button>
          <GrPrevious />
        </button>
        <button>
          <GrNext />
        </button>
      </div>
    </div>
  );
}
