import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component{

render(){
  const getState=()=>{
  //  console.log(this.props);
  }

  return (
    <div className="card" style={{margin:"10%",padding:"20px",textAlign:"center"}}>
      <h4>I am home :)</h4>
      <div className="row">
      {getState()}
        <a className="waves-effect blue darken-4 btn" href="/auth/google">Sign Up with Google</a>
      </div>
    </div>

  );
}

}

const mapStateToProps=(state)=>{
  return {
    user:state.auth
  };
}

export default connect(mapStateToProps)(Home);
