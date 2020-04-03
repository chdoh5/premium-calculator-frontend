import React from 'react';
// import './App.css';
import PremiumResults from '../Components/PremiumResults' 
import WorkerResults from '../Components/WorkerResults'





class Form extends React.Component {
    constructor(){
        super()

        this.state={
            timingQuestion: null,
            modelWorkerBoolean: false,
            weightInput: null
        }
    }

handleTimingChange = (e) => {
    this.setState({
        timingQuestion: e.target.value
    })
}

handleWorkerCheck = (e) => {
    this.setState({
        modelWorkerBoolean: e.target.checked
    })
}

handleWeightRadio = (e) => {
    this.setState({
        weightInput: e.target.value
    })
}

    
    render(){
        console.log(this.state)
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
        <div onClick={this.handleWorkerCheck}>
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
        <label class="form-label">
            <input onClick={this.handleWeightRadio} value="pounds" class="with-gap" name="weightQ"  type="radio"  />
            <span  id="radio" >Pounds</span>
            </label>
            <label class="form-label" >
            <input onClick={this.handleWeightRadio} value="kilograms" class="with-gap" name="weightQ"  type="radio" />
            <span  id="radio" >Kilograms</span>
            </label>
        </label>
        </div>
    

        <div class="divider"><span></span><span></span><span></span></div>

        <div>
            <label class="form-label">
                Enter rough annual % sold to each vendor
            </label>
        <br /><br/>
            <table class="centered">
                <thead>
                    <tr>
                    <th>Vendor</th>
              
                    <th>% of Annual Sales</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>Costco</td>
                    <td>

                    <div class="input-field inline ">
                        <input class="right" type="number"/>
                    </div>
                    <span class="form-label">%</span>
                    </td>
                    </tr>

                    <tr>
                    <td>Whole Foods</td>
                    <td>

                    <div class="input-field inline">
                        <input class="right" type="number" />
                    </div>
                        <span class="form-label">%</span>
                    </td>
                    </tr>

                    <tr>
                    <td>Foodbuy</td>
                    <td>

                    <div class="input-field inline">
                        <input class="right" type="number" />
                    </div>
                        <span class="form-label">%</span>
                    </td>
                    </tr>
                </tbody>
            </table>
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