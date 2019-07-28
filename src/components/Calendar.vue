<template>
  <div>
    <section>
      <button>prev</button>
      <span>{{ months[currentMonth] }} {{ currentYear }}</span>
      <button>next</button>
    </section>
    <section>
      <div class="container">
        <div v-for="(week, weekIndex) in weeks" :key="weekIndex" class="row">
          <div v-for="(day, dayIndex) in days" :key="dayIndex" class="col day">
            <span v-if="week == 1">{{ day }}</span>
            {{ date(weekIndex, dayIndex) }}
          </div>
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
      today: new Date(),
      years: [],
      months: ['Feb', 'Jan', 'March', 'April', 'May', 'June', 'Jule', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      weeks: 5,
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    };
  },
  computed: {
    currentYear() { return this.today.getFullYear() },
    currentMonth() { return this.today.getMonth() },
    currentDay() { return this.today.getDay() },
    currentDate() { return this.today.getDate() },
  },
  mounted() {
    // console.log(this.monthInDates(this.currentMonth, this.currentYear))
    // console.log(this.days[this.currentDay])
    // console.log(this.monthInWeeks(this.currentMonth, this.currentYear))
  },
  methods: {
    monthInDates (month, year) {
      return new Date(year, month, 0).getDate() + 1;
    },
    date(weekIndex, dayIndex) {
      return dayIndex + (this.days.length * weekIndex);
    },
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
