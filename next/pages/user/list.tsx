
import { Space, Table } from 'antd';
import { useEffect, useState, type SetStateAction} from 'react';
import {getList,setListItem} from "@/common/utils";

export default function Page() {
    const {Column} = Table;
    const [data, setData] = useState([])
    let _list: any = [];
    useEffect(() => {
        _list=getList()
        _list.forEach((element: any, index: number) => {
            element.key = index;
        });
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
        setListItem(_data)
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
                        <a>详情</a>
                        <a>编辑</a>
                        <a onClick={()=>removeUser(item.key)}>删除</a>
                    </Space>
                )}
            />
        </Table>
    </>
}