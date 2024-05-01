import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRepositories,
  setCurrentRepository,
} from "../../store/repositoriesSlice";
import {
  getRepositories,
  getIndexRepository,
  // getCurrentRepository,
} from "../../store/selectors";
import { AppDispatch } from "../../store/index";
import { Slider } from "@components/Slider/Slider";
import { SliderSkeleton } from "@components/SliderSkeleton/SliderSkeleton";
import { ModalWindow } from "@components/ModalWindow/ModalWindow";
// import { RepositoryAPI } from "../../types";
import "./App.css";

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const repositories = useSelector(getRepositories);
  const indexRepository = useSelector(getIndexRepository);
  // const currentRepository = useSelector(getCurrentRepository);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(true);

  // const item: RepositoryAPI = repositories[indexRepository];

  useEffect(() => {
    dispatch(fetchRepositories());
    dispatch(setCurrentRepository(repositories[indexRepository]));

    if (repositories) {
      setLoaded(true);
    }
  }, [loaded]);

  console.log(repositories);

  return (
    <main className="main">
      <div className="container">
        <h1 className="main__title">Топ популярных javascript репозиториев</h1>
        {loaded && item ? (
          <Slider
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            owner={item.owner}
            html_url={item.html_url}
            topics={item.topics}
            stargazers_count={item.stargazers_count}
            forks={item.forks}
          />
        ) : (
          <SliderSkeleton />
        )}
      </div>
      {openModal && (
        <ModalWindow
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          owner={item.owner}
          html_url={item.html_url}
          topics={item.topics}
          stargazers_count={item.stargazers_count}
          forks={item.forks}
        />
      )}
    </main>
  );
};
