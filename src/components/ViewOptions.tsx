import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { Context } from '../context/Context';
import { sections } from '../data/sections';

const ViewOptions = () => {
  const { view, setView } = useContext(Context);

  const sectionOptions = sections.map(sectionName =>
    <option
      key={ uuid() }
      value={ sectionName }
    >
      { sectionName }
    </option>
  );

  return (
    <select
      className='view-options__dropdown'
      value={ view }
      onChange={ (event: any) => setView(event.target.value) }
    >
      { sectionOptions }
    </select>
  )
}

export default ViewOptions;
