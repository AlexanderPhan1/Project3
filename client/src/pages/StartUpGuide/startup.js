import React from "react";

import { Col, Card, Collection, CollectionItem, Icon } from "react-materialize";
import "./startup.css";

const StartUp = () => {
  return (
    <div className="container info">
      <h4 className="center">How to Partner Up with Kawasaki Catering</h4>
      <p>Have a Up-To-Date Food Service Certificate. </p>
          
      <p> Apply for a Food Managers Certificate.</p>

      <p>List of Rent Kitchens in the City of Houston to help you find the perfect kitchen for your requirements. </p>
      

    
      <Collection>
      {/* <Icon tiny>attachment</Icon> */}
        <CollectionItem href="https://www.cityofchicago.org/city/en/depts/cdph/provdrs/healthy_restaurants/svcs/enroll_in_a_foodsanitationcertificationcourse.html">City of Chicago-Food Service Sanitation Certificate</CollectionItem>
        <CollectionItem href="https://www.cityofchicago.org/city/en/depts/bacp/sbc/business_licensing.html">City of Chicago-Shared Kithen User License</CollectionItem>
        <CollectionItem href="https://www.cityofevanston.org/government/departments/health-human-services/preserve/food-service-manager-certification">City of Evanston-Food and Sanitation Certificate</CollectionItem>
        <CollectionItem href="https://www.cityofevanston.org/government/departments/health-human-services/protect/permits-licenses/shared-kitchens">City of Evanston- Shared Kitchen User License</CollectionItem>
        <CollectionItem href="http://chicagosmokekitchen.com/wp-content/uploads/2015/11/Insurance-Requirements-for-Shared-Kitchen.pdf">Sample-Certificate of Insurance</CollectionItem>
        {/* <CollectionItem href="/">Shared Kitchen List</CollectionItem> */}
      </Collection>

<h4>Shared Kitchen List</h4>
      <Collection>
        <CollectionItem href="http://www.culinaryincubator.com/maps.php?state=TX" >Culinary Incubator</CollectionItem>
        <CollectionItem href="https://www.commercialkitchen205.com/" >Commercial Kitchen 205</CollectionItem>
        <CollectionItem href="http://www.commercialkitchenforrent.com/location/texas/">Commercial Kitchen for Rent</CollectionItem>

      </Collection>


      
    </div>
  );
};





export default StartUp;
  /* <Col m={6} s={12}>
        <Card
          //   className="blue-grey darken-1"
          //   textClassName="white-text"
          title="Chefs"
          actions={[<a href="#">This is a link</a>]}
        >
          <Collection header="First Names">
            <CollectionItem>Alvin</CollectionItem>
            <CollectionItem>Alvin</CollectionItem>
            <CollectionItem>Alvin</CollectionItem>
            <CollectionItem>Alvin</CollectionItem>
          </Collection>
        </Card>
      </Col> */

