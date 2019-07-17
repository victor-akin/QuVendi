import React, { Component } from 'react';
import { View, Text } from 'native-base';

import { gql } from "apollo-boost";
import { Query } from "react-apollo";


class QueryComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Query
                query={gql`
                {
                    rates(currency: "USD") {
                    currency
                    rate
                    }
                }
                `}
            >
                {/* {({ loading, error, data }) => {
                if (loading) return <Text>Loading...</Text>;
                if (error) return <Text>Error :(</Text>;

                return data.rates.map(({ currency, rate }) => (
                    <Text key={currency}>
                    <Text>{currency}: {rate}</Text>
                    </Text>
                ));
                }} */}
            </Query>
        )
    }
}


export default QueryComponent;
