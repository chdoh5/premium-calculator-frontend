import React from 'react';
// import { Footer } from 'react-materialize'
// import './App.css';
import PremiumResults from '../Components/PremiumResults'
import WorkerResults from '../Components/WorkerResults'

class ResultsContainer extends React.Component {
    
    
    render(){
        return (
            <div >
            {/* <h6>Results Container</h6> */}
                <PremiumResults
                    timingQuestion={this.props.timingQuestion}
                    modelWorkerBoolean={this.props.modelWorkerBoolean}
                    percentage={this.props.percentage}
                    premium={this.props.premium}
                    prices={this.props.prices} 
                    commoditiesSold={this.props.commoditiesSold}
                    premNoName={this.props.premNoName}
                    data={this.props.data}
                    />

                    
                <WorkerResults />
            </div>


        )
    } 
}


export default ResultsContainer;