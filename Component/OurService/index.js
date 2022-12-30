import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import homeloan from "../../assets/png/homeloan.png";
import interior from "../../assets/png/interior.png";
import legalAdvice from "../../assets/png/legalAdvice.png";
import construction from "../../assets/png/contruction.png";
import property from "../../assets/png/property.png";
import style from "./services.module.css";


function Services() {

    const responsive = {
        0: { items: 1 },
        260: { items: 2 },
        510: { items: 3 },
        760: { items: 4},
        1024: { items: 5 },
      };
      const items = [
        <div className={style.item} data-value="1">
       <Image src={homeloan} alt="Home Loan"/>
        <p style={{fontWeight:"600"}}>Home Loan</p>
        </div>,
        <div className={style.item} data-value="2">
     <Image src={interior} alt="Interior"/>
        <p style={{fontWeight:"600"}}>Interior</p>
        </div>,
        <div className={style.item} data-value="3">
      <Image src={legalAdvice} alt="Legal Advice"/>
        <p style={{fontWeight:"600"}}>Legal Advice</p>
        </div>,
        <div className={style.item} data-value="4">
        <Image src={construction} alt="construction"/>
        <p style={{fontWeight:"600"}}>Construction</p>
        </div>,
        <div className={style.item} data-value="5">
         <Image src={property} alt="Property Management"/>
        <p style={{fontWeight:"600"}}>Property Management</p>
        </div>,
      ];

    return (
        <div className={style.services}>
        <h1 className={style.servicestext}>Explore Our Services</h1>
        <p className={style.subservices}>
         Find our best serviceswhich are available to you{" "}
        </p>
        <AliceCarousel
          disableButtonsControls={true}
          disableDotsControls={true}
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
        <div>
        </div>
      </div>
    )
  }
  
  export default Services;

