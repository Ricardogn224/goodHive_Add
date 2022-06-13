import React, { useState, useEffect } from "react";

import { Country, State, City } from 'country-state-city';

export default function GeoLocResearch({ handleChange }) {

    const [country, setCountry] = useState([]);
    const [city, setCity] = useState([]);
    const [state, setState] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {

        // function for get country
        const getcountry = async () => {
            const rescon = Country.getAllCountries();
            console.log(rescon)
            setCountry(await rescon);
        }
        getcountry();
    }, []);



    // setting of state
    useEffect(() => {
        const getstate = async () => {

            const resst = State.getAllStates()
            //console.log(resst);
            setState(await resst);
        }
        getstate();
    }, []);


    useEffect(() => {
        const getcity = async () => {

            const rcity = City.getAllCities();
            setCity(await rcity);
        }
        getcity();
    }, []);



    useEffect(() => {
        handleChange();
    }, [filtered]);

    useEffect(() => {
        getGeoloc();
    }, []);

    function getGeoloc() {
        let values = []
        values = country.concat(state)
        values.concat(city)

        setFiltered(values)
    }

}
