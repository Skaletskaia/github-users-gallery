import React from "react";
import { Star } from "@components/Icons/Star";
import { Fork } from "@components/Icons/Fork";
import { ArrowLeft } from "@components/Icons/ArrowLeft";
import { ArrowRight } from "../Icons/ArrowRight";
import { SkeletonText } from "@components/SkeletonText/SkeletonText";
import "../Slider/Slider.css";

export const SliderSkeleton = () => {
  const skeletonTextRows = document.body.clientWidth < 1228 ? 3 : 2;

  return (
    <div className="slider">
      <div className="slider__wrapper">
        <ArrowLeft />
        <div className="slider__main">
          <h2 className="slider__title">
            <SkeletonText rows={1} />
          </h2>
          <p className="slider__description">
            <SkeletonText rows={skeletonTextRows} />
          </p>
          <div className="slider__box-values">
            <div className="slider__box-item">
              <Star />
              <p className="slider__value">
                <SkeletonText rows={1} />
              </p>
            </div>
            <div className="slider__box-item">
              <Fork />
              <p className="slider__value">
                <SkeletonText rows={1} />
              </p>
            </div>
          </div>
        </div>
        <ArrowRight />
      </div>
    </div>
  );
};
