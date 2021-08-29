export const getLocalStorage = (keyName) => JSON.parse(window.localStorage.getItem(keyName))

export const saveLocalStorage = (keyName, payload) => {
  window.localStorage.setItem(keyName, JSON.stringify(payload))
}

export const destroyLocalStorage = (keyName) => {
  window.localStorage.removeItem(keyName)
}
