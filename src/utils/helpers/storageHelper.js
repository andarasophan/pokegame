export const getLocalStorage = (keyName) => {
  const value = window.localStorage.getItem(keyName)
  try {
    const result = JSON.parse(value)
    return result ? result : undefined
  } catch (e) {
    return undefined
  }
}

export const saveLocalStorage = (keyName, payload) => {
  window.localStorage.setItem(keyName, JSON.stringify(payload))
}

export const destroyLocalStorage = (keyName) => {
  window.localStorage.removeItem(keyName)
}
