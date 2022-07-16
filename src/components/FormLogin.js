export const FormLogin = () => {

  let 

  return (
    <form className="d-flex flex-column">
      <div className="mx-auto">

        <div className="py-3">
        <input
          type="email"
          className="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
          placeholder="Correo"
        />
      </div>

      <div className="pb-3">
      <input
          type="password"
          className="form-control"
          id="passwordInput"
          aria-describedby="passwordHelpInline"
          placeholder="Contraseña"
        />
      </div>

      <button type="submit" className="btn">Inicia sesion</button>

      </div>

    </form>
  );
};
