import React, { useState, useEffect, useContext } from 'react';
import ReactModal from 'react-modal';
import dayjs from 'dayjs';

import { Context } from '../context/ContextProvider';
import closeIcon from '../assets/img_143760.png';

ReactModal.setAppElement('#root');

const inlineStyles: ReactModal.Styles = {
  overlay: {

  },
  content: {
    textAlign: 'center'
  }
}

const Detail = () => {
  const { selectedArticle, modalIsOpen, hideDetailView } = useContext(Context);

  const formattedPublishDate = dayjs(selectedArticle?.published_date).format('MM/DD/YYYY');
  const formattedUpdateDate = dayjs(selectedArticle?.updated_date).format('MM/DD/YYYY');

  return (
    <ReactModal
      isOpen={ modalIsOpen }
      onRequestClose={ hideDetailView }
      shouldCloseOnOverlayClick={ true }
      style={ inlineStyles }
    >
      { selectedArticle &&
        <>
        <button
          className='detail-container__modal__close-button'
          onClick={ hideDetailView }
        >
          <img className='detail-container__modal__close-button__image' src={ closeIcon } />
        </button>
        <h2 className='detail-container__modal__title' >{ selectedArticle.title }</h2>
        <h4 className='detail-container__modal__byline'>{ selectedArticle.byline }</h4>
        <h5 className='detail-container__modal__dates'>Published { formattedPublishDate } • Updated { formattedUpdateDate }</h5>
        <p className='detail-container__modal__abstract'>{ selectedArticle.abstract }</p>
        <img className='detail-container__modal__image' src={ selectedArticle.multimedia[0].url } />
        </>
      }
    </ReactModal>
  )
}

export default Detail;
