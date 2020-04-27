<template>
    <div id="message-container">
        <Message
            v-for="(message, key) in messages"
            :text="message.text"
            :sender="message.sender"
            :key="key"
        />
    </div>
</template>

<script>
    import { HubConnectionBuilder } from '@aspnet/signalr'
    import Message from "../Message/Message";
    export default {
        name: "MessageContainer",
        components: {Message},
        data(){
            return {
                messages: []
            }
        },
        mounted(){
            let hubUrl = 'https://localhost:5001/chat'; //ссылка, по которому будем обращаться к хабу
            let connection = new HubConnectionBuilder()  //строим соединение с хабом
                .withUrl(hubUrl)                      // в нашем случае будет использована технология web-socket
                .build();
            //здесь мы задаем функцию, в которую будет отправлять новые данные хаб
            connection.on('Send', (name, message) =>
                this.messages.push({text: message, sender: name}));
            connection.start(); // с этого момента мы пытаемся наладить соединение
        },

    }
</script>

<style lang="scss" src="MessageContainer.scss" scoped />