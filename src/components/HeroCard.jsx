import React, { useEffect, useState } from "react";
import avatar from "../images/image-jeremy.png";
import Card from "./Card";

function HeroCard() {
  const [timeline, setTimeline] = useState("daily");

  return (
    <div className="tablet:grid laptop:max-w-[1100px] tablet:gap-8 tablet:grid-cols-2 laptop:grid-cols-4 m-auto my-16 w-[90%]">
      <div className="tablet:max-laptop:col-span-2 tablet:max-laptop:w-[630px] tablet:justify-self-center laptop:row-span-2 rounded-2xl bg-darkBlue text-white">
        <div className="laptop:block tablet:gap-8 flex items-center justify-center gap-4 rounded-2xl bg-blue p-6">
          <img
            src={avatar}
            className="size-16 rounded-[50%] border-2 border-white"
          />
          <div className="laptop:mt-8 laptop:mb-12">
            <p className="text-[14px] text-paleBlue">Report for</p>
            <p className="laptop:text-4xl tablet:text-3xl text-xl font-light">
              Jeremy Robson
            </p>
          </div>
        </div>
        <div className="laptop:flex-col laptop:gap-2 laptop:items-start tablet:justify-evenly flex justify-around p-4">
          <button
            className={`${timeline === "daily" ? "text-white" : "text-paleBlue"}`}
            onClick={() => setTimeline("daily")}
          >
            Daily
          </button>
          <button
            className={`${timeline === "weekly" ? "text-white" : "text-paleBlue"}`}
            onClick={() => setTimeline("weekly")}
          >
            Weekly
          </button>
          <button
            className={`${timeline === "monthly" ? "text-white" : "text-paleBlue"}`}
            onClick={() => setTimeline("monthly")}
          >
            Monthly
          </button>
        </div>
      </div>
      <Card timeline={timeline} />
    </div>
  );
}

export default HeroCard;
