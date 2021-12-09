import React, { useState } from 'react';
import Form from './CountrySearch/Form';
import Tittle from './TIttle';
import Country from './Country/Country';

const Main = props => {
  const [formActive, setFormActive] = useState(true);
  const [curCountryName, setCountryName] = useState('');
  return (
    <div>
      <Tittle setFormActive={setFormActive} />
      {formActive && (
        <Form setFormActive={setFormActive} setCountryName={setCountryName} />
      )}
      {formActive ? ' ' : <Country countryName={curCountryName} />}
    </div>
  );
};
export default Main;
