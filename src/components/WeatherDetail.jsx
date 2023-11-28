import { useState } from "react";

const WeatherDetail = ({ weather }) => {

    const [celsius, setCelsius] = useState(true);
    const handleCF = () => {
        setCelsius(!celsius)
    }
    const celsiusToFahrenheit = () => {
        const fahrenheit = ((weather.main.temp * (9 / 5)) + 32).toFixed(1)
        return fahrenheit
    }
    return (
        <article className="text-center grid gap-4">
            <h3>
                {weather?.name}, {weather?.sys.country}
            </h3>
            <div className="text-black grid gap-4 overflow-hidden sm:grid sm:grid-cols-2 max-w-[700px] items-center">
                {/* Seccion 1: Temperatura, descripcion e imagen */}
                <section className="bg-white/60 p-2 rounded-xl grid grid-cols-2 items-center">
                    <h3 className="col-span-2">{weather.weather[0].description}</h3>
                    <span className="text-3xl">{celsius ? (`${weather.main.temp} °C`) : (celsiusToFahrenheit(weather.main.temp)) + "°F"}</span>
                    <div>
                        <img className="block mx-auto" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                    </div>
                </section>
                {/* Seccion 2: Detalles adicionales del clima */}
                <section className="grid grid-cols-3 justify-items-center bg-white/60 p-2 rounded-xl">

                    <div className="flex gap-1">
                        <div>
                            <img src="/wind.svg" alt="" />
                        </div>
                        <span>{weather.wind.speed}m/s</span>
                    </div>

                    <div className="flex gap-1">
                        <div>
                            <img src="/humidity.svg" alt="" />
                        </div>
                        <span>{weather.main.humidity}%</span>
                    </div>

                    <div className="flex gap-1">
                        <div>
                            <img src="/pressure.svg" alt="" />
                        </div>
                        <span>{weather.main.pressure}hPa</span>
                    </div>
                </section>

                <button onClick={handleCF} className="bg-white/60 rounded-xl">
                    {celsius ? "Cambiar a F°" : "Cambiar a C°"}
                </button>
            </div>
        </article>
    )
}
export default WeatherDetail