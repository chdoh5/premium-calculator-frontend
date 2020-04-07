import React from 'react';

// import './App.css';





class PremiumResults extends React.Component {
    currencyFormat=(num)=> {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }


    
renderTable = () => {
return (
    <table class="highlight">
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
    {/* {this.generateTable()} */}

        


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
})} </td>
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
})} </td>
            </tr>

     })
    )
}

// generateSecondColumn = () => {
//     const prices = this.props.premNoName
//    return (
//         prices.map(price => {
//             return <td>{price}</td>
//         })
//    )
// }

/* <tbody>
<tr>
<td>Jonathan</td>
<td>Lollipop</td>
<td>$7.00</td>
</tr>
</tbody> */


    render(){
        
        
        return (
            <div class="premium-message" >
                <h3 class="premium-header">Premium Results</h3>
                    <p >
                    Based on your sales, you can expect roughly the following total premium
                    amounts per year.  Premium is calculated as a total premium and divided 
                    between Admin (3%), EFI Licensing Fee (10%), and Worker Bonus (87%).
                    </p>
            

            <div>
                {this.renderTable()}
            </div>
            </div>
        )
    } 
}


export default PremiumResults;