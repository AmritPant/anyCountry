import React from "react";
import "./App.css";
import Main from "./components/main";

const App = function (props) {
  // Again its just test so please keep quite
  fetch("https://restcountries.com/v3.1/name/nepal")
    .then((res) => res.json())
    .then((data) => console.log());

  // ------------------------------------------------
  return <Main />;
};

export default App;

//  Data Needed
/*
Name: Nepal
Official: Fedral Democratic Republic of Nepal
UN MEMBER : Yes 
independent: Yes
curriences: 
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
