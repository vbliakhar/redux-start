import React from 'react'
import {connect} from 'react-redux'
import {add2} from './reducer/actions/actions'
class Counter extends React.Component {
  render(){
    return(
      <div style={{padding: '20px', border: "1px solid #ccc"}}>
          <h1>Counter {this.props.counter}</h1>
          <hr/>
          <div>
              <button onClick={this.props.onChange.bind(this, 200)}>AddNew</button>
              <button onClick={this.props.onChange.bind(this, -200)}>SubNew</button>
          </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    counter:state.counter2.counter2
  }
}
function mapDispatchProps(dispatch){
  return{
    onChange: number =>{dispatch(add2(number))}
  }
}
export default connect (mapStateToProps, mapDispatchProps)(Counter);