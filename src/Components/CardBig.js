import React from "react";


import TextLine from "./TextLine";


const CardBig = ({data,timezone}) => {


    return (
        <div className="bg-gray-400 transition ease-out duration-500 hover:bg-opacity-20 bg-opacity-30 py-2 px-8 rounded-lg font-light text-center ">

            <h2 className="font-light text-3xl">
                {timezone}
            </h2>
            <div className={'flex items-center justify-evenly '}>
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                     alt="Moon"
                     className={"w-32 inline-block /*bg-gray-600 rounded-full*/"}
                />
                <span className="flex text-6xl items-center">
                    {data.temp}&#176; <sup>c</sup>
                </span>
            </div>
            <p className="text-3xl mb-2">{data.weather[0].main}</p>
            <div className="other-details grid grid-cols-3">
                <TextLine>Feels like {data.feels_like}</TextLine>
                <TextLine>Pressure {data.humidity} %</TextLine>
                <TextLine>Pressure {data.pressure} hPa</TextLine>
                <TextLine>Wind {data.wind_speed} m/s</TextLine>
                <TextLine>Visibility {data.visibility/1000} km</TextLine>
                <TextLine>Clouds {data.clouds} %</TextLine>

            </div>
        </div>
    )
}


export default CardBig
