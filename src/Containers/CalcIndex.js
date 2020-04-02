import React from 'react';
// import './App.css';
import Header from './Header' 
import WelcomeContainer from './WelcomeContainer' 
import Footer from './Footer'




class CalcIndex extends React.Component {
    
    
    render(){
        return (
            <div>
                <Header /> 
            <div class="welcome">
                <WelcomeContainer />
            </div>
            <footer>
            <Footer /> 
            </footer>
            </div>
        )
    } 
}


export default CalcIndex;