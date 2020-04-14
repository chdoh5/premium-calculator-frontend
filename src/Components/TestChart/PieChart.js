import { ResponsivePie } from '@nivo/pie'
import React from 'react'



const PieChart = () => (
 

    <ResponsivePie
        data={[
    {
      "id": "Admin Offset",
      "label": "Admin Offset",
      "value": 3,
      "color": "#84163F"
    },
    {
      "id": "EFI License",
      "label": "EFI License",
      "value": 10,
      "color": "hsl(109, 70%, 50%)"
    },
    {
      "id": "Worker Bonus",
      "label": "Worker Bonus",
      "value": 87,
      "color": "hsl(121, 70%, 50%)"
    }]}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0}
        padAngle={6}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#000"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        enableSlicesLabels={false}
        sortByValue={true}
        tooltipFormat={value =>
                        `${Number(value)}%`
                    } 
                    tooltip={({ id, value, color }) => (
            <strong style={{ color:"white" }}>
                {id}: {value}%
            </strong>
        )}
        theme={{
            tooltip: {
                container: {
                    background: '#333',
                },
            },
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: '#84163F',
                color: '#84163F',
                size: 0,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: '#115C75',
                color: '#115C75',
                rotation: -45,
                lineWidth: 0,
                spacing: 10
            }, 
            {
            "id": "squares",
            "type": "patternSquares",
            "background": "#507638",
            "color": "#507638",
            "rotation": -45,
            "lineWidth": 0,
            "spacing": 10, 
            "size": 0, 
            
        }
        ]}
        fill={[
            {
                match: {
                    id: 'Admin Offset'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'EFI License'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'Worker Bonus'
                },
                id: 'squares'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#000',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)


export default PieChart