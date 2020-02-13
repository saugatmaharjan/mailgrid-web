import axios from "axios";

import { IMail, ISendResponse } from "./IMail";
import { AppError } from "utils";

class MailService {
  private apiUrl: string = process.env.REACT_APP_API_URL || "";

  public sendMail = async (data: IMail): Promise<ISendResponse> => {
    try {
      const res = await axios({
        url: encodeURI(`${this.apiUrl}/mail`),
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data
      });

      if (res.status === 200) {
        return { success: true };
      } else {
        return {
          error: { ...AppError.generate("Something went wrong!") }
        };
      }
    } catch (err) {
      return {
        error: { ...AppError.generate(err.message) }
      };
    }
  };
}

const instance = new MailService();
Object.freeze(instance);

export default instance;
