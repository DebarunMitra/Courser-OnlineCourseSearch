import React,{Component} from 'react';
import './App.css';
import Header from './components/header/Header.component';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/home/Home.component';
import Profile from './components/profile/Profile.component';
import {connect} from 'react-redux';
import {fetchUserAction,fetchCourses} from './actions/myactions';
import  SearchBox  from './components/search-box/search-box.component';
import Courses from './components/course/course.component';
import Spinner from './components/spinner/spinner.component';
import Pagination from './components/pagination/pagination.component';
//    <NavBar />

class App extends Component {
  constructor(props){
    super(props);
    }

    /**
 * [componentDidMount]
 * @return [fetch all course related data from database and user details]
 */

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
          <Route path="/profile" component={Profile} />
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
              false
            )}
            {(courses!==undefined && this.props.user!==null)?(
              <Pagination />
            ):false}
            </div>

      </BrowserRouter>
    );
  }
}

/**
 * [mapDispathToProps]
 * @return  [mapDispatchToProps is used for dispatching actions to the store. dispatch is a function of the Redux store.]
 */
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


/**
 * [mapDispathToProps]
 * @return  [mapStateToProps is used for selecting the part of the data from the store that the connected component needs. It's frequently referred to as just mapState for short.]
 */
const mapStateToProps=(state)=>{
  return {
    user:state.auth,
    courses:state.courses
  };
}


export default connect(mapStateToProps,mapDispathToProps)(App);
