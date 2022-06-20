import React, { useContext } from 'react';
import MyContext from './MyContext';

import Button from "react-bootstrap/Button";


export default function Item(props) {

    const [isDarkMode, setIsDarkMode] = useContext(MyContext);

    const handleDarkMode = () => {
        isDarkMode 
        ? setIsDarkMode(false)
        : setIsDarkMode(true);
    }

    return (
        <div className={`product ${isDarkMode && "dark-mode"}`}>
            <h3>{props.value.title}</h3>
            <img src={props.value.image} alt="img" />
            <p>{props.value.price}</p>
            <Button onClick={handleDarkMode}>Dark mode</Button>
        </div>
    )
}
