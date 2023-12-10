import styled from "@emotion/styled";
import "../assets/styles/cardHistorial.css";
import { useState } from "react";

const Warning = styled.div`
  color: black; // #e4ebee;
`;

const AmountWrap = styled.div`
  width: 100%;
  color: #ffffff;
  background-color: #f9040088;
  padding: 1rem;
  text-align: center;
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
`;

const ResetButton = styled.button`
  background-color: #e4ebee;
  color: black;
  font-weight: 500;
  border: 1px solid #1a1a1a6e;
  margin-top: 1em;
  transition: background-color 0.3s ease;
  display: inline-block;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const ResumeText = styled.p`
  text-transform: capitalize;
  margin-top: -0.6em;
  font-size: 16px;
`;

let nextId = 0;
const Result = ({ budgetAmount, formData, setCargado, cargado }) => {
  const [nameButtonHistory, setNameButtonHistory] =
    useState("Agregar a la lista");
  const { brand, year, device } = formData;
  const [lista, setlista] = useState([]);
  //const [cargado, setCargado] = useState(false);

  //////////////////////////////////
  const onClickButton = () => {
    if (!cargado) {
      setCargado(true);
      const ahora = new Date(); // Obtener la fecha y hora actual
      setlista([
        ...lista,
        {
          id: ++nextId,
          dateTime: ahora,
          brand: brand,
          year: year,
          device: device,
          budgetAmount: budgetAmount,
        },
      ]);
      setNameButtonHistory(
        // nextId.toString()
        `Agregar a la lista: (Actuales: ${lista.length + 1} )`
      );
    }
  };

  //////////////////////////////////
  const formatedPrice = (price) => {
    const importeTotalParcial = price.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
    return importeTotalParcial;
  };

  //////////////////////////////////
  const formatedTime1 = (ahora) => {
    const formato = new Intl.DateTimeFormat("es", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const horaFormateada = formato.format(ahora);
    const myReturn = horaFormateada;
    return myReturn;
  };

  return budgetAmount <= 0 ? (
    false ? (
      <Warning>Elige marca, año y tipo de seguro</Warning>
    ) : null
  ) : (
    <div>
      <AmountWrap>Precio estimado: $ {budgetAmount}</AmountWrap>
      <ResetButton onClick={onClickButton}>{nameButtonHistory}</ResetButton>
      <ul>
        <div className="containerHistorial">
          {lista.map((item, index) => (
            <li key={item.id}>
              <div className="cardHistorial">
                <ResumeText>
                  <strong className="cotizacion">Cotización:</strong> {item.id}
                </ResumeText>
                <hr />
                <ResumeText>
                  <strong>Horario:</strong> {formatedTime1(item.dateTime)}
                </ResumeText>
                <ResumeText>
                  <strong>Dispositivo:</strong> {item.device}
                </ResumeText>
                <ResumeText>
                  <strong>Marca:</strong> {item.brand}
                </ResumeText>
                <ResumeText>
                  <strong>Año:</strong> {item.year}
                </ResumeText>
                <ResumeText>
                  <strong>Precio:</strong> {formatedPrice(item.budgetAmount)}
                </ResumeText>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};
export default Result;