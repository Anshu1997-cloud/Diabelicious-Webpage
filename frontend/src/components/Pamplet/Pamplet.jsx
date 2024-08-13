// import React from 'react';
// import './Pamplet.css';
// import Carousel from './Carousel';

// const Pamplet = () => {
//   const slides = [
//      "https://png.pngtree.com/png-clipart/20231020/original/pngtree-healthy-food-and-keto-diet-png-image_13373573.png",
//      "https://www.pngitem.com/pimgs/m/281-2811947_balanced-diet-hd-png-download.png ",
//      "https://png.pngtree.com/png-vector/20240129/ourlarge/pngtree-keto-diet-food-png-image_11563318.png",
//      "https://png.pngtree.com/png-vector/20210913/ourlarge/pngtree-high-protein-food-png-image_3920628.png",
//      "https://png.pngtree.com/png-vector/20210913/ourlarge/pngtree-high-protein-protein-food-png-image_3920627.png",
//   ];

//   return (
//     <div className="textwithslider_wrapper d-flex align-items-center justify-content-between">
//       <div className="textwithslider_common textwithslider_left">
//         <header className="textwithslider_common_wrapper d-flex flex-column flex-nowrap">
//           <h2 className="title_subheader">Diabelicious</h2>
//         </header>
//         <div className="textwithslider_common_body d-flex flex-column">
//           <p><strong>FOOD:</strong> We provide breakfast, lunch, snack, and dinner. We provide healthier alternatives of your favorite dishes and do not repeat a dish for 4 weeks.</p>
//           <p><strong>NUTRITION:</strong> We assign you a personal nutritionist who assesses your lifestyle, health requirements, eating habits, and nutritional needs to help you achieve your weight loss goal.</p>
//           <p><strong>MEAL DELIVERY:</strong> We deliver meals for the Ketogenic, Low Carb High Protein, Vegan, and Balanced Diet.</p>
//           <p><strong>FLEXIBILITY:</strong> We provide flexibility in terms of pausing or canceling your meals, food, and delivery preferences subject to our guidelines.</p>
//           <a className="know_more" href="marketing/mumbai">Know More</a>
//         </div>
//         <footer className="mt-5">
//           <button className="btn btn-lg btn_darzeebg" tabIndex="0">
//             <span>Get Started</span>
//           </button>
//         </footer>
//       </div>
//       <div className="carousel-container" style={{ flex: '1', marginLeft: '20px' }}>
//         <Carousel autoSlide={true} autoSlideInterval={1000}>
//           {slides.map((s, index) => (
//             <img key={index} src={s} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Pamplet;


import React from 'react';
import './Pamplet.css';

const Pamplet = () => {
  const cards = [
    {
      imgSrc: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      altText: 'Doctor Consultations',
      heading: 'Doctor Consultations',
      text: 'Receive personalized medical advice from experienced healthcare professionals who truly care about your wellbeing.',
    },
    {
      imgSrc: 'https://images.pexels.com/photos/8844378/pexels-photo-8844378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      altText: 'Nutritionist Consultations',
      heading: 'Nutritionist Consultations',
      text: 'Work with our expert nutritionists to create dietary plans tailored specifically for your health needs.',
    },
    {
      imgSrc: 'https://images.pexels.com/photos/25748212/pexels-photo-25748212/free-photo-of-a-plate-with-a-salad-and-an-omelette.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      altText: 'Healthy Meal Delivery',
      heading: 'Healthy Meal Delivery',
      text: 'Enjoy delicious, nutritious meals crafted by our chefs and delivered right to your door, designed to support your health goals.',
    },
    {
      imgSrc: 'https://images.pexels.com/photos/4467986/pexels-photo-4467986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      altText: 'Smart LifeStyle Tracking',
      heading: 'Smart LifeStyle Tracking',
      text: 'Our innovative technology helps you stay on track with gentle reminders and easy-to-use tools.',
      additionalHeading: 'Smart Ring',
      additionalText: 'Our smart ring provides subtle reminders for meals, exercise, and medication, ensuring you stay on course without the need for constant app interactions.',
    },
  ];

  return (
    <div className="textwithslider_wrapper d-flex align-items-center justify-content-between">
   
    <section className="container">
      <div className=" textwithslider_common textwithslider_left grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="img-box">
              <img src={card.imgSrc} alt={card.altText} />
            </div>
            <div className="card-content">
              <h1 className="card-heading">{card.heading}</h1>
              <p className="card-text">{card.text}</p>
              {card.additionalHeading && (
                <>
                  <h2 className="card-heading">{card.additionalHeading}</h2>
                  <p className="card-text">{card.additionalText}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
    
  );
};



export default Pamplet;