export const autenticaUsuario = async (email, senha) => {
  // falar com backend e retornar true ou false
  try {
    const respostaDoBackend = await fetch("url do servidor/login", {
      method: "POST",
      body: data,
    });

    if (respostaDoBackend.status === 200) {
      alert("ihuuuu deu bom, logou");
    } else {
      alert("Credenciais inválidas.");
    }
  } catch (e) {
    alert("deu ruim pra valer.");
  }
  return false;
};
