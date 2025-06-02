import React from 'react';
import { Container } from 'react-bootstrap';
import '../Content.css';

const Introduction = () => {
  return (
    <Container className="content-intro">
      <h2 id='introduction' className="mb-3">Introduction</h2>
      <hr className="my-4" />
      <p>
        In the realm of modern application development, designing user interfaces (UI) using traditional programming 
        languages often involves verbose syntax, steep learning curves, and time-consuming boilerplate code. 
        To simplify the process and bring the power of natural and intuitive design to developers, we present a 
        <strong> Domain-Specific Language</strong> (DSL) designed for creating JavaFX-based GUIs easily. This DSL allows developers 
        to describe user interfaces using a readable and structured <strong>.ui </strong> file, abstracting away the complexities of 
        native JavaFX programming.
      </p>

      <p>
        At the core of this system lies the <strong>DSLCompiler</strong>, a powerful Java-based tool that reads .ui files written in our 
        custom DSL, parses them using ANTLR (Another Tool for Language Recognition), and generates JavaFX applications 
        automatically. Developers no longer need to manually write repetitive UI code; instead, they can describe the 
        layout, elements, styling, and events in a concise, declarative format. This leads to faster development, reduced 
        errors, and a better focus on interface design.
      </p>

      <p>
        To make this process even more accessible and user-friendly, we’ve created <strong>LIF Studio</strong>, a lightweight and interactive 
        desktop code editor modeled after Notepad. LIF Studio allows users to open, write, edit, save, and compile .ui DSL 
        files directly from the interface. The editor supports syntax highlighting and user-friendly navigation, enhancing 
        the productivity of both beginner and experienced developers.
      </p>
      <p>
        This documentation serves as a complete guide to understanding the components of the project, including grammar design, 
        compiler workflow, LIF Studio implementation, and system architecture. It also covers testing, deployment, and 
        future scope, providing a comprehensive look into how this system transforms DSL input into a fully functional GUI 
        output. Whether you're a developer, researcher, or student, this tool aims to make GUI development faster, easier, 
        and more intuitive.
      </p>

    </Container>
  );
};

export default Introduction;
