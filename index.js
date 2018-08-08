import Test from './src/test'
import DatePicker from './lib/datetimepicker/datetimepickerç'

export {
  Test
}

const install = (Vue) => {
  Vue.component(Test.name, Test)
  Vue.component(DatePicker.name, DatePicker)
}

export default {
  install
}
