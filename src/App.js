import React from "react";
import './App.css';
import Nav from './nav.js';
import Grid from './grid.js';
import Card from './card.js';
import one from './images/lake-arrowhead-airbnb-rental-1024x683.jpg';
import four from './images/airbnb-hero-.jpg';
import three from './images/bali-airbnb3.webp';
import two from './images/Airbnb-Plus-Listing-London-1.webp';
import five from './images/airbnb-apartment-chairs-1428348.jpg' 

function App() {
  return (
    <div className="whole">
      <Nav />
      <div className='main'>
            <Grid />
      </div>
      <h1>REVIEWS</h1>
      <div className='review'>
      <Card 
           img={one}
           rate="5.0 (30)"
           place="USA"
           remark="Life lessons with Katie Zaferes"
           cost="From $136"
      />
      <Card 
           img={two}
           rate="4.0 (50)"
           place="France"
           remark="Amazing view of sunrise"
           cost="From $125"
      />
      <Card
           img={three}
           rate="3.0 (20)"
           place="Italy"
           remark="Remarkable food and cultural experience"
           cost="From $110"
       />
      <Card
           img={four}
           rate="4.0 (40)"
           place="USA"
           remark="Fun activities to do in common area"
           cost="From $150"
       />
       <Card 
           img={five}
           rate="4.0 (60)"
           place="France"
           remark="Best room service and meals"
           cost="From $130"
      />
      </div>
    </div>
  );
}

export default App;
