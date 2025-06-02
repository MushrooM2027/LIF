import { Container, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Content.css';

const Content = () => {
  return (
    <Container className="content-intro my-5">
      <h1>Emphasizes UI creativity<br />and visual design.</h1>
      <Container className="button-row text-center my-4">
        <Button
          as={HashLink}
          smooth
          to="/LifDocumentation#installation"
          className="download-button"
        >
          Download LifStudio
        </Button>

        <Button 
          className="download-button" 
          href='\jar\LIFCompiler.jar' 
          download="LIFCompiler.jar"
        >
          Download jar file
        </Button>
        
      </Container>
      <div className="image-border-wrapper">
        <img 
          src="../../src/assets/001.jpeg" 
          alt="LifStudio" 
          className="img-fluid"
        />
      </div>
      <p>&nbsp;</p>

      <h2 className="mb-3">About LIF Language</h2>
      <hr className="my-4" />
      <p>
        <strong>LIF Language</strong> is a <strong>Domain-Specific Language (DSL)</strong> designed to simplify and speed up the creation of 
        graphical user interfaces (GUIs) using the JavaFX framework. It enables users to describe user interfaces 
        using clean, readable, and natural-language-like syntax, reducing the need to write verbose and complex Java code.
      </p>

      <h5 className="text-muted mb-4">Key Features</h5>
      {/* NO <p> here */}
      <ul>
        <li>Simple Syntax: Intuitive, easy-to-read DSL commands for layout, components, and events.</li>
        <li>GUI Elements: Supports labels, buttons, sliders, checkboxes, images, input fields, and more.</li>
        <li>Layouts: Organize components using VBox, HBox, GridPane, BorderPane, etc.</li>
        <li>Styling: Control font, color, size, spacing, padding, and alignment using plain text.</li>
        <li>Event Handling: Easily attach events like onClick, onHover, and onChange.</li>
        <li>Animations & Effects: Include built-in support for fade, rotate, move, and visual effects like shadow and blur.</li>
        <li>No Compilation Required: Interfaces can be rendered directly from .ui files — ideal for prototyping and teaching.</li>
      </ul>

      <h5 className="text-muted mb-4">Use Cases</h5>
      <ul>
        <li>Rapid UI prototyping for Java desktop apps.</li>
        <li>Teaching tool for students learning GUI and compiler design.</li>
        <li>Internal tools and layout experiments for JavaFX projects.</li>
        <li>Low-code development environments.</li>
      </ul>
      <p>&nbsp;</p>

      <h2 className="mb-3">About LIF Studio</h2>
      <hr className="my-4" />
      <p>
        <strong>LIF Studio</strong> is a custom-built, lightweight desktop application designed as the <strong>official editor and launcher</strong> for LIF (.ui) files. 
        It provides a simple, user-friendly environment for writing, editing, and instantly executing GUI scripts written in the 
        <strong>Language for Interface Formation (LIF).</strong>
      </p>

      <h5 className="text-muted mb-4">How It Works</h5>
      {/* NO <p> here */}
      <ol>
        <li>User writes a .ui file using simple LIF syntax in the editor.</li>
        <li>On clicking Run, the studio:
          <ul>
            <li>Saves the current .ui file.</li>
            <li>Invokes the LIF DSL compiler in the background.</li>
            <li>Automatically compiles and executes the resulting JavaFX interface.</li>
          </ul>
        </li>
        <li>The GUI window opens instantly — no manual steps, no Java coding needed.</li>
      </ol>

      <h5 className="text-muted mb-4">Purpose of LIF Studio</h5>
      <p>
        LIF Studio was created to simplify the user experience by:
      </p>
      <ul>
        <li>Eliminating the need to use command-line tools or Java IDEs.</li>
        <li>Providing an all-in-one platform to write, compile, and run .ui files.</li>
        <li>Making the process of GUI development feel as easy as using a notepad.</li>
      </ul>
      <p>&nbsp;</p>

      <h2 className="mb-3">About LIF Documentation</h2>
      <hr className="my-4" />
      <p> 
        LIF (Language for Interface Formation) is a domain-specific language designed to simplify JavaFX GUI development through 
        a natural-language-like syntax. It allows users to build user interfaces by writing readable commands in .ui files, 
        which are then parsed and executed using a custom Java-based compiler. The language supports common UI elements like 
        labels, buttons, text fields, images, layout structures, styling options, event handling, and animations. 
        LIF Studio, a lightweight desktop editor, provides an integrated environment to write, run, and test...
      </p>
      <nav className="link"><a href="/LifDocumentation">Read More</a></nav>
    </Container>
    
  );
};

export default Content;