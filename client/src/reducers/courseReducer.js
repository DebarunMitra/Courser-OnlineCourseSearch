
const initialState={
  courses:[],
  loading:true,
  error:{}
}

export const courseReducer = (state=initialState,action)=>{
   switch(action.type){
       case 'GET_COURSES':
       return {
         courses:action.payload,
         loading:false
   };
       default :
           return state
   }
}