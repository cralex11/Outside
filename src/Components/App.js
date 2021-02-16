import React, {useEffect, useState} from 'react'

import openWeather from "../apis/openWeather";
import Card from "./Card";
import CardBig from "./CardBig";


const App = () => {
    const [pos, setPos] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {

        navigator.geolocation.getCurrentPosition((pos) => {
            setPos(pos.coords)
        })


    }, [])

    useEffect(() => {
        if (pos) {
            (async () => {
                openWeather(pos.latitude, pos.longitude).then(res => {
                    setData(res.data)
                })

            })()

        }
    }, [pos])


    //render func
    const cardsRenderDaily = () => {
        return data.daily.map((el, index) => {
            if (index !== 7)
                return (
                    <>
                        <Card
                            data={el}
                        />
                    </>

                )
        })
    }
    const cardsRenderHourly = () => {
        return data.hourly.map((el, index) => {
            let hour = new Date(el.dt * 1000).toLocaleString("ro-RO", {hour: 'numeric'})
            if (index < 24)
                if (parseInt(hour) === 1 || parseInt(hour) === 5 || parseInt(hour) === 9 ||
                    parseInt(hour) === 13 || parseInt(hour) === 17 || parseInt(hour) === 21) {
                    console.log(el.temp)

                    return (
                        <>
                            <div className="flex flex-col items-center justify-center hourly">
                                <p className={`text-xl`}>
                                    {parseInt(el.temp)}&#176;
                                </p>
                                <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}.png`}
                                     alt="Moon"
                                     className={"w-14 inline-block transform scale-130"}
                                />
                                <p className={`text-xl`}>
                                    {`${hour}:00`}
                                </p>
                            </div>
                        </>

                    )
                }
        })
    }


    if (data)
        return (
            <div
                className="backImage text-gray-200 bg-cover"
                style={{backgroundImage: "url(https://source.unsplash.com/eodA_8CTOFo/1920x1080)"}}
            >

                <div className='container mx-auto py-2 h-screen'>

                    <div className="grid gap-20 grid-rows-2 h-full">
                        <div className="main-section flex justify-center">
                            <CardBig data={data.current} timezone={data.timezone} />
                        </div>
                        <div className="details grid gap-4 grid-rows-3">
                            <div className="daily grid grid-cols-7 gap-3">
                                {cardsRenderDaily()}
                            </div>
                            <div
                                className="hourly grid grid-cols-6 bg-gray-400 bg-opacity-30 rounded-lg font-light  transition ease-out duration-500 hover:bg-opacity-20">
                                {cardsRenderHourly()}
                            </div>
                            <div className="details grid content-center">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aspernatur cum
                                    distinctio dolore esse est et explicabo, facere ipsam iste iusto minus
                                    necessitatibus
                                    obcaecati officiis omnis quaerat ratione reiciendis rerum.</p>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        )

    return (
        <div>
            Waiting
        </div>
    )
}

export default App
