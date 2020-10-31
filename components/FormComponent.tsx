import React, { FunctionComponent } from 'react';
import { Layout, Row, Col, Form, Input, Button, Divider } from 'antd';
import { useForm } from 'antd/lib/form/Form';

const { Content } = Layout;

const FormComponent: FunctionComponent = () => {
    const [form] = useForm();

    return (
        <Content>
            <Row>
                <Divider />
            </Row>
            <Row>
                <Col span={10} offset={6}>
                    <Form form={form} layout="vertical" labelAlign="left" name="url-shortener" scrollToFirstError>
                        <Form.Item
                            name="name"
                            label="Please enter your URL here"
                            rules={[{ required: true, message: 'URL is required' }]}
                        >
                            <Input addonBefore="http://" type="url" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                SHORTEN
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Content>
    );
};

export default FormComponent;
