<template>
    <div id="person-item">
        <div class="img" :style="background">
        </div>
        <div class="text">
            <div class="text-main">
                {{ textMain }}
            </div>
            <div class="text-add">
                {{ textAdd }}
            </div>
        </div>
        <div class="edit" v-if="edit">
            <font-awesome-icon icon="ellipsis-v"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonItem",
        // data(){
        //     return{
        //         t:
        //     }
        // },
        props: {
            img: String,
            textMain: String,
            textAdd: String,
            edit: Boolean,
        },
        computed: {
            background(){
                return `background: url('${ this.img }') center center / cover;`;
            }
        }
    }
</script>

<style lang="scss" src="./PersonItem.scss" scoped />