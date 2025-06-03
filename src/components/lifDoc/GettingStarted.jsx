import React from 'react';
import { Container } from 'react-bootstrap';
import { Table, Tabs, Tab } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import '../Content.css';


const GettingStarted = () => {
  const windowsDownloads = [
    {
      description: "win-x86 (Windows 32-bit) Compressed Archive",
      size: "98.8 MB",
      link: "https://github.com/MushrooM2027/LIF/releases/download/compiler/LIFStudio_32.zip"
    },
    {
      description: "win-x64 (Windows 64-bit) Compressed Archive",
      size: "104.2 MB",
      link: "https://github.com/MushrooM2027/LIF/releases/download/compiler/LIFStudio.zip"
    },
    

  ];


  return (
    <Container className="content-intro">
      <h2 id='getting-started' className="mb-3">Getting Started</h2>
      <hr className="my-4" />

      <p>
        To help users quickly set up and start using the DSLCompiler, this section outlines the installation steps, 
        prerequisites, and different options for running the tool. Whether you're a beginner or an advanced developer,
         you can choose between using the lightweight LIF Studio editor or directly integrating the <strong>DSLCompiler JAR </strong>
         into your workflow.
      </p>

      <h5 id='installation' className="text-muted mb-4"><strong>Installation</strong></h5>
      <h5 className="text-muted mb-4"><i><bold>Option 1: Using LIF Studio</bold></i></h5>

      <p>
        LIF Studio is a user-friendly desktop application similar to Notepad, designed specifically to work with the 
        DSLCompiler. It provides a built-in text editor with syntax highlighting and a <strong>"Compile"</strong> button for one-click 
        output execution.
      </p>

    {/*Download link table---> */}
      <Tabs defaultActiveKey="windows" id="download-tabs" className="mb-3">
      <Tab eventKey="windows" title="Windows">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Product/file description</th>
              <th>File size</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {windowsDownloads.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.size}</td>
                <td>
                  <Nav.Link
                    as="a"
                    href={item.link}
                    download="LIFStudio"
                    style={{ textDecoration: "underline", color: "blue"  }}
                  >
                    Click Here
                  </Nav.Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Tab>

      <Tab eventKey="macos" title="macOS">
      <p>Coming soon......</p>
      </Tab>
      <Tab eventKey="linux" title="Linux">
      <p>Coming soon......</p>
      </Tab>
    </Tabs>
    {/* <-------end */}
    <p></p>


    <h5 className="text-muted mb-4"><i><bold>Option 2: Using DSLCompiler JAR Manually</bold></i></h5>

    <p>
      For developers who want to integrate the compiler into their own projects or workflows, 
      the standalone JAR file offers full control.
    </p>

    <p><strong>Installation Steps:</strong></p>
<p>
  1. Download the file{" "}
  <a href="Getting Startedhttps://github.com/MushrooM2027/LIF/releases/download/compiler/LIFCompiler.jar" download="LIFCompiler.jar" style={{ textDecoration: "none" }}>
    <i><strong style={{ color: "#69b41e" }}>LIFCompiler.jar</strong></i>
  </a>
  <br />
  2. Create your <i><strong style={{ color: "#69b41e" }}>.ui</strong></i> file using any text editor or IDE
  <br />
  3. Open your terminal/command prompt and run: <br />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <i><strong style={{ color: "#69b41e" }}>java -jar path/to/your/jar input.ui</strong></i>
  <br />
</p>

    <p>&nbsp;</p>
    <h5 className="text-muted mb-4"><strong>Prerequisites</strong></h5>
    <p>
      To run the LIF Compiler, you need to have Java installed on your system.
      You can download the latest version of Java from the official <a href="https://www.oracle.com/in/java/technologies/downloads/" target="_blank">Oracle</a> website.
    </p>

    </Container>
  );
};

export default GettingStarted;
