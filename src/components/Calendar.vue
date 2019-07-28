<template>
  <div>
    <section>
      <button>prev</button>
      <span>{{ currentMonth }} {{ currentYear }}</span>
      <button>next</button>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div v-for="(day, index) in days" :key="index" class="col day">{{ day }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      currentYear: '1900',
      currentMonth: 'Jan',
      currentDay: 'Sunday',
      years: [],
      months: ['Feb', 'Jan', 'March', 'April', 'May', 'June', 'Jule', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
  }
}
</script>

<style lang="scss">
  .day {
    border: 1px solid #ccc;
    text-align: center;
    padding: 1rem;
  }
</style>
