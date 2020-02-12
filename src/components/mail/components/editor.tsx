import React, { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";

import MailService from "../mailService";
import { IAppError } from "interfaces";

interface Props {}
interface IMail {
  to: string;
  cc?: string;
  bcc?: string;
  subject: string;
  text: string;
}

const Editor: FC<Props> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IAppError>({
    status: false,
    message: ""
  });
  const [ccVisibility, setCCVisibility] = useState<boolean>(false);
  const [bccVisibility, setBCCVisibility] = useState<boolean>(false);
  const [mailData, setMailData] = useState<IMail>({
    to: "",
    subject: "",
    text: ""
  });

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

  const sendMail = async () => {
    setLoading(true);
    const res = await MailService.sendMail(mailData);
    if (res.success) {
      setLoading(false);
    }

    if (res.error) {
      setLoading(false);
      setError({ ...res.error });
    }
  };

  return (
    <>
      {error.status && <ErrorMessage>{error.message}</ErrorMessage>}
      <Wrapper dimmed={loading}>
        <Row>
          <span className="text-light">To</span>
          <Input
            type="text"
            className="flex-one"
            name="to"
            onChange={handleChange}
            disabled={loading}
          />
          {!ccVisibility && (
            <Toggle onClick={showCC} className="text-light">
              CC
            </Toggle>
          )}
          {!bccVisibility && (
            <Toggle onClick={showBCC} className="text-light">
              BCC
            </Toggle>
          )}
        </Row>
        {ccVisibility && (
          <Row>
            <span className="text-light">CC</span>
            <Input
              type="text"
              className="flex-one"
              name="cc"
              onChange={handleChange}
              disabled={loading}
            />
          </Row>
        )}
        {bccVisibility && (
          <Row>
            <span className="text-light">BCC</span>
            <Input
              type="text"
              className="flex-one"
              name="bcc"
              onChange={handleChange}
              disabled={loading}
            />
          </Row>
        )}
        <Row>
          <span className="text-light">Subject</span>
          <Input
            type="text"
            className="flex-one"
            name="subject"
            onChange={handleChange}
            disabled={loading}
          />
        </Row>
        <Message name="text" onChange={handleChange} disabled={loading} />
        <Footer>
          <Button onClick={sendMail} disabled={loading || !mailData.to}>
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

const Button = styled.button`
  min-width: 80px;
  height: 32px;
  padding: 4px 16px;
  background-color: ${props => props.theme.colors.persianGreen};
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Toggle = styled.span`
  padding: 0 4px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.black};
  }
`;

export default Editor;
