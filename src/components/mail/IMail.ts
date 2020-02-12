import { IAppError } from "interfaces";

export interface IMail {
  to: string;
  subject: string;
  text: string;
}

export interface ISendResponse {
  success?: true;
  error?: IAppError;
}
