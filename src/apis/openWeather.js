import axios from 'axios'

const KEY = 'b2e52b86df30fb34de9399ebbe357247'

const openWeather = async (lat = 47.0325807,lon = 28.777961500000004, part = '') => {
    return await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${KEY}`)


}

export default openWeather
