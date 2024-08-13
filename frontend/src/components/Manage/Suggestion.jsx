import React from 'react'
import './Suggestion.css';
import Carousel1 from './Carousel1'

const Suggestion = () => {
    const slides = [
        "https://www.pbfingers.com/wp-content/uploads/2017/07/Breakfast-Lunch-Dinner-and-Snack-Ideas-2.jpg",
        "https://img.fooddarzee.com/eyJidWNrZXQiOiJmb29kZGFyemVlLWltYWdlcyIsImtleSI6IklNR184MDUzX2UwZjVjODRiNTEuSlBFRyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAwLCJoZWlnaHQiOjU3MCwiZml0IjoiaW5zaWRlIn19fQ==",
        "https://img.fooddarzee.com/eyJidWNrZXQiOiJmb29kZGFyemVlLWltYWdlcyIsImtleSI6IklNR184MzkyX2JlODE0NWJkZWMuSlBFRyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAwLCJoZWlnaHQiOjU3MCwiZml0IjoiaW5zaWRlIn19fQ==",
        "https://img.fooddarzee.com/eyJidWNrZXQiOiJmb29kZGFyemVlLWltYWdlcyIsImtleSI6IklNR184MDU0Xzg5YThiYzFjYmEuSlBFRyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAwLCJoZWlnaHQiOjU3MCwiZml0IjoiaW5zaWRlIn19fQ=="
    ]
  return (
    <div className="textwithslider_wrapper d-flex align-items-center justify-content-between">
         <div className="textwithslider_common textwithslider_left">
        <header className="textwithslider_common_wrapper d-flex flex-column flex-nowrap">
          <h2 className="title_subheader1">2 Weeks 
            <br/>
            transformation <br/>program </h2>
        </header>
        <div className="textwithslider_common_body d-flex flex-column">
          <p><strong>Personal Nutritionist:</strong> Begin your journey with a one-on-one consultation with our expert nutritionists. We'll tailor your meal plans specifically for weight loss, addressing your unique needs and goals.</p>
          <p><strong>Delicious & Nutritious Meals:</strong> Indulge in gourmet dishes crafted by our chefs for both taste and health. From hearty breakfasts to satisfying dinners, each meal is a flavourful blend of nutrition and delight.</p>
          <p><strong>Daily Support & Accountability:</strong>Our dedicated nutritionists keep you on track with daily health check-ins. Get the motivation and guidance you need to stay committed and inspired throughout your transformation.</p>
          <p><strong>Convenient Doorstep Delivery:</strong> Skip the grocery trips and meal prep hassle. We deliver freshly prepared meals straight to your door.</p>
          <a className="know_more" href="marketing/mumbai">Know More</a>
        </div>
        <footer className="mt-5">
          <button className="btn btn-lg btn_darzeebg" tabIndex="0">
            <span>Know More</span>
          </button>
        </footer>
      </div>
      <div className="carousel-container" style={{ flex: '1', marginLeft: '20px' }}>
        <Carousel1 autoSlide={true} autoSlideInterval={1000}>
          {slides.map((s, index) => (
            <img key={index} src={s} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          ))}
        </Carousel1>
      </div>
    </div>
  )
}

export default Suggestion