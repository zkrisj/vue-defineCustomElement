import { defineCustomElement } from 'vue'
import Example from './Example.ce.vue'

const MyVueElement = defineCustomElement({
  // 这里是同平常一样的 Vue 组件选项
  props: {},
  emits: {},
  template: `<slot></slot>`,

  // defineCustomElement 特有的：注入进 ShadowRoot 的 CSS
  styles: [`::slotted(h1){color:red}::slotted(h2){color:lime}`]
})

console.log(Example.styles) // ["/* 内联 css */"]
// 转换为自定义元素构造器
const ExampleElement = defineCustomElement(Example)

export { MyVueElement, ExampleElement }

export function register() {
  // 注册自定义元素之后，所有此页面中的 `<my-vue-element>` 标签都会被升级
  customElements.define('my-example', ExampleElement)
  customElements.define('my-vue-element', MyVueElement)
}
