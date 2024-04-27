import React from "react";
import { Card } from "react-bootstrap";
const data = [
  { id: 1, subject: "Business Communication", tee: 52, ass: 16, tot: 68 },
  { id: 2, subject: "Financial Accounting", tee: 47, ass: 11, tot: 58 },
  { id: 3, subject: "Marketing Management", tee: 46, ass: 19, tot: 65 },
  {
    id: 4,
    subject: "	Micro Economics & Macro Economics",
    tee: 48,
    ass: 19,
    tot: 67,
  },
  { id: 5, subject: "	Organizational Behavior", tee: 58, ass: 11, tot: 69 },
  { id: 6, subject: "Quantitative Methods - I", tee: 57, ass: 18, tot: 75 },
];
function Results() {
  return (
    <Card style={{  overflowX: 'auto' }}>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">SR ID</th>
            <th scope="col">SUBJECT</th>
            <th scope="col">TEE</th>
            <th scope="col">ASSIGNMENT</th>
            <th scope="col">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              <td scope="row">{data.id}</td>
              <td>{data.subject}</td>
              <td>{data.tee}</td>
              <td>{data.ass}</td>
              <td>{data.tot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default Results;
