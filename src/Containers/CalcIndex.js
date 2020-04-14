import React from 'react';
import Header from './Header' 
import WelcomeContainer from './WelcomeContainer'
import Form from '../Components/Form'
import Footer from './Footer'






class CalcIndex extends React.Component {

    constructor(){
        super()
        this.state={
            welcomeButtonClicked: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    scroll() {
        window.scrollTo(0,0)
    }
    renderForm = () => {
        this.setState({
            welcomeButtonClicked: true
        })
    }


      
    
    
    render(){
        

        if(this.state.welcomeButtonClicked===false){
            return (
                
                <div ref={this.myRef} >
                    <Header /> 
                <div class="welcome">
                    <WelcomeContainer handleClick={this.renderForm} />
                    
                </div>
                <footer>
                    <Footer /> 
                </footer>
                </div>
            )    
        } else {
            return(
                <div>
                    <Header /> 
                <div class="welcome">
                    <Form />
                </div>
                <footer>
                    <Footer /> 
                </footer>
                </div>
            )
        }
    } 
}


export default CalcIndex;