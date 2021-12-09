import React, { useState } from 'react';
import FetchCountry from './FetchCountry';
import RenderCountry from './RenderCountry';

const Country = props => {
  const [countryData, setCountryData] = useState(undefined);
  // const [curCurrencyCode, setCurrencyCode] = useState('');

  return (
    <div>
      <FetchCountry
        countryName={props.countryName}
        setCountryData={setCountryData}
      />
      <RenderCountry countryData={countryData} />
    </div>
  );
};

export default Country;
