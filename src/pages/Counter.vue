<template>
    <section class="counter-area">
        <div class="input-area">
            <input type="text" autofocus @change="setValue" :value="count"/>
        </div>
        <div class="button-area">
            <user-button @click="increase" class="increase-button">+</user-button>
            <user-button @click="decrease" class="decrease-button">-</user-button>
            <user-button purpose="reset" class="reset-button" @click="reset">RESET</user-button>
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
    methods: {
        increase() {
            this.count++
        },
        decrease() {
            this.count--
        },
        reset(){
            this.count = 0
        },
        setValue(e){
            this.count = e.target.value
        }
    }
}
</script>

<style scoped>
.counter-area {
    width: 30rem;
    padding: 2rem;
    /* background-color: teal; */
}

.input-area {
    width: 70%;
    margin: 0 auto;
    border-radius: 10px;
    border: 2px solid white;
    outline: none;
    box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.7); 
   
}

input {
    padding: 30px;
    text-align: center;
    font-size: 40px;
    border-radius: 10px;
    display: block;
    width: 100%;
    background-color: transparent;
    /* background-color: purple; */
    opacity: 0.8;
    margin: 0px auto;
    cursor: pointer;
    border: none;
}

.button-area {
    background-color: green;
    width: 70%;
    margin: 10px auto;
    position: relative;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.increase-button {}

.decrease-button {}

.reset-button {
    position: absolute;
    top: 55px;
    left: calc(50% - 63px);
}
</style>