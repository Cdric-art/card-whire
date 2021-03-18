import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
} from "react-router-dom";
import CreatedCard from "./components/pages/CreatedCard";
import Home from "./components/pages/Home";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="header">
                    <Link to="/">
                        <img src="src/assets/images/whireLetter.png" alt="Logo Whire"/>
                    </Link>
                </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/card" component={CreatedCard}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App
