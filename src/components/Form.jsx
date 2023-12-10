import React, { useState } from "react";
import styled from "@emotion/styled";
import getFinalBudget from "../helper";
import Section from "./Section";
import "../assets/styles/form.css";
//import { ClassNames } from '@emotion/react'

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Label = styled.label`
  flex: 0 0 100px;
  text-align: left;
`;

const Select = styled.select`
  display: block;
  width: 60%;
  padding: 0.6rem;
  border: 1px solid #1a1a1a6e;
  -webkit-appearance: none;
`;

const Radio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #1a1a1a;
  color: white;
  width: 30%;
  padding: 0.7rem;
  text-transform: uppercase;
  font-weight: 600;
  border: black;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f90400;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
const Error = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 1rem;
  text-align: center;
  margin-top: 20px;
`;
const Form = ({ setBudgetObj, setCargado }) => {
  const [formData, setFormData] = useState({
    brand: "",
    year: "",
    device: "",
  });

  const [error, setError] = useState(false);

  const { brand, year, device } = formData;

  const fieldHandle = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (brand.trim() === "" || year.trim() === "" || device.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    const budgetAmount = parseFloat(getFinalBudget(2000, brand, year, device));
    setBudgetObj({
      formData,
      budgetAmount,
    });
    setCargado(false);
    //GUARDAR EN ACTUAL STORAGE

    setFormData({
      brand: "",
      year: "",
      device: "",
    });
  };

  return (
    <Section
      titulo="Seguro de Computadora y Celular"
      descripcion="Asegurá tu Computadora o Celular frente a robo, hurto, incendio y daños accidentales."
    >
      <form className="myForm" onSubmit={submitForm}>
        <Field>
          {/* <Label>Dispositivo</Label> */}
          <Radio
            type="radio"
            name="device"
            value="celular"
            checked={device === "celular"}
            onChange={fieldHandle}
          />
          Celular
          <Radio
            type="radio"
            name="device"
            value="computadora"
            checked={device === "computadora"}
            onChange={fieldHandle}
          />
          Computadora
        </Field>

        <Field>
          <Label htmlFor="brand">Marca:</Label>
          <Select name="brand" value={brand} onChange={fieldHandle}>
            <option value="">-- Seleccione --</option>
            <option value="apple">Apple</option>
            <option value="samsung">Samsung</option>
            <option value="huawei">Huawei</option>
            <option value="lenovo">Lenovo</option>
            <option value="noblex">Noblex</option>
            <option value="lg">LG</option>
            <option value="bgh">BGH</option>
          </Select>
        </Field>

        <Field>
          <Label htmlFor="year">Año:</Label>
          <Select name="year" value={year} onChange={fieldHandle}>
            <option value="">-- Seleccione --</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
          </Select>
        </Field>

        <Button type="submit">Cotizar</Button>

        {error ? <Error>Completar los campos del formulario.</Error> : null}
      </form>
    </Section>
  );
};

export default Form;
