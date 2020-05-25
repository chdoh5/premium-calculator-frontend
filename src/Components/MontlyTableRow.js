import React from 'react';
import NumberFormat from 'react-number-format'


class MonthlyTableRow extends React.Component {
    
    
    render(){

        // if(this.props.weightInput==="pounds") {
            return (
                
                <tr  >
                <td>{this.props.name}</td>
                <div class="table-scroll">
                <div class="div-scroll">
                <td>
               <h4 class="table-header"> <label class="table-label">Jan</label></h4>
                <div class="input-field inline">
                
    
                    <NumberFormat  data-month="jan" thousandSeparator={true} isNumericString={true} onChange={(e)=> this.props.collectWeights(e, this.props.name)} class="right"   />
                   
                </div>
                
                   { this.props.weightInput==="pounds" ? <span>lbs</span> : <span>kg</span>}
                </td>

                <td>
               <h4 class="table-header"> <label class="table-label">Feb</label></h4>
                <div class="input-field inline">
                
    
                    <NumberFormat  data-month="feb" thousandSeparator={true} isNumericString={true} onChange={(e)=> this.props.collectWeights(e, this.props.name)} class="right"   />
                   
                </div>
                
                   { this.props.weightInput==="pounds" ? <span>lbs</span> : <span>kg</span>}
                </td>

                <td>
               <h4 class="table-header"> <label class="table-label">Mar</label></h4>
                <div class="input-field inline">
                
    
                    <NumberFormat  data-month="mar" thousandSeparator={true} isNumericString={true} onChange={(e)=> this.props.collectWeights(e, this.props.name)} class="right"   />
                   
                </div>
                
                   { this.props.weightInput==="pounds" ? <span>lbs</span> : <span>kg</span>}
                </td>

                <td>
               <h4 class="table-header"> <label class="table-label">Apr</label></h4>
                <div class="input-field inline">
                
    
                    <NumberFormat  data-month="apr" thousandSeparator={true} isNumericString={true} onChange={(e)=> this.props.collectWeights(e, this.props.name)} class="right"   />
                   
                </div>
                
                   { this.props.weightInput==="pounds" ? <span>lbs</span> : <span>kg</span>}
                </td>

                <td>
               <h4 class="table-header"> <label class="table-label">May</label></h4>
                <div class="input-field inline">
                
    
                    <NumberFormat  data-month="may" thousandSeparator={true} isNumericString={true} onChange={(e)=> this.props.collectWeights(e, this.props.name)} class="right"   />
                   
                </div>
                
                   { this.props.weightInput==="pounds" ? <span>lbs</span> : <span>kg</span>}
                </td>

                <td>
               <h4 class="table-header"> <label class="table-label">Jun</label></h4>
                <div class="input-field inline">
                
    
                    <NumberFormat  data-month="jun" thousandSeparator={true} isNumericString={true} onChange={(e)=> this.props.collectWeights(e, this.props.name)} class="right"   />
                   
                </div>
                
                   { this.props.weightInput==="pounds" ? <span>lbs</span> : <span>kg</span>}
                </td>
                

        
                
                <td>
               <h4 class="table-header"> <label class="table-label">Jul</label></h4>
                <div class="input-field inline">
                
    
                    <NumberFormat  data-month="jul" thousandSeparator={true} isNumericString={true} onChange={(e)=> this.props.collectWeights(e, this.props.name)} class="right"   />
                   
                </div>
                
                   { this.props.weightInput==="pounds" ? <span>lbs</span> : <span>kg</span>}
                </td>

                <td>
               <h4 class="table-header"> <label class="table-label">Aug</label></h4>
                <div class="input-field inline">
                
    
                    <NumberFormat  data-month="aug" thousandSeparator={true} isNumericString={true} onChange={(e)=> this.props.collectWeights(e, this.props.name)} class="right"   />
                   
                </div>
                
                   { this.props.weightInput==="pounds" ? <span>lbs</span> : <span>kg</span>}
                </td>

                <td>
               <h4 class="table-header"> <label class="table-label">Sep</label></h4>
                <div class="input-field inline">
                
    
                    <NumberFormat  data-month="sep" thousandSeparator={true} isNumericString={true} onChange={(e)=> this.props.collectWeights(e, this.props.name)} class="right"   />
                   
                </div>
                
                   { this.props.weightInput==="pounds" ? <span>lbs</span> : <span>kg</span>}
                </td>

                <td>
               <h4 class="table-header"> <label class="table-label">Oct</label></h4>
                <div class="input-field inline">
                
    
                    <NumberFormat  data-month="oct" thousandSeparator={true} isNumericString={true} onChange={(e)=> this.props.collectWeights(e, this.props.name)} class="right"   />
                   
                </div>
                
                   { this.props.weightInput==="pounds" ? <span>lbs</span> : <span>kg</span>}
                </td>

                <td>
               <h4 class="table-header"> <label class="table-label">Nov</label></h4>
                <div class="input-field inline">
                
    
                    <NumberFormat  data-month="nov" thousandSeparator={true} isNumericString={true} onChange={(e)=> this.props.collectWeights(e, this.props.name)} class="right"   />
                   
                </div>
                
                   { this.props.weightInput==="pounds" ? <span>lbs</span> : <span>kg</span>}
                </td>

                <td>
               <h4 class="table-header"> <label class="table-label">Dec</label></h4>
                <div class="input-field inline">
                
    
                    <NumberFormat  data-month="dec" thousandSeparator={true} isNumericString={true} onChange={(e)=> this.props.collectWeights(e, this.props.name)} class="right"   />
                   
                </div>
                
                   { this.props.weightInput==="pounds" ? <span>lbs</span> : <span>kg</span>}
                </td>
                </div>
                </div>
                </tr>
            
            )


    } 
}



export default MonthlyTableRow;