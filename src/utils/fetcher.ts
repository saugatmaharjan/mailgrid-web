import axios, { AxiosRequestConfig } from "axios";

import { IAppError } from "interfaces";
import { AppError } from "utils";

export default async function fetcher(requestConfig: AxiosRequestConfig): Promise<IAppError | any> {
  try {
    const res = await axios({
      ...requestConfig
    });

    if (res.status === 200) {
      return true;
    } else {
      return AppError.generate("Something went wrong!");
    }
  } catch (err) {
    return AppError.generate(err.message);
  }
}
