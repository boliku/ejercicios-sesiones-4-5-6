import {React, useEffect} from "react";

export const clockComponent = () => {

  const defaultState = {
    fecha: new Date(),
    edad: 0,
    nombre: "Exequiel",
    apellidos: 'Cartisano'
  };

  const [user, setUser] = useState(defaultState);

  useEffect(() => {
    
    
    const intervalAge = (
      () => updateUser(),1000
    );

    return () => {
      clearInterval(intervalAge);
    };
  });

   
  const updateUser = () =>{
    return 
      setUser({
        fecha: user.fecha,
        edad: user.edad +1,
        nombre: user.nombre,
        apellido: user.apellido,
      });
  };

  return (
    <div>
      <h2>
        Hora Actual: {user.fecha.toLocaleTimestring()}
      </h2>
      <h3>
        {user.nombre} {user.apellidos}
      </h3>
      <h1>
        Edad: {user.edad}
      </h1>
    </div>
  );
};