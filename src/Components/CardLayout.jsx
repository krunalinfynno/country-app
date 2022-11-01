import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardLayout({ data, darkMode }) {
  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 m-auto px-28 min-h-screen">
      {data?.map((item) => {
        const name = item.cca3;
        return (
          <Link to={`/country/${name}`}>
            <Card
              className={`lg:w-[350px] w-[320px] ${
                darkMode && "bg-dark-mode-elements text-white"
              }`}
              key={name}
            >
              <CardActionArea>
                <img
                  className="w-[350px] h-[180px]"
                  component="img"
                  height="194"
                  src={item.flags.png}
                  alt="Paella dish"
                />
                <CardContent
                  className={`text-left ${
                    darkMode && "bg-dark-mode-elements text-white"
                  }`}
                >
                  <div className="p-1">
                    <div className="font-medium text-base mb-2">
                      <span>{item.name.official}</span>
                    </div>
                    <div>
                      <span>Popolation : </span>
                      <span className="text-[#e6e6e6]">
                        {item?.population
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </div>
                    <div>
                      <span>Region : </span>
                      <span className="text-[#e6e6e6]">{item?.region}</span>
                    </div>
                    <div>
                      <span>Capital : </span>
                      <span className="text-[#e6e6e6]">{item?.capital}</span>
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
