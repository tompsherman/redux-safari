import React, { useState, useEffect } from "react";

import axiosWithAuth from "../utils/axiosWithAuth"
import AnimalForm from "./AnimalForm.js";
import AnimalList from "./AnimalsList.js";

export default function AnimalDashboard() {
    
    const [ animals, setAnimals ] = useState([]);
    const [updating, setUpdating] = useState([])
    
    // How can get fetch the data from the server when the component mounts?
    // How can we capture and set that data to state?

    useEffect ( ()=> {
        axiosWithAuth()
        .get('/api/animals')
        .then(response => setAnimals(response.data))
        .catch(error => console.log(error))
    }, [updating])
    
    return(
        <div className="dash">
            <AnimalForm animals={animals} setUpdating={setUpdating} updating={updating} updateAnimals={setAnimals} />
            <AnimalList animals={animals} />
        </div>
    )
}