import React from 'react';
import { Container } from 'react-bootstrap';
import { Card, Button, Row, Col } from "react-bootstrap";
import '../Content.css';

const PropertiesStyling = () => {
  return (
    <Container className="content-intro">
      <h2 id='properties' className="mb-3">Properties & Styling</h2>
      <hr className="my-4" />
      <p>&nbsp;</p>

    <h5 className="text-muted mb-4"><strong>Layout Properties</strong></h5>
    <ul>
      <li><b>row [INT]</b>: The grid row index for this component.</li>
      <li><b>column [INT]</b>: The grid column index for this component.</li>
      <li><b>rowSpan [INT]</b>: Number of grid rows this component should span.</li>
      <li><b>columnSpan [INT]</b>: Number of grid columns this component should span.</li>
      <li><b>alignment [CENTER|TOP_LEFT|TOP_RIGHT|BOTTOM_LEFT|BOTTOM_RIGHT]</b>: Content alignment within its cell or container.</li>
      <li><b>padding [INT]</b>: Space inside component edges (pixels).</li>
      <li><b>spacing [INT]</b>: Space between this and adjacent components (pixels).</li>
      <li><b>margin [INT]</b>: External space around the component (pixels).</li>
      <li><b>hgrow [BOOLEAN]</b>: Allow the component to grow horizontally.</li>
      <li><b>vgrow [BOOLEAN]</b>: Allow the component to grow vertically.</li>
      <li><b>visibleIf [STRING]</b>: Only show component if the condition evaluates to true (e.g. visibleIf "user == 'admin'").</li>
    </ul>


<p>&nbsp;</p>
<h5 className="text-muted mb-4"><strong>Style Properties</strong></h5>
    <ul>
      <li><b>backgroundColor [STRING]</b>: Set the background color (e.g. "#F0F0F0", "blue").</li>
      <li><b>borderColor [STRING]</b>: Set the border color.</li>
      <li><b>borderWidth [INT]</b>: Width of component border (pixels).</li>
      <li><b>opacity [FLOAT]</b>: 0.0 (completely transparent) to 1.0 (fully opaque).</li>
      <li><b>visible [BOOLEAN]</b>: Show or hide the component.</li>
      <li><b>styleClass [STRING]</b>: Apply a custom CSS class to the component.</li>
    </ul>


<p>&nbsp;</p>
<h5 className="text-muted mb-4"><strong>Animation & Effects</strong></h5>

    <ul>
      <li><b>animate [fade|rotate|scale|translate] [duration INT] [cycleCount INT] [autoReverse BOOLEAN]</b>: Animate a component (e.g., fade in/out, rotate, etc.).</li>
      <li><b>effect [dropShadow|glow|bloom|sepia|gaussianBlur]</b>: Add a visual effect.</li>
    </ul>
    <p>
        <i>Example:</i>
        <Card className="bg-white border rounded shadow-sm">
        <Card.Body className="bg-light text-dark">
       <code>animate fade duration 4000</code> <br/>
      <code>effect dropShadow</code>
      </Card.Body>
    </Card>
    </p>
  



<p>&nbsp;</p>
<h5 className="text-muted mb-4"><strong>Tooltips</strong></h5>
    <ul>
      <li><b>tooltip [STRING]</b>: Shows help text on hover (e.g. tooltip "Click to submit").</li>
    </ul>

    </Container>
  );
};

export default PropertiesStyling;  