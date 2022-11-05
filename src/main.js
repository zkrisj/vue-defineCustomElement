import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App)
app.component('BlogPost', defineAsyncComponent(() => import('./components/BlogPost.vue'))).mount('#app')
import { register, MyVueElement } from './components/custom.js'
register()
// 也可以在注册之后实例化元素：
document.body.appendChild(new MyVueElement({
  // 初始化 props（可选）
}))
