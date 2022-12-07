import { ref } from 'vue'
import { renderSlot, useSlots } from 'vue'
import HelloWorld from './HelloWorld.vue'
export default {
  setup(props, { attrs, slots }) {
    console.log(attrs.a, attrs.b);
    // console.log(slots.test()[0], slots.default()[0]);
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
    const href = 'https://devui.design/'
    const element2 = <a href={href}>DevUI Design</a>
    
    const properties = { slot: 'hello', style: 'color: red;' }
    
    return () => <div className={`header ${ isBg ? 'headerBg' : '' }`}>
     <HelloWorld>
     <p {...properties}>slot-hello</p>
     </HelloWorld>
     <HelloWorld v-model={[m.value,'msg']} v-slots={{
                    hello: () => {
                        return <p>我是hello插槽</p>
                    },
                    default: () => {
                        return <p>我是default插槽</p>
                    }
                }}>
     <p slot="hello">我会被覆盖</p>
     </HelloWorld>
     <p>{ element() }</p>
     <p v-show={isShow}>我是 v-show </p>
     <p>{ attrs.a + attrs.b + a + b.value }</p>
     <input v-model={b.value} />
     <p>
     <button>{ slots.test?.('test1') }</button>
     <button>{ slots.default?.('default1') }</button>
     <button>
       { renderSlot(useSlots(), 'test', 'test2') }
     </button>
     <button>
       { renderSlot(slots, 'default', 'default2') }
     </button>
     </p>
     <p>{ element2 }</p>
     <input v-model={m.value} />
     <p class={ [ 'header', isBg && 'headerBg' ] } style={{ color, fontSize: '2em' }}>{ a + b.value }</p>
    </div>;
  },
};
