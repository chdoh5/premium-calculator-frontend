import React from 'react';
// import './App.css';
import PremiumResults from '../Components/PremiumResults' 
import WorkerResults from '../Components/WorkerResults'





class Form extends React.Component {
    
    
    render(){
        return (
            <div>
                <PremiumResults />
                <WorkerResults />
            </div>
        )
    } 
}


export default Form;