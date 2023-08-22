import { useEffect, useState } from 'react';

export default function Card({ img, color, localStorageKey }) {
  const [totalInicial, setTotalInicial] = useState('');
  const [cantidadLlevada, setCantidadLlevada] = useState('');
  const [resultadoPorcentaje, setResultadoPorcentaje] = useState('');

  useEffect(() => {
    // Cargar el valor almacenado en el localStorage al inicializar el componente
    const storedTotalInicial = localStorage.getItem(localStorageKey);
    if (storedTotalInicial) {
      setTotalInicial(storedTotalInicial);
    }
  }, [localStorageKey]);

  const handleTotalInicialChange = (e) => {
    const newTotalInicial = e.target.value;
    setTotalInicial(newTotalInicial);

    // Almacenar el valor en el localStorage
    localStorage.setItem(localStorageKey, newTotalInicial);

    if (!isNaN(newTotalInicial) && cantidadLlevada !== '') {
      const newResultado = (
        (parseFloat(cantidadLlevada) / parseFloat(newTotalInicial)) *
        100
      ).toFixed(2);
      setResultadoPorcentaje(newResultado);
    }
  };

  const handleCantidadLlevadaChange = (e) => {
    const newCantidadLlevada = e.target.value;
    setCantidadLlevada(newCantidadLlevada);

    if (!isNaN(totalInicial) && newCantidadLlevada !== '') {
      const newResultado = (
        (parseFloat(newCantidadLlevada) / parseFloat(totalInicial)) *
        100
      ).toFixed(2);
      setResultadoPorcentaje(newResultado);
    }
  };

  return (
    <section className={`min-w-[14rem] ${color} relative p-4 rounded-3xl`}>
      <img src={img} alt="Imagen icon" className="my-0 mx-auto mb-5" />

      <form className="grid grid-cols-2 gap-5 grid-rows-2 w-full">
        <div>
          <input
            type="text"
            className="w-full outline-none text-slate-700 bg-[#ffffff75] rounded-xl text-center py-1"
            value={totalInicial}
            onChange={handleTotalInicialChange}
          />
        </div>
        <div>
          <input
            className="w-full text-slate-700 bg-[#ffffff75] rounded-xl text-center py-1"
            type="text"
            value="100%"
            disabled
          />
        </div>
        <div>
          <input
            type="text"
            className="w-full outline-none bg-[#00000025] rounded-xl text-center py-1"
            value={cantidadLlevada}
            onChange={handleCantidadLlevadaChange}
          />
        </div>
        <div>
          <input
            className="w-full rounded-xl text-center py-1"
            type="text"
            value={`${resultadoPorcentaje}%`}
            disabled
          />
        </div>
      </form>
    </section>
  );
}
