
const initialState={
  courses:[],
  loading:true,
  page:1,
  error:{}
}

export const courseReducer = (state=initialState,action)=>{
   switch(action.type){
       case 'GET_COURSES':
       case 'SEARCH_COURSE':
       case 'PAGINATION_COURSE':
       return {
         courses:action.payload,
         loading:false
   };
       default :
           return state
   }
}
