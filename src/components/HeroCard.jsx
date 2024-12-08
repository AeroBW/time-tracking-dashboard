import React, { useEffect, useState } from "react";
import avatar from "/images/image-jeremy.png";
import Card from "./Card";

function HeroCard() {
  const [timeline, setTimeline] = useState("daily");

  return (
    <div className="m-auto my-16 w-[90%] tablet:grid tablet:grid-cols-2 tablet:gap-8 laptop:max-w-[1100px] laptop:grid-cols-4">
      <div className="rounded-2xl bg-darkBlue text-white tablet:justify-self-center tablet:max-laptop:col-span-2 tablet:max-laptop:w-[630px] laptop:row-span-2">
        <div className="flex items-center justify-center gap-4 rounded-2xl bg-blue p-6 tablet:gap-8 laptop:block">
          <img
            src={avatar}
            className="size-16 rounded-[50%] border-2 border-white"
          />
          <div className="laptop:mb-12 laptop:mt-8">
            <p className="text-[14px] text-paleBlue">Report for</p>
            <p className="text-xl font-light tablet:text-3xl laptop:text-4xl">
              Jeremy Robson
            </p>
          </div>
        </div>
        <div className="flex justify-around p-4 tablet:justify-evenly laptop:flex-col laptop:items-start laptop:gap-2">
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
