import styled from "styled-components";

export const FinalPrice = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f0f6ff;
  width: 100%;
  border-radius: 8px;
  @media only screen and (max-width: 480px) {
    height: 100vh;
  }
`;

export const AddSelectPlan = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PlanNameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 6px;
`;

export const NameAndChange = styled.span`
  color: #02295a;
  font-size: 15px;
`;

export const PlanPrice = styled(NameAndChange)``;

export const Hr = styled.hr`
  border-top: 1px solid #d6d9e6;
  width: 100%;
  margin-top: 10px;
`;

export const AddOdd = styled.span`
  color: #d6d9e6;
  font-size: 12px;
`;

export const TotalPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
  @media only screen and (max-width: 480px) {
    padding: 30px 25px;
  }
`;
