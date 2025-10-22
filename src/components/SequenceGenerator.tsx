import React, { use, useState } from "react";

function SequenceGenerator() {
  const [tipo, setTipo] = useState ("pares");
  const [cantidad, setCantidad] = useState(5);
  const [numeros, setNumeros] = useState([0, 2, 4, 6, 8]);

  const generar = () => {
    let resultado = [];

    if (tipo === "pares") {
      for (let i = 0; i < cantidad; i++) resultado.push(i * 2);
    } else if (tipo === "impares") {
      for (let i = 0; i < cantidad; i++) resultado.push(i * 2 + 1);
    } else {
      // Múltiplos de 3
      for (let i = 0; i < cantidad; i++) resultado.push(i * 3);
    }

    setNumeros(resultado);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontFamily: "Arial" }}>
      <h2>Generador de Secuencias</h2>

      <div style={{ margin: "10px" }}>
        <label>Tipo: </label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="pares">Pares</option>
          <option value="impares">Impares</option>
          <option value="multiplos3">Múltiplos de 3</option>
        </select>
      </div>

      <div style={{ margin: "10px" }}>
        <label>Cantidad: </label>
        <input
          type="number"
          value={cantidad}
          min="1"
          onChange={(e) => setCantidad(Number(e.target.value))}
        />
      </div>

      <button
        onClick={generar}
        style={{
          backgroundColor: "#4F46E5",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Aplicar cambios
      </button>

      <div style={{ marginTop: "20px" }}>
        {numeros.map((n, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              background: "#E0E7FF",
              color: "#312E81",
              padding: "10px",
              margin: "5px",
              borderRadius: "8px",
              width: "40px",
            }}
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SequenceGenerator;