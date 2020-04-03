// // import React from 'react'
// // import Select from 'react-select'
import { commodities } from '../lookup'



// // class Selector extends React.Component {
// //     constructor(){
// //         super() 
// //         this.state ={
// //             commodities: commodities
// //         }
// //     }
    
    
// //     render(){
// //         console.log(this.state
// //             )
// //         return (
// //             <div >
// //                 <Select options={this.state.commodities}  />
// //             </div>


// //         )
// //     } 
// // }


// // export default Select

// import React, { Component } from 'react'
// import Select from 'react-select'
// import { commodities } from '../lookup'

// const options = commodities

// class MyComp extends React.Component {
//     constructor(){
//         super()

//         this.state={
//             options: options
//         }
//     }

//     render(){
// const commodities = this.state.options.map(option => console.log(option))
// this.setState({
//     options: commodities
// })
//         return(
//             <div>
           
//                 <Select options={this.state.options}/>
//             </div>
//         )
//     }

// }

// export default () => (
//     <MyComp
//       isMulti
//       name="name"
//       options={options}
//       className="basic-multi-select"
//       classNamePrefix="select"
//     />
//   );
  
import React, { Component } from 'react'
import Select from 'react-select'
const array = []
const comm = commodities.map(commodity => array.push(commodity))
array.push(comm)
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (
  <Select  />
)

export default () => (
    <Select
      isMulti
      name="name"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );