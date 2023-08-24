import React from 'react';
import css from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label className={css.filterTitle}>
      Filter
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={e => {
          dispatch(filterContacts(e.target.value));
        }}
      ></input>
    </label>
  );
};

export default Filter;
