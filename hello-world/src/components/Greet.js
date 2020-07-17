import React from 'react'

// function Greet(){
//     return <h1>Hello Praveen Oruganti</h1>
// }
const Greet =(props) => {
console.log(props);
return(
    <div>
    <h1 style={{ color: 'Red' }}>Hello {props.name} a.k.a {props.heroName}</h1>
    {props.children}
    </div> 
)
}
export default Greet;