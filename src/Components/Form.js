import React from 'react';
// import './App.css';
import Select from 'react-select'
import MyComponent from './Select'
import WeightTable from './WeightTable'
import { commodities } from '../lookup'
import NumberFormat from 'react-number-format'
import update from 'immutability-helper'


import ResultsContainer from '../Containers/ResultsContainer' 





class Form extends React.Component {

    constructor(){
        super()

        this.state={
        // diabled for presentation
            timingQuestion: "month",
            modelWorkerBoolean: false,
            weightInput: "pounds",
            costco: 0,
            wholeFoods: 0,
            foodbuy: 0,
            percentage: .1, 
            commoditiesSold: [
                {label: "Banana",
                price: 0.01,
                value: "Banana"},
                {label: "Asparagus",
                price: 0.02,
                value: "Asparagus"}
                ], 
            prices: [],
            weights: {}, 
            monthWeights: {},
            premium: 0,
            submitted: false,
            names: [],
            yearlyWorkforce: null, 
            jan: {Asparagus: 200, Banana: 100},
            feb: {Asparagus: 200, Banana: 100}, 
            mar: {Asparagus: 200, Banana: 100}, 
            apr: {Asparagus: 200, Banana: 100},
            may: {Asparagus: 200, Banana: 100},
            jun: {Asparagus: 200, Banana: 100},
            jul: {Asparagus: 200, Banana: 100},
            aug: {Asparagus: 200, Banana: 100},
            sep: {Asparagus: 200, Banana: 100},
            oct: {Asparagus: 200, Banana: 100},
            nov: {Asparagus: 200, Banana: 100},
            dec: {Asparagus: 200, Banana: 100}
            
            

        }
// used for dev
        // this.state={
        //     costco: "10",
        //     wholeFoods: "5",
        //     foodbuy: "5",
        //     percentage: .20,
        //     commoditiesSold: [{label: "Apple", value: "Apple", price: 0.015}, {label: "Pea", value: "Pea", price: 0.02}],
        //     prices: {Apple: 15000, Pea: 40000},
        //     weights: {Apple: 15000, Pea: 40000},
        //     premium: 55000,
        //     submitted: false,
        //     weightInput: "pounds", 
        //     premNoName: [15000, 40000], 
        //     yearlyWorkforce: null

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
        weightInput: e.target.value ,
        commoditiesSold: [], 
        prices: [], 
        weights: {}, 
        premium: 0
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

weightValidation = () => {
    if(this.state.weightInput===null){
        alert("Please enter pounds or kilograms")
    }
}

selectCommodities = (e) => {

 this.setState({
     commoditiesSold: e
 })

 this.determinePremium(e)

}

determinePremium = (e) => {
  if(!e[1])
  this.setState({
      premium:0,
      prices:[],
      weights:{}, 
      
  })
}

collectWeights = (e, name) => {
  
    let enteredWeight = e.target.value.toString()
    let intWeight = parseInt(enteredWeight.split().join().replace(/,/g, ''))
    const commodity = this.state.commoditiesSold.filter(comm => comm.label === name)
    const price = commodity.map(com => com.price)
    const kPrice = price*2.20462
    if(this.state.timingQuestion==="month"){
        {this.monthWeights(e, name)}
    }
    if(this.state.weightInput==="pounds"){
        let newWeights = this.state.weights
        newWeights[name] = intWeight*price
    
        this.setState({
            prices: newWeights,
            
        })
    }else {
        let newWeights = this.state.weights
        newWeights[name] = intWeight*kPrice
    
        this.setState({
            prices: newWeights,
            
        })
    }

    this.calculatePremium()
}


calculatePremium = (e) => {

let sum = 0;
for (let key in this.state.prices) {
  sum += this.state.prices[key]
  this.setState({
      premium: sum,       
    })}
}

monthWeights = (e, name) => {
    
  
        let enteredWeight = e.target.value.toString()
        let intWeight = parseInt(enteredWeight.split().join().replace(/,/g, ''))
        const commodity = this.state.commoditiesSold.filter(comm => comm.label === name)
        const price = commodity.map(com => com.price)
        let month = e.target.dataset.month
        const kPrice = price*2.20462
        
        if(this.state.weightInput==="pounds"){
            let newWeights = this.state.weights
            let monthWeights = this.state.monthWeights
            newWeights[name] = intWeight*price
            monthWeights[name] = intWeight*price

            this.setState({
                [month]: update(this.state[month], {$merge: newWeights }), 
                // monthWeights: update(this.state.prices, {[name]: {$apply: function(x) {return x + monthWeights[name] }}}),
                weights: {}
 
            })
            // {this.determinePremium(e)}

        }else {
            let newWeights = this.state.weights
            newWeights[name] = intWeight*kPrice
        
            this.setState({
                [month]: update(this.state[month], {$merge: newWeights })
                
            })
            // {this.determinePremium(e)}
        }
    
        // this.calculatePremium()
    
    }

yearlyWorkforce = (e) => {
    let enteredNum = e.target.value.toString()
    let intNum = parseInt(enteredNum.split().join().replace(/,/g, ''))

    this.setState({
        yearlyWorkforce: intNum
    })
}



generateResults = (e) => {
    e.preventDefault()
    if(this.state.timingQuestion==="year"){
        const object1 = this.state.prices
        let x = []
           for (let [key, value] of Object.entries(object1)) {
            x.push(({"commodity":key.replace(/(.{6})..+/, "$1…"),
                    "Admin Offset": value*(this.state.percentage)*.03, 
                    "EFI License": value*(this.state.percentage)*.1,
                    "Worker Bonus": value*(this.state.percentage)*.87}))
           }
    
        this.setState({
            submitted: true, 
            data: x
        })
    } else {
        let foods = Object.keys(this.state.jan)
        foods.forEach(food => {
            let com = food
            let price = this.state.jan[com] + this.state.feb[com] 
            + this.state.mar[com] + this.state.apr[com] + this.state.may[com] 
            + this.state.jun[com] + this.state.jul[com] + this.state.aug[com] 
            + this.state.sep[com] + this.state.oct[com] + this.state.nov[com] 
            + this.state.dec[com]
            let newPrices = this.state.prices
            newPrices[com] = parseFloat(price.toFixed(2))
            this.setState({
                prices: newPrices
            })
        })
        const object1 = this.state.prices
        let x = []
           for (let [key, value] of Object.entries(object1)) {
            x.push(({"commodity":key.replace(/(.{6})..+/, "$1…"),
                    "Admin Offset": value*(this.state.percentage)*.03, 
                    "EFI License": value*(this.state.percentage)*.1,
                    "Worker Bonus": value*(this.state.percentage)*.87}))
           }
           this.calculatePremium()

        this.setState({
            submitted: true, 
            data: x
        })
    }

}

handleSubmit = (e) => {

    // const reqObj = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         generated_at: new Date().toString()
    //     })
    // }
    // e.preventDefault()
    // fetch('http://localhost:3000/results', reqObj)
    //     .then(resp => resp.json())
    //     .then(newResult => this.generateResults(e))  
    this.generateResults(e)
}

// --------------------------------------------------------------
    render(){

if(this.state.submitted === false){
       return(
    <form class="container form">
{/* <h7>*All data collected annually</h7> */}
<br /><br />
    {/* disabled for presentation */}

        <label class="form-label">
        I want to enter my weight sold and worker count by:
          <select class="select-box" onChange={this.handleTimingChange}>
              <option value="" disabled selected>Choose your option</option>
              <option value="year">Year</option>
              <option value="month">Month</option>
          </select>
        </label> 
        
       
        {/* <div onClick={this.handleWorkerCheck}>
        <label class="form-label">
        Model Worker Per Month?
            <input id="checkbox" type="checkbox" />
            <span id="checkbox">Yes</span>
        </label>
        </div> */}
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
            <input  onClick={this.handleWeightRadio} value="kilograms" class="with-gap" name="weightQ"  type="radio" />
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
            <div onClick={this.weightValidation} >
            <Select 
                
                onChange={this.selectCommodities}
                isMulti
                name="name"
                options={commodities}
                className="basic-multi-select"
                classNamePrefix="select"
                backspaceRemovesValue={false}
                 />
               
                 
        
        <div class="divider"><span></span><span></span><span></span></div>
        </div>
        
            <label class="form-label">
                Enter weight of commodities sold annually
            </label>
            <br /><br/>
            <table class="center centered striped">
                <thead>
                    <tr>
                    <th>Commodity Name</th>
              
                {this.state.timingQuestion==="year" ? <th>Annual Weight Sold</th> : <th>Monthly Weight Sold</th> }
                  </tr>
                </thead>
 {this.state.commoditiesSold ? <WeightTable timingQuestion={this.state.timingQuestion} weightInput={this.state.weightInput} collectWeights={this.collectWeights} commoditiesSold={this.state.commoditiesSold}/> 
 : <WeightTable />}
                
            </table>
      <div class="divider"><span></span><span></span><span></span></div>

{/* diabled for presenttion */}
{this.state.timingQuestion==="month" ?
      <div>
            <label class="form-label">
                Enter total workforce size each month <sup style={{fontSize:16}}>(*optional)</sup>
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
                       <NumberFormat thousandSeparator={true} isNumericString={true} class="right"/>
                    </div>
                    </td>
                    </tr>

                    <tr>
                    <td>Februrary</td>
                    <td>

                    <div class="input-field inline">
                       <NumberFormat thousandSeparator={true} isNumericString={true} class="right"/>
                    </div>
                    </td>
                    </tr>

                    <tr>
                    <td>March</td>
                    <td>

                    <div class="input-field inline">
                        <NumberFormat thousandSeparator={true} isNumericString={true} class="right"/>
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>April</td>
                    <td>

                    <div class="input-field inline">
                        <NumberFormat thousandSeparator={true} isNumericString={true} class="right"/>
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>May</td>
                    <td>

                    <div class="input-field inline">
                        <NumberFormat thousandSeparator={true} isNumericString={true} class="right"/>
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>June</td>
                    <td>

                    <div class="input-field inline">
                        <NumberFormat thousandSeparator={true} isNumericString={true} class="right"/>
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
                        <NumberFormat thousandSeparator={true} isNumericString={true} class="right"/>
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>August</td>
                    <td>

                    <div class="input-field inline">
                        <NumberFormat thousandSeparator={true} isNumericString={true} class="right"/>
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>September</td>
                    <td>

                    <div class="input-field inline">
                        <NumberFormat thousandSeparator={true} isNumericString={true} class="right"/>
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>October</td>
                    <td>

                    <div class="input-field inline">
                        <NumberFormat thousandSeparator={true} isNumericString={true} class="right"/>
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>November</td>
                    <td>

                    <div class="input-field inline">
                        <NumberFormat thousandSeparator={true} isNumericString={true} class="right"/>
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>December</td>
                    <td>

                    <div class="input-field inline">
                        <NumberFormat thousandSeparator={true} isNumericString={true} class="right"/>
                    </div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div> 
        :
        <div>
            <label class="form-label">
                Enter peak annual workforce size <sup style={{fontSize:16}}>(*optional)</sup>
            </label>
            
            <div class="input-field inline">
            <NumberFormat thousandSeparator={true} isNumericString={true} onChange={(e)=> this.yearlyWorkforce(e)} class="right"/>
            </div>
        <br /><br/>
            
        </div>
}
<br/><br />
        <div>
            <button onClick={(e) => {this.handleSubmit(e)}} id="start-calculator-button" className=" btn-large generate-results-button">Generate Results</button>
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
            data={this.state.data}
            yearlyWorkforce={this.state.yearlyWorkforce}
            jan={this.state.jan}
            feb={this.state.feb}
            mar={this.state.mar}
            apr={this.state.apr}
            may={this.state.may}
            jun={this.state.jun}
            jul={this.state.jul}
            aug={this.state.aug}
            sep={this.state.sep}
            oct={this.state.oct}
            nov={this.state.nov}
            dec={this.state.dec}
            />
        )
    }
}
}


export default Form;