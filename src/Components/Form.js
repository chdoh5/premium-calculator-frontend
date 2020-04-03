import React from 'react';
// import './App.css';
import PremiumResults from '../Components/PremiumResults' 
import WorkerResults from '../Components/WorkerResults'





class Form extends React.Component {
    constructor(){
        super()

        this.state={
            timingQuestion: null
        }
    }

handleTimingChange = (e) => {
    this.setState({
        timingQuestion: e.target.value
    })
}

    
    render(){
        const qOne = 
        <form class="container form">
        <label class="form-label">
        I want to enter my weight sold by:
          <select class="select-box" onChange={this.handleTimingChange}>
              <option value="" disabled selected>Choose your option</option>
              <option value="year">Year</option>
              <option disabled value="quarter">Quarter</option>
              <option disabled value="month">Month</option>
          </select>
        </label>
        
        {/* const qTwo =  */}
        <div>
        <label class="form-label">
        Model Worker Per Month?
            <input id="checkbox" type="checkbox" />
            <span id="checkbox">Yes</span>
        </label>
        </div>
<br /><br/>
        {/* const qThree =  */}
        <div>
        <label class="form-label">
        My Data is in:
            <input  class="with-gap" name="pounds" type="radio"  />
            <span id="radio" >Pounds</span>
            <input  class="with-gap" name="kilograms" type="radio" />
            <span id="radio" >Kilograms</span>
        </label>
        </div>
    


        
      </form>
        
 
        
      

    //   const qTwo = 

    



        if(!this.state.timingQuestion || this.state.timingQuestion){
            return (
                    qOne
                
                // <form class="container form">
                //   <label class="form-label">
                //   I want to enter my weight sold by:
                //     <select class="select-box" onChange={this.handleTimingChange}>
                //         <option value="" disabled selected>Choose your option</option>
                //         <option value="year">Year</option>
                //         <option disabled value="quarter">Quarter</option>
                //         <option disabled value="month">Month</option>
                //     </select>
                //   </label>
                // </form>
            );

        } 
        // if(this.state.timingQuestion){
        //     return (
        //         <form class="container form">
        //             {qOne}<br></br>
        //             {qTwo}
        //         </form>


        //     )
        // }
    } 
}


export default Form;