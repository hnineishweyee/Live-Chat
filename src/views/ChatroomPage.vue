<template>
  <div class="container">
    <navbar></navbar>
    <chat-window></chat-window>
    <new-chat-form></new-chat-form>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { watch } from 'vue';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import NewChatForm from '@/components/NewChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';

export default {
  components: { Navbar, NewChatForm, ChatWindow },

  setup(){
    let {user} = getUser();
    let router = useRouter();

    watch(user,()=>{
      if(!user.value){
        // redirect to welcome page
        router.push("/");
      }
    })
  }
}
</script>

<style>

</style>