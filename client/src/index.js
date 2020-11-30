import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';//must import otherwise the style is not gonna show
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App /> {/*App.js now can access all method in BrowserRouter after importing*/}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
