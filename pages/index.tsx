import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import FormComponent from '../components/FormComponent';
import ResultComponent from '../components/ResultComponent';

const Home: FunctionComponent = () => {
    return (
        <div>
            <FormComponent />
            <ResultComponent />
        </div>
    );
};

export default Home;
