<template>
    <button>
        <slot></slot>
    </button>
</template>



<style scoped>
button {
    border-radius: 8px;
    padding: 10px 20px;
    margin: 10px;
    border: none;
    background-color: blue;
    color: white;
}
button:hover{
    color: blue;
    background-color: white;
}
</style>