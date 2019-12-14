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
import Spinner from './components/spinner/spinner.component';
//    <NavBar />

class App extends Component {
  constructor(props){
    super(props);
    }

  componentDidMount() {
    this.props.fetch_user();
    this.props.fetch_courses();

  }


  render() {
    const courses=this.props.courses.courses.docs;
    return (
      <BrowserRouter>
        <Header />
        {!this.props.user?(<Route exact path="/" component={Home} />):(
            <h1 className="title">Online Course Search</h1>
        )}
          {this.props.user?(
            <div className="search-form">
              <SearchBox placeholder="Search Courses"/>
           </div>
          ):false}
          {(this.props.user)?(<h6 className="total-course">Course Found: {this.props.courses.courses.total}</h6>):<Spinner />}
            <div className="courses">
            {(courses!==undefined && this.props.user!==null)?(
              courses.map((course,index)=>
              <Courses
                key={index}
                courseId={course.course_id}
                courseName={course.course_name}
                provider={course.provider}
                uniOrIns={course.universities_institutions}
                nextSession={course.next_session_date}
                childSubject={course.child_subject}
                length={course.length}
                video={course.video_url}
                url={course.url}
             />
           )):(
              <h6>no</h6>
            )}
            </div>
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
