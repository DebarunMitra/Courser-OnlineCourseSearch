import React, {Component} from 'react';
import {connect} from 'react-redux';
import './home.style.css';

class Home extends Component{

render(){

  return (
    <div className="" style={{margin:"10%",padding:"20px",textAlign:"center"}}>
      <h4>I am home :)</h4>
      <a className="signin" href="/auth/google">Sign Up with Google</a>
    </div>
    );
 }

}


export default connect()(Home);
