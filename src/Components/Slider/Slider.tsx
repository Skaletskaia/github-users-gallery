import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Star } from "@components/Icons/Star";
import { Fork } from "@components/Icons/Fork";
import { ArrowLeft } from "@components/Icons/ArrowLeft";
import { ArrowRight } from "@components/Icons/ArrowRight";
import { setOpenModal } from "../../store/repositoriesSlice";
import { getCurrentRepository } from "../../store/selectors";

import "./Slider.css";

export const Slider = () => {
  const dispatch = useDispatch();
  const currentRepository = useSelector(getCurrentRepository);

  const handleClick = () => {
    dispatch(setOpenModal(true));
  };

  if (!currentRepository) {
    return null;
  }

  return (
    <div className="slider">
      <ArrowLeft />
      <div className="slider__main" onClick={handleClick}>
        <h2 className="slider__title">{currentRepository.name}</h2>
        <p className="slider__description">{currentRepository.description}</p>
        <div className="slider__box-values">
          <div className="slider__box-item">
            <Star />
            <p className="slider__value">
              {currentRepository.stargazers_count}
            </p>
          </div>
          <div className="slider__box-item">
            <Fork />
            <p className="slider__value">{currentRepository.forks}</p>
          </div>
        </div>
      </div>
      <ArrowRight />
    </div>
  );
};
