import styled from 'styled-components'
import useSpendForm from '../hooks/useSpendForm'

export default function Add({ addSpend, account }) {
  const {
    moneyFor,
    setMoneyFor,
    amountOfMoney,
    setAmountOfMoney,
    payDate,
    setPayDate,
    splits,
    distributedMoney,
    addNewSplit,
    deleteSplit,
    handleSplitChangeByType,
    resetAll,
    saveSpend,
    dontSaveAndGoBack,
    checkIsReadyToSave,
  } = useSpendForm(addSpend, account)

  const isReadyToSave = checkIsReadyToSave()
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
        onChange={({ target: { value } }) => setAmountOfMoney(Number(value))}
      ></input>

      <label>Wann:</label>
      <input
        type="date"
        value={payDate}
        onChange={({ target: { value } }) => setPayDate(value)}
      ></input>

      <h2>
        Aufteilung{' '}
        {(distributedMoney > 0 || splits.length > 0) && (
          <DistributedMoney isEven={distributedMoney === 0}>
            noch {distributedMoney}
          </DistributedMoney>
        )}
      </h2>
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
                  handleSplitChangeByType(split.id, value, 'nameValue')
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
                  handleSplitChangeByType(split.id, value, 'number')
                }
              ></input>
              <select
                name="whichMoney"
                id="money"
                value={split.moneyValue}
                onChange={({ target: { value } }) =>
                  handleSplitChangeByType(split.id, value, 'moneyValue')
                }
              >
                <option value="martin" disabled={split.nameValue === 'lene'}>
                  Martin
                </option>
                <option value="jana" disabled={split.nameValue === 'lene'}>
                  Jana
                </option>
                <option value="together">gemeinsam</option>
              </select>
              <button type="button" onClick={() => deleteSplit(split.id)}>
                X
              </button>
            </SplitItem>
          )
        })}
      </ul>
      <button type="button" onClick={addNewSplit} disabled={amountOfMoney <= 0}>
        +
      </button>

      <SaveButton disabled={!isReadyToSave} isReadyToSave={isReadyToSave}>
        speichern
      </SaveButton>
      <button type="button" onClick={resetAll}>
        alles löschen
      </button>
      <button type="button" onClick={dontSaveAndGoBack}>
        alles verwerfen und zurück
      </button>
    </Form>
  )
}

const DistributedMoney = styled.span`
  color: ${(prop) => (prop.isEven ? 'green' : 'red')};
`

const SplitItem = styled.li``

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const SaveButton = styled.button`
  ${(props) => props.isReadyToSave && 'background-color: green;'}
`
