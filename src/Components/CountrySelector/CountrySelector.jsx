import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountrySelector.module.css';
import { fetchCountries } from '../../api/index'

const CountrySelector = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchCountriesAPI();
    }, [setFetchedCountries]);

    console.log(fetchedCountries)

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, index) => {
                    return <option key={index} value={country}> {country} </option>
                })}
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelector