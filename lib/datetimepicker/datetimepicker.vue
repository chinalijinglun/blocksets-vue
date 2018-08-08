<template>
  <div class="bst-date-picker">
    <div class="week-header">
      <table>
        <tr>
          <td>日</td>
          <td>一</td>
          <td>二</td>
          <td>三</td>
          <td>四</td>
          <td>五</td>
          <td>六</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bstDatePicker',
  props: {
    weekStart: {
      
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

