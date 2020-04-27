<template>
    <div class="message">
        <div class="message-sender">
            {{sender}}
        </div>
        <div class="message-text">
            {{text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: {
            text: String,
            sender: String
        }
    }
</script>

<style lang="scss" src="Message.scss" scoped />