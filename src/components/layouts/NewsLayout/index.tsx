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
          "https://newsapi.org/v2/everything?q=f1&language=en&apiKey=5175acce6283421980e8b3b36304c949&sortBy=publishedAt&excludeDomains=racefans.net,hackaday.com,screenrant.com"
        );

        if (res.status === 200) {
          setNews(res.data.articles.slice(0, 7));
          console.log(res.data.articles.slice(0, 7));
        }
      } catch (error: any) {
        console.error(error.res);
      }
    };

    getRaceResultData();
  }, []);

  return (
    <div className="w-full px-10 py-10 lg:py-20 flex flex-col bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-10">
        {news &&
          news.map((item: any, index: number) => {
            return (
              <Link
                target="_blank"
                key={index}
                href={item.url}
                className={clsx(
                  index === 0 &&
                    "flex flex-col-reverse col-span-2 row-span-2 gap-y-10 sticky top-0",
                  index !== 0 &&
                    index % 2 === 0 &&
                    "gap-y-8 flex flex-col min-h-32 group",
                  index !== 0 &&
                    index % 2 === 1 &&
                    "gap-y-8 flex flex-col col-start-3 min-h-32 group"
                )}
              >
                <div
                  className={clsx(
                    "w-full rounded-md overflow-hidden aspect-video"
                  )}
                >
                  <div
                    style={{ backgroundImage: `url(${item.urlToImage})` }}
                    className={`w-full h-full group-hover:scale-110 transition-all duration-500 bg-top bg-cover`}
                  ></div>
                </div>

                <div
                  className={clsx(
                    index === 0
                      ? "pr-8 py-6 border-primary border-t-[16px] border-r-[16px] rounded-tr-3xl"
                      : "h-3/5 pr-2 border-tertiary group-hover:border-primary rounded-br-3xl border-r-2 border-b-2 transition-all duration-500"
                  )}
                >
                  <h1
                    className={clsx(
                      `py-5 ${titillium_Web.className} text-secondary group-hover:-translate-y-3 transition-all duration-500`,
                      index === 0
                        ? "font-bold text-3xl"
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
    </div>
  );
};

export default NewsLayout;
