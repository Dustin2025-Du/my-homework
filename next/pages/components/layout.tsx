import { Menu } from 'antd';
import {SetStateAction, useState} from "react";
import { useRouter } from 'next/navigation'
export default function Layout({children}:{children:any}) {
    const router = useRouter()
    const items = [
        {
            label: '首页',
            key: '/',
        },
        {
            label: '注册',
            key: '/user/add',
        },
        {
            label: '登录页面',
            key: '/user/login',
        },
        {
            label: '列表',
            key: '/user/list',
        },
    ];
    const [current, setCurrent] = useState('home');
    const onClick = (e: { key: SetStateAction<string>; }) => {
        setCurrent(e.key);
        router.push(`${e.key}`)
    };
    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            <main>{children}</main>
        </>
    )
}