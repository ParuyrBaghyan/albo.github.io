import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { BsTelephone } from "react-icons/bs";
import { CiGlobe, CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ContactUs() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 40.20234, lng: 44.50871 }), []);
  return (
    <div className="ContactUs">
      <div className="about-container-picture">
        <h2>Կապ</h2>
      </div>
      <div className="maps">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
          >
            <Marker
              position={{ lat: 40.20234, lng: 44.50871 }}
              icon={CiLocationOn}
            />
          </GoogleMap>
        )}
      </div>
      <div className="contact">
        <div className="contact-info">
          <div className="contactInfoWithIcon">
            <BsTelephone />
            <span>+37498888888</span>
          </div>
          <div className="contactInfoWithIcon">
            <CiGlobe />
            <p>
              <span>info@albo.am</span> <br />
              <span>albo.am</span>
            </p>
          </div>
          <div className="contactInfoWithIcon">
            <CiLocationOn className="location-icon" />
            <span>Րաֆֆի 19, Երևան, Հայաստան</span>
          </div>
          <h2>Հետևեք մեզ</h2>
          <div className="contact-social">
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Կապ մեզ հետ</h2>
          <form>
            <div className="first-row">
              <input type="text" placeholder="Անուն*" />
              <input type="email" placeholder=" Էլ․ Հասցեֆ*" />
            </div>
            <textarea
              name="message"
              placeholder="Ձեր հաղորդագրությունը*"
              spellcheck="false"
            ></textarea>
            <button>Ուղարկել</button>
          </form>
        </div>
      </div>
    </div>
  );
}
