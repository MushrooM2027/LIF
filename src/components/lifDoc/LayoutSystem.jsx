import React from 'react';
import { Container } from 'react-bootstrap';
import { Card, Button, Row, Col } from "react-bootstrap";
import '../Content.css';

const LayoutSystem = () => {
  return (
    <Container className="content-intro">
      <h2 id='layout' className="mb-3">Layout System</h2>
      <hr className="my-4" />
      <p>&nbsp;</p>

      <h5 className="text-muted mb-4"><strong>Layout Types</strong></h5>

    <ul>
      <li><b>VBox</b>: Vertical stack. Components arranged top-to-bottom.</li>
      <li><b>HBox</b>: Horizontal stack. Components arranged left-to-right.</li>
      <li><b>GridPane</b>: 2D table/grid. Place components in numbered cells (rows/columns).</li>
      <li><b>Pane</b>: Freeform absolute-positioned container.</li>
      <li><b>BorderPane</b>: Five regions (top, left, center, right, bottom).</li>
      <li><b>StackPane</b>: All components laid on top of each other.</li>
      <li><b>FlowPane</b>: Wraps children as needed, left-to-right then top-to-bottom.</li>
      <li><b>TilePane</b>: Uniformly sized grid tiles, wrapping as needed.</li>
    </ul>
    <p>
      <b>Usage Example:</b><br/>
      <Card className="bg-white border rounded shadow-sm">
  <Card.Body className="bg-light text-dark">
      <code>layout type GridPane padding 20 spacing 10</code>
  </Card.Body>
</Card>
    </p>


<p>&nbsp;</p>
<h5 className="text-muted mb-4"><strong>Declaring a Layout</strong></h5>
    <p>
      <b>Standalone layout:</b><br/>
      <Card className="bg-white border rounded shadow-sm">
  <Card.Body className="bg-light text-dark">
      <code>layout type VBox padding 20 spacing 10 alignment CENTER</code>
    </Card.Body>
    </Card>
    </p>
    <p>
      <b>Window layout (set as main container):</b><br/>
      <Card className="bg-white border rounded shadow-sm">
  <Card.Body className="bg-light text-dark">
      <code>
      create window "Main" layout HBox {'{'}<br/>
      &nbsp;&nbsp;add button "A"<br/>
      &nbsp;&nbsp;add button "B"<br/>
      {'}'}
      </code>
    </Card.Body>
    </Card>
    </p>
    <p>
      <i>NOTE:</i> If omitted, default layout may be used (typically Pane or VBox).
    </p>
  


<p>&nbsp;</p>
<h5 className="text-muted mb-4"><strong>Component Layout Properties</strong></h5>

    <p>The following properties can be provided per component, controlling positioning and spacing inside containers:</p>
    <ul>
      <li><b>row [INT]</b>: Row index for GridPane.</li>
      <li><b>column [INT]</b>: Column index for GridPane.</li>
      <li><b>rowSpan [INT]</b>: Number of grid rows this component should span.</li>
      <li><b>columnSpan [INT]</b>: Number of grid columns this component should span.</li>
      <li><b>alignment [CENTER|TOP_LEFT|TOP_RIGHT|BOTTOM_LEFT|BOTTOM_RIGHT]</b>: Component alignment within its cell.</li>
      <li><b>padding [INT]</b>: Internal component padding (pixels).</li>
      <li><b>spacing [INT]</b>: Additional spacing around the component.</li>
      <li><b>margin [INT]</b>: External space (around the edges).</li>
      <li><b>hgrow [BOOLEAN]</b>: Whether this component grows horizontally (HBox/VBox/GridPane).</li>
      <li><b>vgrow [BOOLEAN]</b>: Whether this component grows vertically.</li>
    </ul>
    <p>
      <b>Example:</b><br/>
      <Card className="bg-white border rounded shadow-sm">
    <Card.Body className="bg-light text-dark">
      <code>
      add label "Name"<br/>
      &nbsp;&nbsp;row 0 column 0 alignment TOP_RIGHT margin 5
      </code>
    </Card.Body>
    </Card>
    </p>


<p>&nbsp;</p>
<h5 className="text-muted mb-4"><strong>BorderPane Regions</strong></h5>
    <ul>
      <li><b>top</b>: Component at the top.</li>
      <li><b>left</b>: Component at the left.</li>
      <li><b>center</b>: Main content in the middle.</li>
      <li><b>right</b>: Component at the right.</li>
      <li><b>bottom</b>: Component at the bottom.</li>
    </ul>
    <p>
      <b>Usage:</b><br/>
      <Card className="bg-white border rounded shadow-sm">
  <Card.Body className="bg-light text-dark">
      <code>
      add label "Header" alignment CENTER row 0 column 1<br/>
      add textArea id notes center
      </code>
  </Card.Body>
</Card>
    </p>


    </Container>
  );
};

export default LayoutSystem;  