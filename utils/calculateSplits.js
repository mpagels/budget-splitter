/* splits: [
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
  ], */

export default function calculateSplits(splits, spendFrom, account) {
  return splits.reduce((prev, cur) => {
    if (
      spendFrom === account &&
      cur.nameValue === cur.moneyValue &&
      spendFrom !== cur.moneyValue
    ) {
      return prev + cur.number
    }

    if (spendFrom === account && cur.nameValue === cur.moneyValue) {
      return prev
    }
    if (cur.moneyValue === 'together') {
      return account === spendFrom
        ? prev + cur.number / 2
        : prev - cur.number / 2
    }

    if (spendFrom === cur.nameValue && spendFrom === cur.moneyValue) {
      return prev
    }

    if (
      spendFrom !== account &&
      cur.nameValue === cur.moneyValue &&
      cur.moneyValue !== 'together'
    ) {
      return prev - cur.number
    }
  }, 0)
}
