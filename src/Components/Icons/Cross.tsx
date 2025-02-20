import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { setOpenModal } from "../../store/repositoriesSlice";

export interface TCross {
  className: string;
  size: number;
}

export const Cross: FC<TCross> = ({ className, size }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={className}
      onClick={() => {
        dispatch(setOpenModal(false));
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.68868 2.68868C3.60692 1.77044 5.09589 1.77044 6.01413 2.68868L12 8.67455L17.9859 2.68868C18.9041 1.77044 20.3931 1.77044 21.3113 2.68868C22.2296 3.60692 22.2296 5.09589 21.3113 6.01413L15.3255 12L21.3113 17.9859C22.2296 18.9041 22.2296 20.3931 21.3113 21.3113C20.3931 22.2296 18.9041 22.2296 17.9859 21.3113L12 15.3251L6.01413 21.311C5.09589 22.2292 3.60692 22.2292 2.68868 21.311C1.77044 20.3927 1.77044 18.9038 2.68868 17.9855L8.67455 11.9997L2.68868 6.0138C1.77044 5.09556 1.77044 3.60659 2.68868 2.68835V2.68868Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};
