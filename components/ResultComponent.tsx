import { Button, Col, Row } from 'antd';
import React, { FunctionComponent } from 'react';
import { v4 } from 'public-ip';

import { ICountryAnalytic, IUrl } from '../models/url';
import { updateData } from '../helpers/api-helper';

const api_route = process.env.NEXT_PUBLIC_API_ROUTE;
interface IProps {
    urlData: IUrl;
    updateUrlData: (data: IUrl) => void;
}

const ResultComponent: FunctionComponent<IProps> = ({ urlData, updateUrlData }: IProps) => {
    const _handleOnClick = async () => {
        try {
            const ip = await v4();
            if (urlData.analytics.countryData && urlData.analytics.countryData.length) {
                const analytic = {
                    ip: [ip],
                    clicks: 1,
                    country: '',
                };
                urlData.analytics.countryData.push(analytic);
            }
            const object: IUrl = {
                ...urlData,
                analytics: {
                    totalClicks: urlData.analytics.totalClicks + 1,
                    countryData: [...urlData.analytics.countryData],
                },
            };
            updateUrlData(object);
            const result = await updateData(`${api_route}shortUrls`, JSON.stringify(object));
            console.log('result: ', result);
        } catch (err) {
            console.log('error: ', err);
        }
    };

    return (
        <Row>
            <Col>
                <h3>Here is your short url!</h3>
                <h2>
                    <Button
                        type="link"
                        href={urlData.fullUrl}
                        target="_blank"
                        style={{ marginLeft: '-1em' }}
                        onClick={_handleOnClick}
                    >
                        {urlData.shortUrl}
                    </Button>
                </h2>
            </Col>
        </Row>
    );
};

export default ResultComponent;
