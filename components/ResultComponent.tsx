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
            const data = {
                hits: urlData.hits + 1,
            }
            const result = await updateData(`${api_route}urls/${urlData.id}`, JSON.stringify(data));
            updateUrlData(result);
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
                        href={urlData.full_url}
                        target="_blank"
                        style={{ marginLeft: '-1em' }}
                        onClick={_handleOnClick}
                    >
                        {urlData.short_url}
                    </Button>
                </h2>
            </Col>
        </Row>
    );
};

export default ResultComponent;
