import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import AcadamicCard from "./AcadamicCard";
import { Card, Container } from "react-bootstrap";
import Courses from "./Courses";
import Assignment from "./Assignment";
import Results from "./Results";
import Rank from "./Rank";

function CollapseComp({title,subtitle,component}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between mx-3 align-items-center ">
        <h4>{title}</h4>

        <p className="mb-0">See all {!open?<i
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="bi bi-plus-square-fill"
        ></i>:<i class="bi bi-file-minus-fill" onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}></i>}</p>
      </div>
      <Collapse in={!open} onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}>
        <div id="example-collapse-text" >
          
        
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Text>{subtitle}</Card.Text>
          </Card.Body>
        </Card>
        </div>
      </Collapse>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {component}
        </div>
      </Collapse>
    </div>
  );
}

export default CollapseComp;
