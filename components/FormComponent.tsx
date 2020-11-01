import React, { FunctionComponent, useState } from 'react';
import { Button, Col, Divider, Form, Input, Layout, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';

import { postData } from '../helpers/api-helper';
import ResultComponent from './ResultComponent';
import { IUrl } from '../models/url';

const { Content } = Layout;
const api_route = process.env.NEXT_PUBLIC_API_ROUTE;

const FormComponent: FunctionComponent = () => {
    const [urlData, setUrlData] = useState({} as IUrl);
    const [form] = useForm();

    const onFinish = async (values) => {
        console.log('values: ', JSON.stringify(values));
        try {
            const result = await postData(`${api_route}shortUrls`, JSON.stringify(values));
            if (result.urls && result.urls.length) {
                setUrlData(result.urls[0]);
            }
            console.log('result: ', result);
        } catch (err) {
            console.log('Error occured', err);
        }
    };

    const updateData = (data: IUrl) => {
        setUrlData(data);
    };

    return (
        <Content>
            <Row>
                <Divider />
            </Row>
            <Row>
                <Col span={10} offset={6}>
                    <Form form={form} layout="vertical" labelAlign="left" name="url-shortener" onFinish={onFinish}>
                        <Form.Item
                            name="url"
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
            {urlData.shortUrl && (
                <Row>
                    <Col span={10} offset={6}>
                        <ResultComponent updateUrlData={updateData} urlData={urlData} />
                    </Col>
                </Row>
            )}
        </Content>
    );
};

export default FormComponent;
