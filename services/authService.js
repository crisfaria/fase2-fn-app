export const autenticaUsuario = async (data) => {
  // falar com backend e retornar true ou false
  try {
    const respostaDoBackend = await fetch(
      "http://pi-api.cris.leandrofaria.com/api/auth/login",
      {
        method: "POST",
        body: JSON.stringify({
          email: data.email.trim().toLowerCase(),
          senha: data.senha,
        }),
      }
    );

    if (respostaDoBackend.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return alert("Não foi possível conectar ao servidor de autenticação.");
  }
};

export const cadastraUsuario = async (data) => {
  // falar com backend e retornar true ou false
  try {
    const respostaDoBackend = await fetch(
      "http://pi-api.cris.leandrofaria.com/api/auth/signup",
      {
        method: "POST",
        body: JSON.stringify({
          email: data.email.trim().toLowerCase(),
          senha: data.senha,
        }),
      }
    );

    if (respostaDoBackend.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    alert("Não foi possível conectar ao servidor de cadastro.");
  }
};
