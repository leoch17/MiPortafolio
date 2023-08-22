import { useEffect, useState } from "react";

export default function Skills() {
  const [extraClasses, setExtraClasses] = useState('');
  return (
    <section id="skills">
      <div className="center">
        <h2>Habilidades</h2>
        <div className={extraClasses + "skills-container"}>
          <div className="skill-box"><img src="/img/reactjs.png" alt="" /><span>React JS</span></div>
          <div className="skill-box"><img src="/img/python.png" alt="" /><span>Python</span></div>
          <div className="skill-box"><img src="/img/reactjs.png" alt="" /><span>React Native</span></div>
          <div className="skill-box"><img src="/img/typescript.png" alt="" /><span>TypeScript</span></div>
          <div className="skill-box"><img src="/img/js.png" alt="" /><span>JavaScript</span></div>
          <div className="skill-box"><img src="/img/nodejs.png" alt="" /><span>Node JS</span></div>
          <div className="skill-box"><img src="/img/mysql.png" alt="" /><span>MySQL</span></div>
          <div className="skill-box"><img src="/img/postgresql.png" alt="" /><span>PostgreSQL</span></div>
          <div className="skill-box"><img src="/img/php.png" alt="" /><span>PHP</span></div>
          <div className="skill-box"><img src="/img/bootstrap.png" alt="" /><span>Bootstrap</span></div>
          <div className="skill-box"><img src="/img/html-5.png" alt="" /><span>HTML</span></div>
          <div className="skill-box"><img src="/img/css-3.png" alt="" /><span>CSS</span></div>

        </div>
      </div>
    </section>
  );
}