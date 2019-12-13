import axios from 'axios';

export const fetchUserAction = ()=>{
   return (dispatch)=>{

    axios.get('/auth/verify')
    .then((res)=>{
       dispatch({type:'GET_USER',payload:res.data})
    })
  }
}


export const fetchCourses = ()=>{
  return (dispatch)=>{
    axios.get('/courses')
      .then((res)=>{
        //console.log(res);
        dispatch({type:'GET_COURSES',payload:res.data})
    })
  }
}

export const searchCourses = subject => (dispatch) => {
  console.log(subject);
  // axios
  //   .delete(`/courses/subject/${subject}`)
  //   .then(res =>
  //     dispatch({
  //       type: 'SEARCH_COURSE',
  //       payload: res.data
  //     })
  //   );
};
