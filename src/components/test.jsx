import { ref } from 'vue'
import HelloWorld from './HelloWorld.vue'
export default {
  setup(o) {
    const a = 'io', isBg = true, color = 'red', isShow = true;
    const b = ref('12'), m = ref('HI');
    const element = () => isShow ? <p>我是 if</p> : <p>我是 else</p>;
    // const show  = <p v-show={isShow}>我是 v-show </p>;
    /* const vnode = <div className={`header ${ isBg ? 'headerBg' : '' }`}>{ element() }
       { show }
       { a + b }
       <p class={ [ 'header', isBg && 'headerBg' ] } style={{ color, fontSize: '2em' }}>{ a + b }</p>
      </div>; */
    
    // class 类名绑定有两种方式，使用模板字符串或者使用数组
    // style 绑定需要使用双大括号
    // jsx/tsx 中没有 v-if v-for 指令
    // input 需要有结束标记
    return () => <div className={`header ${ isBg ? 'headerBg' : '' }`}>{ element() }
     <p v-show={isShow}>我是 v-show </p>
     { a + b.value }<input v-model={b.value} />
     <HelloWorld v-model={[m.value,'msg']} />
     <input v-model={m.value} />
     <p class={ [ 'header', isBg && 'headerBg' ] } style={{ color, fontSize: '2em' }}>{ a + b.value }</p>
    </div>;
  },
};
