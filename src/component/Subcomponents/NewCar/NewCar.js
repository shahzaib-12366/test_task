import React from "react";
import "./NewCar.css"; 
import Car from "../../assets/car.png"
const NewCar = () => {
  return (
    <>
      <div className="NewCarContainerMain">
        <div className="NewCarContainer">
          <div className="NewCarContainerInner">
            <div className="NewCarContainerLeftImg">
              <img src={Car} title="thhdj" />
            </div>
            <div className="NewCarContainerRight">
            <div className="NewCarContainerRightDateViewFeature">
                <div className="NewCarContainerRightDate">Posted on October 6th 2021</div>
                <div className="NewCarContainerRightView">563 views</div>
                
              </div>
              <div className="NewCarContainerRightFeature">FEATURED</div>
           
              <div className="NewCarText">
                <h4>Should I Buy a New Car or Lease a New Car in 2021?</h4>
              </div>
              <div className="NewCarPara">
                <p>
                  We provide a full range of front-end mechanical repairs for all
                  makes and models of cars, no matter the cause. This includes, We
                  provide a full range of front-end mechanical.
                </p>
              </div>
              <span>Read more</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCar;
