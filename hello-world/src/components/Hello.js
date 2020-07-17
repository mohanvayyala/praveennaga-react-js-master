import React from 'react'

const Hello= () => {
    // return (
    //     <div className='helloClass'>
    //       <h1>Hello Praveen Oruganti </h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'hello',className:'helloClass'}, 
        React.createElement('h1',null,'Hello Praveen Oruganti'));
}

export default Hello;