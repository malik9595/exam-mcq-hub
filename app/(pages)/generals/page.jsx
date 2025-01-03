"use client";
import React, { useState } from "react";
import { mcqData } from "@/app/data/ssc";
import "./generals.modules.css";

const page = () => {
  const [data, setData] = useState(mcqData);
  const onClickFunction = (a, b) => {
    console.log(a, b);
  };

  return (
    <div>
      <h1>Hello Good Morning</h1>
      {data.map((data) => {
        return (
          <div key={data.id}>
            <h3>{data.question}</h3>
            <div>
              {data.options.map((option) => (
                <span
                  className={`option`}
                  key={option}
                  value={option}
                  onClick={() => onClickFunction(data.id, option)}
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
