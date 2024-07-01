import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

import {
  Container,
  Explanation,
  PersonelTitle,
  Title,
  FormContainer,
  Button,
} from "./Personel.styled";

const initialForm = {
  text: "",
  email: "",
  phone: "",
};

export default function PersonelInfo() {
  const [formData, setFormData] = useState(initialForm);
  const [validText, setValidText] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
  const [valid, setValid] = useState(false);

  const history = useHistory();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const isValidEmail = (email) => {
    return email.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim);
  };

  const isValidPhone = (phone) => {
    return phone.match(/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const clickHandler = () => {
    nameRef.current.props.value === ""
      ? setValidText(false)
      : setValidText(true);
    emailRef.current.props.value === ""
      ? setValidEmail(false)
      : setValidEmail(true);
    phoneRef.current.props.value === ""
      ? setValidPhone(false)
      : setValidPhone(true);

    if (
      isValidEmail(emailRef.current.props.value) &&
      isValidPhone(phoneRef.current.props.value)
    ) {
      history.push("/step2");
    } else {
      return;
    }
  };

  const changeHandler = (e) => {
    const { name, value, id } = e.target;
    setFormData({ ...formData, [name]: value });

    if (id === "text") {
      name === "text" ? setValidText(true) : setValidText(false);
    }

    if (id === "email") {
      name === "email" && isValidEmail(value)
        ? setValidEmail(true)
        : setValidEmail(false);
    }

    if (id === "number") {
      name === "phone" && isValidPhone(value)
        ? setValidPhone(true)
        : setValidPhone(false);
    }
  };

  useEffect(() => {
    validText && validEmail && validPhone ? setValid(true) : setValid(false);
  }, [validText, validEmail, validPhone]);

  return (
    <Container>
      <PersonelTitle>
        <Title>Personel Info</Title>
        <Explanation>
          Please provide your name, email address, and phone number.
        </Explanation>
      </PersonelTitle>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <FormGroup style={{ height: "70px" }}>
            <Label htmlFor="text">Name</Label>
            <Input
              ref={nameRef}
              bsSize="sm"
              id="text"
              type="text"
              placeholder="E.g. Mike Tayson"
              name="text"
              onChange={changeHandler}
              value={formData.text}
              invalid={!validText}
            />
            {!validText && <FormFeedback>Cannot be left blank</FormFeedback>}
          </FormGroup>

          <FormGroup style={{ height: "70px" }}>
            <Label htmlFor="email">Email</Label>
            <Input
              ref={emailRef}
              bsSize="sm"
              id="email"
              type="text"
              placeholder="react@reactInfo.com"
              name="email"
              onChange={changeHandler}
              value={formData.email}
              invalid={!validEmail}
            />
            {!validEmail && (
              <FormFeedback>Please enter a valid email</FormFeedback>
            )}
          </FormGroup>
          <FormGroup style={{ height: "70px" }}>
            <Label htmlFor="number">Tel</Label>
            <Input
              ref={phoneRef}
              autoComplete="off"
              bsSize="sm"
              id="number"
              type="text"
              placeholder="545 213 9108"
              name="phone"
              onChange={changeHandler}
              value={formData.phone}
              invalid={!validPhone}
            />
            {!validPhone && (
              <FormFeedback>Please enter a valid phone number</FormFeedback>
            )}
          </FormGroup>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={clickHandler}
              style={{ marginTop: "10px" }}
              type="submit"
            >
              Next Step
            </Button>
          </div>
        </Form>
      </FormContainer>
    </Container>
  );
}
