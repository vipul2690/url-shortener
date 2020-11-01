export const requestData = async (url: string): Promise<any> => {
    const headerOptions = {
        'Content-Type': 'application/json',
    };

    try {
        const result = await fetch(url, { method: 'GET', headers: headerOptions });
        return result.json();
    } catch (err) {
        console.log('Error in getting data: ', err);
        throw err;
    }
};

export const updateData = async (url: string, body: BodyInit | null): Promise<any> => {
    try {
        const headerOptions = {
            'Content-Type': 'application/json',
        };
        const result = await fetch(`${url}`, { method: 'PUT', headers: headerOptions, body: body });
        return result.json();
    } catch (err) {
        console.log('Error while deleting data: ', err);
        throw err;
    }
};

export const postData = async (url: string, body: BodyInit | null): Promise<any> => {
    try {
        const headerOptions = {
            'Content-Type': 'application/json',
        };
        const result = await fetch(`${url}`, { method: 'POST', headers: headerOptions, body: body });
        return result.json();
    } catch (err) {
        console.log('Error while posting data: ', err);
        throw err;
    }
};
