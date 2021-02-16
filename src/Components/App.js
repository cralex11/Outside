import React, {useEffect, useState} from 'react'

import openWeather from "../apis/openWeather";


const App = () => {
    const [pos, setPos] = useState(null)
    const [res, setRes] = useState(null)

    useEffect(() => {

        navigator.geolocation.getCurrentPosition((pos) => {
            setPos(pos.coords)
        })


    }, [])

    useEffect(() => {
        if (pos) {
            (async () => {
                const resp = await openWeather(pos.latitude, pos.longitude)
                setRes(await resp)

            })()

        }
    }, [pos])

    const renderClouds = ()=>{
        if (res)
            return res.data.current.clouds
        return ''
    }


    return (
        <div className='container mx-auto py-2'>
            {pos?pos.latitude:'please allow location access'}
            <br />
            {pos?pos.longitude:''}
            <br />
            {renderClouds()}
        </div>
    )
}

export default App
