import React from 'react';
import BarChart from './TestChart/BarChart'
import PieChart from './TestChart/PieChart'
import jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js'

// import './App.css';





class PremiumResults extends React.Component {
  

  constructor(){
    super()

    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }
    currencyFormat=(num)=> {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    
renderTable = () => {
return (
    <table class="highlight results">
    <thead>
      <tr>
          <th>Commodity</th>
          <th>Administrative Offset</th>
          <th>EFI License</th>
          <th>Worker Bonus</th>
          <th>Total Premium Generated</th>
      </tr>
    </thead>
    <tbody>
        
            {this.generateFirstColumn()}

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
            
            </tr>
        
    </tbody>
    

        


  </table>

    )
   
}






generateFirstColumn = () => {
 const names = this.props.commoditiesSold.map(com => com.label)
 const prices = this.props.prices



 
 return (

  
      names.map(name => {
       return <tr>  
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

            </tr>
            

     })
     
    )

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
        
    

        return (
            <div id="element-to-print" class="premium-message" >
                <h3 class="premium-header">Premium Results</h3>
                    <p >
                    Based on your sales, you can expect roughly the following total premium
                    amounts per year.  Premium is calculated as a total premium and divided 
                    between Admin (3%), EFI Licensing Fee (10%), and Worker Bonus (87%).
                    </p>
            

            <div>
            
                {this.renderTable()}

                {this.getData}

            </div>

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


export default PremiumResults;