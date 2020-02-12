import React, { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";
import axios from "axios";

interface Props {}
interface IMail {
  to: string;
  cc?: string;
  bcc?: string;
  subject: string;
  text: string;
}

const Editor: FC<Props> = () => {
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
    const res = await axios({
      url: `${process.env.REACT_APP_API_URL}mail`,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: mailData
    });
  };

  return (
    <Wrapper>
      <Row>
        <span className="text-light">To</span>
        <Input type="text" className="flex-one" name="to" onChange={handleChange} />
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
          <Input type="text" className="flex-one" name="cc" onChange={handleChange} />
        </Row>
      )}
      {bccVisibility && (
        <Row>
          <span className="text-light">BCC</span>
          <Input type="text" className="flex-one" name="bcc" onChange={handleChange} />
        </Row>
      )}
      <Row>
        <span className="text-light">Subject</span>
        <Input type="text" className="flex-one" name="subject" onChange={handleChange} />
      </Row>
      <Message name="text" onChange={handleChange} />
      <Footer>
        <Button onClick={sendMail}>Send</Button>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 800px;
  width: 60%;
  background-color: #fff;
  border-radius: 4px;
  min-height: 120px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
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
  margin: 0 8px;
  outline: none;
`;

const Message = styled.textarea`
  width: 100%;
  min-height: 120px;
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
`;

const Toggle = styled.span`
  padding: 0 4px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.black};
  }
`;

export default Editor;
