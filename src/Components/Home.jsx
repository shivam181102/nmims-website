import React from 'react'
import './Home.model.css'
import profileimg from '../Images/1.jpg'
import CollapseComp from './Home Content/CollapseComp'
import { Col, Row } from 'react-bootstrap'
import AcadamicCard from './Home Content/AcadamicCard'
import Courses from './Home Content/Courses'
import Rank from './Home Content/Rank'
import Assignment from './Home Content/Assignment'
import Results from './Home Content/Results'
function Home() {
  return (
    <div>
        <div className="profile p-3 d-flex flex-wrap">
            <div className="profile-img ">
                <img src={profileimg} alt="xyz" />
            </div>
            <div>
                <h1 style={{textAlign:"start", marginInline:"10px"}}>PRANIT SHIRKE</h1>
                <div className="profile-details d-flex align-items-center flex-wrap ">
                    
                        <li>pranit.shirke.ext@nmims.edu</li>
                        <span></span>
                        <li>1234567890</li>
                        <span></span>
                        <li>MBA (F)</li>
                        <span></span>
                        <li>77777771168</li>
                        <span></span>
                        <li>Validity End: 31-Dec-2025</li>
                    
                </div>
            </div>
        </div>
        <Row className="mb-3">
        <Col xs={12}>
          <CollapseComp
            title="ACADEMIC CALENDAR"
            subtitle="View Scheduled Sessions"
            component={<AcadamicCard />}
          />
        </Col>
      </Row>

      {/* Second Row */}
      <Row className="mb-3">
        <Col xs={12} lg={6}>
          <CollapseComp
            title="ONGOING COURSES"
            subtitle="Courses"
            component={<Courses />}
          />
        </Col>
        <Col xs={12} lg={6}>
          <CollapseComp
            title="ASSIGNMENTS"
            subtitle="Assignments"
            component={<Assignment />}
          />
        </Col>
      </Row>

      {/* Third Row */}
      <Row className="mb-3">
        <Col xs={12} lg={6}>
          <CollapseComp
            title="RESULT"
            subtitle="View Result"
            component={<Results />}
          />
        </Col>
        <Col xs={12} lg={6}>
          <CollapseComp
            title="RANK"
            subtitle="Rank List"
            component={<Rank />}
          />
        </Col>
      </Row>
    </div>
  )
}

export default Home