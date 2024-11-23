import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './App';
import './App.css';


const user = {
  name: 'Elshan',
  email: 'a@b.com',
  address: 'Baku',
  age: 20,
  gender: 'Male',
};

ReactDOM.render(<Profile user={user} />, document.getElementById('root'));
