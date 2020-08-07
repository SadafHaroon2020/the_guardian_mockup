import React from 'react';
import Section1 from './Components/Section1'
import Header from './Components/Header'
import Page1 from './Components/Page1'
import './App.css';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <Header/>
      <Page1/>
    <Section1/>
    </div>
  );
}
}
export default App;
