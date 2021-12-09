import React from 'react';
import axios from 'axios';
import RenderCountry from './RenderCountry';

const FetchCountry = props => {
  axios
    .get(`https://restcountries.com/v3.1/name/${props.countryName}`)
    .then(res => {
      props.setCountryData(res.data[0]);
      return res.data[0];
    })
    .catch(err => console.error(err));

  return '';
};

export default FetchCountry;
