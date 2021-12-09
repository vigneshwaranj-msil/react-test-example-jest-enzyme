import React from "react";
import './App.css';
import Toggler from "./components/Toggler/Toggler";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
    const [checker, updateChecker] = React.useState(false);
    return (
        <div className="App">
            <Toggler
                value={checker}
                onChange={e => updateChecker(state => !state)}
                label="Welcome You are active"
            />
            <SearchBox />
        </div>
    );
}

export default App;
