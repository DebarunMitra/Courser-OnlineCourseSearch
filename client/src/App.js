import React,{Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import {connect} from 'react-redux';
import {fetchUserAction,fetchCourses} from './actions/myactions';
import  SearchBox  from './components/search-box/search-box.component';
//    <NavBar />

class App extends Component {
  constructor(props){
    super(props);
    }

  componentDidMount() {
    this.props.fetch_user();
    this.props.fetch_courses();

  }

  getCourses=()=>{
    console.log('ok');
    console.log(this.props.courses);
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        {!this.props.user?(<Route exact path="/" component={Home} />):(
          this.getCourses(),
            <h1 className="title">Online Course Search</h1>
        )}
          {this.props.user?(
            <form className="search-form">
              <SearchBox placeholder="Search Courses"/>
           </form>
          ):false}

        <Route path="/profile" component={Profile} />
      </BrowserRouter>
    );
  }
}

const mapDispathToProps = (dispatch)=>{
  return {
    fetch_user:()=>{
      dispatch(fetchUserAction());
    },
    fetch_courses:()=>{
      dispatch(fetchCourses());
    }
  };
}

const mapStateToProps=(state)=>{
//  console.log(state.courses);
  return {
    user:state.auth,
    courses:state.courses
  };
}


export default connect(mapStateToProps,mapDispathToProps)(App);
