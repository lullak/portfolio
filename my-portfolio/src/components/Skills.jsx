import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../index.css";

const Skills = () => (
  <section id="skills" className="container my-5">
    <div className="row">
      <article className="col-md-6 col-12">
        <h2>Skills</h2>
        <ul>
          <li>C# .NET</li>
          <li>ASP .Net</li>
          <li>Database (EFCore, ADO.Net, T-SQL, MongoDB)</li>
          <li>Frontend (JavaScript, Typescript, React, Angular, HTML, and CSS)</li>
          <li>Object-Oriented Analysis and Design</li>
          <li>Data Communication and Security</li>
          <li>DevOps</li>
        </ul>
      </article>
      <article className="col-md-6 col-12">
        <h2>Portfolio</h2>
        <ul>
          <li><a href="https://github.com/lullak/RPGGameIsengard" target="_blank" rel="noreferrer">Text-based RPG game created in C#</a></li>
          <li><a href="https://github.com/lullak/HotelApp" target="_blank" rel="noreferrer">Hotel management system created in C# using EF Core</a></li>
          <li><a href="https://github.com/lullak/ShotgunGame" target="_blank" rel="noreferrer">Shotgun Game created in C#</a></li>
          <li><a href="https://github.com/lullak/HotelApp" target="_blank" rel="noreferrer">Advertisement app created in C# using ADO.NET</a></li>
        </ul>
      </article>
    </div>
  </section>
);

export default Skills;