module.exports = () => {
  let button = Array.from(document.getElementsByClassName('subdomain'))
  let label = document.getElementById('label')
  let welcome = document.getElementById('welcome')
  let headbox = document.getElementById('head-box')
  let listbox = document.getElementById('list-box')
  let listdomain = document.getElementById('list-domain')

  button.forEach(e => {
    e.addEventListener('click',() => {
      e.classList.add('title')
      listbox.classList.add('to-head')

      button.filter(i => i != e).forEach(i => i.classList.add('fade-out'))
      label.classList.add('fade-out')

      headbox.classList.add('fade-out')
      Array.from(headbox.children).forEach(i => i.classList.add('hide'))
      setTimeout(() => {
        welcome.classList.add('inv')
      },1000)
      setTimeout(() => {
        button.filter(i => i != e).forEach(i => i.classList.add('none'))
        e.classList.add('left')
        listdomain.classList.add('show')
        welcome.classList.remove('inv')
        welcome.innerText = "About"
      } ,2500)
    })
  })

}
