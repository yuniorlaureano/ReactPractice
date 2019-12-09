import React, {Component} from "react";
import Notes from "./components/Notes";

class App extends Component {

    render(){
        return (
            <div>
                <h1>With React</h1>
                <Notes/>
            </div>
        );
    }
}

export default App;