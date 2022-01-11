import React, { useState, useEffect, useContext, createContext } from 'react';
import { ContextValue, Article } from '../models/interfaces';

import { fetchHomeArticles } from '../apiCalls';

const Context = createContext({
  // view: 'home'
})

// api returns an array of article objects (no id) from the specified section
  // when article is clicked, find it

// what do I need in app state?
  // filter states for landing page source - home (default), arts, politics, etc
  // currently viewed article -

const ContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [ view, setView ] = useState<string>('home');
  const [ displayList, setDisplayList ] = useState<Article[]>([]);
  const [ selectedArticle, setSelectedArticle ] = useState<Article | null>(null);

  const getHomeArticles = async () => {
    const homeArticles = await fetchHomeArticles();
    // const { results } = homeArticles;
    console.log(homeArticles)
    // setDisplayList(results);
    // console.log(displayList);
  }

  useEffect(() => {
    getHomeArticles()
  }, [])

  return (
    <Context.Provider value={{
      view, selectedArticle
    }}>
    { children }
    </Context.Provider>
  )
}

export default ContextProvider;
