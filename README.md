# **Basic Modal Component for react**

This is a simple modal component for react;
You can find the source code for this package here : https://github.com/vfauveau/modal-react-component 
The link towards the npm page of the package : https://www.npmjs.com/package/basic-modal-component1
### Prerequisites

1. node.js
2. A react app

### Installation
```` 
cd yourAppFolder
npm install basic-modal-component1
````

``` javascript
import React, { useRef } from "react";
import Modal from "basic-modal-component1";
import Header from "./Header";
import Custom from "./Custom";
function App() {
    let modalRef = useRef();
    return (
        <div className="App">
            <Header modalRef={modalRef} />
            <Modal customContent={<Custom />} ref={modalRef} />
        </div>
    );
}
```
### Utilisation
You will need to get the showModal function from the component and use it in an event trigger to display the modal.
``` javascript
function Example (props) {
    // get the showModal function and assign it to a function.
    const callModal = () => props.modalRef.current.showModal();
    return (
            <button onClick={callModal}>Your text</button>
    );
}
export default Example;
```
### Props and customisation

The component can receive multiple props.

To hide the close button, pass the "showCloseButton" prop (type : boolean, default value : false).

Content of the modal : 
1. The "message" prop can be used if you just want to display a message.
2. The "customContent" prop can be used if you want to customize the content of the modal. (default value : undefined)
3. If you use "customContent" the message prop will be empty.