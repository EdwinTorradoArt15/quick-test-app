export const Remember = () => {
  return (
    <div className="row justify-content-center pt-3">
      <div className="col-auto">
        <div className="row g-1">
          <div className="col-auto">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck"
            />
          </div>
          <div className="col-auto">
            <p className="form-check-label">Recuérdame</p>
          </div>
        </div>
      </div>
      <div className="col-auto">
        <p>¿Olvidaste tu contraseña?</p>
      </div>
    </div>
  );
};
