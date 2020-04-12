export default {
    keys: [
      "Admin Offset",
      "EFI License",
      "Worker Bonus"
    ],
    margin: {
        "top": 10,
        "right": 130,
        "bottom": 50,
        "left": 100
    },
    defs: [
        {
            "id": "worker",
            "type": "patternDots",
            "background": "#507638",
            "color": "#507638",
            "size": 0,
            "padding": 4,
            "stagger": true
        },
        {
            "id": "efi",
            "type": "patternLines",
            "background": "#115C75",
            "color": "#115C75",
            "rotation": -45,
            "lineWidth": 0,
            "spacing": 10
        }, 
        {
            "id": "admin",
            "type": "patternSquares",
            "background": "#84163F",
            "color": "#84163F",
            "rotation": -45,
            "lineWidth": 0,
            "spacing": 10, 
            "size": 0, 
            
        }
    ],
    fill: [
        {
            "match": {
                "id": "Worker Bonus"
            },
            "id": "worker"
        },
        {
            "match": {
                "id": "EFI License"
            },
            "id": "efi", 
            
        },
        {"match": {
            "id": "Admin Offset"
        },
        "id": "admin"
    }

    ],
    axisBottom: {
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "Premium",
        "legendPosition": "middle",
        "legendOffset": 32, 
        
    
        
    },
    axisLeft: {
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "Commodity",
        "legendPosition": "middle",
        "legendOffset": -75

        },
    legends: [
        {
            "dataFrom": "keys",
            "anchor": "bottom-right",
            "direction": "column",
            "justify": false,
            "translateX": 120,
            "translateY": 0,
            "itemsSpacing": 2,
            "itemWidth": 100,
            "itemHeight": 20,
            "itemDirection": "left-to-right",
            "itemOpacity": 0.85,
            "symbolSize": 20,
            "effects": [
                {
                    "on": "hover",
                    "style": {
                        "itemOpacity": 1
                    }
                }
            ]
        }
    ]
}