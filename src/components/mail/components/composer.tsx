import React, { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";

import { IAppError } from "interfaces";
import MailService from "../mailService";
import { Button } from "components/shared";

interface Props {}
interface IMail {
  to: string;
  cc?: string;
  bcc?: string;
  subject: string;
  text: string;
}

const initialMailData = {
  to: "",
  subject: "",
  text: ""
};

const initialError = {
  status: false,
  message: ""
};

const Editor: FC<Props> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IAppError>({ ...initialError });
  const [success, setSuccess] = useState<boolean>(false);
  const [ccVisibility, setCCVisibility] = useState<boolean>(false);
  const [bccVisibility, setBCCVisibility] = useState<boolean>(false);
  const [mailData, setMailData] = useState<IMail>({ ...initialMailData });

  const showCC = () => {
    setCCVisibility(true);
  };

  const showBCC = () => {
    setBCCVisibility(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setMailData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSuccess = () => {
    setLoading(false);
    setSuccess(true);
    setMailData({ ...initialMailData });
    setError({ ...initialError });
  };

  const handleError = (error: IAppError) => {
    setLoading(false);
    setSuccess(false);
    setError({ ...error });
  };

  const sendMail = async () => {
    setLoading(true);
    setSuccess(false);
    setError({ ...initialError });
    const res = await MailService.sendMail(mailData);
    if (res.success) {
      handleSuccess();
    }

    if (res.error) {
      handleError({ ...res.error });
    }
  };

  return (
    <>
      {error.status && <ErrorMessage>Mail sending failed. Try again!</ErrorMessage>}
      {success && <SuccessMessage>Mail sent successfully.</SuccessMessage>}
      <Wrapper dimmed={loading}>
        <Row>
          <span className="text-light">To</span>
          <Input
            data-testid="to"
            type="text"
            className="flex-one"
            name="to"
            onChange={handleChange}
            disabled={loading}
            value={mailData.to}
            required
          />
          {!ccVisibility && (
            <Toggle onClick={showCC} className="text-light" data-testid="cc-toggle">
              CC
            </Toggle>
          )}
          {!bccVisibility && (
            <Toggle onClick={showBCC} className="text-light" data-testid="bcc-toggle">
              BCC
            </Toggle>
          )}
        </Row>
        {ccVisibility && (
          <Row>
            <span className="text-light">CC</span>
            <Input
              data-testid="cc"
              type="text"
              className="flex-one"
              name="cc"
              onChange={handleChange}
              disabled={loading}
              value={mailData.cc}
            />
          </Row>
        )}
        {bccVisibility && (
          <Row>
            <span className="text-light">BCC</span>
            <Input
              data-testid="bcc"
              type="text"
              className="flex-one"
              name="bcc"
              onChange={handleChange}
              disabled={loading}
              value={mailData.bcc}
            />
          </Row>
        )}
        <Row>
          <span className="text-light">Subject</span>
          <Input
            data-testid="subject"
            type="text"
            className="flex-one"
            name="subject"
            onChange={handleChange}
            disabled={loading}
            value={mailData.subject}
          />
        </Row>
        <Message
          data-testid="message"
          name="text"
          onChange={handleChange}
          disabled={loading}
          value={mailData.text}
        />
        <Footer>
          <Button
            varient="primary"
            onClick={sendMail}
            disabled={loading || !mailData.to}
            data-testid="submit-btn"
          >
            Send
          </Button>
        </Footer>
      </Wrapper>
    </>
  );
};

const ErrorMessage = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  color: ${props => props.theme.colors.red};
`;

const SuccessMessage = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  color: ${props => props.theme.colors.persianGreen};
`;

interface IWrapperProps {
  dimmed: boolean;
}

const Wrapper = styled.div<IWrapperProps>`
  max-width: 800px;
  width: 60%;
  background-color: #fff;
  border-radius: 4px;
  min-height: 120px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  opacity: ${props => (props.dimmed ? 0.5 : 1)};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
  margin: 8px;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  border: none;
  height: 24px;
  background-color: transparent;
  margin: 0 8px;
  outline: none;
`;

const Message = styled.textarea`
  width: 100%;
  min-height: 120px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0 8px;
`;

const Footer = styled.div`
  display: flex;
  margin: 12px 8px;
`;

const Toggle = styled.span`
  padding: 0 4px;
  cursor: pointer;

  &:hover {
    color: '${props => props.theme.colors.black}';
  }
`;

export default Editor;
