import { useState } from 'react'
import './App.css'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userState } from './store/atoms/amount'
import { AmountState } from './store/selectors/amount';

function App() {

  const SetAmount = useSetRecoilState(userState);
  const amount = useRecoilValue(AmountState);

  return (
    <>
      <h1>
        Amount: {amount}
        <br/>
        <br/>
        <button onClick={()=>SetAmount({intialAmount: amount+1})}>Paise badao</button>
        <button onClick={()=>SetAmount({intialAmount: amount-1})}>Karcha hoa</button>
      </h1>
    </>
  )
}

export default App
