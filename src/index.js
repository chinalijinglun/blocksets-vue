import DatePicker from './lib/datepicker/datepicker'

const install = (Vue) => {
  Vue.component(DatePicker.name, DatePicker)
}

export default {
  install
}
