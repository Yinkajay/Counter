<template>
    <section class="counter-area">
        <div>
            <input type="text" v-model="count" />
        </div>
        <div>
            <user-button @click="increase">Increase +</user-button>
            <user-button @click="decrease">Decrease -</user-button>
        </div>
        <div>

        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods:{
        increase(){
            this.count++
        },
        decrease(){
            this.count--
        }
    }
}
</script>

<style scoped>
input {
    padding: 1px;
    margin: 30px;
    text-align: center;
    font-size: 40px;
    border-radius: 10px;
    /* width: 50px; */
}

.counter-area {
    padding: 2rem;
    background-color: teal;
}
</style>