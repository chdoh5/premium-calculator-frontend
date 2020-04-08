import React from 'react';
// import './App.css';
import Select from 'react-select'
import MyComponent from './Select'
import WeightTable from './WeightTable'
import { commodities } from '../lookup'



import ResultsContainer from '../Containers/ResultsContainer' 





class Form extends React.Component {


    constructor(){
        super()

        this.state={
            timingQuestion: null,
            modelWorkerBoolean: false,
            costco: 0,
            wholeFoods: 0,
            foodbuy: 0,
            percentage: 0, 
            commoditiesSold: [], 
            prices: [],
            weights: {}, 
            premium: 0,
            submitted: false,
            names: [], 
            premNoName: []

        }

        // this.state={
        //     costco: "10",
        //     wholeFoods: "5",
        //     foodbuy: "5",
        //     percentage: .20,
        //     commoditiesSold: [{label: "Apple", value: "Apple", price: 0.015}, {label: "Pea", value: "Pea", price: 0.02}],
        //     prices: {Apple: 15000, Pea: 40000},
        //     weights: {Apple: 15000, Pea: 40000},
        //     premium: 55000,
        //     submitted: true,
        //     weightInput: "pounds", 
        //     premNoName: [15000, 40000]

        // }
    }

currencyFormat=(num)=> {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
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

getPercentage = () => {
    this.setState({
        percentage: (parseInt(this.state.costco) + parseInt(this.state.wholeFoods) + parseInt(this.state.foodbuy))*.01
    })
}

selectCommodities = (e) => {
    const names = e.map(x => x.value)
   
    this.setState({
        commoditiesSold: e, 
        
        // prices: p
    })
}

collectWeights = (e, name) => {
    // parseInt(this.state.number.split(",").join())
    let x = e.target.value.toString()
    let y = parseInt(x.split().join().replace(/,/g, ''))
    const commodity = this.state.commoditiesSold.filter(comm => comm.label === name)
    const price = commodity.map(com => com.price)
    
        let newWeights = this.state.weights
        newWeights[name] = y*price

        this.setState({
            prices: newWeights,
            premNoName: Object.values(this.state.prices)
            
        })
    this.calculatePremium()
}




calculatePremium = (e) => {
// console.log(this.state.prices)
let sum = 0;
for (let key in this.state.prices) {
  sum += this.state.prices[key]
  this.setState({
      premium: sum
  })
}

}


generateResults = (e) => {
    e.preventDefault()
    this.setState({
        submitted: true
    })
}
    
    render(){
        console.log(this.state)
if(this.state.submitted === false){
       return(
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
            <input disabled onClick={this.handleWeightRadio} value="kilograms" class="with-gap" name="weightQ"  type="radio" />
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
                        <input  value={this.state.costco} onKeyUp={this.getPercentage} onChange={this.handleCostcoChange} class="right " type="number"/>
                    </div>
                    <span class="form-label">%</span>
                    </td>
                    </tr>

                    <tr>
                    <td>Whole Foods</td>
                    <td>

                    <div class="input-field inline">
                        <input value={this.state.wholeFoods} onKeyUp={this.getPercentage}  onChange={this.handleWholeFoodsChange} class="right" type="number" />
                    </div>
                        <span class="form-label">%</span>
                    </td>
                    </tr>

                    <tr>
                    <td>Foodbuy</td>
                    <td>

                    <div class="input-field inline">
                        <input value={this.state.foodbuy} onKeyUp={this.getPercentage}  onChange={this.handleFoodbuyChange} class="right" type="number" />
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
 {this.state.commoditiesSold ? <WeightTable collectWeights={this.collectWeights} commoditiesSold={this.state.commoditiesSold}/> 
 : null }
                
            </table>
      {/* <button onClick={this.calculatePremium}>click me</button> */}
      <div class="divider"><span></span><span></span><span></span></div>


      <div>
            <label class="form-label">
                Enter total workforce size each month (*optional)
            </label>
        <br /><br/>
            <table align="left"id="worker-table-left" class="centered ">
                <thead>
                    <tr>
                    <th>Month</th>
              
                    <th>Total Workers Present</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>January</td>
                    <td>

                    <div class="input-field inline ">
                        <input  class="right" type="number"/>
                    </div>
                    </td>
                    </tr>

                    <tr>
                    <td>Februrary</td>
                    <td>

                    <div class="input-field inline">
                        <input  class="right" type="number" />
                    </div>
                    </td>
                    </tr>

                    <tr>
                    <td>March</td>
                    <td>

                    <div class="input-field inline">
                        <input class="right" type="number" />
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>April</td>
                    <td>

                    <div class="input-field inline">
                        <input class="right" type="number" />
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>May</td>
                    <td>

                    <div class="input-field inline">
                        <input class="right" type="number" />
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>June</td>
                    <td>

                    <div class="input-field inline">
                        <input class="right" type="number" />
                    </div>
                    </td>
                    </tr>
            </tbody>
            </table>

            <table align="right" id="worker-table-right" class="centered ">
                <thead>
                    <tr>
                    <th>Month</th>
              
                    <th>Total Workers Present</th>
                    </tr>
                </thead>
            <tbody>
                    <tr>
                    <td>July</td>
                    <td>

                    <div class="input-field inline">
                        <input class="right" type="number" />
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>August</td>
                    <td>

                    <div class="input-field inline">
                        <input class="right" type="number" />
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>September</td>
                    <td>

                    <div class="input-field inline">
                        <input class="right" type="number" />
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>October</td>
                    <td>

                    <div class="input-field inline">
                        <input class="right" type="number" />
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>November</td>
                    <td>

                    <div class="input-field inline">
                        <input class="right" type="number" />
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>December</td>
                    <td>

                    <div class="input-field inline">
                        <input class="right" type="number" />
                    </div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <button onClick={this.generateResults} id="start-calculator-button" className=" btn-large generate-results-button">Generate Results</button>
        </div>
    </form>

    )
    } else {
        return(
            <ResultsContainer
            timingQuestion={this.state.timingQuestion}
            modelWorkerBoolean={this.state.modelWorkerBoolean}
            percentage={this.state.percentage}
            premium={this.state.premium}
            prices={this.state.prices}
            commoditiesSold={this.state.commoditiesSold}
            premNoName={this.state.premNoName}
            />
        )
    }
}
}


export default Form;