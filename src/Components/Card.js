import React from "react";
import TextLine from "./TextLine";


const Card = ({data}) => {
    let date = () => {
        let dt = new Date(data.dt * 1000)
        let day = dt
            .toLocaleString("ro-RO", {weekday: 'long'})
            .substr(0, 3)

        let dayDate = dt.toLocaleString("ro-RO", {day: 'numeric'})

        day = day.charAt(0).toUpperCase() + day.slice(1)

        return `${day} ${dayDate}`
    }
    return (
        <div className="flex flex-col justify-center bg-gray-400 bg-opacity-30  transition ease-out duration-500 hover:bg-opacity-20 rounded-lg font-light text-center">

            <TextLine><span className={`text-`}>{date()}</span></TextLine>
            <img src={`http://openweathermap.org/img/wn/${`el.weather[0].icon`}.png`} alt="" />
            <span className={`text-xl mr-1 font-normal`}>-10&#176;</span>
            <span className={`text-md font-normal`}>-15&#176;</span>
            <TextLine>Partly sunny</TextLine>


        </div>
    )
}


export default Card
