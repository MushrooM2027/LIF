import React from 'react';
import { Container } from 'react-bootstrap';
import './Content.css';

const FAQs = () => {
  return (
    <Container id='faqs' className="content-intro">
      <h2 className="mb-3">Frequently Asked Questions (FAQs)</h2>
      <hr className="my-4" />
      <p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong style={{ color: '#0d5b11' }}>Q. What is LIF?</strong></h5>
      <p>
        LIF (Language for Interface Formation) is a domain-specific language created to make JavaFX GUI development easier. 
        It allows users to build graphical interfaces using simple, readable commands instead of writing long and complex Java code. 
        It is ideal for fast prototyping and learning.<br></br>&nbsp;
      </p>

      <h5 className="text-muted mb-4"><strong style={{ color: '#0d5b11' }}>Q. Who can use LIF?</strong></h5>
      <p>
        Anyone can use LIF   — it’s designed for students, beginners, educators, and developers. Whether you have little programming experience
         or want to save time while designing UIs, LIF is user-friendly and accessible.<br></br>&nbsp;
      </p>

      <h5 className="text-muted mb-4"><strong style={{ color: '#0d5b11' }}>Q. Do I need to know Java to use LIF?</strong></h5>
      <p>
        No, you don’t need Java knowledge. LIF uses a natural-language-like syntax that hides the complexity of JavaFX. You simply describe 
        the interface, and the tool handles the Java code generation behind the scenes.<br></br>&nbsp;
      </p>

      <h5 className="text-muted mb-4"><strong style={{ color: '#0d5b11' }}>Q. How do I run LIF scripts?</strong></h5>
      <p>
        You write <i style={{ color: '#0d5b11' }}>.ui</i> scripts in LIF Studio, a simple code editor designed for this  . Just click the “Run” button, and 
        the interface appears instantly — no manual compiling or coding required.<br></br>&nbsp;
      </p>

      <h5 className="text-muted mb-4"><strong style={{ color: '#0d5b11' }}>Q. What kind of components can I create?</strong></h5>
      <p>
        You can create a wide range of UI components like buttons, labels, text fields, sliders, checkboxes, and images. LIF also supports layouts 
        (like VBox, HBox), styling (fonts, colors), events (like button clicks), and even basic animations.<br></br>&nbsp;
      </p>

      <h5 className="text-muted mb-4"><strong style={{ color: '#0d5b11' }}>Q. What tools are used to build LIF?</strong></h5>
      <p>
        LIF is powered by:
        <ul>
          <li>Java and JavaFX for GUI generation.</li>
          <li>ANTLR for defining and parsing the custom language.</li>
          <li>A custom visitor class for converting   code to JavaFX.</li>
          <li>WPF and C# for building LIF Studio.</li>
          <li>React and Bootstrap for the documentation and download website.</li>
        </ul>
        &nbsp;
      </p>

      <h5 className="text-muted mb-4"><strong style={{ color: '#0d5b11' }}>Q. Can I use LIF on any operating system?</strong></h5>
      <p>
        Yes, The core compiler is a Java JAR file, so it works on any OS with Java installed (Windows, macOS, Linux). 
        LIF Studio is currently Windows-based, but cross-platform support can be added in the future.<br></br>&nbsp;
      </p>

      <h5 className="text-muted mb-4"><strong style={{ color: '#0d5b11' }}>Q. Is LIF open-source or free to use?</strong></h5>
      <p>
        LIF is currently a student project and is free to use. The goal is to eventually open-source it so the developer community can contribute, 
        improve features, and help it grow further.<br></br>&nbsp;
      </p>

      <h5 className="text-muted mb-4"><strong style={{ color: '#0d5b11' }}>Q. Can I convert my JavaFX code to LIF?</strong></h5>
      <p>
        Not yet. The current version only supports writing LIF code that generates JavaFX interfaces. But future versions may include a reverse 
        compiler that converts JavaFX applications into .ui scripts for easier editing.<br></br>&nbsp;
      </p>

      <h5 className="text-muted mb-4"><strong style={{ color: '#0d5b11' }}>Q. Where can I download LIF Studio and learn more?</strong></h5>
      <p>
        All project files, including LIF Studio, sample code, documentation, and tutorials, are available on the official project website. 
        The site also includes a FAQ section and step-by-step usage guide for beginners.<br></br>&nbsp;
      </p>

    </Container>
  );
};

export default FAQs;
