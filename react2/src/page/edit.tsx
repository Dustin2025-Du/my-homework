import { Button, Form, Input } from 'antd';
import { useEffect } from 'react';
import { useParams } from "react-router";

export default function Page() {
    const [form] = Form.useForm();
    let _list:any = localStorage.getItem('list');
    let {id} = useParams<{ id: string }>();
    let numericId: number ;
    if(id){
        numericId= parseInt(id)
    }

    useEffect(() => {
        if (_list) {
            _list = JSON.parse(_list);
            const _obj={..._list[numericId]};
            form.setFieldsValue(_obj);
        }
      
    }, [])
    const onFinish = (values: any) => {
        _list[numericId]={..._list[numericId],...values}
        localStorage.setItem('list',JSON.stringify(_list))
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return <>

        <Form
            form={form}
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