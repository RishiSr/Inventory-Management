import React, { useState } from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";
import { BsArrowUpCircle } from "react-icons/bs";

const Home = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className=" home ">

      {/* HERO SECTION */}
      {/* <section className="container hero">
        <div className="hero-text">
          <h2>Inventory {"&"} Stock Management Solution</h2>
          <p>
            Inventory system to control and manage proucts in the warehouse in
            real timeand integrated to make it easier to develop your business.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Free Trial 1 Month</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="14K" text="Brand Owners" />
            <NumberText num="23K" text="Active Users" />
            <NumberText num="500+" text="Partners" />
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
       */}
      <div className={`  home1   ${open ? " bounce " : " normal "}  `} onClick={() => setOpen(!open)}  >
        <p className="para" >
          Inventory Management
        </p>
        <p className="para " style={{
          fontSize: "4rem"
        }} >
          MERN Stack Project
        </p>
        <div className=" scroll-button" >
          <BsArrowUpCircle className={`button-arrow  ${open && "rotate-180"} `} />
          <p className="scroll-up-text"  >
            Click to scroll {open ? "down" : "up"}


          </p>
          <BsArrowUpCircle className={`button-arrow ${open && "rotate-180"} `} />
        </div>

      </div>
      <div style={{
        marginBottom: "18rem"
      }}  >
        {/* <div className="logo">
          <RiProductHuntLine size={35} />
        </div> */}

        <ul className="--flex-center  " style={{
          gap: '2rem'
        }}>
          <ShowOnLogout>
            <li className="" style={{
              width: "20rem"

            }} >
              <Link className=" --color-white --btn --btn-primary  --center-all" to="/register"><h4 className=" --color-white">Register
              </h4></Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li className=" " style={{
              width: "20rem"
            }}>
              <Link className="--btn --btn-primary --center-all" to="/login"><h4 className=" --color-white" >
                Login
              </h4></Link>

            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>

              <Link className="--btn --btn-primary --center-all" to="/dashboard"><h4 className=" --color-white" >
                Dashboard
              </h4></Link>

            </li>
          </ShowOnLogin>
        </ul>
      </div>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;
