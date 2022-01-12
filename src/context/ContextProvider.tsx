import React, { useState, useEffect, useContext, createContext } from 'react';

import { IContextValue, IArticle } from '../models/interfaces';
import { Context } from './Context';
import { fetchHomeArticles, fetchArticles } from '../apiCalls';

const ContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [ view, setView ] = useState<string>('home');
  const [ displayList, setDisplayList ] = useState<IArticle[]>([]);
  const [ selectedArticle, setSelectedArticle ] = useState<IArticle | null>(null);
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ filterTags, setFilterTags ] = useState<string[]>([]);

  const getHomeArticles = async () => {
    const homeArticles = await fetchHomeArticles();
    setDisplayList(homeArticles);
  }

  // const getArticles = async (filterTags: string[]) => {
  //   const articlesToDisplay: IArticle[] = [];
  //   filterTags.forEach((sectionName: string) => {
  //     fetchArticles(sectionName)
  //       .then((resultsArray: IArticle[]) => {
  //         articlesToDisplay.push(...resultsArray)
  //         // setDisplayList([...displayList, ...resultsArray]);
  //       })
  //       .then(() => {
  //         setDisplayList(articlesToDisplay);
  //       })
  //   })
  // }

  const getArticles = async (view: string) => {
    const sectionArticles: IArticle[] = await fetchArticles(view);
    setDisplayList(sectionArticles);
  }

  const showDetailView = (event: React.MouseEvent, props: IArticle) => {
    setModalIsOpen(true);
    setSelectedArticle(props);
  }

  const hideDetailView = () => {
    setModalIsOpen(false);
    setSelectedArticle(null);
  }

  const addFilterTag = (tagToAdd: string) => {
    setFilterTags([...filterTags, tagToAdd]);
  }

  const removeFilterTag = (tagToRemove: string) => {
    const updatedFilterTags = filterTags.filter((tag: string) =>
      tag !== tagToRemove
    );
    setFilterTags(updatedFilterTags);
  }

  useEffect(() => {
    getHomeArticles()
  }, [])

  // useEffect(() => {
  //   filterTags.length
  //     ? getArticles(filterTags)
  //     : getHomeArticles()
  // }, [ filterTags ])

  useEffect(() => {
    getArticles(view)
  }, [ view ])

  return (
    <Context.Provider value={{
      view, setView, displayList, selectedArticle, modalIsOpen,
      showDetailView, hideDetailView, filterTags, setFilterTags,
      addFilterTag, removeFilterTag
    }}>
      { children }
    </Context.Provider>
  )
}

export default ContextProvider;
