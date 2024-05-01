import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getCurrentRepository } from "../../store/selectors";
import { Star } from "@components/Icons/Star";
import { Fork } from "@components/Icons/Fork";
import { RepositoryAPI } from "../../types";
import { ArrowLeft } from "@components/Icons/ArrowLeft";
import { ArrowRight } from "../Icons/ArrowRight";
import "./Slider.css";

export const Slider: FC<RepositoryAPI> = ({
  name,
  description,
  stargazers_count,
  forks,
}) => {
  const currentRepository: RepositoryAPI = useSelector(getCurrentRepository);

  return (
    <div className="slider">
      <ArrowLeft />
      <div className="slider__main">
        <h2 className="slider__title">{name}</h2>
        <p className="slider__description">{description}</p>
        <div className="slider__box-values">
          <div className="slider__box-item">
            <Star />
            <p className="slider__value">{stargazers_count}</p>
          </div>
          <div className="slider__box-item">
            <Fork />
            <p className="slider__value">{forks}</p>
          </div>
        </div>
      </div>
      <ArrowRight />
    </div>
  );
};
