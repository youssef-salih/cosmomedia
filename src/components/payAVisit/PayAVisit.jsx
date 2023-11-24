import React from "react";
import { phone, email, location } from "../../assets/icons";
import PayElements from "./PayElement";
const PayAVisit = () => {
  return (
    <div className="bg-myorange p-2 rounded-2xl container mx-auto">
      <div className="border p-5 rounded-2xl flex justify-around">
        <PayElements />
      </div>
    </div>
  );
};

export default PayAVisit;
