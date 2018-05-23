module.exports = () => {
  let button = Array.from(document.getElementsByClassName('subdomain'))
  let welcome = document.getElementById('welcome')
  let headbox = document.getElementById('head-box')

  button.forEach(e => {
    e.addEventListener('click',() => {
      e.classList.add('title')
      document.getElementById('list-box').classList.add('to-head')

      button.filter(i => i != e).forEach(i => i.classList.add('fade-out'))
      document.getElementById('label').classList.add('fade-out')
      headbox.classList.add('fade-out')


      setTimeout(() => {
        welcome.classList.add('inv-text')
        Array.from(headbox.children).forEach(i => i.classList.add('hide'))
      },1000)

      setTimeout(() => {
        e.classList.add('left')
        button.filter(i => i != e).forEach(i => i.classList.add('none'))
        document.getElementById('list-domain').classList.add('show')

        welcome.innerText = "About"
        welcome.classList.remove('inv-text')
      },2000)
    })
  })

}
