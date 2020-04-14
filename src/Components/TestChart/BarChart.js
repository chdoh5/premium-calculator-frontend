import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import config from './config'
import './chartTestCSS.css'

class BarChart extends React.Component {



    render() {
        

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
                {id}: ${value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
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