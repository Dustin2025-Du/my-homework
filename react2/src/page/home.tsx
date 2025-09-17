
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/test'
import { Button } from 'antd';
export default function Home() {
    const count = useSelector((state: any) => state.counter.value)
    const dispatch = useDispatch()
    return <>
        <div>Use redux{count}</div>
        <div >
            <Button onClick={() => { dispatch(increment()) }}>+</Button>
            <Button onClick={() => { dispatch(decrement()) }}>-</Button>
        </div>

    </>
}