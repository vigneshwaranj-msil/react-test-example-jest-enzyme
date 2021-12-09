/*
    File name - SearchBox.jsx
    Created on - Wednesday 08 December 2021 04:00:08 PM
    Last Modified On- Wednesday 08 December 2021 04:05:56 PM
    Author -  Vigneshwaran Jheyaraman (VickySuraj)
*/

import React from "react";
import "./SearchBox.css";

export default function SearchBox({names}) {
    const [namesList, setNamesList] = React.useState(names||[]);
    const [searchInput, setSearchInput] = React.useState("");

    React.useEffect(() => {
        const formData = new FormData();
        formData.set("type", "fullname");
        formData.set("number", 50);
        (
            fetch("https://randommer.io/Name", {method:"POST", body:formData})
            .then(res => res.json())
            .then(namesList => setNamesList(namesList))
            .catch(err => console.error(err))
        );
    }, []);

    return (
        <div className="search-box">
            <input
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="filter names"
            />
            <div className="names-list">
                {
                    namesList.length ?
                    namesList.filter(name => searchInput ? name.toLowerCase().indexOf(searchInput) !== -1 : true).map(name => <h4 key={name}>{name}</h4>) :
                    <h2>Empty here dude</h2>
                }
            </div>
        </div>
    );
}
