import { Iuser } from './iuser';

export interface IuserResponse {
  message: string;
  data?: Iuser[];
  err?: any;
  token?: string;
}
