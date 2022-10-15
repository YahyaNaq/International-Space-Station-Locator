import { useState, useEffect } from 'react';
import { getInfo, getPosition } from '../requests.js';
import Compass from '../Assets/compass.png';
import Clock from '../Assets/Clock.svg';

export default function Response() {
  const [coords, setCoords] = useState({});
  const [pos, setPos] = useState({});
  const [time, setTime] = useState('');

  useEffect(() => {
    getInfo()
    .then(data => {
      setCoords(data.coords);
      setTime(data.time);
    });
  },[]);

  useEffect(() => {
    if (!coords.length) return;
    getPosition(coords).then(data => setPos(data));
  },[coords]);
  
  return (coords.length) ? (
    <>
    <p className="font-semibold sm:text-lg md:text-xl mt-4">Current Position</p>
    <p>{ (pos.country) ? `${pos.country}, ${pos.continent}` : ""}</p>
    <p>{ pos.name }</p>
    <div className="flex gap-1 justify-center items-center bg-[rgb(35 39 65)] p-1">
      <img
      src={ Compass }
      alt="Compass"
      className="md:h-6 sm:h-5"
      />
      <p>Lat: { coords[0] }, Lon: { coords[1] }</p>
    </div>
    <div className="flex gap-1 justify-center bg-[rgb(35 39 65)] p-1">
      <img
      src={ Clock }
      alt="Clock"
      className="md:w-6 sm:w-5 opacity-95"
      />
      <p>{ time }</p>
    </div>
    </>
    )
    : <p className="m-4 animation-pulse text-2xl font-semibold">Loading...</p>;
}