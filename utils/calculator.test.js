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
  {
    id: 3,
    spendFrom: 'jana',
    moneyFor: 'Abendessen',
    amountOfMoney: 10,
    payDate: '2022-05-23',
    splits: [
      {
        id: 3,
        nameValue: 'lene',
        number: 10,
        moneyValue: 'together',
      },
    ],
  },
  {
    id: 4,
    spendFrom: 'jana',
    moneyFor: 'Abendessen',
    amountOfMoney: 30,
    payDate: '2022-05-23',
    splits: [
      {
        id: 1,
        nameValue: 'martin',
        number: 40,
        moneyValue: 'martin',
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
        id: 3,
        nameValue: 'lene',
        number: 10,
        moneyValue: 'together',
      },
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
    ],
  },
]

describe('calculator function', () => {
  it('calculates martins value', () => {
    const splits = data[0].splits
    expect(calculateSplits(splits, 'martin', 'martin')).toBe(35)
  })
  it('calculates martins value when it is his account, but janas one spend that needs splitted', () => {
    const splits = data[2].splits
    expect(calculateSplits(splits, 'jana', 'martin')).toBe(-5)
  })
  it('calculates martins value when it is his account, but jana has two spends but just one that needs splitted', () => {
    const splits = data[2].splits
    expect(calculateSplits(splits, 'jana', 'martin')).toBe(-5)
  })
  it('calculates martins value when it is his account, but jana has paid for martin', () => {
    const splits = data[3].splits
    expect(calculateSplits(splits, 'jana', 'martin')).toBe(-40)
  })
  it('calculates martins value when it is his account, but janas spend', () => {
    const splits = data[1].splits
    expect(calculateSplits(splits, 'jana', 'martin')).toBe(-45)
  })
  it('calculates martins value when it is his account, but janas spend. The splits have different indexes as before.', () => {
    const splits = data[4].splits
    expect(calculateSplits(splits, 'jana', 'martin')).toBe(-45)
  })

  it('calculates janas value when it is her account, but martins spend', () => {
    const splits = data[0].splits
    expect(calculateSplits(splits, 'martin', 'jana')).toBe(-35)
  })
  it('calculates janas value when it is her account, but jana has paid for martin', () => {
    const splits = data[3].splits
    expect(calculateSplits(splits, 'jana', 'jana')).toBe(40)
  })
  it('calculates janas value when it is her account, and jana has a spend', () => {
    const splits = data[1].splits
    expect(calculateSplits(splits, 'jana', 'jana')).toBe(45)
  })
  it('calculates janas value when it is her account, and jana has a spend. The splits have different indexes as before.', () => {
    const splits = data[4].splits
    expect(calculateSplits(splits, 'jana', 'jana')).toBe(45)
  })
})
