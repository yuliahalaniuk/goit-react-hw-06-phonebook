import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = ({ contactList }) => {
  return (
    <ul className={css.contactList}>
      {contactList.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
