export interface AppUrl {
    name: string;
    url: string;
    image?: any;
}

export interface ServerResponse {
    status?: boolean;
    message?: string;
    httpCode?: number;
    data: AppUrl[];
    errorCode?: string;
}
