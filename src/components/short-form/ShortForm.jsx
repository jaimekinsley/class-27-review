import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShortForm.css';

const ShortForm = ({ longUrl, onChange, onSubmit }) => (
  <form className={styles.ShortForm} onSubmit={onSubmit}>
    <input type="text" value={longUrl} onChange={onChange} />
    <button>Submit</button>
  </form>
);

ShortForm.propTypes = {
  longUrl: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ShortForm;
