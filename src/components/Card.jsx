import { useEffect, useState } from "react";
import ellipsisIcon from "../images/icon-ellipsis.svg";

const backgrounds = [
  "bg-work",
  "bg-play",
  "bg-study",
  "bg-exercise",
  "bg-social",
  "bg-self-care",
];

function Card({ timeline }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData));
  }, []);

  if (!data) return null;

  return data.map((el, i) => (
    <div
      key={el.title}
      className={`${backgrounds[i]} tablet:mt-0 laptop:h-[190px] mt-8 flex h-[155px] items-end rounded-2xl bg-[right_1rem_top_-.5rem] bg-no-repeat`}
    >
      <div className="h-max w-full rounded-[14px] bg-darkBlue p-6 text-white">
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-medium">{el.title}</p>
          <button>
            <img src={ellipsisIcon} alt="more" className="object-contain" />
          </button>
        </div>
        <div className="laptop:block laptop:mt-4 flex items-center justify-between">
          <p className="text-4xl font-light">
            {timeline === "daily"
              ? el.timeframes.daily.current === 1
                ? `${el.timeframes.daily.current}hr`
                : `${el.timeframes.daily.current}hrs`
              : timeline === "weekly"
                ? `${el.timeframes.weekly.current}hrs`
                : `${el.timeframes.monthly.current}hrs`}
          </p>
          <p className="text-[14px] text-paleBlue">
            {timeline === "daily"
              ? el.timeframes.daily.previous === 1
                ? `Yesterday - ${el.timeframes.daily.previous}hr`
                : `Yesterday - ${el.timeframes.daily.previous}hrs`
              : timeline === "weekly"
                ? `Last Week - ${el.timeframes.weekly.previous}hrs`
                : `Last Month - ${el.timeframes.monthly.previous}hrs`}
          </p>
        </div>
      </div>
    </div>
  ));
}

export default Card;
