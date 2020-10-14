import React, { useState } from "react";
import { useHistory } from "react-router";
import {Button} from 'react-bootstrap'

import "./self-test.scss";
function Self() {
  const history = useHistory();

  const [state, setflag] = useState({
    flag: 0,
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
    counter5: 0,
  });

  const [Age, setage] = useState({
    age: 0,
  });

  const [Travel, settravel] = useState({
    travel: 0,
  });

  const [selectedOption, setselectedOption] = useState("");
  const [selectedOption6, setselectedOption6] = useState("");
  const [selectedOption1, setselectedOption1] = useState("");
  const [selectedOption2, setselectedOption2] = useState("");
  const [selectedOption3, setselectedOption3] = useState("");
  const [selectedOption4, setselectedOption4] = useState("");
  const [selectedOption5, setselectedOption5] = useState("");

  const handlyes = () => {
    setselectedOption("less");
    setage({
      age: 49,
    });
  };

  const handleno = () => {
    setselectedOption("greater");
    setage({
      age: 51,
    });
  };

  const handlyes6 = () => {
    setselectedOption6("yes");
    settravel({
      travel: 1,
    });
  };

  const handleno6 = () => {
    setselectedOption6("no");
    settravel({
      travel: 0,
    });
  };

  const handlyes1 = () => {
    setselectedOption1("yes");
    setflag({
      counter1: 1,
      flag: state.flag + 1,
    });
  };

  const handlyes2 = () => {
    setselectedOption2("yes");
    setflag({
      counter2: 1,
      flag: state.flag + 1,
    });
  };

  const handlyes3 = () => {
    setselectedOption3("yes");
    setflag({
      counter3: 1,
      flag: state.flag + 1,
    });
  };

  const handlyes4 = () => {
    setselectedOption4("yes");
    setflag({
      counter4: 1,
      flag: state.flag + 1,
    });
  };

  const handlyes5 = () => {
    setselectedOption5("yes");
    setflag({
      counter5: 1,
      flag: state.flag + 1,
    });
  };

  const handleno1 = () => {
    setselectedOption1("no");
    if (state.counter1 === 1) {
      setflag({
        flag: state.flag - 1,
      });
    } else {
      setflag({
        flag: state.flag,
      });
    }
  };

  const handleno2 = () => {
    setselectedOption2("no");
    if (state.counter2 === 1) {
      setflag({
        flag: state.flag - 1,
      });
    } else {
      setflag({
        flag: state.flag,
      });
    }
  };

  const handleno3 = () => {
    setselectedOption3("no");
    if (state.counter3 === 1) {
      setflag({
        flag: state.flag - 1,
      });
    } else {
      setflag({
        flag: state.flag,
      });
    }
  };

  const handleno4 = () => {
    setselectedOption4("no");
    if (state.counter4 === 1) {
      setflag({
        flag: state.flag - 1,
      });
    } else {
      setflag({
        flag: state.flag,
      });
    }
  };

  const handleno5 = () => {
    setselectedOption5("no");
    if (state.counter5 === 1) {
      setflag({
        flag: state.flag - 1,
      });
    } else {
      setflag({
        flag: state.flag,
      });
    }
  };

  const handlesubmit = () => {
    if (Travel.travel >= 1) {
      if (state.flag < 2) {
        alert(
          "As you have a travel history it is better to be in quarantine and if in future you have the symptoms then seek medical attention."
        );
        history.push("/Self-Test");
      } else {
        alert("You should seek medical attention");
        history.push("/Self-Test");
      }
    } else {
      if (Age.age > 50) {
        if (state.flag > 2) {
          alert("You should seek medical attention");
          history.push("/Self-Test");
        } else {
          alert(
            "At present there are no symptoms but if in future you have the symptoms then seek medical attention."
          );
          history.push("/Self-Test");
        }
      } else if (state.flag > 3) {
        alert("You should seek medical attention");
        history.push("/Self-Test");
      } else {
        alert(
          "At present there are no symptoms but if in future you have the symptoms then seek medical attention."
        );
        history.push("/Self-Test");
      }
    }
  };

  return (
    <div className="test">
      <form className = "test-form" onSubmit={handlesubmit}>
        <p>Self-assesment </p>
        <div >
          <text>Your Age : </text>
          <div>
            <label>
              <text>Less than 50</text>
              <input id= "radio-button"
                type="radio"
                name="op1"
                value="less"
                checked={selectedOption === "less"}
                onChange={handlyes}
                required={true}
              />
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
              <text>Greater than 50</text>
              <input
                type="radio"
                name="op1"
                value="greater"
                checked={selectedOption === "greater"}
                onChange={handleno}
                required={true}
              />
            </label>
          </div>
        </div>
        &nbsp;
        <div>
          <text>Any Travel History : </text>
          <div>
            <label>
              <text>Yes</text>
              <input
                type="radio"
                name="op2"
                value="yes"
                checked={selectedOption6 === "yes"}
                onChange={handlyes6}
                required={true}
              />
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
              <text>No</text>
              <input
                type="radio"
                name="op2"
                value="no"
                checked={selectedOption6 === "no"}
                onChange={handleno6}
                required={true}
              />
            </label>
          </div>
        </div>
        &nbsp;
        <div>
          <text

          >
            Do you have Fever :{" "}
          </text>
          <div>
            <label>
              <text>Yes</text>
              <input
                type="radio"
                name="op3"
                value="yes"
                checked={selectedOption1 === "yes"}
                onChange={handlyes1}
                required={true}
              />
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
              <text>No</text>
              <input
                type="radio"
                name="op3"
                value="no"
                checked={selectedOption1 === "no"}
                onChange={handleno1}
                required={true}
              />
            </label>
          </div>
        </div>{" "}
        &nbsp;
        <div>
          <text>Do you have Cough : </text>
          <div>
            <label>
              <text>Yes</text>
              <input
                type="radio"
                name="op4"
                value="yes"
                checked={selectedOption2 === "yes"}
                onChange={handlyes2}
                required={true}
              />
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
              <text>No</text>
              <input
                type="radio"
                name="op4"
                value="no"
                checked={selectedOption2 === "no"}
                onChange={handleno2}
                required={true}
              />
            </label>
          </div>
        </div>
        &nbsp;
        <div>
          <text>Are you facing problem in breathing : </text>
          <div>
            <label>
              <text>Yes</text>
              <input
                type="radio"
                name="op5"
                value="yes"
                checked={selectedOption3 === "yes"}
                onChange={handlyes3}
                required={true}
              />
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
              <text>No</text>
              <input
                type="radio"
                name="op5"
                value="no"
                checked={selectedOption3 === "no"}
                onChange={handleno3}
                required={true}
              />
            </label>
          </div>
        </div>
        &nbsp;
        <div>
          <text>Persistent pain or pressure in the chest : </text>
          <div>
            <label>
              <text>Yes</text>
              <input
                type="radio"
                name="op6"
                value="yes"
                checked={selectedOption4 === "yes"}
                onChange={handlyes4}
                required={true}
              />
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
              <text>No</text>
              <input
                type="radio"
                name="op6"
                value="no"
                checked={selectedOption4 === "no"}
                onChange={handleno4}
                required={true}
              />
            </label>
          </div>
        </div>
        &nbsp;
        <div>
          <text>
            Are you suffering from cardiovascular diseases, hypertension or
            diabetes :{" "}
          </text>
          <div>
            <label>
              <text>Yes</text>
              <input
                type="radio"
                name="op7"
                value="yes"
                checked={selectedOption5 === "yes"}
                onChange={handlyes5}
                required={true}
              />
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
              <text>No</text>
              <input
                type="radio"
                name="op7"
                value="no"
                checked={selectedOption5 === "no"}
                onChange={handleno5}
                required={true}
              />
            </label>
          </div>
          &nbsp;
        </div>
        <Button variant="success" type="submit">
          Submit
        </Button>
        <div>
          <h5>STAY SAFE AND STAY AT HOME</h5>
        </div>
        &nbsp;
      </form>
    </div>
  );
}

export default Self;
