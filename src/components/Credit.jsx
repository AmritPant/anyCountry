import React from 'react';
import classes from './Credit.module.css';

const Credit = () => {
  return (
    <div className={classes.credit}>
      <p>
        Build With{' '}
        <span role="img" alt>
          {' '}
          ❤️
        </span>{' '}
        By
        <a
          href="https://www.facebook.com/amrit.pant.522"
          rel="noopener noreferrer"
          target="_blank"
        >
          - Amrit Pant
        </a>
      </p>
    </div>
  );
};

export default Credit;
