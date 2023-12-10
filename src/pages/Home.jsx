import React, { useState } from "react";
import styled from "@emotion/styled";
import Form from "../components/Form";
import Resume from "../components/Resume";
import Result from "../components/Result";

const MainContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
const FormContainer = styled.div`
  padding: 3rem;
`;
export default function Home() {
  const [cargado, setCargado] = useState(false);
  const [budgetObj, setBudgetObj] = useState({
    budgetAmount: 0,
    formData: {
      brand: "",
      year: "",
      device: "",
    },
  });
  const { formData, budgetAmount } = budgetObj;
  
  return (
    <MainContainer>
      <FormContainer>
        <Form setBudgetObj={setBudgetObj} setCargado={setCargado} />
        <Resume formData={formData} />
        <Result budgetAmount={budgetAmount} formData={formData} setCargado={setCargado} cargado={cargado}/>
      </FormContainer>
    </MainContainer>
  );
}
