import React, { useState, useEffect } from 'react';
// node里渲染jsx，react必须得使用babel
import { connect} from 'react-redux';
import { getIndexList } from '../store/index';
import withStyle from '../withStyle';
const Index = (props) =>{
  let [count, setCount] = useState(1);
  // useEffect(() => {
  //   props.getIndexList()
  // }, [])
  console.log('props', props.list);
  console.log('count', count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button><span>计数 {count}</span><button onClick={() => setCount(count - 1)}>-</button>
      {/* <button onClick={() =>props.getIndexList()}>加载</button> */}
      <ul>
        {props.list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>

  )
}

// server端拉取数据
Index.load = (store) => {
  return store.dispatch(getIndexList());
}
export default connect(
  state => ({list: state.index.list }),
  {getIndexList}
)(Index);