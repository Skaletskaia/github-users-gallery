import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/index";
import {
  increaseIndexRepository,
  setCurrentRepository,
} from "../../store/repositoriesSlice";
import { getIndexRepository, getRepositories } from "../../store/selectors";

export const ArrowRight = () => {
  const dispatch = useDispatch<AppDispatch>();
  const indexRepository = useSelector(getIndexRepository);
  const repositories = useSelector(getRepositories);

  const handleClick = () => {
    dispatch(increaseIndexRepository(indexRepository));
  };

  useEffect(() => {
    dispatch(setCurrentRepository(repositories[indexRepository]));
  }, [indexRepository]);

  return (
    <button className="btn" onClick={handleClick}>
      <svg
        width="15"
        height="31"
        viewBox="0 0 15 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9964 15.3856C14.9705 15.014 14.8233 14.6618 14.5787 14.3858L2.84256 1.05271H2.84279C2.55353 0.723706 2.14852 0.525835 1.71692 0.502354C1.28508 0.47887 0.861686 0.631863 0.540108 0.927381C0.218565 1.22314 0.0250414 1.63725 0.00230277 2.07879C-0.0206647 2.52032 0.128967 2.95305 0.417992 3.2818L11.1761 15.5L0.417992 27.7182C0.128967 28.047 -0.0206688 28.4799 0.00230277 28.9212C0.0250426 29.3627 0.218559 29.7768 0.540108 30.0726C0.861651 30.3681 1.28508 30.5211 1.71692 30.4976C2.14853 30.4742 2.55352 30.2763 2.84279 29.9475L14.5789 16.6145H14.5787C14.8752 16.2794 15.0257 15.836 14.9964 15.3852V15.3856Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};
