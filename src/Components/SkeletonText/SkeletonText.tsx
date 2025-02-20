import React, { FC } from "react";
import "./SkeletonText.css";

interface TSkeletonText {
  rows: number;
}

export const SkeletonText: FC<TSkeletonText> = ({ rows }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, index) => (
        <span
          className="row-skeleton"
          key={index}
          style={{ display: "block" }}
        ></span>
      ))}
    </>
  );
};
