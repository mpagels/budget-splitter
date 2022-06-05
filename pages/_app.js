import { GlobalStyles } from '../GlobalStyles'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [spends, setSpends] = useState([
    {
      id: 1,
      spendFrom: 'Martin',
      moneyFor: 'Tanken',
      amountOfMoney: 70,
      payDate: '2022-05-22',
      splits: [
        {
          id: 1,
          nameValue: 'martin',
          number: 70,
          moneyValue: 'together',
        },
      ],
    },
    {
      id: 2,
      spendFrom: 'Jana',
      moneyFor: 'Abendessen',
      amountOfMoney: 70,
      payDate: '2022-05-23',
      splits: [
        {
          id: 1,
          nameValue: 'martin',
          number: 40,
          moneyValue: 'martin',
        },
        {
          id: 2,
          nameValue: 'jana',
          number: 20,
          moneyValue: 'jana',
        },
        {
          id: 3,
          nameValue: 'lene',
          number: 10,
          moneyValue: 'together',
        },
      ],
    },
  ])

  function addSpend(newSpend) {
    setSpends([...spends, newSpend])
  }

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} spends={spends} addSpend={addSpend} />;
    </>
  )
}

export default MyApp
