import Link from "next/link";
import { Titillium_Web } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import { Result } from "postcss";
import clsx from "clsx";
const titillium_Web = Titillium_Web({ subsets: ["latin"], weight: ["600"] });

const NewsLayout = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getRaceResultData = async () => {
      try {
        const res = await axios.get(
          "https://newsdata.io/api/1/latest?apikey=pub_45743ca65cd2b6e7894763b44bd17579425ac&q=formula1&language=en"
        );

        if (res.status === 200) {
          setNews(res.data.articles.slice(0, 9));
          console.log(res.data.articles.slice(0, 9));
        }
      } catch (error: any) {
        console.error(error.res);
      }
    };

    getRaceResultData();
  }, []);

  return (
    <div className="w-full min-h-screen px-10 py-10 lg:py-20 flex flex-col bg-white">
      <div className="container grid grid-cols-4 grid-rows-4 gap-10">
        {news &&
          news.map((item: any, index: number) => {
            console.log(item.urlToImage);

            return (
              <Link
                key={index}
                href={item.url}
                className={clsx(
                  index === 0 &&
                    "flex flex-col-reverse col-span-2 row-span-2 sticky top-0 gap-y-10",
                  index !== 0 &&
                    index % 2 === 0 &&
                    "gap-y-8 flex flex-col justify-between min-h-64 group",
                  index !== 0 &&
                    index % 2 === 1 &&
                    "gap-y-8 flex flex-col justify-between col-start-3 min-h-64 group"
                )}
              >
                <div className="w-full aspect-[4/3] rounded-md overflow-hidden">
                  <div
                    className={`w-full h-full group-hover:scale-110 transition-all duration-500 bg-[url('https://www.newsweek.com/sports/formula1/haas-f1-retaliates-against-uralkali-contradicting-statement-after-tribunal-ruling-1916205')] bg-top bg-cover`}
                  ></div>
                </div>

                <div
                  className={clsx(
                    index === 0
                      ? "min-h-64 mt-20 pr-8 py-8 border-primary border-t-[16px] border-r-[16px] rounded-tr-3xl"
                      : "h-3/5 pr-2 border-tertiary group-hover:border-primary rounded-br-3xl border-r-2 border-b-2 transition-all duration-500"
                  )}
                >
                  <h1
                    className={clsx(
                      `py-5 ${titillium_Web.className} text-secondary group-hover:-translate-y-3 transition-all duration-500`,
                      index === 0
                        ? "font-bold text-5xl"
                        : "font-semibold text-xl"
                    )}
                  >
                    {item.title}
                  </h1>
                </div>
              </Link>
            );
          })}
      </div>
      {/* <Link
        href={
          "https://www.newsweek.com/sports/formula1/haas-f1-retaliates-against-uralkali-contradicting-statement-after-tribunal-ruling-1916205"
        }
        className="flex flex-col col-span-2 row-span-2 sticky top-0 gap-y-10"
      >
        <div className="">
          <h1 className="font-bold text-5xl text-secondary">
            Haas F1 Retaliates Against Uralkali With Contradicting Statement
            After Tribunal Ruling
          </h1>
        </div>
        <img
          src="https://d.newsweek.com/en/full/2415134/haas-f1.jpg?w=1200&f=83f46e62262815a7629eff383590ff8c"
          alt=""
          className="h-64 w-full block object-center   "
        />
      </Link>
      <Link
        href={"https://www.bbc.com/sport/formula1/articles/c722212ngedo"}
        className="gap-y-8 flex flex-col justify-between col-start-3 min-h-64 group "
      >
        <div className="w-full aspect-[4/3] rounded-md overflow-hidden">
          <div className="w-full h-full group-hover:scale-110 transition-all duration-500 bg-[url('https://ichef.bbci.co.uk/news/240/cpsprodpb/1947/live/de302f60-3171-11ef-a5a1-f9c06821b1bc.jpg')] bg-top bg-cover"></div>
        </div>

        <div className="h-3/5 border-tertiary group-hover:border-primary rounded-br-3xl border-r-2 border-b-2 transition-all duration-500">
          <h4
            className={`py-5 font-semibold text-xl ${titillium_Web.className} text-secondary group-hover:-translate-y-3 transition-all duration-500`}
          >
            Verstappen holds off Norris to win in Spain
          </h4>
        </div>
      </Link>
      <Link
        href={"https://www.bbc.com/sport/formula1/articles/c722212ngedo"}
        className="gap-y-8 flex flex-col justify-between min-h-64 group "
      >
        <div className="w-full aspect-[4/3] rounded-md overflow-hidden">
          <div className="w-full h-full group-hover:scale-110 transition-all duration-500 bg-[url('https://ichef.bbci.co.uk/news/240/cpsprodpb/1947/live/de302f60-3171-11ef-a5a1-f9c06821b1bc.jpg')] bg-top bg-cover"></div>
        </div>

        <div className="h-3/5 border-tertiary group-hover:border-primary rounded-br-3xl border-r-2 border-b-2 transition-all duration-500">
          <h4
            className={`py-5 font-semibold text-xl ${titillium_Web.className} text-secondary group-hover:-translate-y-3 transition-all duration-500`}
          >
            Verstappen holds off Norris to win in Spain
          </h4>
        </div>
      </Link> */}
    </div>
  );
};

export default NewsLayout;
