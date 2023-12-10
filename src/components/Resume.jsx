import React from "react";
import styled from "@emotion/styled";

const ResumeWrap = styled.div`
  border: none;
  color: black;
  padding: 0.3rem;
  background-color: #d3d3d369;
`;

const ResumeText = styled.p`
  text-transform: capitalize;
`;

// const Error = styled.div`
//   color: #721c24;
//   background-color: #f8d7da;
//   border-color: #f5c6cb;
//   padding: 1rem;
//   text-align: center;
//   margin-top: 20px;
// `;

const Resume = ({ formData }) => {
  const { brand, year, device } = formData;

  if (brand.trim() === "" || year.trim() === "" || device.trim() === "")
    return null;
    //return (<Error>{new Date().getTime()}</Error>);

  return (
    <>
      <ResumeWrap>
        <h2>Cotización realizada:</h2>
        <ResumeText>dispositivo: {device}</ResumeText>
        <ResumeText>marca: {brand}</ResumeText>
        <ResumeText>año: {year}</ResumeText>
      </ResumeWrap>
    </>
  );
};

export default Resume;
