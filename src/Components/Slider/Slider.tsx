import React, { FC, useState } from "react";
import { Star } from "@components/Icons/Star";
import { Fork } from "@components/Icons/Fork";
import { RepositoryAPI } from "../../types";
import { ArrowLeft } from "@components/Icons/ArrowLeft";
import { ArrowRight } from "../Icons/ArrowRight";
import { ModalWindow } from "@components/ModalWindow/ModalWindow";
import "./Slider.css";

export const Slider: FC<RepositoryAPI> = ({
  name,
  description,
  owner,
  html_url,
  topics,
  stargazers_count,
  forks,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="slider">
      <div className="slider__wrapper">
        <ArrowLeft />
        <div
          className="slider__main"
          onClick={() => {
            setOpenModal(true);
          }}
        >
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
      {openModal && (
        <ModalWindow
          name={name}
          description={description}
          owner={owner}
          html_url={html_url}
          topics={topics}
          stargazers_count={stargazers_count}
          forks={forks}
        />
      )}
    </div>
  );
};
