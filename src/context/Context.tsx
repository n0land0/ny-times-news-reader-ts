import { createContext } from 'react';

import { IContextValue } from '../models/interfaces';

export const Context = createContext<IContextValue>({
  view: 'home',
  setView: () => {},
  displayList: [],
  selectedArticle: null,
  modalIsOpen: false,
  showDetailView: () => {},
  hideDetailView: () => {},
});
