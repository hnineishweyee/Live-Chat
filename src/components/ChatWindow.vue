<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
        <div class="single" v-for="message in formattedMessages" :key="message.id">
            <span class="created-at"> {{ message.created_at }} ago </span>
            <span class="name"> {{ message.name }} </span>
            <span class="message"> {{ message.message }} </span>
        </div>
    </div>
  </div>
</template>

<script>

import { db } from '@/firebase/config';
import { computed, onUpdated, ref } from 'vue';
import { formatDistanceToNowStrict } from 'date-fns';

export default {
    setup(){
        let messages = ref([])
        let msgBox = ref(null)

        // AUTO SCROLLING FEATURE
        onUpdated(()=>{
          msgBox.value.scrollTop = msgBox.value.scrollHeight
        })





        let formattedMessages = computed(()=>{
          return messages.value.map((msg)=>{
            let formatTime =  formatDistanceToNowStrict(msg.created_at.toDate())
            return {...msg,created_at:formatTime}
          })
        })

        db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
            let results = []
            snap.docs.forEach((doc)=>{
                let document = {...doc.data(),id:doc.id}
                // if(doc.data().created_at){
                //   results.push(document)
                // }
                // ANOTHER WRITING STYLE
                doc.data().created_at && results.push(document)
            })
            messages.value=results
        })
        return {messages,msgBox,formattedMessages}
    }
}
</script>

<style>
     .chat-window {
        background: #fafafa;
        padding: 50px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>