import { createContext, useContext, useState } from "react";

const AlimentoContext = createContext();

const AlimentoProvider = ({ children }) => {
  const [alimentos, setAlimentos] = useState([]);

  return (
    <AlimentoContext.Provider value={{ alimentos, setAlimentos }}>
      {children}
    </AlimentoContext.Provider>
  );
};

export default AlimentoProvider;
export const useAlimentosContext = () => useContext(AlimentoContext);
