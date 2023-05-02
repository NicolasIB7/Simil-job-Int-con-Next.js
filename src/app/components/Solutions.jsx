import React from "react";
import style from "./Solutions.module.css";
import Logos from "./Logos";

function Solutions() {
  return (
    <div className={style.all}>
      <section id='seccion2'>
        <div>
          <h1 className={style.h1}>Todas nuestras soluciones.</h1>

          <div className={style.container}>
            <div className={style.container1}>
              <img
                src='https://www.jobint.com/wp-content/uploads/2022/05/Megaphone.png'
                alt='megafono'
                style={{ marginLeft: "40%" }}
              />
              <h3 className={style.h3} style={{ marginLeft: "25%" }}>
                Clasificados
              </h3>
              <p className={style.p}>
                Sitios de clasificados online de empleo. Elegidos por las
                personas para encontrar el trabajo que les gusta y por las
                empresas para atraer el talento ideal.
              </p>
            </div>
            <div className={style.container1}>
              <img
                src='https://www.jobint.com/wp-content/uploads/2022/05/Cube.png'
                alt='cubo'
                style={{ marginLeft: "40%" }}
              />
              <h3 className={style.h3} style={{ marginLeft: "25%" }}>
                Software de ATS
              </h3>
              <p className={style.p}>
                Hiring Room es el principal software de reclutamiento para
                viralizar y gestionar las búsquedas de talento, permite un
                seguimiento del proceso en real time.
              </p>
            </div>
            <div className={style.container1}>
              <img
                src='https://www.jobint.com/wp-content/uploads/2022/05/Search.png'
                alt='lupa'
                style={{ marginLeft: "40%" }}
              />
              <h3 className={style.h3} style={{ marginLeft: "15%" }}>
                Reclutamiento On demand
              </h3>
              <p className={style.p}>
                Unimos a los mejores reclutadores de RRHH con la base más grande
                de candidatos de Latam. Los servicios y la tecnología de Jobint
                en un solo producto.
              </p>
            </div>
          </div>
        </div>

        <Logos />
      </section>
    </div>
  );
}

export default Solutions;
