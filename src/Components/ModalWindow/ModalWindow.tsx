import React, { FC } from "react";
import { RepositoryAPI } from "../../types";
import { Cross } from "../Icons/Cross";
import { Link } from "../Icons/Link";
import { Star } from "../Icons/Star";
import { Fork } from "../Icons/Fork";
import "./ModalWindow.css";

export const ModalWindow: FC<RepositoryAPI> = ({
  name,
  description,
  owner,
  html_url,
  topics,
  stargazers_count,
  forks,
}) => {
  return (
    <div className="modal">
      <div className="modal__overlay">
        <div className="modal__wrapper">
          <Cross />
          <p className="modal__owner">{owner.login}</p>
          <h2 className="modal__title">{name}</h2>
          <p className="modal-description">{description}</p>
          <div className="modal__link-box">
            <Link />
            <a className="modal__link" href={`${html_url}`}>
              {html_url}
            </a>
          </div>
          <div className="modal__topics-box">
            {topics.map((item) => {
              return (
                <p key={item} className="modal__topic">
                  {item}
                </p>
              );
            })}
          </div>
          <div className="modal__box-score">
            <div className="modal__box-item">
              <Star />
              <p className="modal__value">{stargazers_count}</p>
            </div>
            <div className="modal__box-item">
              <Fork />
              <p className="modal__value">{forks}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
