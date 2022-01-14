import React, { useState, useEffect, PropsWithChildren } from 'react';

import { IArticle } from '../models/interfaces';
import { Context } from './Context';
import { fetchHomeArticles, fetchArticles } from '../apiCalls';

const ContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [ view, setView ] = useState<string>('home');
  const [ displayList, setDisplayList ] = useState<IArticle[]>([]);
  const [ selectedArticle, setSelectedArticle ] = useState<IArticle | null>(null);
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const getHomeArticles = async () => {
    const homeArticles = await fetchHomeArticles();
    setDisplayList(homeArticles);
  }

  const getArticles = async (view: string) => {
    const sectionArticles: IArticle[] = await fetchArticles(view);
    setDisplayList(sectionArticles);
  }

  const showDetailView = (props: IArticle) => {
    setModalIsOpen(true);
    setSelectedArticle(props);
  }

  const hideDetailView = () => {
    setModalIsOpen(false);
    setSelectedArticle(null);
  }

  useEffect(() => {
    getHomeArticles()
  }, [])

  useEffect(() => {
    getArticles(view)
  }, [ view ])

  return (
    <Context.Provider value={{
      view, setView, displayList, selectedArticle, modalIsOpen,
      showDetailView, hideDetailView
    }}>
      { children }
    </Context.Provider>
  )
}

export default ContextProvider;
