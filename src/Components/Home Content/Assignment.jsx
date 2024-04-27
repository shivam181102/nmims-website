import React from "react";
import { Card } from "react-bootstrap";

function Assignment() {
  return (
    <div>
      <Card>
        <Card.Body className="d-flex justify-content-between " >
          <div style={{textAlign: "start"}}>
            <p>
              Cost & Management Accounting <strong>SEMESTER 2</strong>
            </p>
            <p style={{ color: "rgb(220, 53, 69)" }} className="mb-0"><b>Not Submitted</b></p>
          </div>
          <div style={{textAlign: "end"}} >
          <div style={{ backgroundColor: "rgb(220, 53, 69)", padding: "5px", color: "white", borderRadius: '50px', display: 'inline-block', width: 'auto', fontWeight:'bold' }}>Pending</div>
<p className="mt-2 mb-0">Due 29-May-2024 23:59</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Assignment;
