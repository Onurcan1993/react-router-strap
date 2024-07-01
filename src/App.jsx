import React, { useEffect, useRef, useState } from "react";
import { Container } from "./app.styled";
import Side from "./sideComponents/Side";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "./notFoundPage/NotFoundPage";
import PersonelInfo from "./mainComponents/PersonelInfo/PersonelInfo";
import SelectPlan from "./mainComponents/selectPlan/SelectPlan";
import PickAdd from "./mainComponents/PickAddOns/PickAdd";
import FinishingUp from "./mainComponents/FinalUp/FinishingUp";
import Succes from "./mainComponents/Succes/Succes";

export default function App() {
  const [primary, setPrimary] = useState(false);
  const [plan, setPlan] = useState({});
  const [addPacket, setAddPacket] = useState({});

  const planHandler = (value) => {
    setPlan(value);
  };

  const [finalPlanAndPrice, setFinalPlanAndPrice] = useState({});

  const finalPlanHandler = (value) => {
    setFinalPlanAndPrice(value);
  };

  const addPacketHandler = (value) => {
    setAddPacket(value);
  };

  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <Side state={1} primary={primary}></Side>
          <PersonelInfo></PersonelInfo>
        </Route>
        <Route path="/step2" exact>
          <Side state={2} primary={primary}></Side>
          <SelectPlan
            finalPlanHandler={finalPlanHandler}
            planHandler={planHandler}
          ></SelectPlan>
        </Route>
        <Route path="/step3" exact>
          <Side state={3} primary={primary}></Side>
          <PickAdd addPacketHandler={addPacketHandler} plan={plan}></PickAdd>
        </Route>
        <Route path="/step4" exact>
          <Side state={4} primary={primary}></Side>
          <FinishingUp
            addPacketHandler={addPacketHandler}
            addPacket={addPacket}
            finalPlanAndPrice={finalPlanAndPrice}
          ></FinishingUp>
        </Route>
        <Route path="/succes">
          <Side state={4} primary={primary}></Side>
          <Succes></Succes>
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
}
