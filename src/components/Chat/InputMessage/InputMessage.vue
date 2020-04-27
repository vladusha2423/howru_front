<template>
    <form id="input-message" @submit.prevent="send">
        <input type="text"
               v-model="msg"
               placeholder="Write a message..."
        >
        <div class="send-icon">
            <font-awesome-icon @click="send" icon="paper-plane"/>
        </div>
    </form>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "InputMessage",
        data(){
            return {
                msg: ''
            }
        },
        methods: {
            send(){
                axios
                    .post('https://localhost:5001/api/chat/send',
                        {
                            text: this.msg
                        })
                    .then(function(){
                    });
                this.msg = '';


            }
        }
    }
</script>

<style lang="scss" src="InputMessage.scss" scoped />