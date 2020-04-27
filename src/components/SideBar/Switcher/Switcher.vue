<template>
    <div id="switcher">
        <div class="search active">
            <font-awesome-icon icon="search"/>
        </div>
        <div class="users">
            <font-awesome-icon icon="users"/>
        </div>
        <div class="messages">
            <font-awesome-icon icon="comment-dots"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Switcher"
    }
</script>
<style lang="scss" src="./Switcher.scss" scoped />