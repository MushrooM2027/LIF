import React from 'react';
import { Container } from 'react-bootstrap';
import { Card, Button, Row, Col } from "react-bootstrap";
import '../Content.css';

const DSLSyntax = () => {
  return (
    <Container id='dsl' className="content-intro">
      <h2 className="mb-3">DSL Syntax Reference</h2>
      <hr className="my-4" />
      <p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>Global Style Import</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
          importStyle "path/to/FileName.css" 
        </code>
      </Card.Body>
    </Card>

<p>or</p>

    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
          importStyle "path\\to\\FileName.css" 
        </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
        This allows you to apply global styles to your UI components.
      </p>



<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>Window Declaration</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
          create window 'windowName' windowOption*; <br />
          {"{"}<br />
          &nbsp;&nbsp;add label "Hello World";<br />
          {"}"}
        </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <strong>Window options</strong><br/>
        <ul>
          <li><strong>id</strong>: variableName</li>
          <li><strong>size</strong>: INT 'x' INT(e.g., size 800x600)</li>
          <li><strong>resizable</strong>: true | false</li>
          <li><strong>position</strong>: x INT y INT</li>
          <li><strong>modality</strong>: 'NONE' | 'WINDOW_MODAL' | 'APPLICATION_MODAL'</li>
          <li><strong>stageStyle</strong>: 'DECORATED' | 'UNDECORATED' | 'TRANSPARENT' | 'UTILITY' | 'UNIFIED'</li>
          <li><strong>layout</strong>: 'VBox' | 'HBox' | 'GridPane' | 'Pane' | 'BorderPane' | 'StackPane' | 'FlowPane' | 'TilePane'</li>
        </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text mb-4"><strong>Adding a component</strong></h5>
      <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
        add componentNamehere        
        </code>
      </Card.Body>
    </Card>
    <p>&nbsp;<br/>Example:</p>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
        add label        
        </code>
      </Card.Body>
    </Card>
    

    <p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>Supported Components</strong></h5>
      <ul>
        <li>label</li>
        <li>textfield</li>
        <li>passwordField</li>
        <li>textArea</li>
        <li>checkbox</li>
        <li>dropdown</li>
        <li>button</li>
        <li>image</li>
        <li>slider</li>
        <li>progressBar</li>
        <li>tableView</li>
        <li>radioButton</li>
        <li>listView</li>
        <li>menuBar</li>
        <li>toolBar</li>
        <li>datePicker</li>
        <li>webView</li>
        <li>tabPane</li>
        <li>accordion</li>
        <li>titledPane</li>
        <li>treeView</li>
        <li>spinner</li>
        <li>colorPicker</li>
        <li>fileChooser</li>
        <li>directoryChooser</li>
        <li>canvas</li>
        <li>mediaView</li>
        <li>scrollPane</li>
        <li>splitPane</li>
        <li>treeTableView</li>
        <li>dialog</li>
        <li>chart</li>
        <li>choiceBox</li>
        <li>hyperlink</li>
        <li>separator</li>
        <li>progressIndicator</li>
        <li>pagination</li>
        <li>tooltip</li>
        <li>contextMenu</li>
        <li>htmlEditor</li>
        <li>transform</li>
        <li>box</li>
        <li>sphere</li>
        <li>cylinder</li>
        <li>group</li>
        <li>phongMaterial</li>
        <li>pointLight</li>
        <li>ambientLight</li>
        <li>perspectiveCamera</li>
        <li>subScene</li>
      </ul>




      <p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>labelComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
          add label "Your Label Text" labelOption*<br />
        </code>
      </Card.Body>
    </Card>
<p>&nbsp;<br></br>
  <h5 className="text-muted mb-4">labelOption</h5>
        {/* NO <p> here */}
        <ol>
          <li>labelProperty
            <ul>
              <li><code>'font'</code> STRING</li>
              <li><code>'size'</code> INT</li>
              <li><code>'color'</code> STRING</li>
              <li><code>'bold'</code></li>
              <li><code>'italic'</code></li>
              <li><code>'tooltip'</code> STRING</li>
              <li><code>eventBinding</code></li>
            </ul>
          </li>
          <p> </p>
          <li>layoutProperty</li>
          <ul>
            <li><code>'row'</code> INT</li>
            <li><code>'column'</code> INT</li>
            <li><code>'rowSpan'</code> INT</li>
            <li><code>'columnSpan'</code> INT</li>
            <li><code>'alignment'</code> alignmentType</li>
            <li><code>'padding'</code> INT</li>
            <li><code>'spacing'</code> INT</li>
            <li><code>'margin'</code> INT</li>
            <li><code>'hgrow'</code> BOOLEAN</li>
            <li><code>'vgrow'</code> BOOLEAN</li>
            <li><code>'visibleIf'</code> STRING</li>
            <li><code>eventBinding</code></li>
          </ul>
          <p> </p>
          <li>animationBinding</li>
          <Card className="bg-white border rounded shadow-sm">
            <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
              <small className="text-muted">LIF</small>
            </Card.Header>
            <Card.Body className="bg-light text-dark">
              <code className="text-success">
                animate animationType* duration* cycleCount* autoReverse*<br />
              </code>
            </Card.Body>
          </Card>
          <ul>
            <li><strong>id</strong>: variableName</li>
            <li>animationType: fade | rotate | move | scale | translate</li>
            <li>duration: INT (milliseconds)</li>
            <li>cycleCount: INT (number of times the animation should repeat)</li>
            <li>autoReverse: BOOLEAN</li>
          </ul>
          <p>&nbsp;</p>
          <li>effectBinding</li>
          <Card className="bg-white border rounded shadow-sm">
            <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
              <small className="text-muted">LIF</small>
            </Card.Header>
            <Card.Body className="bg-light text-dark">
              <code className="text-success">
                effect effectType*<br />
              </code>
            </Card.Body>
          </Card>
          <p>&nbsp;</p>
          <ul>
            <li>effectType: fade | rotate | move | scale | translate</li>
          </ul>
        </ol>
</p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>textfieldComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
          add textfield textfieldOption*<br />
        </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <strong>textfield options</strong><br/>
        <ul>
          <li><strong>id</strong>: variableName</li>
          <li><strong>placeholder[STRING]</strong>: Defines hint text that appears when the field is empty</li>
          <li><strong>width[INT]</strong>: Sets the preferred width of the textfield in pixels</li>
          <li><strong>default[STRING]</strong>: Specifies the default/initial value for the textfield</li>
          <li><strong>editable[BOOLEAN]</strong>: Controls whether the textfield can be modified by the user</li>
          <li><strong>onChange</strong>: Defines an action to execute when the textfield's content changes</li>
          <li><strong>tooltip[STRING]</strong>: Provides help text that appears when hovering over the field</li>
          <li><strong>bindTo[VARIABLE]</strong>: Binds the textfield's value to a variable or data model property</li>
        </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>passwordFieldComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
          add passwordField passwordFieldOption*<br />
        </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <strong>passwordField options</strong><br/>
        <ul>
          <li><strong>promptText[STRING]</strong>: Defines the hint text that appears when the password field is empty</li>
          <li><strong>editable[BOOLEAN]</strong>: Controls whether the password field can be modified by the user</li>
          </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>textAreaComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
          add textArea textAreaOption*<br />
        </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <strong>textArea options</strong><br/>
        <ul>
          <li><strong>id</strong>: variableName</li>
          <li><strong>promptText[STRING]</strong>: Displays hint text when the text area is empty</li>
          <li><strong>wrapText[BOOLEAN]</strong>: Controls whether text wraps to the next line when reaching the edge of the component</li>
          <li><strong>editable[BOOLEAN]</strong>: Determines if the text area content can be modified by the user</li>
          </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>checkboxComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
          add checkbox "Label" [id variableName] checkboxOption*
        </code>
      </Card.Body>
    </Card>
    <p>&nbsp;<br></br>
      <strong>checkbox options</strong><br/>
        <ul>
          <li><strong>checked</strong>: Sets the initial state of the checkbox to selected/checked</li>
          <li><strong>disable</strong>: Makes the checkbox non-interactive</li>
          <li><strong>indeterminate</strong>: Sets the checkbox to a "partially checked" or indeterminate state</li>
          <li><strong>onToggle</strong>: Defines actions to execute when the checkbox state changes</li>
          </ul>
      </p>
      


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>dropdownComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
          add dropdown [id variableName] options "Option1", "Option2", ... dropdownOption*
        </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
          <li><b>id</b>: variableName</li>
          <li><b>options[STRING]</b>: List of available items (comma-separated)</li>
          <li><b>width[INT]</b>: Dropdown width (pixels)</li>
          <li><b>multipleSelection[BOOLEAN]</b>: Allow multiple selections</li>
          <li><b>onSelect</b>: Runs action when selection changes</li>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>buttonComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add button "Label" [id variableName] [onClick eventAction] buttonOption*
              </code>
      </Card.Body>
    </Card>
    <p>&nbsp;<br></br>
    <b>button options</b>
    <ul>
      <li><b>id</b>: variableName</li>
      <li><b>width[INT]</b>: Button width (pixels)</li>
      <li><b>disabled</b>: Non-clickable state</li>
      <li><b>defaultButton</b>: Makes button respond to Enter key</li>
      <li><b>onClick</b>: Action to perform on click</li>
    </ul>
      </p>


      <p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>ImageComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
          add slider [id variableName] min INT max INT value INT sliderOption*
        </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <strong>slider options</strong><br/>
          <ul>
            <li><b>id</b>: variableName</li>
            <li><b>orientation</b>: HORIZONTAL or VERTICAL</li>
            <li><b>blockIncrement[FLOAT]</b>: Amount slider moves per step</li>
            <li><b>onValueChange</b>: Action to perform when the value changes</li>
            <li><b>bindTo</b>: Variable to bind value to</li>
          </ul>
      </p>
      


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>sliderComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
          add slider [id variableName] min INT max INT value INT sliderOption*
        </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <strong>slider options</strong><br/>
          <ul>
            <li><b>id</b>: variableName</li>
            <li><b>orientation</b>: HORIZONTAL or VERTICAL</li>
            <li><b>blockIncrement[FLOAT]</b>: Amount slider moves per step</li>
            <li><b>onValueChange</b>: Action to perform when the value changes</li>
            <li><b>bindTo</b>: Variable to bind value to</li>
          </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>progressBarComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add progressBar [id variableName] progress FLOAT progressBarOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>progressBar options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>progress[FLOAT]</b>: Value from 0.0 to 1.0</li>
        <li><b>indeterminate[BOOLEAN]</b>: Shows continuous animation</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>tableViewComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add tableView [id variableName] columns "Col1", "Col2", ... tableViewOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>tableView options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>columns[STRING]</b>: List of column names</li>
        <li><b>editable[BOOLEAN]</b>: Enable editing</li>
        <li><b>sortableColumns[BOOLEAN]</b>: Allow sorting by column</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>radioButtonComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add radioButton "Label" [id variableName] radioButtonOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>radioButton options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>selected[BOOLEAN]</b>: Default selection state</li>
        <li><b>group</b>: Group variable name for mutual exclusion</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>listViewComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add listView [id variableName] items "Item1", "Item2", ... listViewOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>listView options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>items[STRING]</b>: List of entries</li>
        <li><b>selectionMode</b>: SINGLE or MULTIPLE</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>menuBarComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
          importStyle "FileName.css"
        </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
        The CSS file should be in the same directory as the .ui file. This allows you to apply global styles to your UI components.
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>menuBarComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add menuBar {'{'} menu "File" items "Open", "Save", ... menu ... {'}'} menuBarOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>menuBar options</b>
      <ul>
        <li><b>menu[STRING]</b>: Each menu with items ("File", "Edit", etc.)</li>
        <li><b>items[STRING]</b>: Comma-separated item labels for a menu</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>toolBarComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add toolBar items "Cut", "Copy", "Paste", ... toolBarOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>toolBar options</b>
      <ul>
        <li><b>items[STRING]</b>: Comma-separated button labels</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>datePickerComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add datePicker [id variableName] datePickerOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>datePicker options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>showWeekNumbers[BOOLEAN]</b>: Show week numbers in calendar</li>
        <li><b>editable[BOOLEAN]</b>: Allow manual edit of date</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>webViewComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
          webView url "Your url here" webViewOptions*
        </code>
      </Card.Body>
    </Card>
    <strong>Window options</strong><br/>
    <ul>
      <li><strong>id</strong>: variableName</li>
      <li>duration: INT (in milliseconds)</li>
      <li>cycleCount: INT (number of times the animation should repeat)</li>
    </ul>
      


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>tabPaneComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add tabPane {'{'} tab "Tab 1" {'{'} components... {'}'} tab "Tab 2" {'{'} ... {'}'} {'}'} tabPaneOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>tabPane options</b>
      <ul>
        <li><b>tab[STRING]</b>: Label/title of tab. Tab content is a group of components.</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>accordionComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add accordion {'{'} titledPane "Pane 1" {'{'} ... {'}'} titledPane ... {'}'} accordionOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>accordion options</b>
      <ul>
        <li><b>titledPane[STRING]</b>: Collapsible pane title with inner content.</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>titledPaneComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add titledPane "Title" {'{'} components... {'}'} titledPaneOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>titledPane options</b>
      <ul>
        <li><b>title[STRING]</b>: Pane title</li>
        <li>Pane content is a group of components.</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>treeViewComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add treeView [id variableName] treeViewOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>treeView options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>showRoot[BOOLEAN]</b>: Show root node</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>spinnerComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add spinner [id variableName] min INT max INT spinnerOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>spinner options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>min[INT]</b>: Minimum value</li>
        <li><b>max[INT]</b>: Maximum value</li>
        <li><b>editable[BOOLEAN]</b>: Allow direct user edit</li>
        <li><b>initialValue[INT]</b>: Starting value</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>colorPickerComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add colorPicker [id variableName] colorPickerOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>colorPicker options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>defaultColor[STRING]</b>: Initial color (e.g. "#FF0000" or "red")</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>fileChooserComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add fileChooser [id variableName] title "Title" fileChooserOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>fileChooser options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>title[STRING]</b>: Dialog window title</li>
        <li><b>initialDirectory[STRING]</b>: Initial directory path</li>
        <li><b>extensionFilters</b>: Comma-separated extensions (".jpg", ".pdf", ...)</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>directoryChooserComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add directoryChooser [id variableName] title "Title" directoryChooserOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>directoryChooser options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>title[STRING]</b>: Dialog window title</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>canvasComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add canvas [id variableName] width INT height INT canvasOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>canvas options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>width[INT]</b>: Canvas width (px)</li>
        <li><b>height[INT]</b>: Canvas height (px)</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>mediaViewComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add mediaView source "path/to/media" [id variableName] mediaViewOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>mediaView options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>fitWidth[INT]</b>: Fit to width (pixels)</li>
        <li><b>fitHeight[INT]</b>: Fit to height (pixels)</li>
        <li><b>preserveRatio[BOOLEAN]</b>: Keep original aspect ratio</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>scrollPaneComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add scrollPane {'{'} components... {'}'} scrollPaneOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>scrollPane options</b>
      <ul>
        <li><b>fitToWidth[BOOLEAN]</b>: Content fills pane width</li>
        <li><b>fitToHeight[BOOLEAN]</b>: Content fills pane height</li>
        <li><b>pannable[BOOLEAN]</b>: Enables panning with drag</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>splitPaneComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add splitPane orientation HORIZONTAL|VERTICAL {'{'} components... {'}'} splitPaneOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>splitPane options</b>
      <ul>
        <li><b>orientation</b>: HORIZONTAL or VERTICAL</li>
        <li><b>dividerPositions[FLOAT]</b>: Divider locations (fractions, comma-separated)</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>treeTableViewComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add treeTableView [id variableName] columns "Col1", "Col2", ... treeTableViewOption*        
        </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>treeTableView options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>columns[STRING]</b>: List of columns</li>
        <li><b>editable[BOOLEAN]</b>: Allow editing</li>
        <li><b>showRoot[BOOLEAN]</b>: Display root node</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>dialogComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add dialog "Title" [id variableName] dialogOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>dialog options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>content[STRING]</b>: Message/content text</li>
        <li><b>header[STRING]</b>: Custom header</li>
        <li><b>graphic[STRING]</b>: Icon path or image</li>
        <li><b>type</b>: INFORMATION, WARNING, CONFIRMATION, ERROR, NONE</li>
        <li><b>modal[BOOLEAN]</b>: Modal dialog behavior</li>
        <li><b>resizable[BOOLEAN]</b>: Allows resizing</li>
        <li><b>buttons[STRING]</b>: Comma-separated button list</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>chartComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add chart PieChart|BarChart|LineChart [id variableName] title "Title" data {'{'} "Label1":val1, "Label2":val2 {'}'} chartOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>chart options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>title[STRING]</b>: Chart title</li>
        <li><b>legendVisible[BOOLEAN]</b>: Show/hide legend</li>
        <li><b>animated[BOOLEAN]</b>: Enable/disable chart animations</li>
        <li><b>categoryAxisLabel[STRING]</b>: Label for X or category axis</li>
        <li><b>valueAxisLabel[STRING]</b>: Label for Y or value axis</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>choiceBoxComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add choiceBox [id variableName] options "Option1", "Option2", ... choiceBoxOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>choiceBox options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>options[STRING]</b>: Comma-separated options</li>
        <li><b>selectedIndex[INT]</b>: Default selected index</li>
        <li><b>disabled</b>: Disable interaction</li>
        <li><b>onSelect</b>: Action when selected item changes</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>hyperlinkComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add hyperlink "Label" [id variableName] hyperlinkOption*        </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>hyperlink options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>url[STRING]</b>: Destination address</li>
        <li><b>visited[BOOLEAN]</b>: Sets visited style by default</li>
        <li><b>onClick</b>: Action to run on click</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>separatorComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add separator [id variableName] separatorOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>separator options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>orientation</b>: HORIZONTAL or VERTICAL</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>progressIndicatorComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add progressIndicator [id variableName] [progress FLOAT] progressIndicatorOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>progressIndicator options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>progress[FLOAT]</b>: Value from 0.0 to 1.0 (optional, default is indeterminate)</li>
        <li><b>indeterminate[BOOLEAN]</b>: Shows as indeterminate spinner</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>paginationComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add pagination [id variableName] pageCount INT currentPageIndex INT paginationOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>pagination options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>pageCount[INT]</b>: Total number of pages</li>
        <li><b>currentPageIndex[INT]</b>: Default selected page (zero-based)</li>
        <li><b>pageFactory</b>: Function/variable to create pages</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>tooltipComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add tooltip "Text" [id variableName] tooltipOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>tooltip options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>showDelay[INT]</b>: Delay before tooltip appears (ms)</li>
        <li><b>hideDelay[INT]</b>: Delay before tooltip disappears (ms)</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>contextMenuComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add contextMenu [id variableName] {'{'} menu "File" items "Open", ... {'}'} contextMenuOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>contextMenu options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>autoHide[BOOLEAN]</b>: Hide menu when focus is lost</li>
        <li><b>menu[STRING]</b>: Same structure as menuBar</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>htmlEditorComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add htmlEditor [id variableName] htmlEditorOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>htmlEditor options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>htmlText[STRING]</b>: Initial HTML content</li>
        <li><b>onChange</b>: Action to run on content change</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>transformComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add transform scale|rotate|translate target variableName transformOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>transform options</b>
      <ul>
        <li><b>x[FLOAT]</b>, <b>y[FLOAT]</b>, <b>z[FLOAT]</b>: Axis values</li>
        <li><b>angle[FLOAT]</b>: Angle for rotate</li>
        <li><b>pivotX, pivotY, pivotZ[FLOAT]</b>: Pivot points</li>
        <li><b>translateX/translateY/translateZ[FLOAT|INT]</b>: Translation values</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>boxComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add box [id variableName] width num height num depth num boxOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>box options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>width</b>: X size</li>
        <li><b>height</b>: Y size</li>
        <li><b>depth</b>: Z size</li>
        <li><b>material[IDENTIFIER]</b>: Bind to phongMaterial</li>
        <li><b>translateX/Y/Z, scaleX/Y/Z, rotate, rotationAxis</b>: 3D transforms</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>sphereComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add sphere [id variableName] radius num sphereOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>sphere options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>radius</b>: Sphere radius</li>
        <li><b>material[IDENTIFIER]</b>: Bind to phongMaterial</li>
        <li><b>translateX/Y/Z, scaleX/Y/Z, rotate, rotationAxis</b>: 3D transforms</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>cylinderComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add cylinder [id variableName] radius num height num cylinderOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>cylinder options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>radius</b>: Base radius</li>
        <li><b>height</b>: Cylinder height</li>
        <li><b>material[IDENTIFIER]</b>: Bind to phongMaterial</li>
        <li><b>translateX/Y/Z, scaleX/Y/Z, rotate, rotationAxis</b>: 3D transforms</li>
      </ul>
      </p>

<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>groupComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add group [id variableName] {'{'} component/groupMembers ... {'}'} groupOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>group options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>Content</b>: groupMember (component or reference)</li>
        <li><b>translateX/Y/Z, scaleX/Y/Z, rotate, rotationAxis</b>: Transforms</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>phongMaterialComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add phongMaterial [id variableName] phongMaterialOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>phongMaterial options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>diffuseColor[STRING]</b>: Main color</li>
        <li><b>specularColor[STRING]</b>: Highlight color</li>
        <li><b>diffuseMap[STRING]</b>: Texture image path</li>
        <li><b>specularMap[STRING]</b>: Specular (shine) map</li>
        <li><b>bumpMap[STRING]</b>: Bump/normal map</li>
        <li><b>selfIlluminationMap[STRING]</b>: Glow/illumination map</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>pointLightComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add pointLight [id variableName] pointLightOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>pointLight options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>color[STRING]</b>: Light color</li>
        <li><b>intensity[floatOrInt]</b>: Strength</li>
        <li><b>translateX/Y/Z, scaleX/Y/Z, rotate, rotationAxis</b>: Transforms</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>ambientLightComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add ambientLight [id variableName] ambientLightOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>ambientLight options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>color[STRING]</b>: Light color</li>
        <li><b>intensity[floatOrInt]</b>: Strength</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>perspectiveCameraComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add perspectiveCamera [id variableName] perspectiveCameraOption*
              </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>perspectiveCamera options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>nearClip, farClip, fieldOfView[floatOrInt]</b>: Camera parameters</li>
        <li><b>translateX/Y/Z</b>: Camera position</li>
      </ul>
      </p>


<p>&nbsp;</p>
      <h5 className="text-muted mb-4"><strong>subSceneComponent</strong></h5>
    <Card className="bg-white border rounded shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-gray-900 border-bottom">
        <small className="text-muted">LIF</small>
      </Card.Header>
      <Card.Body className="bg-light text-dark">
        <code className="text-success">
      add subScene [id variableName] width num height num {'{'} groupMembers ... {'}'} subSceneOption*
        </code>
      </Card.Body>
    </Card>
      <p>&nbsp;<br></br>
      <b>subScene options</b>
      <ul>
        <li><b>id</b>: variableName</li>
        <li><b>width[FLOAT]</b>: Scene width</li>
        <li><b>height[FLOAT]</b>: Scene height</li>
        <li><b>Content</b>: group members (3D objects, lights, etc.)</li>
        <li><b>camera</b>: Reference to a perspectiveCamera</li>
      </ul>
      </p>





    </Container>
  );
};

export default DSLSyntax;
