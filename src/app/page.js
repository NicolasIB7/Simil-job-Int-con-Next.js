// import Image from 'next/image'
// import styles from './page.module.css';
// import Link from "next/link";
// import Contact from "./components/Contact";
// import Solutions from './components/Solutions';
// import Clientes from './components/Clientes';


// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.div}>
//       <h1 className={styles.h1}>
// Somos una HR tech: acercamos soluciones</h1>
// <h3 className={styles.h3}>Nuestro objetivo es brindar soluciones tecnológicas para el mercado laboral en toda la región.</h3>
// <button className={styles.button}>
//   <Link href='/'>
//   Conocenos
//   </Link >
//   </button>
// </div>





//     </main>
//   )
// }



import Contact from "./components/Contact";
import Solutions from './components/Solutions';
import Clientes from './components/Clientes';
import Homes from "./components/Home";


export default function Home() {
  return (
   <>

   <br/><br/><br/><br/><br/><br/><br/>
   <Homes/>
    <Solutions />
           <Clientes />
           <Contact />
   
   </>
  )
}