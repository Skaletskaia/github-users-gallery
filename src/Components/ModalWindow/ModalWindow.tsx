import React, { FC } from "react";
import { RepositoryAPI } from "../../types";

export const ModalWindow: FC<RepositoryAPI> = ({
  id,
  name,
  description,
  owner,
  html_url,
  topics,
  stargazers_count,
  forks,
}) => {
  return (
    <div>
      <div className="modal-overlay">
        <div className=""></div>
      </div>
      ;
    </div>
  );
};
