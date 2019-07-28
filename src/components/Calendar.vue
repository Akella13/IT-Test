<template>
  <div>
    <section>
      <button type="button" @click="prethisonth">prev</button>
      <span>{{ months[selected] }} {{ current.year }}</span>
      <button type="button" @click="nextMonth">next</button>
    </section>
    <section>
      <div class="container">
        <div v-for="(week, weekIndex) in weeks" :key="weekIndex" class="row">
          <div v-for="(day, dayIndex) in days" :key="dayIndex" class="col day">
            <span v-if="week == 1">{{ day }}</span>
            {{ date(weekIndex, dayIndex) }}
            <span v-if="date(weekIndex, dayIndex) == current.date">
              TODAY
            </span>
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
      months: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'Jule', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      weeks: 5,
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      selected: 0,
      current: {},
    };
  },
  created() {
    this.$set(this, 'current', {
      year: this.today.getFullYear(),
      month: this.today.getMonth(),
      day: this.today.getDay(),
      date: this.today.getDate(),
      week: Math.floor(this.today.getDate()/this.days.length),
    })
  },
  mounted() {
    
  },
  methods: {
    monthInDates (month, year) {
      return new Date(year, month, 0).getDate() + 1;
    },
    date(weekIndex, dayIndex) {
      let date =  dayIndex + (this.days.length * weekIndex);
      if (date > 0 && date <= this.monthInDates(this.current.month, this.current.year)) {
        return date;
      }
      return 'other';
    },
    prethisonth() {
      this.selected -= 1;
    },
    nextMonth() {
      this.selected += 1;
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
