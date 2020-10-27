import React from 'react';

import { Cards, Chart, CountrySelector } from './Components';
import styles from './App.module.css'

import { fetchData } from './api';

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }
    async componentDidMount() {
        const dataFetched = await fetchData();

        this.setState({ data: dataFetched })
    }

    handleCountryChange = async (country) => {

        const dataFetched = await fetchData(country);
        this.setState({ data: dataFetched, country: country })
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
            <h1> COVID19 Dashboard </h1>
                <Cards data={data} />
                <CountrySelector handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            <h2> Stay Safe | Wear Mask 😷 | Maintain Social Distance | Eradicate COVID </h2>
            </div>

        )
    }
}


export default App
