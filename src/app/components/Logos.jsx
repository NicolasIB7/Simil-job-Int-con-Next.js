import React from "react";
import style from "./Logos.module.css";

function Logos() {
  return (
    <div>
      <div className={style.logos1}>
        <img
          src='https://www.jobint.com/wp-content/uploads/2022/05/Bumeran-1.png'
          alt='bumeran'
        />
        <img
          src='https://www.jobint.com/wp-content/uploads/2022/05/Laborum-1.png'
          alt='laborum'
        />
        <img
          src='https://www.jobint.com/wp-content/uploads/2022/05/Konzerta-1.png'
          alt='konzerta'
        />
        <img
          src='https://www.jobint.com/wp-content/uploads/2022/05/Multitrabajos-1.png'
          alt='multitrabajos'
        />
      </div>
      <div className={style.logos2}>
        <img
          src='https://www.jobint.com/wp-content/uploads/2022/05/ZonaJobs.png'
          alt='zj'
        />
        <img
          src='https://www.jobint.com/wp-content/uploads/2022/05/Hiring-Room-1.png'
          alt='hr'
        />
        <img
          src='https://www.jobint.com/wp-content/uploads/2022/05/Bumeran-Selecta-1.png'
          alt='bumerang'
        />
      </div>
    </div>
  );
}

export default Logos;
