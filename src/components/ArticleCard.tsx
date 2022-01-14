import React, { useContext } from 'react';
import dayjs from 'dayjs';

import { Context } from '../context/Context';
import { IArticle } from '../models/interfaces';

const ArticleCard = ({
  section, subsection, title, abstract, url, uri, byline, item_type,
  updated_date, created_date, published_date, material_type_facet, kicker,
  des_facet, org_facet, per_facet, geo_facet, multimedia, short_url,
}: IArticle) => {

  const { showDetailView } = useContext(Context);

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
        onClick={ () => showDetailView({
          section, subsection, title, abstract, url, uri, byline, item_type,
          updated_date, created_date, published_date, material_type_facet, kicker,
          des_facet, org_facet, per_facet, geo_facet, multimedia, short_url,
        }) }
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
