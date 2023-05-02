import "./App.css";
import "./personalizado.css";
//para importar imagenes
import rey1 from "./imagenes/rey_atanagildo.png";
import rey2 from "./imagenes/rey_leogivildo.png";
import rey3 from "./imagenes/rey_sisebuto.png";
import incognito from "./imagenes/rey_incognito.png";

function App() {
  let nombre = ["Sisebuto", "Leofivildo", "Atanagildo"];

  const cambiarTexto=(e)=>{
    if(e.target.innerHTML == "Visto"){
      e.target.innerHTML ="";
    }else{
      e.target.innerHTML = "Visto";
    }
  }

  const cambiarImagen=(img)=>{
    if(img.target.src.includes("incognito")){
      img.target.style.visibility="hidden";
    }else{
      img.target.src=incognito;
    }
    img.target.parentNode.style.backgroundColor="white";
  }

  //e.target.parentNode.

  return (
    <div className="contenedor">
      <div className="caja">
        <img src={rey1} onClick={cambiarImagen} />
        <div onClick={cambiarTexto} className="nombre">{nombre[0]}</div>
      </div>
      <div className="caja">
        <img src={rey2} onClick={cambiarImagen} />
        <div onClick={cambiarTexto} className="nombre">{nombre[1]}</div>
      </div>
      <div className="caja">
        <img src={rey3} onClick={cambiarImagen} />
        <div onClick={cambiarTexto} className="nombre">{nombre[2]}</div>
      </div>
    </div>
  );
}

export default App;
