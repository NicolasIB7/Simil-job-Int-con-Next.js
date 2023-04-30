import React from 'react';
import styles from "./page.module.css";
import Logos from '../components/Logos';
import { fotos } from './fotos';
import RootLayout from '../layout';

function WhoWeAre() {
  return (

    <section ><br/><br/><br/><br/><br/><br/>
      <div className={styles.div}>
      <h3 className={styles.h3}>Somos una HR tech</h3>
      <h1 className={styles.h1}>
      Brindamos soluciones tecnológicas al mercado laboral.</h1>
      <h4 className={styles.h4}>Ayudamos a las personas a encontrar el trabajo que les gusta y a las empresas el talento que necesitan, de la forma más simple y rápida.</h4>
      </div>

      <img src="https://www.jobint.com/wp-content/uploads/2022/05/equipo-jobs.jpg" className={styles.img} alt="" />
        
    <div className={styles.div2}>
      <div className={styles.info}>
      <h4 className={styles.h4} style={{color:"#ff1a88"}}>Sobre nosotros</h4>
      <h2 className={styles.h2} style={{color:"#0D164E"}}>+ 70.000 ofertas de empleo, +10 millones de visitas por mes, + 20 mil publicadores y presencia en 7 países</h2>
      <p className={styles.p}>Los sitios de clasificados online de empleo de Jobint como Bumeran (Argentina, Perú, México y Venezuela), Zonajobs (Argentina), Laborum (Chile), Multitrabajos (Ecuador) o Konzerta (Panamá) son los elegidos por las personas para encontrar el trabajo que les gusta y el talento ideal para sus empresas en toda la región.</p>
      </div>


      <div><img src="https://www.jobint.com/wp-content/uploads/2022/05/mapa-1.png" alt="" /></div>

    </div>


    <h3 className={styles.h3} style={{color:"#0D1698", fontSize:30, marginLeft:"35%"}}>Nuestros productos y servicios</h3>
    <Logos/>

    <div className={styles.fotos}>
        {fotos.map((item)=>{
          return(
            <div className={styles.card}>
              <img src={item.img} alt="foto" style={{height:430, marginBottom:20, borderRadius:"3%"}} />
              <h5 className={styles.h5}>{item.nombre}</h5>
              <span style={{color:"#0D164E"}}>{item.cargo}</span>
            </div>
          )
        })}


    </div>


        </section>

  )
}

export default WhoWeAre


