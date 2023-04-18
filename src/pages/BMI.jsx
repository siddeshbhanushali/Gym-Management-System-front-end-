import React from "react";
import { useEffect, useState } from "react";

const BMI = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const[remark,setRemark]=useState("")
  function handleHeight(e) {
    let h = e.target.value;
    setHeight(h);
  }

  function handleWeight(e) {
    let w = e.target.value;
    setWeight(w);
  }
  function calculate()
  {
    let bmi1 = (weight / ((height/100 )* (height/100))) ;
    setBMI(bmi1.toFixed(2));
    if(bmi1.toFixed(2)<15)
    setRemark("Very severely underweight")
    else
    if(bmi1.toFixed(2)>15 &&bmi1.toFixed(2)<18)
    setRemark("You are Underweight")
    if(bmi1.toFixed(2)>18 &&bmi1.toFixed(2)<25)
    setRemark("You have healthyweight")
    if(bmi1.toFixed(2)>25 &&bmi1.toFixed(2)<30)
    setRemark("You are overweight")
    if(bmi1.toFixed(2)>30 &&bmi1.toFixed(2)<35)
    setRemark("You are Obase")
  }

  //handling calculations
  useEffect(() => {
   
    
  }, [height, weight]);

  return (
    <div className="mt-4">
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header text-center custom-bg">
            <h5 className="card-title text-color-1">BMI CALCULATOR</h5>
          </div>
          <div className="card-body text-color-1">
            <form>
              <div className="mb-3">
                <label htmlFor="height" className="form-label">
                  <b>Height</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="height"
                  name="height"
                  placeholder="Please Enter Weight in cm"
                  onChange={handleHeight}
                  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="weight" className="form-label">
                  <b>Weight </b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="weight"
                  name="weight"
                  placeholder="Please Enter Weight in kg"
                  onChange={handleWeight}
                
                />
              </div>
              <div className="text-center">
              <button type="button" class="btn btn-light" onClick={calculate} >Calculate BMI</button>

              </div>
            </form>

            <div className="text-center">
              <div id="bmi"><h2>BMI : {bmi}</h2>
              <div id="remark">{remark}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMI;
