<template>
    <div id="friend-list">
        <PersonItem
                v-for="(user, key) in users"
                :img="user.photo"
                :text-main="fullName[key]"
                :text-add="user.email"
                edit
               :key="key"
        />
{{search}}
    </div>
</template>

<script>
    import PersonItem from "../PersonItem/PersonItem";
    import axios from 'axios';
    export default {
        name: "FriendList",
        components: {PersonItem},
        props:{
            search: String,
        },
        data(){
            return{
                users: null,
            }
        },
        mounted: function(){
            axios
                .get("https://localhost:5001/api/user")
                .then(response => this.users = response.data);
        },
        computed: {
            fullName(){
                let fullNames = [];
                this.users.forEach(function(item){
                    fullNames.push(item.name + ' ' + item.surname);
                });
                return fullNames;
            }
        },
        watch:{
            search: function(){
                if(this.search === '')
                    axios
                        .get("https://localhost:5001/api/user/search/_")
                        .then(response => this.users = response.data);
                else
                    axios
                        .get("https://localhost:5001/api/user/search/" + this.search)
                        .then(response => this.users = response.data);
            }
        }
    }
</script>

<style lang="scss" src="./FriendList.scss" scoped />