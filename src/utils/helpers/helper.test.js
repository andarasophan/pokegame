import { filter } from "./filterHelper";

const dummyData = [
  {
    nickname: 'char',
    name: 'ivysaur'
  },
  {
    nickname: 'leo',
    name: 'venusaur'
  },
  {
    nickname: 'saul',
    name: 'charmaleon'
  }
]
const column = ['name', 'nickname']

test('should return correctly', () => {
  const search1 = 'sau'
  expect(filter(dummyData, search1, column)).toStrictEqual(dummyData)

  const search2 = 'saur'
  expect(filter(dummyData, search2, column)).toStrictEqual([{
    nickname: 'char',
    name: 'ivysaur'
  },
  {
    nickname: 'leo',
    name: 'venusaur'
  }])

  const search3 = 'saura'
  expect(filter(dummyData, search3, column)).toStrictEqual([])

  const search4 = 'leo'
  expect(filter(dummyData, search4, column)).toStrictEqual([{
    nickname: 'leo',
    name: 'venusaur'
  },
  {
    nickname: 'saul',
    name: 'charmaleon'
  }])

});
