import { withModifiers } from 'vue'
export default {
  setup() {
    const listData = [
     {name: 'Tom', age: 18},
     {name: 'Jim', age: 20},
     {name: 'Lucy', age: 16}
    ]
    const clickBox = val => {
      console.log(val)
    }
    // jsx/tsx 中没有 v-for指令，需要渲染列表需要使用数组方法 map
    // 绑定事件也是使用单大括号 {}，不是以 @为前缀了，而是改成了 on
    // 使用事件修饰符，需要借助 withModifiers 方法
    return () => (
       <div onClick={() => clickBox('container')}>
         <div class={'box'} onclick={withModifiers(() => clickBox('box'), ['stop'])}>
           <span>姓名</span>
           <span>年龄</span>
         </div>
         {
           listData.map(item => {
             return <div class={'box'} onClick={() => clickBox(item)}>
                 <span>{item.name}</span>
                 <span>{item.age}</span>
             </div>
           })
         }
       </div>
    )
  }
}
