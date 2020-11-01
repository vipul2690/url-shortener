export interface ICountryAnalytic {
    ip: Array<string>;
    country: string;
    clicks: number;
}

interface IAnalytic {
    totalClicks: number;
    countryData?: Array<ICountryAnalytic>;
}

export interface IUrl {
    urlId: string;
    fullUrl: string;
    shortUrl: string;
    analytics: IAnalytic;
}
