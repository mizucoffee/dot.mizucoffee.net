module.exports = () => {
  let item = document.getElementsByClassName("item")

  let current = 0
  setInterval(() => {
    let back = current == 0 ? item.length - 1 : current - 1
    let next = current == item.length - 1 ? 0 : current + 1

    item[next].classList.remove("item-before")
    item[current].classList.remove("item-show")
    item[back].classList.remove("item-after")

    item[next].classList.add("item-show")
    item[current].classList.add("item-after")
    item[back].classList.add("item-before")

    current = ++current >= item.length ? 0 : current
  }, 1000)
}
