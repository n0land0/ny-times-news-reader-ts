import React, { useState, useEffect, useContext } from 'react';
import { IArticle } from '../models/interfaces';

const ArticleCard = ({
  section, subsection, title, abstract, url, uri, byline, item_type,
  updated_date, created_date, published_date, material_type_facet, kicker,
  des_facet, org_facet, per_facet, geo_facet, multimedia, short_url,
}: IArticle) => {

  return (
    <>
    { multimedia.length &&
      <article
        className='article-card__container'
        style={{
          backgroundImage: `url(${multimedia[0].url})`
        }}
      >
        <div className='article-card__text-overlay'>
          <h1>overlay</h1>
        </div>
      </article>
    }
    </>
  )
}

export default ArticleCard;
