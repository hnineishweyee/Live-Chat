<template>
    <div class="welcome container">
        <div v-if="showLoginForm">
            <LoginForm @enterChatroom="enterChatroom"></LoginForm>
            <p> Not a member? <span @click="showLoginForm=!showLoginForm"> Create Account </span></p>
        </div>

        <div v-else>
            <SignupForm @enterChatroom="enterChatroom"></SignupForm>
            <p> Already a member? <span @click="showLoginForm=!showLoginForm"> Login</span></p>
        </div>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import SignupForm from '@/components/SignupForm.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { auth } from '@/firebase/config'

export default {
  components: { LoginForm, SignupForm },

  setup(){
    let showLoginForm = ref(true)
    let router = useRouter()

    // let enterWelcome=async()=>{
    //     router.push('/')
    // }

    let enterChatroom=()=>{
        router.push({name:'Chatroom'})
    }

    return {showLoginForm,enterChatroom}
  }
}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }

    .welcome form {
        width: 300px;
        margin: 20px auto;
    }
    
    .welcome input {
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #eee;
        outline: none;
        color: #999;
        margin: 10px auto;
    }
    
    .welcome span{
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }

    .welcome button {
        margin: 20px auto;
    }

</style>