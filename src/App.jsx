import axios from "axios"
import { useEffect, useState } from "react"
import WeatherDetail from "./components/WeatherDetail"

function App() {
  //?https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={9f299eb5cd96af6f9ad1f2b0ccd8cd79}

  const [weather, setWeather] = useState(null)
  const success = (pos) => {
    const { coords: { latitude, longitude },
    } = pos

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9f299eb5cd96af6f9ad1f2b0ccd8cd79&lang=es&units=metric`)
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <main className="flex justify-center items-center h-screen bg-black text-white bg-[url(/fondo1.jpg)] bg-cover">
      {weather ? <WeatherDetail weather={weather} /> : <span className="text-3xl">Cargando ...</span>}
    </main>
  )
}

export default App
