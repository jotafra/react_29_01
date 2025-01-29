import React from "react";

function Button2() {
  function click() {
    alert("Você clicou no botão Delete");
  }
  return (
    <button
      style={{
        padding: "20px 20px",
        fontSize: "16px",
        cursor: "pointer",
        color: "red",
      }}
      onClick={() => click()}
    >
      Deletar Item
    </button>
  );
}
export default Button2;
