import { useEffect, useState } from "react";

export default function Intro() {
  const [classes, setClasses] = useState('');

  useEffect(() => {
    setClasses('visible');
  }, []);

  return (
    <section id="intro" className={classes}>
      <div>
        <p>Soy <span>Leonardo Chourio</span><br />Desarrollador Front-end,<br />de Páginas y Aplicaciones Webs y Aplicaciones Móviles</p>
        <br /><br />
        <a href="#contact">Contactame</a>
      </div>
      <div>
        <img src="/img/photo-v2.png" alt="" />
      </div>
    </section>
  );
}