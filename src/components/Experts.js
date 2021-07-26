import React from "react";
import "../styles/Experts.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Expert1 from "../images/expert1.jpg";
import Expert2 from "../images/expert2.jpg";
import Expert3 from "../images/expert3.jpg";
import Expert4 from "../images/expert4.png";

const Experts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <>
        <div>
          <div class="container expert-container text-center py-4">
            <h2 class="text-capitalize"> Speak to Our experts </h2>
            <div class="row py-4">
              <div class="col-lg-3 col-md-3 col-sm-12">
                <div class="card text-center expert-card">
                  <div class="card-body">
                    <img
                      src={Expert1}
                      class="img-fluid rounded-circle card-img  "
                      alt="..."
                    />
                    <h5 class="card-title pt-3 fs-6">Vipin Kapoor</h5>
                    <p class="card-text">Astrologer</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12">
                <div class="card text-center expert-card">
                  <div class="card-body">
                    <img
                      src={Expert2}
                      class="img-fluid rounded-circle card-img "
                      alt="..."
                    />
                    <h5 class="card-title pt-3 fs-6">Prashant Kapoor</h5>
                    <p class="card-text">Astrologer</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12">
                <div class="card expert-card">
                  <div class="card-body">
                    <img
                      src={Expert3}
                      class="img-fluid rounded-circle card-img "
                      alt="..."
                    />
                    
                    <h5 class="card-title pt-3 gemologist fs-6">Dr. Satarupa Bhattacharjee</h5>
                    <p class="card-text ">Gemologist</p>
                    
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12">
                <div class="card text-center expert-card">
                  <div class="card-body">
                    <img
                      src={Expert4}
                      class="img-fluid rounded-circle card-img "
                      alt="..."
                    />
                    <h5 class="card-title pt-3 fs-6">Akanksha Srivastava</h5>
                    
                    <p class="card-text">Numerologist</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center py-3">
              <p>
              Get in touch with our experts to avail specified consulting and guidance, be it in Match Making, Bollywood Astrology, Vedic Astrology, Medical Astrology, Career Astrology, Palmistry or Gemology, it is just a mail or call away.
              </p>
            </div>
          </div>
        </div>

        <div>
          
         
        </div>
      </>
    </div>
  );
};

export default Experts;
