import { useSelector } from 'react-redux'
export default function Home() {
  // @ts-ignore
    const val=useSelector((state) => state.userReducer.username);
  console.log(val)
  return (
   <div>
      用户名字:{val}
   </div>
  );
}
