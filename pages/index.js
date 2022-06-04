import Link from 'next/link'
import styled from 'styled-components'

export default function Home() {
  return (
    <HomeWrapper>
      <Link href="/add">
        <a>+</a>
      </Link>
      <SpendList>
        <SpendItem>
          <Infos>
            <h2>Tanken</h2>
            <Money isMe={false}>25,00 €</Money>
          </Infos>
          <p>28.6</p>
        </SpendItem>
        <SpendItem>
          <Infos>
            <h2>Abendessen für alle</h2>
            <Money isMe>45,00 €</Money>
          </Infos>
          <p>28.6</p>
        </SpendItem>
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

const Money = styled.p`
  color: ${({ isMe }) => (isMe ? 'green' : 'red')};
`

const SpendItem = styled.li`
  border: 1px solid black;
  margin: 5px 0;
`

const SpendList = styled.ul`
  list-style-type: none;
  padding: 0;
`
