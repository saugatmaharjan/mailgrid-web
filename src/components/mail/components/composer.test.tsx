import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Composer from "./composer";
import Theme from "components/theme";

afterEach(cleanup);

it("renders a composer", () => {
  const { asFragment } = render(
    <Theme>
      <Composer />
    </Theme>
  );
  expect(asFragment()).toMatchSnapshot();
});

describe("Recipient field", () => {
  it("field rendered in dom and is required", () => {
    const { getByTestId } = render(
      <Theme>
        <Composer />
      </Theme>
    );
    expect(getByTestId("to")).toBeInTheDocument();
    expect(getByTestId("to")).toBeRequired();
  });
});

describe("Subject field", () => {
  it("field rendered in dom and is not required", () => {
    const { getByTestId } = render(
      <Theme>
        <Composer />
      </Theme>
    );
    expect(getByTestId("to")).toBeInTheDocument();
    expect(getByTestId("subject")).not.toBeRequired();
  });
});

describe("Message field", () => {
  it("field rendered in dom and is not required", () => {
    const { getByTestId } = render(
      <Theme>
        <Composer />
      </Theme>
    );
    expect(getByTestId("message")).toBeInTheDocument();
    expect(getByTestId("subject")).not.toBeRequired();
  });
});

describe("CC field", () => {
  it("field rendered in dom and is not required", () => {
    const { getByTestId } = render(
      <Theme>
        <Composer />
      </Theme>
    );
    fireEvent.click(getByTestId("cc-toggle"));
    expect(getByTestId("cc")).toBeInTheDocument();
    expect(getByTestId("cc")).not.toBeRequired();
  });
});

describe("BCC field", () => {
  it("field rendered in dom and is not required", () => {
    const { getByTestId } = render(
      <Theme>
        <Composer />
      </Theme>
    );
    fireEvent.click(getByTestId("bcc-toggle"));
    expect(getByTestId("bcc")).toBeInTheDocument();
    expect(getByTestId("bcc")).not.toBeRequired();
  });
});

describe("Test send", () => {
  it("Fill up all the fields", async () => {
    const { getByTestId } = render(
      <Theme>
        <Composer />
      </Theme>
    );

    const reciever = "maharjansaugat@gmail.com";
    fireEvent.change(getByTestId("to"), { target: { value: reciever } });
    expect(getByTestId("to")).toHaveValue(reciever);

    const subject = "Testing Library";
    fireEvent.change(getByTestId("subject"), { target: { value: subject } });
    expect(getByTestId("subject")).toHaveValue(subject);

    const message = "testing from testing library";
    fireEvent.change(getByTestId("message"), { target: { value: message } });
    expect(getByTestId("message")).toHaveValue(message);

    fireEvent.click(getByTestId("submit-btn"));
    expect(getByTestId("submit-btn")).toBeDisabled();
  });
});
