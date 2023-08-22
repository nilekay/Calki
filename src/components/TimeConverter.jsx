import { useState } from 'react';

export default function TimeConverter() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [hidden, setHidden] = useState(true);

  const handleConversion = () => {
    const total = hours * 3600 + minutes * 60 + seconds;
    setTotalSeconds(total);
  };

  const handleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <>
      <button
        onClick={handleHidden}
        className="fixed top-24 mt-2 right-2 p-3 text-xl leading-3"
      >
        {hidden ? (
          <i className="fa-regular fa-clock"></i>
        ) : (
          <i className="fa-solid fa-xmark"></i>
        )}
      </button>
      <div
        className={`fixed ${
          hidden ? 'hidden' : ''
        } bg-slate-100 z-10 top-36 right-8 rounded-2xl text-black p-5`}
      >
        <h2 className="font-semibold mb-3">Time Converter</h2>
        <div className="flex justify-start gap-5 mb-2">
          <label className="w-20 inline-block">Hours: </label>
          <input
            className="w-24 text-center bg-[#B3B3D8] rounded-md"
            type="number"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
          />
        </div>
        <div className="flex justify-start gap-5 mb-2">
          <label className="w-20 inline-block">Minutes: </label>
          <input
            className="w-24 text-center bg-[#B3B3D8] rounded-md"
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value))}
          />
        </div>
        <div className="flex justify-start gap-5 mb-4">
          <label className="w-20 inline-block">Seconds: </label>
          <input
            className="w-24 text-center bg-[#B3B3D8] rounded-md"
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value))}
          />
        </div>
        <button
          onClick={handleConversion}
          className="bg-[#A2D8FF] py-1 px-4 rounded-lg mb-3 hover:bg-[#50AAC1]"
        >
          Convert
        </button>
        {totalSeconds > 0 && (
          <div>
            <p className="font-semibold">
              Total seconds:{' '}
              <span className="italic text-lg">{totalSeconds}</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
