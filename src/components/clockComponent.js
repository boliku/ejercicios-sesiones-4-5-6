import {React, useEffect} from "react";

export const clockComponent = () => {

  useEffect(() => {
    const fecha = {
      fecha: new Date(),
      edad: 0,
      nombre: "Exequiel",
      apellidos: 'Cartisano'
    };
    
    const timerID = setInterval(
      () => tick(),1000
    );

    return () => {
      clearInterval(timerID)
    }
  }, [])

  const [fecha, setFecha] = useState(fecha)
  
  const tick = (fecha) =>{
    let edad = fecha.edad +1;
    setFecha({
      nombre: fecha.nombre,
      apellido: fecha.apellido,
      fecha: new Date(),
      edad: edad

    })
  };

  return (
    <div>
      <h2>
        Hora Actual: {person.fecha.toLocaleTimestring()}
      </h2>
      <h3>
        {person.nombre} {person.apellidos}
      </h3>
      <h1>
        {person.edad}
      </h1>
    </div>
  );
};