import { Card, Statistic } from 'antd';
import React, { FunctionComponent } from 'react';

const AnalyticRow: FunctionComponent = () => {
    return (
        <Card.Grid>
            <h3>URL</h3>
            <h5>Shortened URL</h5>

            <Statistic title="Total Clicks" value={100} />
            <Statistic title="Top Countries" value="India" />
        </Card.Grid>
    );
};

export default AnalyticRow;
