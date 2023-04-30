import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import style from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={style.all}>

      <div className={style.div1}>
        <div>
          <img src="https://www.jobint.com/wp-content/uploads/2022/05/logo-azul.png" alt="" className={style.imagen}/>
          <h3 className={style.h3} style={{marginBottom:"3%", color:"#59667D"}}>jobint.com © Bumeran.com</h3>
          <h3 className={style.h3} style={{marginBottom:"10%", color:"#59667D"}}>México S.A. de C.V. 2022</h3>
          <h4 className={style.h5}>Políticas de Gestión de la Calidad</h4>
        </div>
        <div className={style.menus}>
          <h3 className={style.h3} style={{marginBottom:"20%"}}>Mapa del sitio</h3>
          <h4 className={style.h4}>
          <Link href='/'>
            Home
            </Link>
            </h4>

          <Link href='/WhoWeAre'><h4 className={style.h4}>Quiénes somos</h4></Link>
          <Link href='#seccion2'><h4 className={style.h4}>Soluciones</h4></Link>
          <Link href='https://jobint.hiringroom.com/jobs'><h4 className={style.h4}>¡Sumate!</h4></Link>
          <Link href='#seccion3'><h4 className={style.h4}>Contacto</h4></Link>
        </div>
        <div>
          <h3 className={style.h3} style={{marginBottom:"3%", color:"#0D164E"}}>Encontranos en</h3>
          <p className={style.p} style={{marginBottom:"10%", color:"#356174" }}>Arévalo 1880, Piso 3, Palermo, Ciudad Autónoma de <br/>Buenos Aires, Argentina.</p>
          <button className={style.boton1} style={{marginBottom:"3%"}}><AiOutlineMail style={{marginRight:18}}/>
          <a href='mailto:contacto@jobint.com'>contacto@jobint.com </a></button><br/>
          <button className={style.boton2}> <BsFillTelephoneFill style={{marginRight:18}}/>
          
          <a href='tel://0810-333-4499'> 0810-333-4499 </a></button>
        </div>


      </div >

          

      <div className={style.div2}>
      <p className={style.p} style={{color:"#AFA0CD"}}>© 2023 • Jobint.com</p>
          <div className={style.iconos}>
        <span className={style.icono1}><a href="https://www.instagram.com/somosjobint/" title='Instagram'><BsInstagram/></a></span>
        <span className={style.icono}><a href="https://www.linkedin.com/company/jobint/" title='Linkedin'><BsLinkedin/></a></span>
        </div>
        <p className={style.p}> <Link href='/'>Back to top</Link></p>

      </div>





    </div>
  )
}

export default Footer