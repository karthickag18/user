import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Card from './card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Card name='Karthick' city='Channai' role='Frondent developer' skills={["HTML","CSS","Figma","JavaScript","React","GitHub","Excel"]} online={false} profile="images/karthick.jpg"/>
    <Card name='Mano' city='coimbatore' role='Fullstack Developer' skills={["React","MongoDB","HTML","CSS","Python","MS-Office","GitHub"]} online={false} profile="images/mano.jpg" />
    <Card name='vasu' city='chennai' role='Backend Developer' skills={["Node JS","HTML","CSS","SQL","MS-Office","GitHub"]} online={true} profile="images/vasu.jpg" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

