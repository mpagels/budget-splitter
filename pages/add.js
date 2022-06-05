import styled from 'styled-components'
import { useRouter } from 'next/router'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export default function Add() {
  const router = useRouter()

  const [splits, setSplit] = useState([])

  function addNewSplit() {
    const newSplit = {
      id: nanoid(),
      nameValue: 'martin',
      number: 1,
      moneyValue: 'martin',
    }
    setSplit([...splits, newSplit])
  }

  function deleteSplit(id) {
    const updatedSplit = splits.filter((split) => split.id !== id)
    setSplit(updatedSplit)
  }

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
        {splits.map((split) => {
          return (
            <SplitItem key={split.id}>
              <select name="names" id="name" value={split.nameVaule}>
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
