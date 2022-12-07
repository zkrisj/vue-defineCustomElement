import { createApp, defineAsyncComponent, defineComponent, h } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.component('BlogPost', defineAsyncComponent(() => import('./components/BlogPost.vue')))
.component('BlogPost2', defineComponent({
  setup() {
    const props = { style: { color: "red" } };
    const small = h("small", "abc");
    return () => h("h2", props, ["123", small]);
  }
})).use(router).mount('#app')
import { register, MyVueElement } from './components/custom.js'
register()

// 也可以在注册之后实例化元素：
document.body.appendChild(
  new MyVueElement({
    // props: {
      id: 1,
    // },
  })
)
