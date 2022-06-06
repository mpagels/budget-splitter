/* {
    splits: [
      {
        id: 1,
        nameValue: 'martin',
        number: 70,
        moneyValue: 'together',
      },
    ],
  }, */

export default function calculateSplits(splits, account) {
  return splits.reduce((prev, cur) => {
    if (cur.moneyValue === 'together') {
      return prev + cur.number / 2
    }
  }, 0)
}
