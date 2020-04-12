import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

// import data from './chartTestData'
import config from './config'

import './chartTestCSS.css'

class BarChart extends React.Component {



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
            <div>
                <h4>EFI Premium Per Commodity</h4>
            
            <div style={{fontWeight:"bold"}} class="chart">
                <ResponsiveBar
                    data={this.props.data}
                    keys={config.keys}
                    indexBy={"commodity"}
                    margin={config.margin}
                    padding={0.3}
                    layout="horizontal"
                    colors={{scheme: 'greens'}}
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
                    enableGridX={false}
                    enableGridY={false}
                    enableLabel={false}

                    tooltipFormat={value =>
                        `$${Number(value)}`
                    } 
                    tooltip={({ id, value, color }) => (
            <strong style={{ color:"white" }}>
                {id}: ${value}
            </strong>
        )}
        theme={{
            tooltip: {
                container: {
                    background: '#333',
                },
            },
        }}
                />
            </div>
            </div>
        )
    }
}





export default BarChart;