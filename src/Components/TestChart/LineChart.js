import React from 'react';
import { ResponsiveLine } from '@nivo/line'
// import config from './config'
// import './chartTestCSS.css'

class LineChart extends React.Component {
    render() {
        

        return (
          
         
            <div style={{height:700}} class="">
           
                <ResponsiveLine
                
        data={this.props.monthData}
        margin={{ top: 50, right: 200, bottom: 300, left: 100 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'month',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'worker bonus',
            legendOffset: -70,
            legendPosition: 'middle',
            format: value =>
                `$${Number(value).toLocaleString( {
                    minimumFractionDigits: 2,
                })} `,
        }}
        colors={["#507638"]}
        pointSize={10}
        pointColor={ "#507638" }
        pointBorderWidth={2}
        pointBorderColor={ "#507638" }
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    /><h4 class="worker-title">Worker Bonus</h4></div>
   
        )
   
}}


export default LineChart;