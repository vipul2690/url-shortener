import React, { FunctionComponent, useEffect, useState } from 'react';
import { Card, Col, Layout, Row } from 'antd';

import { requestData } from '../../helpers/api-helper';
import { IUrl } from '../../models/url';
import AnalyticRow from './AnalyticRow';

const { Content } = Layout;
const api_route = process.env.NEXT_PUBLIC_API_ROUTE;

const Analytics: FunctionComponent = () => {
    const [urldata, setUrlData] = useState([] as Array<IUrl>);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await requestData(`${api_route}urls`);
                setUrlData(result);
            } catch (err) {
                console.log('err: ', err);
            }
        };

        getData();
    }, []);

    return (
        <Row>
            <Col span={22} offset={1}>
                <Content>
                    <Card title="Stats">
                        {urldata.map((url) => {
                            return <AnalyticRow key={url.id} url={url} />;
                        })}
                    </Card>
                </Content>
            </Col>
        </Row>
    );
};

export default Analytics;
