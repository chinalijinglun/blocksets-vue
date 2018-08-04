import Test from './src/test'

export {
  Test
}

const install = (Vue) => {
  Vue.component(Test.name, Test)
}

export default {
  install
}
