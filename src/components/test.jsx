export default {
  setup(o) {
    const a = 'io', b = '12', isBg = true, color = 'red', isShow = true;
    const element = () => isShow ? <span >我是 if</span> : <span >我是 else</span>;
    // const show  = <span v-show={!isShow}>我是 v-show </span>;

    // class 类名绑定有两种方式，使用模板字符串或者使用数组
    // style 绑定需要使用双大括号
    /* const vnode = <div className={`header ${ isBg ? 'headerBg' : '' }`}>{ element() } { show }
    { a + b }<span class={ [ 'header', isBg && 'headerBg' ] } style={{ color, fontSize: '2em' }}>{ a + b }</span></div>; */
    
    return () => <div className={`header ${ isBg ? 'headerBg' : '' }`}>{ element() } <span v-show={!isShow}>我是 v-show </span>
    { a + b }<span class={ [ 'header', isBg && 'headerBg' ] } style={{ color, fontSize: '2em' }}>{ a + b }</span></div>;
  },
};
