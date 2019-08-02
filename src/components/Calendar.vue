<template>
  <div>
    <section>
      <button type="button" @click="prevMonth">prev</button>
      <span>{{ months[selected.month] }} {{ selected.year }}</span>
      <button type="button" @click="nextMonth">next</button>
    </section>
    <section>
      <div class="container">
        <div v-for="(week, weekIndex) in weeks" :key="weekIndex" class="row">
          <div v-for="(day, dayIndex) in days" :key="dayIndex" class="col day" @click="showEvents(weekIndex, dayIndex)">
            <span v-if="week == 1">{{ day }}</span>
            {{ date(weekIndex, dayIndex).date }}
            <span v-if="isToday(weekIndex, dayIndex)">
              TODAY
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="popup" :class="{ 'displayed': displayed }">
      <button type="button" @click="displayed = false">cancel</button>
      <form @submit.prevent="createEvent">
        <input type="text" v-model="eventType">
        <button type="submit">Submit</button>
      </form>
      <ul>
        <li v-for="(event, index) in events" :key="index">{{ event }}</li>
      </ul>
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
      selected: {},
      current: {},
      events: [
        { date : 12, month : 7, year: 2019, type : "event1"},
        { date : 22, month : 7, year: 2019, type : "event2"}
      ],
      eventType: '',
      displayed: false,
    };
  },
  computed: {
    selectedLength() {
      return this.monthInDates(this.selected.month, this.selected.year);
    },
    prevLength() {
      if (this.selected.month <= 0) {
        return this.monthInDates(this.months.length, this.selected.year - 1);
      }
      return this.monthInDates(this.selected.month - 1, this.selected.year);
    },
    selectedStartDay() {
      let selectedStart = new Date(this.selected.year, this.selected.month);
      return selectedStart.getDay();
    },
  },
  created() {
    this.$set(this, 'current', {
      year: this.today.getFullYear(),
      month: this.today.getMonth(),
      day: this.today.getDay(),
      date: this.today.getDate(),
      week: Math.floor(this.today.getDate()/this.days.length),
    });
    this.$set(this, 'selected', {
      year: this.today.getFullYear(),
      month: this.today.getMonth(),
      day: this.today.getDay(),
      date: this.today.getDate(),
      week: Math.floor(this.today.getDate()/this.days.length),
    });
  },
  methods: {
    monthInDates (month, year) {
      return new Date(year, month + 1, 0).getDate();
    },
    date(weekIndex, dayIndex) {
      let date = -this.selectedStartDay + 1 + dayIndex + (this.days.length * weekIndex);
      if (date <= 0) {
        return {
          date: this.prevLength + date,
          month: this.selected.month - 1,
          year: this.selected.year,
        };
      } else if (date > this.selectedLength) {
        return {
          date: date - this.selectedLength,
          month: this.selected.month + 1,
          year: this.selected.year,
        };
      }
      return {
        date: date,
        month: this.selected.month,
        year: this.selected.year
      };
    },
    prevMonth() {
      if (this.selected.month <= 0) {
        this.selected.year -= 1;
        this.selected.month = this.months.length - 1;
      } else {
        this.selected.month -= 1;
      }
    },
    nextMonth() {
      if (this.selected.month >= this.months.length - 1) {
        this.selected.year += 1;
        this.selected.month = 0;
      } else {
        this.selected.month += 1;
      }
    },
    isToday(weekIndex, dayIndex) {
      return (
        this.date(weekIndex, dayIndex).date == this.current.date &&
        this.selected.year == this.current.year &&
        this.selected.month == this.current.month &&
        weekIndex == this.current.week
      )
    },
    createEvent() {
      this.events.push({
        date: this.selected.date,
        month: this.selected.month,
        year: this.selected.year,
        type: this.eventType,
      });
      this.eventType = '';
    },
    showEvents(weekIndex, dayIndex) {
      // bug: doesn't show on consecutive clicks
      if (this.date(weekIndex, dayIndex).month < this.selected.month) {
        this.prevMonth();
        return;
      } else if (this.date(weekIndex, dayIndex).month > this.selected.month) {
        this.nextMonth();
        return;
      }
      this.selected.date = this.date(weekIndex, dayIndex).date;
      this.selected.day = dayIndex;
      this.selected.week = weekIndex;
      this.displayed = true;
    },
    dateEvents(weekIndex, dayIndex) {
      return this.events.filter((event) => {        
        return event.date == this.date(weekIndex, dayIndex).date 
      })
    }
  }
}
</script>

<style lang="scss">
  .day {
    border: 1px solid #ccc;
    text-align: center;
    padding: 1rem;
    overflow-wrap: anywhere;
  }

  .popup {
    display: none;

    &.displayed {
      display: block;
    }
  }
</style>
