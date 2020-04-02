import React from 'react';
// import './App.css';
import PremiumResults from '../Components/PremiumResults' 
import WorkerResults from '../Components/WorkerResults'





class Form extends React.Component {

    
    render(){
        return (
            <form class="container form">
              <label class="form-label">
              I want to enter my weight sold by:
                <select class="select-box">
                  <option value="year">Year</option>
                  <option disabled value="quarter">Quarter</option>
                  <option disabled value="month">Month</option>
                </select>
              </label>
            </form>
          );
    } 
}


export default Form;