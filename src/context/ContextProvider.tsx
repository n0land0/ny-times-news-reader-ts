import React, { useState, useEffect, useContext, createContext } from 'react';
import { IContextValue, IArticle } from '../models/interfaces';

import { fetchHomeArticles } from '../apiCalls';

export const Context = createContext<IContextValue>({
  view: 'home',
  displayList: [],
  selectedArticle: null
})

// api returns an array of article objects (no id) from the specified section
  // when article is clicked, find it

// what do I need in app state?
  // filter states for landing page source - home (default), arts, politics, etc
  // currently viewed article -

const ContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [ view, setView ] = useState<string>('home');
  const [ displayList, setDisplayList ] = useState<IArticle[]>([]);
  const [ selectedArticle, setSelectedArticle ] = useState<IArticle | null>(null);

  const getHomeArticles = async () => {
    const homeArticles = await fetchHomeArticles();
    setDisplayList(homeArticles);
  }

  useEffect(() => {
    getHomeArticles()
  }, [])

  return (
    <Context.Provider value={{
      view, displayList, selectedArticle
    }}>
    { children }
    </Context.Provider>
  )
}

export default ContextProvider;
