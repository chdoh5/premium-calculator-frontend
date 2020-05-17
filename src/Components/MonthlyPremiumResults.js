import React from 'react';
import BarChart from './TestChart/BarChart'
import PieChart from './TestChart/PieChart'


class MonthlyPremiumResults extends React.Component {

    constructor(){
        super() 

        this.state={
            months: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"], 
            monthData: [{
                "id": "bonus", 
                "color": "hsl(147, 70%, 50%)", 
                "data":  [
                    {
                    }
                ]
            }]
        }
    }
    
    componentDidMount() {

        let arr = []
        let sumArr = []

    let sum = arr.reduce(function(a, b){
        return a + b;
        }, 0);
        
        window.scrollTo(0, 0)

        this.state.months.map(month => {
            arr = (Object.values(this.props[month]))
            let sum = arr.reduce(function(a, b){
                return a + b;
            }, 0 )
            sumArr.push(sum)
        })
        this.setState({
            monthData: [{...this.state.monthData, "data": [
                {
                "x": "Jan",
                "y": sumArr[0]*this.props.percentage}, 
                {"x": "Feb", 
                "y": sumArr[1]*this.props.percentage},
                {"x": "Mar",
                "y": sumArr[2]*this.props.percentage},
                {"x": "Apr",
                "y": sumArr[3]*this.props.percentage},
                {"x": "May",
                "y": sumArr[4]*this.props.percentage},
                {"x": "Jun",
                "y": sumArr[5]*this.props.percentage},
                {"x": "Jul",
                "y": sumArr[6]*this.props.percentage},
                {"x": "Aug",
                "y": sumArr[7]*this.props.percentage},
                {"x": "Sep",
                "y": sumArr[8]*this.props.percentage},
                {"x": "Oct",
                "y": sumArr[9]*this.props.percentage},
                {"x": "Nov",
                "y": sumArr[10]*this.props.percentage},
                {"x": "Dec",
                "y": sumArr[11]*this.props.percentage}
            ] }]
        })    
    }
    
    currencyFormat=(num)=> {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    generateTable = () => {
        const names = this.props.commoditiesSold.map(com => com.label)
        const prices = this.props.prices
        
      

       return names.map(name => {
            return   <> <tr class=" light-green lighten-5 bold">  
            <td>{name}</td>
            <td>{((prices[name]*this.props.percentage)*.03).toLocaleString('en-US', {
style: 'currency',
currency: 'USD',
})
} </td>
            <td>{((prices[name]*this.props.percentage)*.1).toLocaleString('en-US', {
style: 'currency',
currency: 'USD',
})} </td>
            <td>{((prices[name]*this.props.percentage)*.87).toLocaleString('en-US', {
style: 'currency',
currency: 'USD',
})} </td>

            <td>{((prices[name]*this.props.percentage)).toLocaleString('en-US', {
style: 'currency',
currency: 'USD',
}
)

} </td>
<td></td>
          {/* {this.props.monthlyWorkforce ? <td class="worker-column" >{(((prices[name]*this.props.percentage)*.87)/(this.props.yearlyWorkforce)).toLocaleString('en-US', {
style: 'currency',
currency: 'USD',
})} </td>: null } */}

 </tr>
       {this.generateMonths(name)}</>
        
        })
    }
    
     generateMonths = (name) => {
         console.log(name)
         let i
        const names = this.props.commoditiesSold.map(com => com.label)

        return this.state.months.map(month => {
          
         
            return <tr>  
            
            <td class="capital" >{month}</td>
            <td>{((this.props[month][name]*this.props.percentage)*.03).toLocaleString('en-US', {
style: 'currency',
currency: 'USD',
})
} </td>
            <td>{((this.props[month][name]*this.props.percentage)*.1).toLocaleString('en-US', {
style: 'currency',
currency: 'USD',
})} </td>
            <td>{((this.props[month][name]*this.props.percentage)*.87).toLocaleString('en-US', {
style: 'currency',
currency: 'USD',
})} </td>

            <td>{((this.props[month][name]*this.props.percentage)).toLocaleString('en-US', {
style: 'currency',
currency: 'USD',
}
)

} </td>

          {this.props.monthlyWorkforce ? <td class="worker-column" >{(((this.props[month][name]*this.props.percentage)*.87)/(this.props.monthlyWorkforce[month]) || 0 ).toLocaleString('en-US', {
style: 'currency',
currency: 'USD',
})} </td>: null }

 </tr>
        
})
       
     }
    
    
    printPage = () => {
      //Get the print button and put it into a variable
      let printButton = document.getElementById("start-calculator-button");
      //Set the print button visibility to 'hidden' 
      printButton.style.visibility = 'hidden';
      //Print the page content
      window.print()
      printButton.style.visibility = 'visible';
    }
    
        render(){

            const names = this.props.commoditiesSold.map(com => com.label)
            const prices = this.props.prices
            
            return (
                <div id="element-to-print" class="premium-message" >
                    <h3 class="premium-header">Monthly Premium Results</h3>
                        <p >
                        Based on your sales, you can expect roughly the following total premium
                        amounts per year.  Premium is calculated as a total premium and divided 
                        between Admin (3%), EFI Licensing Fee (10%), and Worker Bonus (87%).
                        </p>
                
                
                    <table class="highlight results">
                    <thead>
                        <tr>
                            <th>Commodity</th>
                            <th>Administrative Offset</th>
                            <th>EFI License</th>
                            <th>Worker Bonus</th>
                            <th>Total Premium Generated</th>

                            {this.props.yearlyWorkforce ? <th>Monthly Bonus per Worker</th> : null}
                        </tr>
                    </thead>
                    <tbody>
                        {this.generateTable()}
                        <tr></tr>
            <tr id="grand-total-row">
                <td>Grand Total:</td>
               <td>{((this.props.premium)*(this.props.percentage)*.03).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})} </td>
                <td>{((this.props.premium)*(this.props.percentage)*.1).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})} </td>
                <td>{((this.props.premium)*(this.props.percentage)*.87).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})} </td>

                <td>{((this.props.premium)*(this.props.percentage)).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})} </td>

{this.props.monthlyWorkforce && !this.props.monthlyWorkforce==={} ? <td class="worker-column" >{(((this.props.premium)*(this.props.percentage)*.87)/(this.props.yearlyWorkforce)).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})}  </td> : <td></td> }
            
            </tr>
        
    </tbody>
 
  </table>
    
{/* -------------     */}
                
    
                  <div style={{height: 500}}>
                    <div style={{height:400}}   className="pie">
                    <h6 class='title'>Premium Distribution Breakdown</h6>
                    <PieChart  />
                    </div>
                    <div class="bar">
                    <BarChart  data={this.props.data} commoditiesSold={this.props.commoditiesSold} percentage={this.props.percentage} prices={this.props.prices} />
                    
                    </div>
                    <div>
                  <button  id="start-calculator-button" className="btn-large generate-results-button" onClick={this.printPage}>Save to PDF</button>
                  </div>
                </div>
                </div>
            )
        } 
}


export default MonthlyPremiumResults;