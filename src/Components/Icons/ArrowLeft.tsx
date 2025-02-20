import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/index";
import {
  decreaseIndexRepository,
  setCurrentRepository,
} from "../../store/repositoriesSlice";
import { getIndexRepository, getRepositories } from "../../store/selectors";

export const ArrowLeft = () => {
  const dispatch = useDispatch<AppDispatch>();
  const indexRepository = useSelector(getIndexRepository);
  const repositories = useSelector(getRepositories);

  const handleClick = () => {
    dispatch(decreaseIndexRepository(indexRepository));
  };

  useEffect(() => {
    dispatch(setCurrentRepository(repositories[indexRepository]));
  }, [indexRepository]);

  return (
    <button className="btn" onClick={handleClick}>
      <svg
        width="16"
        height="31"
        viewBox="0 0 16 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.00384617 15.3856C0.031498 15.014 0.188437 14.6618 0.449431 14.3858L12.9679 1.05271H12.9677C13.2762 0.723706 13.7082 0.525835 14.1686 0.502354C14.6292 0.47887 15.0809 0.631863 15.4239 0.927381C15.7669 1.22314 15.9733 1.63725 15.9975 2.07879C16.022 2.52032 15.8624 2.95305 15.5541 3.2818L4.07885 15.5L15.5541 27.7182C15.8624 28.047 16.022 28.4799 15.9975 28.9212C15.9733 29.3627 15.7669 29.7768 15.4239 30.0726C15.0809 30.3681 14.6292 30.5211 14.1686 30.4976C13.7082 30.4742 13.2762 30.2763 12.9677 29.9475L0.449189 16.6145H0.449431C0.133128 16.2794 -0.0274429 15.836 0.00384617 15.3852V15.3856Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};
