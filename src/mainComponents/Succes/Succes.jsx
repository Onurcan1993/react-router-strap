import React from "react";
import { Container, Image, ThankText, Thanks, Wrapped } from "./Success.styled";
import thankYouLogo from "../../assets/images/icon-thank-you.svg";

export default function Succes() {
  return (
    <Wrapped>
      <Container>
        <Image src={thankYouLogo}></Image>
        <Thanks>Thank You!</Thanks>
        <ThankText>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </ThankText>
      </Container>
    </Wrapped>
  );
}
