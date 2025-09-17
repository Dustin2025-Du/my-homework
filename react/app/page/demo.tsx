import { useState, useEffect,useMemo, createRef,useRef } from 'react';
import styles from './demo.module.css'
import Child from './component/child'
let count: number = 1;
export default function Demo() {
  const [index, setIndex] = useState(0);

  const onClick = () => {
    setIndex(index + 1)
  }

  const [user, setUser] = useState({ name: 'dustin', age: 19 });

  const updateUser = () => {
    setUser({ name: 'Tom', age: 20 })
  }

  const [list, setList] = useState<number[]>([]);

  const clickSetList = () => {
    count = count + 1
    setList([...list, count]);
  }

  const listUser = [{ name: 'wang', age: 10 }, { name: 'li', age: 22 }]

  function renderListUser() {
    return <ul className='flex'>列表渲染=={listUser.map(item => (<li key={item.name}>姓名{item.name}&nbsp;</li>))}</ul>
  }

  const [isBol, setBol] = useState(true);
  function booleanDemo(bol: boolean) {
    return bol ? <div onClick={() => { setBol(false) }}>条件判断=====显示</div> : <div onClick={() => { setBol(!false) }}>条件判断=====隐藏</div>
  }
  /**
   * 使用bind绑定方法
   * 删除列表数据
   */
  let [goodList, setGoodList] = useState([
    { name: "电脑", price: 1000 },
    { name: "手机", price: 2000 },
    { name: "手表", price: 4000 },
  ])
  function delgoods(name: string) {
    let _arrs: Array<{ name: string; price: number }> = [];
    goodList.forEach(item => {
      if (item.name != name) {
        _arrs.push(item)
      }
    })
    setGoodList(_arrs)
  }
  function goodListView() {
    return (
      <>
        <div>列表删除操作</div>
        {goodList.map((item) => (
          <li key={item.name}>{item.name}==={item.price}
            <span onClick={() => { delgoods(item.name) }}>删除</span>
          </li>
        ))}
      </>
    )
  }
  /**
   * useEffact
   * 双向绑定
   * watch
   * computer
   */
  useEffect(() => {
    if (index) {
      console.log(`${index}监听了`)
    }

  }, [index])
  const [userInfo, setUserInfo] = useState({ nickName: '', phone: '' })
  function changeNickName(e: any) {
    const _obj = {
      nickName: userInfo.nickName,
      phone: e.target.value,
    }
    setUserInfo(_obj)
  }
  function changePhone(e: any) {
    const _obj = {
      phone: userInfo.nickName,
      nickName: e.target.value,
    }
    setUserInfo(_obj)
  }

  const computerMsg = useMemo(()=>{
    return `${user.name}${index}`
  },[index,user])

  const dom:any =useRef("");
  console.log(dom)
  return (
    <>
      <div>useState使用:{index} &nbsp;&nbsp;&nbsp;<span onClick={onClick}>操作</span></div>
      <div>useState对象操作:{user.name}{user.age} &nbsp;&nbsp;&nbsp;<span onClick={updateUser}>操作</span></div>
      <div>useState数组操作:{list} &nbsp;&nbsp;&nbsp;<span onClick={clickSetList}>操作</span></div>
      <>{renderListUser()}</>
      <>{booleanDemo(isBol)}</>
      <>{goodListView()}</>
      <div className={[styles.red, styles['font-blue']].join(" ")}>this is css</div>
      <div>
        <p>数据双向绑定</p>
        <div>昵称<input onChange={changeNickName} placeholder='输入昵称'></input></div>
        <div>手机号<input onChange={changePhone} placeholder='手机号'></input></div>
        <div>显示的数据{JSON.stringify(userInfo)}</div>
        <div>模拟计算属性{computerMsg}</div>
      </div>
      <Child index={index} setIndex={setIndex}/>

      <div ref={dom}>获取dom</div>
    </>
  );
}

