import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
  super(props);
  this.state={
    user:[],
    isAuth:false,
    courses:[],
    searchField:'',
    finalSearch:'',
    providerSearch:'',
    provider:'',
    session:''
  };
}

componentDidMount(){
    axios.get('http://localhost:5020/auth/verify')
     .then((res)=>{
        this.setState({
          isAuth:true
        })
     })

}


  render(){
    const {user,isAuth,courses,finalSearch,provider,session}=this.state;

    return (
      <div className="App">
        <header className="header" >
          <h1 className="title">Online Course Search</h1>
          {(!isAuth)?(
            <button className='login-btn'><a href="http://localhost:5020/auth/google">Sign Up with Google</a></button>
          ):(
            <h1>Logged Successfull</h1>
          )}
        </header>

      </div>
    );
  }
}


export default App;
