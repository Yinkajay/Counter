
<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @mouseenter="holdingDown" @mouseleave="stopIncrease">count is {{ count }}</button>
  </div>

<div class="button-area">
  
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: ['msg'],
  data() {
    return {
      count: 0,
      pressed: false
    }
  },
  computed: {
    count() {
      if (this.pressed) {
        this.count++
      }
      return this.count
    }
  },
  methods: {
    holdingDown() {
      this.pressed = true
      console.log('pressed')
    },
    stopIncrease() {
      this.pressed = false
    }
  },
}

</script>

<style scoped></style>
