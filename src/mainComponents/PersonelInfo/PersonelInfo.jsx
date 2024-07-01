import React, { useEffect, useState } from "react";
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
import { isValidElement } from "react";

const initialForm = {
  text: "",
  email: "",
  phone: "",
};

export default function PersonelInfo() {
  const [formData, setFormData] = useState(initialForm);
  const [validText, setValidText] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [valid, setValid] = useState(false);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const clickHandler = () => {
    history.push("/step2");
  };

  const isValidEmail = (email) => {
    return email.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim);
  };

  const isValidPhone = (phone) => {
    return phone.match(/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/);
  };

  const changeHandler = (e) => {
    const { name, value, id } = e.target;
    setFormData({ ...formData, [name]: value });

    if (id === "text") {
      name === "text" && value.length > 0
        ? setValidText(true)
        : setValidText(false);
    }

    if (id === "email") {
      name === "email" && value.length > 0 && isValidEmail(value)
        ? setValidEmail(true)
        : setValidEmail(false);
    }

    if (id === "number") {
      name === "phone" && isValidPhone(value) && value.length > 0
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
              disabled={!valid}
            >
              Next Step
            </Button>
          </div>
        </Form>
      </FormContainer>
    </Container>
  );
}
