import React, { useState, useEffect, useContext } from 'react';
import { IArticle } from '../models/interfaces';
import dayjs from 'dayjs';

const ArticleCard = ({
  section, subsection, title, abstract, url, uri, byline, item_type,
  updated_date, created_date, published_date, material_type_facet, kicker,
  des_facet, org_facet, per_facet, geo_facet, multimedia, short_url,
}: IArticle) => {

  const formattedSection = subsection.length
    ? `${section} / ${subsection}`
    : section

  const formattedPublishDate = dayjs(published_date).format('MM/DD/YYYY');

  return (
    <>
    { multimedia &&
      <article
        className='article-card__container'
        style={{
          backgroundImage: `url(${multimedia[0].url})`
        }}
      >
        <div className='article-card__text-overlay'>
          <div className='article-card__text-overlay__tags'>
            <h4>{ formattedSection }</h4>
            <h4>{ formattedPublishDate }</h4>
          </div>
          <h3 className='article-card__article-title'>{ title }</h3>
        </div>
      </article>
    }
    </>
  )
}

export default ArticleCard;