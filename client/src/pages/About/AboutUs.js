import React from "react";
import { Col, Card } from "react-materialize";

const AboutUs = () => {
  return (
    <div className="container signups">
      <Col m={6} s={12}>
        <Card
          className="orange lighten-2"
          // textClassName="white-text"
          title="About Us"
          // actions={[<a href="/">Contact Us</a>]}
        >
          Kawasaki Catering provides independent chefs a service to connect with customers that are looking for home-cooked prepared meals to-go. As well as providing chefs with a platform to cater to any number of individuals. 
         A chef can decide whether they’re making a specialty dinner of the day or spending time catering for an event. Customers will be able to specify their requests a specific chef and/or cuisune.

        </Card>
      </Col>
    </div>
  );
};



export default AboutUs;
