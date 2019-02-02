import React from "react";

import { Col, Card, Collection, CollectionItem, Icon } from "react-materialize";
import "./startup.css";

const StartUp = () => {
  return (
    <div className="container info">
      <h4 className="center">How to Partner Up with Kawasaki Catering</h4>
      <p>Have a Up-To-Date Food Service Certificate.</p>
          
      <p>Apply for a Food Managers Certificate.</p>

      <p>List of Rent Kitchens in the City of Houston to help you find the perfect kitchen for your requirements. </p>
      

    
      <Collection>
      {/* <Icon tiny>attachment</Icon> */}
        <CollectionItem href="https://www.dshs.texas.gov/food-managers/certification.aspx#online">City of Houston-Food Manager Class</CollectionItem>
        <CollectionItem href="https://www.dshs.texas.gov/food-handlers/training/online.aspx">City of Houston-Food Handler Clase</CollectionItem>
        <CollectionItem href="https://www.360training.com/wcsstore/Megasite/images/360training/application-screenshots/full-image/cloud-storage-for-certificates-f.jpg">Sample-Certificate of Insurance</CollectionItem>
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


