import React from 'react';
import './App.scss';
import {connect} from 'react-redux'
import Counter from './Counter'
import {add,sub,addNumber,asyncAdd} from './reducer/actions/actions'


class App extends React.Component {

  render(){
    // console.log("APP", this.props)
    
    return (
      <div className="App">
        <div className="Container">
            <h1>counter <strong>{this.props.counter}</strong></h1>
          <hr/>
            <button onClick={this.props.onAdd}>add</button>
            <button onClick={this.props.onSub}>subtract</button>
          <hr/>
            <button onClick={()=>this.props.onAddNumber(15)}>add +15</button>
            <button onClick={this.props.onAddNumber.bind(this, -15)}>subtract -15</button>
          <hr/>
          <button onClick={this.props.onAsyncAdd.bind(this, 100)}>asynchronous code 100</button>
          <Counter />
        </div>
        
      </div>
    );
  }

}
function mapStateToProps(state){
  return{
    counter:state.counter1.counter
  }
}
function mapDispatchProps(dispatch){
  return{
    onAdd: ()=>{dispatch(add())},
    onSub: ()=>{dispatch(sub())},
    onAddNumber: number =>{dispatch(addNumber(number))},
    onAsyncAdd:number=>{dispatch(asyncAdd(number))}
  }
} 
export default connect (mapStateToProps, mapDispatchProps) (App);
