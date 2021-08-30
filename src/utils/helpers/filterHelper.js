export const filter = (data, search, column = []) => data.filter((element) => column.some(el => String(element[el]).toLowerCase().includes(search.toLowerCase())))
