import { createContext, useContext, useState } from "react";

const AlimentoContext = createContext();

const AlimentoProvider = ({ children }) => {
  const [alimentos, setAlimentos] = useState([]);

  const adicionarAlimento = (alimento) => {
    const novosAlimentos = [...alimentos, alimento];
    setAlimentos(novosAlimentos);
  };

  const removerAlimento = (id) => {
    const alimentosQueSobraram = alimentos.filter((a) => a.id !== id);
    setAlimentos(alimentosQueSobraram);
  };

  const listarAlimentos = () => {
    return alimentos;
  };

  return (
    <AlimentoContext.Provider
      value={{ adicionarAlimento, removerAlimento, listarAlimentos }}
    >
      {children}
    </AlimentoContext.Provider>
  );
};

export default AlimentoProvider;
export const useAlimentosContext = () => useContext(AlimentoContext);
