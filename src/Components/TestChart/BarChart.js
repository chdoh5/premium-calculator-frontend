import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

// import data from './chartTestData'
import config from './config'

import './chartTestCSS.css'

class BarChart extends React.Component {




// componentDidMount(){    
//     const names = this.props.commoditiesSold.map(com => com.label)
//     const prices = this.props.prices
    
//         names.map(name => {
//             const newData=this.state.data
//          this.setState({
  
//           data: [...newData,
//             {"commodity": name},
//             {"Admin Offset": ((prices[name]*this.props.percentage)*.03)},
//             {"EFI License": ((prices[name]*this.props.percentage)*.1)}, 
//             {"Worker Bonus": ((prices[name]*this.props.percentage)*.87)}
//             ]
  
//         })
  
//       })
// }

    render() {
        
            

        // const data = [
          
        //     {
        //         "commodity": "Apples",
        //         "Admin Offset": 90,
        //         "EFI License": 300, 
        //         "Worker Bonus": 2610
        //     },
        //     {
        //         "commodity": "Pea",
        //         "Admin Offset": 240,
        //         "EFI License": 800,
        //         "Worker Bonus": 4000
        //     }]




        return (
            <div class="chart">
                <ResponsiveBar
                    data={this.props.data}
                    keys={config.keys}
                    indexBy="commodity"
                    margin={config.margin}
                    padding={0.3}
                    layout="horizontal"
                    colors={{scheme: 'nivo'}}
                    colorBy="id"
                    defs={config.defs}
                    fill={config.fill}
                    borderColor="inherit:darker(1.6)"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={config.axisBottom}
                    axisLeft={config.axisLeft}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="inherit:darker(1.6)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={config.legends}
                    enableGridX={true}
                    
                />
            </div>
        )
    }
}


export default BarChart;