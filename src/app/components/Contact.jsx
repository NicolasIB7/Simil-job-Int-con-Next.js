import React from "react";
import style from "./Contact.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

import Form from "./Form";

function Contact() {
  return (
    <div>
      <section id='seccion3'>
        <div className={style.div}>
          <div className={style.info}>
            <h1 className={style.h1}>Contactate con nosotros</h1>

            <h3 className={style.h3}>
              {" "}
              <FaMapMarkerAlt
                style={{ color: "#FF1A88", marginRight: "2%" }}
              />{" "}
              Oficina
            </h3>
            <p style={{ fontSize: 25 }}>
              Arévalo 1880, Piso 3, Palermo, Ciudad{" "}
            </p>
            <p className={style.p}>Autónoma de Buenos Aires, Argentina.</p>

            <h3 className={style.h3}>
              {" "}
              <AiOutlineMail
                style={{ color: "#FF1A88", marginRight: "2%" }}
              />{" "}
              Contacto
            </h3>
            <p className={style.p}> contacto@jobint.com</p>

            <h3 className={style.h3}>
              {" "}
              <BsFillTelephoneFill
                style={{ color: "#FF1A88", marginRight: "2%" }}
              />
              Teléfono
            </h3>
            <p className={style.p}>0810-333-4499</p>
          </div>

          <Form />

          {/* <div className={style.form}>
            <form>
              <div className={style.form1}>
              <label htmlFor="">Tu nombre</label>
              <input style={{height: 56, borderRadius:"3%"}}></input>
              </div>
              <div className={style.form1}>
              <label htmlFor="">Tu correo electrónico</label>
              <input style={{height: 56, borderRadius:"3%"}} ></input>
              </div >
              <div className={style.form1}>
              <label htmlFor="">Asunto</label>
              <input style={{height: 56, borderRadius:"3%"}}></input>
              </div>
              <div className={style.form1}>
              <label htmlFor="">Tu mensaje (opcional)</label>
              <textarea style={{height: 120, borderRadius:"3%"}}></textarea>
              </div>
              <button type='submit' onClick={handleSubmit} className={style.boton}>Enviar</button>

            </form>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Contact;
