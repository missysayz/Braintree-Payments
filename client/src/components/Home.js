import React, { useState, } from 'react';
import { Header, Segment, Input, Label, Divider, Image, } from 'semantic-ui-react';
import BraintreeDrop from './BraintreeDrop'

const Home = () => {
  const [amount, setAmount] = useState('')

  const handleChange = (e) => {
    setAmount(e.target.value)
  }

  return (
    <Segment basic textAlign='center'>
      {console.log(amount)}
      <Header as='h1' textAlign='center'>React Payments</Header>
      <Image centered size='small' src='https://supergirlfit.com/wp-content/uploads/2015/05/bag-of-groceries.jpg' />
      <Label color='green'>Payment Amount</Label>
      <Input
        value={amount}
        name={amount}
        onChange={handleChange}
        style={{ fontSize: '18px', }}
      />
      <Divider />
      <BraintreeDrop amount={amount} />
    </Segment>
  );
}

export default Home;