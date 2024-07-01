import React, { useEffect, useState } from "react";
import {
  Container,
  PersonelTitle,
  Title,
  Explanation,
} from "../PersonelInfo/Personel.styled";
import {
  FinalPrice,
  AddSelectPlan,
  PlanNameAndPrice,
  NameAndChange,
  PlanPrice,
  Hr,
  AddOdd,
  TotalPrice,
} from "./FinishingUp.styled";

import { Link } from "react-router-dom";
import { BackText, Button, NextOrPrevios } from "../PickAddOns/PickAdd.styled";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function FinishingUp({
  finalPlanAndPrice,
  addPacket,
  addPacketHandler,
}) {
  const history = useHistory();
  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);
  const [totalPrice, setTotalPrice] = useState(
    parseInt(finalPlanAndPrice.price.match(/\d+/g))
  );
  console.log(totalPrice);
  const backPageHandler = () => {
    history.push("/step3");
  };

  useEffect(() => {
    setKeys(Object.keys(addPacket));
  }, []);

  useEffect(() => {
    setValues(
      Object.values(addPacket)
        .map((item) => parseInt(item.match(/\d+/g)))
        .reduce((a, b) => a + b, 0) + totalPrice
    );
  }, []);

  const finalPageHandler = () => history.push("/succes");

  return (
    <Container>
      <PersonelTitle>
        <Title>Finishing Up</Title>
        <Explanation>
          Double-check everything looks OK before confirming.
        </Explanation>
      </PersonelTitle>

      <FinalPrice>
        <AddSelectPlan>
          <PlanNameAndPrice>
            <NameAndChange>{finalPlanAndPrice.name}</NameAndChange>

            <Link
              id="link"
              style={{ color: "#9699ab", fontSize: "12px" }}
              to="/step2"
            >
              Change
            </Link>
          </PlanNameAndPrice>
          <PlanPrice>{finalPlanAndPrice.price}</PlanPrice>
        </AddSelectPlan>

        <Hr></Hr>

        {keys.map((item, index) => {
          return (
            <AddSelectPlan key={index}>
              <NameAndChange style={{ color: "#9699ab", fontSize: "12px" }}>
                {item}
              </NameAndChange>
              <PlanPrice style={{ color: "#473dff", fontSize: "12px" }}>
                {addPacket[item]}
              </PlanPrice>
            </AddSelectPlan>
          );
        })}

        {/* <BackText onClick={backPageHandler}>Go Back</BackText> */}
      </FinalPrice>

      <TotalPrice>
        <NameAndChange>Total</NameAndChange>
        <PlanPrice style={{ color: "#473dff", fontWeight: "bold " }}>
          {"$" + values}
        </PlanPrice>
      </TotalPrice>

      <NextOrPrevios>
        <BackText onClick={backPageHandler}>Go Back</BackText>
        <Button onClick={finalPageHandler}>Confirm</Button>
      </NextOrPrevios>
    </Container>
  );
}
