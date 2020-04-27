<template>
    <div id="input-person">
        <input type="text"
               placeholder="Search..."
               :value="value"
               @input="$emit('input', $event.target.value)"
        >
    </div>
</template>

<script>
    export default {
        name: "InputPerson",
        props:{
            value: String,
        }
    }
</script>

<style lang="scss" src="./InputPerson.scss" scoped />