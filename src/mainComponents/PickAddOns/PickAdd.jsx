import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import {
  Container,
  PersonelTitle,
  Title,
  Explanation,
} from "../PersonelInfo/Personel.styled";

import {
  AddExplanation,
  AddPersonelTitle,
  AddPlan,
  AddPlanSubDiv,
  AddTitle,
  BackText,
  Button,
  CheckAndTitle,
  NextOrPrevios,
  PlanPrice,
} from "./PickAdd.styled";
import reducer, { initialState } from "../reducers/reducers";
import { useHistory } from "react-router-dom";

export default function PickAdd({ plan, addPacketHandler }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [addPrice, setAddPrice] = useState({
    mo: ["$1", "$2", "$2"],
    yr: ["$10", "$20", "$20"],
  });
  const [addPick, setAddPick] = useState({});
  const history = useHistory();

  const changeHandler = (e) => {
    if (e.target.id === "online-service") {
      dispatch({
        type: "online-service",
        payload: e.target.checked,
      });
    } else if (e.target.id === "larger-storage") {
      dispatch({ type: "larger-storage", payload: e.target.checked });
    } else if (e.target.id === "customizable") {
      dispatch({ type: "customizable", payload: e.target.checked });
    }
  };

  useEffect(() => {
    if (state.checked1) {
      dispatch({ type: "online", payload: !state.active1 });
      setAddPick({
        ...addPick,
        "Online Service":
          Object.keys(plan)[0] === "mo"
            ? `${addPrice.mo[0]}/mo`
            : `${addPrice.yr[0]}/yr`,
      });
    } else {
      const { online, ...restOf } = addPick;
      setAddPick(restOf);
    }
  }, [state.checked1]);

  useEffect(() => {
    if (state.checked2) {
      dispatch({ type: "larger", payload: !state.active2 });
      setAddPick({
        ...addPick,
        "Larger Storage":
          Object.keys(plan)[0] === "mo"
            ? `${addPrice.mo[1]}/mo`
            : `${addPrice.yr[1]}/yr`,
      });
    } else {
      const { larger, ...restOff } = addPick;
      setAddPick(restOff);
    }
  }, [state.checked2]);

  useEffect(() => {
    if (state.checked3) {
      dispatch({ type: "custom", payload: !state.active2 });
      setAddPick({
        ...addPick,
        "Customuzable Profile":
          Object.keys(plan)[0] === "mo"
            ? `${addPrice.mo[2]}/mo`
            : `${addPrice.yr[2]}/yr`,
      });
    } else {
      const { custom, ...result } = addPick;
      setAddPick(result);
    }
  }, [state.checked3]);

  useEffect(() => {
    addPacketHandler(addPick);
  }, [addPick]);

  return (
    <Container>
      <PersonelTitle>
        <Title>Pick add-ons</Title>
        <Explanation>Add-ons help enhance your gaming experince.</Explanation>
      </PersonelTitle>

      <AddPlan>
        <AddPlanSubDiv id="online" active1={state.active1 ? 1 : 0}>
          <CheckAndTitle>
            <input
              onChange={(e) => changeHandler(e)}
              style={{ accentColor: "#473dff", cursor: "pointer" }}
              id="online-service"
              type="checkbox"
            />
            <AddPersonelTitle>
              <AddTitle>Online Service</AddTitle>
              <AddExplanation>Access to multiplayer games</AddExplanation>
            </AddPersonelTitle>
          </CheckAndTitle>
          <PlanPrice>
            {Object.keys(plan)[0] === "mo"
              ? `${addPrice.mo[0]}/mo`
              : `${addPrice.yr[0]}/yr`}
          </PlanPrice>
        </AddPlanSubDiv>
        <AddPlanSubDiv id="larger" active2={state.active2 ? 1 : 0}>
          <CheckAndTitle>
            <input
              onChange={(e) => changeHandler(e)}
              style={{ accentColor: "#473dff", cursor: "pointer" }}
              id="larger-storage"
              type="checkbox"
            />
            <AddPersonelTitle>
              <AddTitle>Larger Storage</AddTitle>
              <AddExplanation>Extra 1TB of cloud save</AddExplanation>
            </AddPersonelTitle>
          </CheckAndTitle>
          <PlanPrice>
            {" "}
            {Object.keys(plan)[0] === "mo"
              ? `${addPrice.mo[1]}/mo`
              : `${addPrice.yr[1]}/yr`}
          </PlanPrice>
        </AddPlanSubDiv>
        <AddPlanSubDiv id="custom" active3={state.active3 ? 1 : 0}>
          <CheckAndTitle>
            <input
              onChange={(e) => changeHandler(e)}
              style={{ accentColor: "#473dff", cursor: "pointer" }}
              id="customizable"
              type="checkbox"
            />
            <AddPersonelTitle>
              <AddTitle>Customizable Profile</AddTitle>
              <AddExplanation>Custom theme on your profile</AddExplanation>
            </AddPersonelTitle>
          </CheckAndTitle>
          <PlanPrice>
            {" "}
            {Object.keys(plan)[0] === "mo"
              ? `${addPrice.mo[2]}/mo`
              : `${addPrice.yr[2]}/yr`}
          </PlanPrice>
        </AddPlanSubDiv>
      </AddPlan>

      <NextOrPrevios>
        <BackText onClick={() => history.push("/step2")}>Go Back</BackText>
        <Button onClick={() => history.push("/step4")}>Next Step</Button>
      </NextOrPrevios>
    </Container>
  );
}
