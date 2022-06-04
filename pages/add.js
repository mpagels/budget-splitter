import styled from 'styled-components'
import { useRouter } from 'next/router'

export default function Add() {
  const router = useRouter()

  return (
    <Form onSubmit={saveSpend}>
      <label>Ausgabe für:</label>
      <input type="text"></input>

      <label>Gesamtkosten:</label>
      <input type="number" min={1}></input>

      <label>Wann:</label>
      <input type="date"></input>

      <h2>Aufteilung</h2>
      <ul>
        <SplitItem>
          <select name="names" id="name">
            <option value="martin">Martin</option>
            <option value="Jana">Jana</option>
            <option value="Lene">Lene</option>
          </select>
          <input type="number" min={1}></input>
          <select name="whichMoney" id="money">
            <option value="martin">Martin</option>
            <option value="Jana">Jana</option>
            <option value="together">gemeinsam</option>
          </select>
        </SplitItem>
      </ul>
      <button type="button">+</button>

      <button>speichern</button>
    </Form>
  )

  function saveSpend(event) {
    event.preventDefault()
    router.push('/')
  }
}

const SplitItem = styled.li``

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
