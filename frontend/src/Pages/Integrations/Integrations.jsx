import React from "react";
import "../Home/home.css";
import { FcGoogle } from "react-icons/fc";
import ButtonComp from "../Home/ButtonComp";
import AppGrid from "./AppGrid";
import TopSection from "./TopSection";
import TrackSection from "./TrackSection";
import Footer from "../Footer/Footer";
import Example from "../Navbar/FinalNavbar";

const Integrations = () => {
  document.title = "Time Tracking Integrations - Tracking Time";
  return (
    <>
      <Example />
      <div className=" lg:ml-44 lg:w-3/4 md:text-center sm:text-center md:w-full m-auto sm:w-full ">
        <TopSection />
        <AppGrid />
        <TrackSection />
        <div className="getStarted__container">
          <img
            style={{
              width: "77px",
              height: "71px",
              fill: "#f6f8f9",
              zIndex: "1",
            }}
            src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/footer/tt.svg"
            alt="sdf"
          />
          <h1>Get Started</h1>
          <h2>
            Sign up today and join thousands of people around the world using
            TrackingTime to make the most of their time.
          </h2>

          <div className="header__button">
            <ButtonComp
              refer="/signup"
              words="Your Work Email"
              s="265px"
              bg="white"
              bord="0.5px solid black"
            />
            <ButtonComp
              refer="/login"
              bg="#ed565a"
              words="Start For Free"
              s="210px"
              clr="white"
              hov="#646cc7"
            />
          </div>

          <div className="Signin__google">
            <i className="Signin__google-icon">
              <FcGoogle />
            </i>
            <a href="#" className="Signin__google-link">
              Sign in with Google
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Integrations;
