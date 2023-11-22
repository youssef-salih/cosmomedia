import React from "react";
import { phone, email, location } from "../../assets/icons";
import PayElement from "./PayElement";
const PayAVisit = () => {
  return (
    <div className="bg-myorange p-2 rounded-2xl">
      <div className="border p-5 rounded-2xl flex justify-around">
        <PayElement />
      </div>
    </div>
  );
};

export default PayAVisit;
