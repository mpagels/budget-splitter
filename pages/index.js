import Link from 'next/link'
import styled from 'styled-components'
import calculateSplits from '../utils/calculateSplits'

export default function Home({ spends, account }) {
  return (
    <HomeWrapper>
      <Link href="/add">
        <a>+</a>
      </Link>
      <SpendList>
        {spends.map((spend) => {
          const owe = calculateSplits(spend.splits, spend.spendFrom, account)
          return (
            <SpendItem key={spend.id}>
              <Infos>
                <h2>{spend.moneyFor}</h2>
                <p>{spend.amountOfMoney} €</p>
              </Infos>
              <UserOwe isPositive={owe >= 0}>{owe} €</UserOwe>
              <h3>
                Bezahlt von:{' '}
                {spend.spendFrom.charAt(0).toUpperCase() +
                  spend.spendFrom.slice(1)}
              </h3>
              <p>{spend.payDate}</p>
            </SpendItem>
          )
        })}
      </SpendList>
      <Footer>
        <CalculatedBudget>20€</CalculatedBudget>
      </Footer>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.main`
  height: 100vh;
`

const Infos = styled.div`
  display: flex;
  align-items: center;
`

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  border-top: 2px solid black;
  width: 100vw;
`

const CalculatedBudget = styled.p`
  text-align: center;
  color: green;
  font-size: 2em;
`

const SpendItem = styled.li`
  border: 1px solid black;
  margin: 5px 0;
`

const SpendList = styled.ul`
  list-style-type: none;
  padding: 0;
`

const UserOwe = styled.p`
  color: ${(prop) => (prop.isPositive ? 'green' : 'red')};
`
