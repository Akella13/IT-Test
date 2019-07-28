<template>
  <div id="app">
    <header class="header">
      <section>
        <create></create>
        <button type="button">refresh</button>
      </section>
      <search></search>
    </header>
    <Calendar/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Calendar from './components/Calendar.vue';
import Create from './components/Create.vue';
import Search from './components/Search.vue';

export default {
  name: 'app',
  components: {
    Calendar,
    Create,
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
