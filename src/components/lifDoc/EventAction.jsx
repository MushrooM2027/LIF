import React from 'react';
import { Container } from 'react-bootstrap';
import { Card, Button, Row, Col } from "react-bootstrap";
import '../Content.css';

const EventAction = () => {
  return (
    <Container className="content-intro">
      <h2 id='events' className="mb-3">Events & Action</h2>
      <hr className="my-4" />
      <p>&nbsp;</p>

    <h5 className="text-muted mb-4"><strong>Binding</strong></h5>
    <ul>
      <li><b>bindTo [IDENTIFIER]</b>: Binds the value/state of the component to a variable or model property (e.g. bindTo userName).</li>
    </ul>

    
<p>&nbsp;</p>
<h5 className="text-muted mb-4"><strong>Event Handling</strong></h5>
    <ul>
      <li><b>onClick eventAction</b>: Defines an action when the component is clicked.</li>
      <li><b>onChange eventAction</b>: Action when content/value changes (fields, sliders, etc.).</li>
      <li><b>onToggle eventAction</b>: Action when checkbox or toggle is changed.</li>
      <li><b>onSelect eventAction</b>: Action when selection changes (dropdown, list, etc.).</li>
      <li><b>onEvent "eventName" do eventAction</b>: Listen for custom or advanced events.</li>
    </ul>
    <p>
      <i>eventAction</i> examples:<br/>
      <Card className="bg-white border rounded shadow-sm">
  <Card.Body className="bg-light text-dark">
      <code>showAlert "Saved!";<br/>print "Clicked!";<br/>call saveData();<br/>set userName to "Alice"</code>
        </Card.Body>
        </Card>
    </p>


<p>&nbsp;</p>
<h5 className="text-muted mb-4"><strong>Conditional Visibility</strong></h5>
    <ul>
      <li><b>visibleIf [STRING/EXPRESSION]</b>: Only show if condition is true (e.g. visibleIf "isAdmin == true").</li>
      <li><b>visible [BOOLEAN]</b>: Show (true) or hide (false) directly.</li>
    </ul>
 



    </Container>
  );
};

export default EventAction;  