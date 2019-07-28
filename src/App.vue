<template>
  <div id="app">
    <header class="header">
      <section>
        <button type="button">create</button>
        <button type="button">refresh</button>
      </section>
      <search></search>
    </header>
    <Calendar/>
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue';
import Search from './components/Search.vue';

export default {
  name: 'app',
  components: {
    Calendar,
    Search,
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  .header {
    background-color: #ccc;
    width: 100%;
  }
</style>
