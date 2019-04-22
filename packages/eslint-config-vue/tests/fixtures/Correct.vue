<template>
  <div class="main">
    <input
      v-model="inputData"
      class="main-input"
    >
  </div>
</template>

<script>
export default {
  data () {
    return {
      'inputData': '',
    }
  },
}
</script>
