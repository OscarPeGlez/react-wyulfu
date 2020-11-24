import React from "react";
import "./style.css";

export default function App() {
  const [nombre, setNombre] = React.useState();

  const soloLetras = e => {
    if (!e.currentTarget.value) e.preventDefault();
    else if (e.currentTarget.value[0] === " ") {
      e.currentTarget.value = e.currentTarget.value
        .replaceAll(/\s+/g, " ")
        .trim();
    } else {
      e.currentTarget.value = e.currentTarget.value.replaceAll(/\s+/g, " ");
    }
    setNombre(e.currentTarget.value.replace(/[^a-zA-Z\s\u00C0-\u024F]/gim, ""));
  };

  return (
    <div>
      <input value={nombre} onChange={e => soloLetras(e)} />
    </div>
  );
}
