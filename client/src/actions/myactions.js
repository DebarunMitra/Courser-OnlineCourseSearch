import axios from 'axios';

export const fetchUserAction = ()=>{
   return (dispatch)=>{
     
    axios.get('/auth/verify')
    .then((res)=>{
       dispatch({type:'GET_USER',payload:res.data})
    })

   }
}
