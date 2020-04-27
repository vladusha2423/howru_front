<template>
    <div id="sidebar">
        {{search}}
        <PersonItem
                img="https://sun9-45.userapi.com/c837522/v837522576/51138/XpMCP28_qJw.jpg"
                text-main="Hello World"
                text-add="London is the capital of Great Britain"
        />
        <Switcher/>
        <InputPerson v-model="search" />
        <FriendList :search="search"/>

    </div>
</template>

<script>
    import PersonItem from "../PersonItem/PersonItem";
    import Switcher from "../Switcher/Switcher";
    import InputPerson from "../InputPerson/InputPerson";
    import FriendList from "../FriendList/FriendList";
    export default {
        name: "SideBar",
        components: {
            FriendList,
            InputPerson,
            Switcher,
            PersonItem
        },
        data(){
            return{
                search: '',
                login: true
            }
        }
    }

</script>

<style lang="scss" src="./SideBar.scss" scoped />