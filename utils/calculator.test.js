import calculateSplits from './calculateSplits'

const data = [
  {
    id: 1,
    spendFrom: 'martin',
    moneyFor: 'Tanken',
    amountOfMoney: 70,
    payDate: '2022-05-22',
    splits: [
      {
        id: 1,
        nameValue: 'martin',
        number: 70,
        moneyValue: 'together',
      },
    ],
  },
  {
    id: 2,
    spendFrom: 'jana',
    moneyFor: 'Abendessen',
    amountOfMoney: 70,
    payDate: '2022-05-23',
    splits: [
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
    ],
  },
]

describe('calculator function', () => {
  const account = 'martin'
  it('calculates martins value', () => {
    const splits = data[0].splits
    expect(calculateSplits(splits, account)).toBe(35)
  })
  it('calculates martins value when it is his account, and jana has a spend', () => {
    const splits = data[1].splits
    expect(calculateSplits(splits, account)).toBe(-45)
  })
  /*   it('calculates janas value when it is her account', () => {
    const splits = data[1].splits
    expect(calculateSplits(splits, account)).toBe(45)
  }) */
})
