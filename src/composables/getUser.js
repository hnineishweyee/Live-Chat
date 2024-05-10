import { ref } from 'vue';
import { auth } from '../firebase/config';

let user = ref(auth.currentUser) // if no data = null

 // console.log(auth.currentUser) // -> user's data want
 auth.onAuthStateChanged((_user)=>{   // user -> login or logout or signin <- run
  // console.log("user state change. current user is ", _user)
  user.value = _user
})

let getUser=()=>{
    return {user};
}

export default getUser;