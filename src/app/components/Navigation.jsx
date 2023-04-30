
import Link from "next/link";
import style from "./Navigation.module.css";
import { BsInstagram, BsLinkedin } from 'react-icons/bs';


export function Navigation() {

  
  return (
    <header className={style.header}>
      <nav className={style.nav}>
      <Link href='/' style={{marginBottom:"4%"}}>
        <img src="https://www.jobint.com/wp-content/uploads/2022/05/logo-jobint.png" alt="jobint" className={style.imagen} />
        </Link>
        <ul className={style.ul}>
        <li className={style.li}>
            <Link href='/'>
              <span>Home</span>
            </Link>
          </li>
          <li className={style.li}>
            <Link href='/WhoWeAre'>
              <span>Quiénes somos</span>
            </Link>
          </li>
          <li className={style.li}>
            <Link href='#seccion2'>
              <span>Soluciones</span>
            </Link>
          </li>
          <li className={style.li}>
            <Link href='https://jobint.hiringroom.com/jobs'>
              <span>Sumate</span>
            </Link>
          </li>
          <li className={style.li}>
            <Link href='#seccion3'>
              <span>Contacto</span>
            </Link>
          </li>
        </ul>
        <div className={style.iconos}>
        <span className={style.icono}><a href="https://www.instagram.com/somosjobint/"><BsInstagram/></a></span>
        <span className={style.icono}><a href="https://www.linkedin.com/company/jobint/"><BsLinkedin/></a></span>
        </div>
      </nav>

     
      
    </header>
  );
}
