export interface ICountryAnalytic {
    country: string;
    hits: number;
}

export interface IUrl {
    id: string;
    full_url: string;
    short_url: string;
    hits: number;
    created_at: Date;
    updated_at: Date;
    analytics?: Array<ICountryAnalytic>;
}
