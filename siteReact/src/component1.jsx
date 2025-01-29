import React from "react";

function Button1() {
  function click() {
    alert("Você clicou no botão Create");
  }

  return (
    <button
      style={{
        padding: "20px 20px",
        fontSize: "16px",
        cursor: "pointer",
        color: "green",
      }}
      onClick={() => click()}
    >
      Criar item
    </button>
  );
}

export default Button1;
