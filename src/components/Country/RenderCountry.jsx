import React from 'react';
import classes from './RenderCountry.module.css';

const RenderCountry = props => {
  // Guard Clause
  if (!props.countryData) return '';
  const countryData = props.countryData;
  const currencySymbol = Object.keys(countryData.currencies)[0];
  const borders =
    countryData.borders === undefined ? ['No Border'] : countryData.borders;
  const timeZones = countryData.timezones;

  return (
    <div className={classes.country}>
      {/* Name  */}
      <h1 className={classes.headingPrimary}>{countryData.name.common}</h1>
      <ul className={classes.countryList}>
        <div className="detailBox">
          {/* Official Name */}
          <li className={classes.dataList}>
            Official Name: {countryData.name.official}
          </li>

          {/* Un Member */}
          <li className={classes.dataList}>
            Un Member: {countryData.unMember ? 'Yes' : 'No'}
          </li>
          {/* Independent */}
          <li className={classes.dataList}>
            Independent: {countryData.independent ? 'Yes' : 'No'}
          </li>
          {/* Curriences */}
          <li className={classes.dataList}>
            Currency: {countryData.currencies[currencySymbol].name} (
            {countryData.currencies[currencySymbol].symbol})
          </li>
          {/* Capital City */}
          <li className={classes.dataList}>
            {' '}
            Capital : {countryData.capital[0]}
          </li>
          {/* Region */}
          <li className={classes.dataList}>Region: {countryData.region}</li>
          {/* Sub Region */}
          <li className={classes.dataList}>
            Sub Region: {countryData.subregion}
          </li>
          {/* Land Locked */}
          <li className={classes.dataList}>
            Landlocked: {countryData.landlocked ? 'Yes' : 'No'}
          </li>
          {/* Borders*/}
          <li className={classes.dataList}>
            Borders: {borders.map(border => ` ${border},`)}
          </li>
          {/* Area  */}
          <li className={classes.dataList}>
            {`Area: ${countryData.area} km²`}{' '}
          </li>
          {/* Map */}
          <li className={classes.dataList}>
            Map:{' '}
            <a
              href={countryData.maps.googleMaps}
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Map
            </a>
          </li>
          {/* Fifa */}
          <li className={classes.dataList}>FIFA: {countryData.fifa}</li>
          {/* Car Driving Side */}
          <li className={classes.dataList}>
            Car Driving Side: {countryData.car.side}
          </li>
          {/* Start Of week */}
          <li className={classes.dataList}>
          Start of Week: {countryData.startOfWeek}
          </li>
          {/* Time Zone */}
          <li className={classes.dataList}>
            Time zones: {timeZones.map(t => ` ${t} ,`)}
          </li>
        </div>

        {/* -----------------------------------------------------------------------*/}
        {/* ----------------------------Img Box-------------------------------------------*/}
        {/* -----------------------------------------------------------------------*/}
        <div className={classes.imgBox}>
          {/* Flag of the Country */}
          <li className={classes.detailImgFlag}>
            <img
              src={countryData.flags.svg}
              alt={`${countryData.name.common}'s Flag`}
            />
          </li>
          {/* Court Of Arms */}
          <li className={classes.detailImgCoat}>
            <img
              src={countryData.coatOfArms.svg}
              alt={`${countryData.name.common}'s Coat of Arms'`}
            />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default RenderCountry;

/*
---------------------------------- Nepal -------------------------------------------------------------------
 
Name: Nepal                                               ------------------------------------------------
Official: Fedral Democratic Republic of Nepal             -------------------------------------------------
UN MEMBER : Yes                                           ---------------------Flag-----------------------
independent: Yes                                          ------------------------------------------------
curriences:                                               --------------------------------------------------
capital city:
Region: 
Sub Region
landLocked: 
Borders
Area:
map:
fifa:
Car-Driving Side:
Time Zone: 
Start Of Week: 
People: Neplease

*/

/*

*/
