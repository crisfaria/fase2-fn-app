import { createContext, useState } from 'react';

import {
  criarAlimento,
  listarTodosAlimentos,
  listarAlimentoPeloId,
  alterarAlimento,
  excluirAlimentos,
} from '../services/AlimentoService';

const AlimentoContext = createContext();

const AlimentoProvider = ({ children }) => {
  const [alimentos, setAlimentos] = useState([]);

  const adicionar = async (nome, peso) => {
    try {
      const novoAlimento = await criarAlimento(nome, peso);
      setAlimentos([...alimentos, novoAlimento]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const listar = async () => {
    try {
      const listaAtualizada = await listarTodosAlimentos();
      setAlimentos(listaAtualizada);
    } catch (error) {
      console.log(error.message);
    }
  };

  const buscar = async (id) => {
    try {
      return await listarAlimentoPeloId(id);
    } catch (error) {
      console.log(error, message);
    }
  };

  const atualizar = async (id, nome, peso) => {
    try {
      const alimentoAtualizado = await alterarAlimento(id, nome, peso);
      const listaAtualizada = alimentos.map((alimento) =>
        alimento.id === id ? alimentoAtualizado : alimento
      );
      setAlimentos(listaAtualizada);
    } catch (error) {
      console.log(error, message);
    }
  };

  const remover = async (id) => {
    try {
      await excluirAlimentos(id);
      const index = alimentos.findIndex((alimento) => alimento.id === id);
      alimentos.splice(index, 1);
      setAlimentos([...alimentos]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AlimentoContext.Provider
      value={{ alimentos, adicionar, listar, buscar, atualizar, remover }}>
      {children}
    </AlimentoContext.Provider>
  );
};

export default AlimentoProvider;
export { AlimentoContext };
