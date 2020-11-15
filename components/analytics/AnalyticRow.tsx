import { Card, Divider, Statistic } from 'antd';
import React, { FunctionComponent } from 'react';
import { IUrl } from '../../models/url';

interface IProps {
    url: IUrl;
}

const AnalyticRow: FunctionComponent<IProps> = ({ url }: IProps) => {
    return (
        <Card.Grid style={{ width: '100%' }}>
            <h3>URL: {url.full_url}</h3>
            <h5>Short Url: {url.short_url}</h5>
            <Divider />
            <Statistic title="Total Clicks" value={url.hits} />
        </Card.Grid>
    );
};

export default AnalyticRow;
