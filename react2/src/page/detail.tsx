import {useParams} from "react-router";
import {getList} from '../common/utils.ts'
export default function Page() {
    const {id} = useParams();
    const numberId=Number(id)
    const list=getList()
    const userInfo=list[numberId];
    return <>
        <div>姓名:{userInfo.username}</div>
        <div>密码:{userInfo.password}</div>
    </>
}