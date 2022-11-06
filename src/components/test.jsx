export default {
  setup(o) {
    const a = 'io', b = '12', isBg = true, color = 'red', isShow = true;
    const element = () => isShow ? <p>我是 if</p> : <p>我是 else</p>;
    // const show  = <p v-show={isShow}>我是 v-show </p>;

    // class 类名绑定有两种方式，使用模板字符串或者使用数组
    // style 绑定需要使用双大括号
    /* const vnode = <div className={`header ${ isBg ? 'headerBg' : '' }`}>{ element() } { show }
    { a + b }<p class={ [ 'header', isBg && 'headerBg' ] } style={{ color, fontSize: '2em' }}>{ a + b }</p></div>; */
    
    // jsx/tsx 中没有 v-if v-for 指令
    
    return () => <div className={`header ${ isBg ? 'headerBg' : '' }`}>{ element() } <p v-show={isShow}>我是 v-show </p>
    { a + b }<p class={ [ 'header', isBg && 'headerBg' ] } style={{ color, fontSize: '2em' }}>{ a + b }</p></div>;
  },
};
