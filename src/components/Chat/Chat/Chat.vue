<template>
    <div id="chat">
        <MessageContainer/>
        <InputMessage/>
    </div>
</template>

<script>
    import InputMessage from "../InputMessage/InputMessage";
    import MessageContainer from "../MessageContainer/MessageContainer";
    export default {
        name: "Chat",
        components: {MessageContainer, InputMessage},
        data(){
            return {
                kek: ''
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" src="Chat.scss" scoped />