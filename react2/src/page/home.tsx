
import { useSelector } from 'react-redux'
export default function Home() {
    const name = useSelector((state: any) => state.user.username)
    return <>
        <div>用户名：{name}</div>
    </>
}