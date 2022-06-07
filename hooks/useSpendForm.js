import { useRouter } from 'next/router'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export default function useSpendForm(addSpend, account) {
  const router = useRouter()

  const [moneyFor, setMoneyFor] = useState('')
  const [amountOfMoney, setAmountOfMoney] = useState(0)
  const [payDate, setPayDate] = useState('')

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

  function handleSplitChangeByType(id, value, type) {
    const updatedSplit = splits.map((split) => {
      if (split.id === id) {
        if (type === 'nameValue' && value === 'lene') {
          return { ...split, [type]: value, moneyValue: 'together' }
        } else {
          return { ...split, [type]: type === 'number' ? Number(value) : value }
        }
      } else {
        return split
      }
    })
    setSplit(updatedSplit)
  }

  function resetAll() {
    setMoneyFor('')
    setAmountOfMoney(0)
    setPayDate('')
    setSplit([])
  }

  function saveSpend(event) {
    event.preventDefault()

    const newSpend = {
      id: nanoid(),
      spendFrom: account,
      moneyFor,
      amountOfMoney,
      payDate,
      splits,
    }

    addSpend(newSpend)
    router.push('/')
  }

  function dontSaveAndGoBack() {
    router.push('/')
  }

  function checkIsReadyToSave() {
    return (
      moneyFor.trim().length > 0 &&
      amountOfMoney > 0 &&
      payDate.length > 0 &&
      splits.length > 0 &&
      splits.some((split) => split.number > 0)
    )
  }

  return {
    moneyFor,
    setMoneyFor,
    amountOfMoney,
    setAmountOfMoney,
    payDate,
    setPayDate,
    splits,
    addNewSplit,
    deleteSplit,
    handleSplitChangeByType,
    resetAll,
    saveSpend,
    dontSaveAndGoBack,
    checkIsReadyToSave,
  }
}
