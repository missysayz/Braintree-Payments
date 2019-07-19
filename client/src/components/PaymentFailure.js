import React from 'react';
import { Segment, Header, } from 'semantic-ui-react';
import { Link, Redirect, } from 'react-router-dom';

const PaymentFailure = ({ location: { state, }, }) => {
  if (state.info) {
    return (
      <Segment basic textAlign='center'>
        <Header as='h1' color='red'>We're Sorry, your purchase had an error.</Header>
        <p>Error Message: {state.info.errors[0].message} Please enter a valid integer amount.</p>
        <Link to='/'>Start Over</Link>
      </Segment>
    )
  } else {
    return (<Redirect to='/' />);
  }
}

export default PaymentFailure;