function setLocalStorage(key: string, value: any) {
  if (typeof value === "object") {
    console.log("객체");
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
}

function getLocalStorage(key: string) {
  localStorage.getItem(key);
}

function removeLocalStorage(key: string) {
  localStorage.removeItem(key);
}

export { setLocalStorage, getLocalStorage, removeLocalStorage };
