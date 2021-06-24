import React from 'react';
import Header from './component/header/Header';
import Section from './component/contenu/Section';
import Footer from './component/footer/Footer';




class App extends React.Component{
  render(){
    return(
        <div>
          <Header/>
          <Section/>
          <Footer/>
        </div>
    );
  }
}

export default App;