import React from "react";
import { Carousel } from "react-materialize";
import "./carousel.css";

// export default () => (
// <Carousel options={{ fullWidth: true }} images={[
//   '/Users/alphonsotate/Desktop/Classwork/ChefNtly/client/src/images/Chefinitly.jpg',
//   '/Users/alphonsotate/Desktop/Classwork/ChefNtly/client/src/images/chef.png',
//   '/Users/alphonsotate/Desktop/Classwork/ChefNtly/client/src/images/IMG_0295.PNG',
//   'https://lorempixel.com/800/400/food/4',
//   'https://lorempixel.com/800/400/food/5'
// ]} />

// )

export default () => (
  <Carousel
    className="con"
    fixedItem={<button className="btn orange">SIGN UP</button>}
    options={{ fullWidth: true }}
    images={["https://s3-media2.fl.yelpcdn.com/bphoto/xM0Rj7-zE7H7QA4zIwYhHg/o.jpg"]}
  >
    <div className="container">
      <h1 className=" oneH  center-align">Houston's Talented Chefs</h1>
      <h1 className=" secH center-align">Join For a Better Taste</h1>
    </div>
  </Carousel>
);
