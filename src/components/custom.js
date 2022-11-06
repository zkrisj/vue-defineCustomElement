import { defineCustomElement } from 'vue'
import Example from './Example.ce.vue'
const MyVueElement = defineCustomElement({
  // 这里是同平常一样的 Vue 组件选项
  props: {},
  emits: {},
  template: `<slot name="msg"></slot>`,
  // defineCustomElement 特有的：注入进 ShadowRoot 的 CSS
  styles: [`::slotted(div){color:lime}`]
})
console.log(Example.styles) // ["/* 内联 css */"]
const ExampleElement = defineCustomElement(Example) // 转换为自定义元素构造器
export { MyVueElement, ExampleElement }
export function register() {
  customElements.define('my-example', ExampleElement)
  customElements.define('my-vue-element', MyVueElement)
}
