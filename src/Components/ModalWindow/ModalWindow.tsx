import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentRepository, getOpenModal } from "../../store/selectors";
import { setOpenModal } from "../../store/repositoriesSlice";
import { AppDispatch } from "../../store/index";
import { Cross } from "../Icons/Cross";
import { Link } from "../Icons/Link";
import { Star } from "../Icons/Star";
import { Fork } from "../Icons/Fork";
import "./ModalWindow.css";

export const ModalWindow = () => {
  const currentRepository = useSelector(getCurrentRepository);
  const dispatch = useDispatch<AppDispatch>();
  const openModal: boolean = useSelector(getOpenModal);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const crossSize = document.body.clientWidth < 744 ? 24 : 40;

  if (!currentRepository) {
    return null;
  }

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      dispatch(setOpenModal(false));
    }
  };

  useEffect(() => {
    if (openModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openModal]);

  return (
    <div className="modal">
      <div className="modal__overlay">
        <div className="modal__wrapper" ref={wrapperRef}>
          <Cross className={"modal__btn-close"} size={crossSize} />
          <p className="modal__owner">{currentRepository.owner.login}</p>
          <h2 className="modal__title">{currentRepository.name}</h2>
          <p className="modal__description">{currentRepository.description}</p>
          <div className="modal__link-box">
            <Link />
            <a className="modal__link" href={`${currentRepository.html_url}`}>
              {currentRepository.html_url}
            </a>
          </div>
          <div className="modal__topics-box">
            {currentRepository.topics.map((item) => (
              <p key={item} className="modal__topic">
                {item}
              </p>
            ))}
          </div>
          <div className="modal__box-score">
            <div className="modal__box-item">
              <Star />
              <p className="modal__value">
                {currentRepository.stargazers_count}
              </p>
            </div>
            <div className="modal__box-item">
              <Fork />
              <p className="modal__value">{currentRepository.forks}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
