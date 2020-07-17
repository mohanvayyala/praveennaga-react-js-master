import React, { Component } from 'react'

class EventBind extends Component {
   

    constructor(props){
        super(props)
        this.state={
            message:'Hello'
        }
    }
    clickHandler(){
        this.setState(
            {
                message:'GoodBye'
            }
        )
    }
    resetclickHandler(){
        this.setState(
            {
                message:'Hello'
            }
        )
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}> Click </button> */}
                <button onClick={()=>this.clickHandler()}> Click </button>
               {/* <button onClick={this.resetclickHandler.bind(this)}> Reset </button> */}
               <button onClick={()=> this.resetclickHandler()}> Reset </button>
            </div>
 
        )
    }
}

export default  EventBind;