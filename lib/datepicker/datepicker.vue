<template>
  <div class="bst-date-picker">
    <div class="week-header">
      <table>
        <tr>
          <td v-for="(item, index) in weeks" :key="index">{{item}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { WEEKS } from '../../src/utils/date'
export default {
  name: 'bstDatePicker',
  props: {
    weekStart: {
      // 0 周日 1 周六
      type: Number,
      default: 0
    },
    lang: {
      type: String,
      default: 'zh'
    },
    currentDay: {
      type: Date,
      default: () => new Date()
    }
  },
  computed: {
    weeks() {
      const weeks = []
      for(let i = 0; i < 7; i++) {
        weeks.push(WEEKS[this.lang][this.weekStart + i])
      }
      return weeks
    },
    visibleDay() {
      const weekDay = this.currentDay.getDay()
      const date = this.currentDay.getDate()
      const month = this.currentDay.getMonth()
      const year = this.currentDay.getFullYear()
    }
  }
}
</script>
<style>
.bst-date-picker td{
  width: 30px;
  height: 30px;
  line-height: 30px;
}
</style>

