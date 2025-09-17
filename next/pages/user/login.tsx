'use client'
import { Button, Form, Input,Modal  } from 'antd';
import {getList} from "@/common/utils";
import {useState} from "react";
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import {setUser} from '@/store/user'
export default function Page() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        router.push('/user/list')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values: never) => {
        const list=getList();
        let isLogin:boolean=false;
        list.forEach((item: { username: never; password: never; })=>{
            if(values['username']==item.username && item.password==values['password']){
                isLogin=true;
                return;
            }
        })
        if(isLogin){
            dispatch(setUser(values['username']))
            showModal()
        }else{
            alert('账户或者密码错误')
        }

    };

    return <>
        <Form
            name="basic"
            labelCol={{ span:4 }}
            wrapperCol={{ span: 20 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
        <Modal
            title="消息提示"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            cancelText={'取消'}
            okText={'确定'}
        >
            <p>登录成功</p>
        </Modal>
    </>
}