import styled from 'styled-components'
import { useRouter } from 'next/router'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export default function Add() {
  const router = useRouter()

  const [moneyFor, setMoneyFor] = useState('')
  const [amountOfMoney, setAmountOfMoney] = useState(0)
  const [payDate, seetPayDate] = useState('')

  const [splits, setSplit] = useState([])

  function addNewSplit() {
    const newSplit = {
      id: nanoid(),
      nameValue: 'martin',
      number: 0,
      moneyValue: 'martin',
    }
    setSplit([...splits, newSplit])
  }

  function deleteSplit(id) {
    const updatedSplit = splits.filter((split) => split.id !== id)
    setSplit(updatedSplit)
  }

  function handleOnChangeNames(id, nameValue) {
    const updatedSplit = splits.map((split) => {
      if (split.id === id) {
        return { ...split, nameValue }
      } else {
        return split
      }
    })
    setSplit(updatedSplit)
  }

  function handleOnChangeNumber(id, number) {
    const updatedSplit = splits.map((split) => {
      if (split.id === id) {
        return { ...split, number }
      } else {
        return split
      }
    })
    setSplit(updatedSplit)
  }

  function handleOnChangeMoney(id, moneyValue) {
    const updatedSplit = splits.map((split) => {
      if (split.id === id) {
        return { ...split, moneyValue }
      } else {
        return split
      }
    })
    setSplit(updatedSplit)
  }

  return (
    <Form onSubmit={saveSpend}>
      <label>Ausgabe für:</label>
      <input
        type="text"
        value={moneyFor}
        onChange={({ target: { value } }) => setMoneyFor(value)}
      ></input>

      <label>Gesamtkosten:</label>
      <input
        type="number"
        min={1}
        value={amountOfMoney}
        onChange={({ target: { value } }) => setAmountOfMoney(value)}
      ></input>

      <label>Wann:</label>
      <input
        type="date"
        value={payDate}
        onChange={({ target: { value } }) => seetPayDate(value)}
      ></input>

      <h2>Aufteilung</h2>
      <ul>
        {splits.map((split) => {
          return (
            <SplitItem key={split.id}>
              <select
                name="names"
                id="name"
                value={split.nameVaule}
                defaultValue={split.nameValue}
                onChange={({ target: { value } }) =>
                  handleOnChangeNames(split.id, value)
                }
              >
                <option value="martin">Martin</option>
                <option value="jana">Jana</option>
                <option value="lene">Lene</option>
              </select>
              <input
                type="number"
                min={1}
                value={split.number}
                onChange={({ target: { value } }) =>
                  handleOnChangeNumber(split.id, value)
                }
              ></input>
              <select
                name="whichMoney"
                id="money"
                value={split.moneyValue}
                onChange={({ target: { value } }) =>
                  handleOnChangeMoney(split.id, value)
                }
              >
                <option value="martin">Martin</option>
                <option value="jana">Jana</option>
                <option value="together">gemeinsam</option>
              </select>
              <button type="button" onClick={() => deleteSplit(split.id)}>
                X
              </button>
            </SplitItem>
          )
        })}
      </ul>
      <button type="button" onClick={addNewSplit}>
        +
      </button>

      <button>speichern</button>
      <button>alles löschen</button>
      <button type="button" onClick={dontSaveAndGoBack}>
        alles verwerfen und zurück
      </button>
    </Form>
  )

  function saveSpend(event) {
    event.preventDefault()
    router.push('/')
  }

  function dontSaveAndGoBack() {
    router.push('/')
  }
}

const SplitItem = styled.li``

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
