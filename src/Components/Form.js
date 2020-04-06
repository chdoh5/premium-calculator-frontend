import React from 'react';
// import './App.css';
import Select from 'react-select'
import MyComponent from './Select'
import WeightTable from './WeightTable'
import { commodities } from '../lookup'

import PremiumResults from '../Components/PremiumResults' 
import WorkerResults from '../Components/WorkerResults'





class Form extends React.Component {


    constructor(){
        super()

        this.state={
            timingQuestion: null,
            modelWorkerBoolean: false,
            weightInput: null,
            costco: 0,
            wholeFoods: 0,
            foodbuy: 0,
            percentage: 0, 
            commoditiesSold: [], 
            prices: [],
            fixed: [],
            weights: {}

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

handleCostcoChange = (e) => {
    this.setState({
        costco: e.target.value
    })
}

handleWholeFoodsChange = (e) => {
    this.setState({
        wholeFoods: e.target.value
    })
}

handleFoodbuyChange = (e) => {
    this.setState({
        foodbuy: e.target.value
    })
}

selectCommodities = (e) => {
    const p = e.map(x => x.price)
   
    this.setState({
        commoditiesSold: e,
        prices: p
    })
}

collectWeights = (e, name) => {
    
    const commodity = this.state.commoditiesSold.filter(comm => comm.label === name)
    const price = commodity.map(com => com.price)
    
        let newWeights = this.state.weights
        newWeights[name] = e.target.value*price
        
        this.setState({
            prices: newWeights,
        })
}




calculatePremium = (e) => {
    e.preventDefault()
    console.log(e.target.value)

    // e.preventDefault()
    // const totalPremium = this.state.prices.reduce((result, number) => result+number)
    // console.log(totalPremium)
}
    
    render(){
        console.log(this.state.prices)

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
                        <input onChange={this.handleCostcoChange} class="right" type="number"/>
                    </div>
                    <span class="form-label">%</span>
                    </td>
                    </tr>

                    <tr>
                    <td>Whole Foods</td>
                    <td>

                    <div class="input-field inline">
                        <input onChange={this.handleWholeFoodsChange} class="right" type="number" />
                    </div>
                        <span class="form-label">%</span>
                    </td>
                    </tr>

                    <tr>
                    <td>Foodbuy</td>
                    <td>

                    <div class="input-field inline">
                        <input onChange={this.handleFoodbuyChange} class="right" type="number" />
                    </div>
                        <span class="form-label">%</span>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="divider"><span></span><span></span><span></span></div>
            <label class="form-label">
                Select commodities sold
            </label>
            <Select 
                onChange={this.selectCommodities}
                isMulti
                name="name"
                options={commodities}
                className="basic-multi-select"
                classNamePrefix="select"  />
        <div class="divider"><span></span><span></span><span></span></div>

            <label class="form-label">
                Enter weight of commodities sold annually
            </label>
            <br /><br/>
            <table class="centered striped">
                <thead>
                    <tr>
                    <th>Commodity Name</th>
              
                    <th>Annual Weight Sold</th>
                    </tr>
                </thead>

                <WeightTable collectWeights={this.collectWeights} commoditiesSold={this.state.commoditiesSold}/>
            </table>
      
      <button onClick={this.calculatePremium}>click me</button>

        
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