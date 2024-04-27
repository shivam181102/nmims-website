import React from "react";
// import { Button } from 'react-bootstrap'
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import "./Login.model.css";
import NavbarComp from "./NavbarComp";
import Footer from "./Footer";
function Login({setisLogin}) {
  return (
    <>
    <NavbarComp/>
    <div
        className="redbar d-flex justify-content-between align-items-center"
        style={{
          background: "rgb(220,53,69)",
          paddingInline: "50px",
          fontSize: "20px",
          color: "white",
        //   position:'fixed'
        }}
      >
        <div>
          <h6>
            Student Zone <i class="bi bi-chevron-double-right"></i> LOGIN
          </h6>
        </div>
        <div>
          <i class="bi bi-facebook"></i> <i class="bi bi-twitter"></i>
        </div>
      </div>
    <div className="m-3 ">
      <div className={`p-5 main`}>
      <div className="text-wrap">
  <p>Welcome to NMIMS Global Access - School for Continuing Education (NGASCE)! You are about to log in to the world of Learning at NGASCE, a world made possible due to a combination of 30 years of legacy of best in class education and state of the art learning technology!</p>
  <p>As you log in using the credentials given to you by the University, please take time to go through your profile and update your contact information. The details mentioned there are your details as per the current University Student Database. In case there is any change or any error in these details, it will hamper the University to stay in touch with you.</p>
  <p>With this Portal, we hope to provide you all the support you need during your enrolment with the Program offered by the University. It will be our endeavour to keep improving your experience with this Portal as we go along.</p>
  <p>Happy Learning!</p>
  <p>Team NGASCE</p>
</div>

        <div className="">
          <Container component="main" maxWidth="lg">
            <Paper
              elevation={3}
              sx={{
                padding: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // backgroundColor:'rgb(51,51,51)',
                color:"white"
              }}
            >
              {/* <LockOutlinedIcon sx={{ fontSize: "large" }} /> */}
              <Typography variant="h5" sx={{ marginTop: 2,color:"rgb(220, 53, 69)" }}>
                Login
              </Typography>
              <TextField
                label="Username"
                margin="normal"
                fullWidth
                name="uName"
                InputProps={{ sx: { color: "white",border:"white" } }}
                sx={{color:"white",border:'white'}}
                

              />
              <TextField
                label="Password"
                type="Password"
                margin="normal"
                fullWidth
                name="password"
                InputProps={{ sx: { color: "white" } }}

              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                id="loginBtn"
                sx={{
                  marginTop: 2,
                  background: "rgb(220, 53, 69)",
                  color: "white",
                }}
                onClick={()=>setisLogin(true)}
              >
                Login
              </Button>
              <div className="">
              <Button fullWidth sx={{ marginTop: 0.5 }}>
              Forgot Password?
              </Button>
              <Button fullWidth sx={{ marginTop: 0.5 }}>
              Not a student?
              <br />
              Get started here.
              </Button>
              </div>
            </Paper>
          </Container>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Login;
