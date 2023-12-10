import { useState } from "react";

let nextId = 0;

export default function ResumeList({ budgetAmount, formData }) {
  //   const [name, setName] = useState('');
  const { brand, year, device } = formData;
  const [listCotiz, setListCotiz] = useState([]);

  //   {
  //     id: nextId++,
  //     brand: brand,
  //     year: year,
  //     device: device,
  //     budgetAmount: budgetAmount,
  //   },

  return (
    <>
      <h1>Cortizaciones:</h1>
      {setListCotiz([
        ...listCotiz,
        {
          id: nextId++,
          brand: brand,
          year: year,
          device: device,
          budgetAmount: budgetAmount,
        },
      ])}
      <ul>
        {listCotiz.map((item) => (
          <li key={item.id}>{item.brand}</li>
        ))}
      </ul>
    </>
  );
}
