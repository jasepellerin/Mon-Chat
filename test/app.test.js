import Vue from 'vue/dist/vue.min.js'
import App from '../source/scripts/components/App.vue'

describe('App', () => {
  // Check base component
  it('App is an object', () => {
    expect(typeof App).toBe('object')
  })

  // Inspect the component instance on mount
  it('App mounts appropriately', () => {
    const vm = new Vue(App).$mount()
    // Check that the dark property is set to false by default
    expect(vm.dark).toBe(false)
  })
})
