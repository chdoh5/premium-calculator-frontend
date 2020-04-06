import React from 'react';
// import { Footer } from 'react-materialize'
// import './App.css';
import PremiumResults from '../Components/PremiumResults'
import WorkerResults from '../Components/WorkerResults'

class ResultsContainer extends React.Component {
    
    
    render(){
        return (
            <div >
            <h2>Results Container</h2>
                <PremiumResults
                    timingQuestion={this.props.timingQuestion}
                    modelWorkerBoolean={this.props.modelWorkerBoolean}
                    percentage={this.props.percentage}
                    premium={this.props.premium} />

                    
                <WorkerResults />
            </div>


        )
    } 
}


export default ResultsContainer;