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

export default function calculateSplits(splits, account) {
  return splits.reduce((prev, cur) => {
    if (cur.moneyValue === 'together') {
      return prev + cur.number / 2
    }

    if (cur.moneyValue === account) {
      return prev + cur.number
    }

    return prev
  }, 0)
}
