import React, { useState } from 'react';
import Form from './CountrySearch/Form';
import Tittle from './TIttle';

const Main = props => {
  const [formActive, setFormActive] = useState(true);
  return (
    <div>
      <Tittle setFormActive={setFormActive} />
      {formActive && <Form setFormActive={setFormActive} />}
    </div>
  );
};
export default Main;
