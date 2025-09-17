// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Space, Table } from 'antd';
import { useEffect, useState, type SetStateAction} from 'react';
import {Link} from 'react-router';

export default function Page() {
    const {Column} = Table;
    const [data, setData] = useState([])
    let _list: any = localStorage.getItem('list');
    useEffect(() => {
        if (_list) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            _list = JSON.parse(_list)
            _list.forEach((element: any, index: number) => {
                element.key = index;
            });
        }
        setData(_list)
    }, [])

    const removeUser = (index: number) => {
        const _data: SetStateAction<never[]>=[]
       data.forEach((item)=>{
            if(index!=item['key']){
                _data.push(item)
            }
       })
   
       setData(_data)

       localStorage.setItem('list',JSON.stringify(_data))
    }
    return <>
        <Table dataSource={data}>
            <Column title="姓名" dataIndex="username"/>
            <Column title="密码" dataIndex="password"/>
            <Column
                title="操作"
                key="action"
                render={(item:any) => (
                    <Space size="middle">
                        <Link to={`/detail/${item.key}`}>详情</Link>
                        <Link to={`/edit/${item.key}`}>编辑</Link>
                        <a onClick={()=>removeUser(item.key)}>删除</a>
                    </Space>
                )}
            />
        </Table>
    </>
}