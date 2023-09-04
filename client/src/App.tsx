import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(response => {
                setMessage(response.data);
            });
    }, []);

    return (
        <div className="App">
            <h1>{message}</h1>
        </div>
    );
}

export default App;
