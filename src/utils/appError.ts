import { IAppError } from "interfaces";

class AppError {
  public generate(message: string): IAppError {
    return {
      status: true,
      message
    };
  }
}

export default new AppError();
