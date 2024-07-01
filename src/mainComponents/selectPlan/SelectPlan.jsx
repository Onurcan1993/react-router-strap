import React, { useEffect, useRef, useState } from "react";
import advanceLogo from "../../assets/images/icon-advanced.svg";
import arcadeLogo from "../../assets/images/icon-arcade.svg";
import proLogo from "../../assets/images/icon-pro.svg";

import {
  Container,
  Explanation,
  PersonelTitle,
  Title,
} from "../PersonelInfo/Personel.styled";
import {
  Button,
  Arcade,
  Plan,
  PlanBox,
  Advanced,
  Pro,
  Image,
  H3,
  Price,
  Click,
  Btn,
  MounthOrYear,
  LeftText,
  RightText,
  Free,
  NextOrPrevios,
  BackText,
} from "./SelectPlan.styled";
import { useHistory } from "react-router-dom";

export default function SelectPlan({ planHandler, finalPlanHandler }) {
  const [price, setPrice] = useState({
    mo: ["$9", "$12", "$15"],
    yr: ["$90", "$120", "$150"],
  });

  //local storage memory is important!!
  const stateFromStorage =
    JSON.parse(localStorage.getItem("stateKey")) || false;
  const [active, setActive] = useState(stateFromStorage);
  const primaryFromStorage =
    JSON.parse(localStorage.getItem("primaryKey")) || null;
  const [primary, setPrimary] = useState(primaryFromStorage);

  const [finalPlan, setFinalPlan] = useState(null);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem("stateKey", JSON.stringify(active));
    }
  }, [active]);

  useEffect(() => {
    localStorage.setItem("primaryKey", JSON.stringify(primary));
  }, [primary]);

  const history = useHistory();

  const clickHandler = () => {
    const newState = !active;
    setActive(newState);
    if (newState) {
      planHandler({ yr: price.yr });
    } else {
      planHandler({ mo: price.mo });
    }
  };

  const backClickHandler = () => {
    history.push("/");
  };

  const nextClickHandler = (e) => {
    const newState = active;
    setActive(newState);
    if (newState) {
      planHandler({ yr: price.yr });
    } else {
      planHandler({ mo: price.mo });
    }
    history.push("/step3");
  };

  const planClickHandler = (e) => {
    let newPrimary = null;
    if (e.target.id === "arcade") {
      newPrimary = 1;
      setFinalPlan({
        name: `Arcade(${active ? "Yearly" : "Montly"})`,
        price: active ? price.yr[0] + "/yr" : price.mo[0] + "/mo",
      });
    } else if (e.target.id === "advance") {
      newPrimary = 2;
      setFinalPlan({
        name: `Advance(${active ? "Yearly" : "Montly"})`,
        price: active ? price.yr[1] + "/yr" : price.mo[1] + "/mo",
      });
    } else if (e.target.id === "pro") {
      newPrimary = 3;
      setFinalPlan({
        name: `Pro(${active ? "Yearly" : "Montly"})`,
        price: active ? price.yr[2] + "/yr" : price.mo[2] + "/mo",
      });
    }
    setPrimary(newPrimary);
  };

  useEffect(() => {
    finalPlanHandler(finalPlan);
  }, [finalPlan]);

  return (
    <Container>
      <PersonelTitle>
        <Title>Select Your plan</Title>
        <Explanation>
          You have the option of mounthly of yearly billing.
        </Explanation>
      </PersonelTitle>
      <Plan>
        <PlanBox>
          <Arcade id="arcade" primary={primary} onClick={planClickHandler}>
            <Image src={arcadeLogo} />
            <H3>Arcade</H3>
            <Price>
              {active ? price.yr[0] : price.mo[0]}/
              {active ? Object.keys(price)[1] : Object.keys(price)[0]}
            </Price>
            {active && <Free>2 months free</Free>}
          </Arcade>
          <Advanced id="advance" primary={primary} onClick={planClickHandler}>
            {" "}
            <Image src={advanceLogo} />
            <H3>Advance</H3>
            <Price>
              {" "}
              {active ? price.yr[1] : price.mo[1]}/
              {active ? Object.keys(price)[1] : Object.keys(price)[0]}
            </Price>
            {active && <Free>2 months free</Free>}
          </Advanced>
          <Pro id="pro" primary={primary} onClick={planClickHandler}>
            <Image src={proLogo} />
            <H3>Pro</H3>
            <Price>
              {" "}
              {active ? price.yr[2] : price.mo[2]}/
              {active ? Object.keys(price)[1] : Object.keys(price)[0]}
            </Price>
            {active && <Free>2 months free</Free>}
          </Pro>
        </PlanBox>

        <MounthOrYear>
          <LeftText active={active}>Mounthly</LeftText>
          <Click active={active} onClick={clickHandler}>
            <Btn></Btn>
          </Click>
          <RightText active={active}>Yearly</RightText>
        </MounthOrYear>
      </Plan>
      <NextOrPrevios>
        <BackText onClick={backClickHandler}>Go Back</BackText>
        {(primary === 1 || primary === 2 || primary === 3) && (
          <Button onClick={nextClickHandler}>Next Step</Button>
        )}
      </NextOrPrevios>
    </Container>
  );
}
