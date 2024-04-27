import React from "react";
import { Card, ListGroup } from "react-bootstrap";
let data = [
  "1 Cost & Management Accounting",
  "2 Human Resource Management",
  "3 Strategic Management",
  "4 Business Analytics",
  "5 Legal Aspect of Business",
];
function Courses() {
  return (
    <Card style={{ width: "100%" }}>
      <ListGroup variant="flush">
        {data.map((data,index) => (
          <ListGroup.Item key={index}>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">{data}</p>
              <i className="bi bi-camera-video-fill"></i>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default Courses;
