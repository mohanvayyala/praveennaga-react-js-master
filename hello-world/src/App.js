import React, { Component } from 'react';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/Function'
// import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventBind/>
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <Counter/>
        <Message/> 
        <Greet name="Praveen" heroName="SuperMan">
          <p style={{ color: 'green' }}>Praveen Oruganti is Admin</p>
        </Greet>
        <Greet name="Prasad" heroName="BatMan">
          <button>Action</button>
        </Greet>
        <Greet name="Khaja" heroName="SpiderMan" />
        <Welcome name="Praveen" heroName="SuperMan" />
        <Welcome name="Prasad" heroName="BatMan" />
        <Welcome name="Khaja" heroName="SpiderMan" /> */}
      </div>
    )

  }
}
export default App;
