import React from "react";
import "./Slider.css";
const Slider = () => {
  return (
    <section id="proyectos">
        <div class="container">
            <h2>proyectos</h2>
            <div class="programas">

            
            <div class="carta">
                <h3>App clima</h3>
                <p>App web de clima usa una API de timpo climatico. Usando tecnologias como React | Bootstrap | API</p>
                <button>Link</button>
            </div>
            <div class="carta">
                <h3>Gestion de usuarios</h3>
                <p>Este proyecto se realizo en conjunto de la UPV. Usando tecnologias como React | Bootstrap | Jquery</p>
                <button>Link</button>
            </div>
            <div class="carta">
                <h3>Generador de tareas</h3>
                <p>Gestor de tareas agrega elimina y selecciona las tareas. Usando tecnologias como React</p>
                <button>Link</button>
            </div>
        </div>
        </div>    
    </section>
  );
};

export default Slider;