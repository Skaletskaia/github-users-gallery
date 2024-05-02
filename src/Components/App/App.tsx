import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRepositories,
  setCurrentRepository,
} from "../../store/repositoriesSlice";
import {
  getRepositories,
  getIndexRepository,
  getOpenModal,
  getCurrentRepository,
} from "../../store/selectors";
import { AppDispatch } from "../../store/index";
import { Slider } from "@components/Slider/Slider";
import { SliderSkeleton } from "@components/SliderSkeleton/SliderSkeleton";
import { ModalWindow } from "@components/ModalWindow/ModalWindow";
import { RepositoryAPI } from "../../types";
import { CSSTransition } from "react-transition-group";
import "./App.css";

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const modalRef = useRef(null);
  const repositories = useSelector(getRepositories);
  const indexRepository = useSelector(getIndexRepository);
  const currentRepository: RepositoryAPI | null =
    useSelector(getCurrentRepository);
  const openModal = useSelector(getOpenModal);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchRepositories()).then(() => {
      setLoaded(true);
    });
  }, [dispatch]);

  useEffect(() => {
    if (repositories.length > 0) {
      dispatch(setCurrentRepository(repositories[indexRepository]));
    }
  }, [repositories]);

  return (
    <>
      <main className="main">
        <div className="container">
          <h1 className="main__title">
            Топ популярных javascript репозиториев
          </h1>
          {loaded && currentRepository ? <Slider /> : <SliderSkeleton />}
        </div>

        <CSSTransition
          in={openModal}
          timeout={300}
          classNames="modal"
          mountOnEnter
          unmountOnExit
          nodeRef={modalRef}
        >
          <div ref={modalRef}>
            <ModalWindow />
          </div>
        </CSSTransition>
      </main>
    </>
  );
};
