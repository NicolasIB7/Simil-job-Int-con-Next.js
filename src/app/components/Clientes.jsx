import React from 'react';
import style from "./Clientes.module.css";
import Carrusel from './Carrusel';

function Clientes() {
  return (
    <div className={style.all}>
        <h1 className={style.h1}>Nuestros clientes</h1>

        <div className={style.cards}>
        <div className={style.card1}> 
            <img src="https://www.jobint.com/wp-content/uploads/2022/05/arcos-dorados-400x139.png" alt="arcos-dorados" style={{marginBottom:"10%"}}/>
            <h3 lassName={style.h3} style={{marginBottom:"10%"}}>“Los elegimos porque es un portal de empleo confiable, accesible con una visualización competente en el mercado. “</h3>
            <p className={style.p}>Judith Riquelme Rodriguez, Jefa de RRHH</p>
        </div>
        <div className={style.card2}>
        <img src="https://www.jobint.com/wp-content/uploads/2022/05/Banco-dmiro-1-400x139.png" alt="banco" style={{marginBottom:"10%"}}/>
            <h3 lassName={style.h3} style={{marginBottom:"10%"}}>“…Es una herramienta fácil para utilizar, además que posee una gran base de datos para poder tener más y mejores candidatos.“</h3>
            <p className={style.p}>Erika Vera Suarez, Analista de Desarrollo humano y selección</p>
        </div>
        <div className={style.card3}>
        <img src="https://www.jobint.com/wp-content/uploads/2022/05/marathon-400x139.png" alt="marathon"style={{marginBottom:"10%"}} />
            <h3 lassName={style.h3} style={{marginBottom:"10%"}}>“… Siempre predispuestos a ayudar en los diferentes requerimientos y nos han apoyado con sus sugerencias y gestión.”</h3>
            <p lassName={style.p}>Leonardo Román, Desarrollo Organizacional</p>
        </div>
        <div className={style.card4}>
        <img src="https://www.jobint.com/wp-content/uploads/2022/05/wilson-400x139.png" alt="wilson"style={{marginBottom:"10%"}} />
            <h3 lassName={style.h3} style={{marginBottom:"10%"}}>“… Experiencia fabulosa, la plataforma siempre está habilitada y los filtros permiten tener a los candidatos más idóneos..“</h3>
            <p lassName={style.p}> Cristina Arias, Analista de Gestión de Talento Humano</p>
        </div>

        </div>
        <Carrusel style={{width:"60%"}}/>
        <br/><br/>
    </div>
  )
}

export default Clientes