import React,{Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import {connect} from 'react-redux';
import {fetchUserAction,fetchCourses} from './actions/myactions';
import  SearchBox  from './components/search-box/search-box.component';
import Courses from './components/course/course.component';
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
    //console.log(this.props.courses);
  }

  render() {
     const courses=this.props.courses.courses.docs;
     console.log(courses);
     console.log(typeof(courses));

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
          {(courses!==undefined && this.props.user!==null)?(
            courses.map((course,index)=>
            <Courses
              key={index}
              courseId={course['Course Id']}
              courseName={course['Course Name']}
              provider={course.Provider}
              uniOrIns={course['Universities/Institutions']}
              nextSession={course['Next Session Date']}
              childSubject={course['Child Subject']}
              length={course.Length}
              video={course['Video(Url)']}
              url={course.Url}
           />
          )):(
            <h6>no</h6>
          )}
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
