import React, { useState, useEffect, } from 'react';
import { Dimmer, Loader, Segment, } from 'semantic-ui-react';
import braintree from 'braintree-web-drop-in';
import BraintreeDropin from 'braintree-dropin-react';
import BraintreeSubmitButton from './BraintreeSubmitButton';
import { Redirect, } from 'react-router-dom';
import axios from 'axios';

const BraintreeDrop = (props) => {
  const [loaded, setLoaded] = useState(false)
  const [token, setToken] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [transactionId, setTransactionId] = useState('')

  useEffect(() => {
    axios.get('/api/braintree_token')
      .then(res => {
        const { data: token, } = res
        setToken(token)
        setLoaded(true)
      })
  }, [])

  const handlePaymentMethod = (payload) => {

  }

  if (loaded)
    return (
      <Segment>
        <BraintreeDropin
          braintree={braintree}
          authorizationToken={token}
          handlePaymentMethod={handlePaymentMethod}
          renderSubmitButton={BraintreeSubmitButton}
        />
      </Segment>
    )
  else
    return (
      <Dimmer active>
        <Loader>Loading Premium Payment Experience.  Please wait...</Loader>
      </Dimmer>
    )
}

export default BraintreeDrop;