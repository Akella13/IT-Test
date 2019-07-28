<template>
  <div>
    <input type="text" v-model="query">
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      query: '',
    }
  }
}
</script>