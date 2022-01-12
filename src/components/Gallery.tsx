import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { Context } from '../context/Context';
import ArticleCard from './ArticleCard';
import Detail from './Detail';

const Gallery = () => {
  const { displayList } = useContext(Context);
  const articleCards = displayList.map(articleObj =>
    <ArticleCard key={ uuid() } {...articleObj}/>
  );

  return (
    <section className='gallery'>
      { articleCards }
      <Detail />
    </section>
  )
}

export default Gallery;
