import { Button, Form, Input } from 'antd';
import { useEffect } from 'react';
export default function Page() {
    let userList: any = [];
    let _list = localStorage.getItem('list');
    useEffect(() => {
        if (_list) {
            userList = JSON.parse(_list);
        }
    }, [])
    const onFinish = (values: any) => {
        userList.push(values)
        localStorage.setItem('list', JSON.stringify(userList))
        console.log(userList);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return <>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
                    保存
                </Button>
            </Form.Item>
        </Form>
    </>
}