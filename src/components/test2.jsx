import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, ctx) { // 逻辑
    // console.log(props, ctx);
    return () => {
      return <p>{ 'hi' }</p>
    }
  },
})