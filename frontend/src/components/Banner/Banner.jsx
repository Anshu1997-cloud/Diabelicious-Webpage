// import React from 'react'
// import './Banner.css'
// import Carousel from './Carousel';

// const Banner = () => {
//     const slides = [
//        "https://img.fooddarzee.com/eyJidWNrZXQiOiJmb29kZGFyemVlLWltYWdlcyIsImtleSI6IjExMDB4NjAwX0FobWFkX2ZpZ3VyXzVhYzIyYTU5NmUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjpudWxsLCJoZWlnaHQiOm51bGwsImZpdCI6bnVsbH19fQ==",
//        "https://img.fooddarzee.com/eyJidWNrZXQiOiJmb29kZGFyemVlLWltYWdlcyIsImtleSI6ImRpYWJldGVzXzFfMV9mMDRkZDY3NWQyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6bnVsbCwiaGVpZ2h0IjpudWxsLCJmaXQiOm51bGx9fX0=",
//        "https://img.fooddarzee.com/eyJidWNrZXQiOiJmb29kZGFyemVlLWltYWdlcyIsImtleSI6IkhJV19EQUlCRVRFU18wMl8yX2I2M2ZmZDU5ZjAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjpudWxsLCJoZWlnaHQiOm51bGwsImZpdCI6bnVsbH19fQ=="
//      ];

//   return (
//     <div className="textwithslider_wrapper d-flex align-items-center justify-content-between">
//     <div className="textwithslider_common textwithslider_left">
//       <header className="textwithslider_common_wrapper d-flex flex-column flex-nowrap">
//         <h2 className="title_subheader">Diabetes <br/>Management<br/>Program</h2>
//         <h3 className="textwithslider_common_body d-flex flex-column">Indian is widely regarded as the diabetes capital of the world. We have taken up the challenge to change this.</h3>
//       </header>
//       <div className="textwithslider_common_body d-flex flex-column">
//         <p><strong>Nutritionist Consultation:</strong> Our nutritionist will conduct a thorough assessment, understanding your needs and limitations. Certain ingredients that might be harmful to you will be identified.Our team will constantly track your progress and make changes to your meals basis your feedback. For eg. if a certain ingredient or dish causes a glucose spike for you, it will be removed going forward.</p>
//         <p><strong>Meal Delivery:</strong> Our Meals are calorie counted, each ingredient measured and added into the meal. The nutritionist will ask you to send us your glucose level after meal consumption and accordingly after the plan.We will be giving you healthier versions of your favourite dishes. The aim would be to make this journey as simple as possible for you. The food will taste great and will still keep your levels in check </p>
//         <p><strong>Lifestyle Guidance:</strong>Our dedicated team will advise and guide you along your journey to make the necessary lifestyle changes to tackle diabetes. We will advise you on workout plans and sustainable food fillers as well </p>
//         <a className="know_more" href="marketing/mumbai">Know More</a>
//       </div>
//       <footer className="mt-5">
//         <button className="btn btn-lg btn_darzeebg" tabIndex="0">
//           <span>Get Started</span>
//         </button>
//       </footer>
//     </div>
//     <div className="carousel-container" style={{ flex: '1', marginLeft: '20px' }}>
//       <Carousel autoSlide={true} autoSlideInterval={1000}>
//         {slides.map((s, index) => (
//           <img key={index} src={s} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
//         ))}
//       </Carousel>
//     </div>
//   </div>
//   )
// }

// export default Banner
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./Banner.css"; // Import the CSS file

const Banner = () => {
  useEffect(() => {
    new Swiper(".tranding-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="textwithslider_wrapper d-flex align-items-center justify-content-between">
      
    <section id="tranding">
      <div className="container">
        <h3 className="text-center section-subheading">- Pricing -</h3>
        <h1 className="text-center section-heading">Subscription Model</h1>
      </div>
      <div className="container">
        <div className="swiper tranding-slider">
          <div className="swiper-wrapper">
            {/* Slide-start */}
            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img
                  src="https://assets.cntraveller.in/photos/60ba2767e1b212c19a8181e1/16:9/w_960,c_limit/Meals-by-Chefkraft.jpg"
                  alt="Tranding"
                />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">
                  Rs. 15,000 per month, including consultations and meal
                  delivery
                </h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">Monthly Subscription</h2>
                  <h3 className="food-rating">
                    <span>4.5</span>
                    <div className="rating">
                    <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            {/* Additional slides */}
            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img
                  src="https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=DWZGM8lBb5Bun7cbxhKT1ruVxRC_itvFzA9jxgoA0N8="
                  alt="Tranding"
                />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">
                  Rs. 5,00 per session, including Doctor Consultation
                </h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">Individual Services</h2>
                  <h3 className="food-rating">
                    <span>4.9</span>
                    <div className="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img
                  src="https://media.istockphoto.com/id/1160789077/photo/nutritionist-giving-consultation-to-patient-with-healthy-fruit-and-vegetable-right-nutrition.jpg?s=612x612&w=0&k=20&c=t5LNRmwc-BKcV-jmOGiCZXo5DWjBZKMe0OumH4WdW7I="
                  alt="Tranding"
                />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">
                  Rs. 5,00 per session, including Nutritionist Consultation
                </h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">Individual Services</h2>
                  <h3 className="food-rating">
                    <span>5</span>
                    <div className="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/55ce1e48e4b06614877a8bfb/1623187604879-XETCJ01W5UMEPDJW3YWD/IMG_0046.jpg"
                  alt="Tranding"
                />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">
                  Rs. 2,00 per meal, including meal Delivery
                </h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">Individual Services</h2>
                  <h3 className="food-rating">
                    <span>4.9</span>
                    <div className="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </section>
    </div>
   
  );
};

export default Banner