import React, {Component} from 'react';
import {connect} from 'react-redux';

class Profile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName:"loading",
      image:""
    };
  }

  componentDidMount() {
    if(this.props.user){
            this.setState({
                firstName:this.props.user.firstName,
                image:this.props.user.image
       })
     }
   }

render(){
  if(!this.props.user){
       this.props.history.push('/')
   }
  return (
        <div>
           <h1>here is your profile </h1>
           <div className="card" style={{margin:"10%",padding:"10px",textAlign:"center"}}>
              <h2>{this.state.firstName}</h2>
              <img className="circle" src={this.state.image} alt=""/>
           </div>
        </div>
  );
}

}

const mapStateToProps = (state)=>{
   return {
       user:state.auth
   }
}

export default connect(mapStateToProps)(Profile);
