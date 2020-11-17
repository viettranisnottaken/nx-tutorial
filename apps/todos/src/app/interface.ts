export interface AppUrl {
  name: string;
  url: string;
  urlLogo?: any;
  id?: number;
  index?: number;
}

export interface ServerResponse {
  status?: boolean;
  message?: string;
  httpCode?: number;
  data: AppUrl[];
  errorCode?: string;
}
