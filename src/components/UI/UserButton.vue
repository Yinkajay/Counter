<template>
    <button :class="purpose">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        purpose: {
            type: Boolean,
            required: false,
            default: null
        },
    }
}
</script>

<style scoped>
button {
    border-radius: 18px;
    padding: 10px 20px;
    margin: 10px;
    border: none;
    background-color: #E6D5AA;
    color: black;
    font-weight: bold;
    width: 106px;
    font-size: 15px;
}

button .reset {
    background-color: red;
}


button:hover {
    color: blue;
    background-color: white;
}
</style>