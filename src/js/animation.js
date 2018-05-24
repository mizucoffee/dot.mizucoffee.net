module.exports = () => {
  let button = Array.from(document.getElementsByClassName('subdomain'))
  let back_button = Array.from(document.getElementsByClassName('back-btn'))
  let welcome = document.getElementById('welcome')
  let headbox = document.getElementById('head-box')
  let label = document.getElementById('label')
  let listbox = document.getElementById('list-box')
  let listdomain = document.getElementById('list-domain')

  button.forEach(e => {
    e.addEventListener('click',() => {
      e.classList.add('disable-pointer')
      button.filter(i => i != e).forEach(i => {i.classList.add('fade-out'); i.classList.add('disable-pointer')})
      label.classList.add('fade-out')
      headbox.classList.add('fade-out')

      setTimeout(() => {
        listbox.classList.add('to-head')
        e.classList.add('title')
        label.classList.add('hide')
        headbox.classList.add('hide')
        button.filter(i => i != e).forEach(i => i.classList.add('hide'))
        welcome.classList.add('inv-text')
        Array.from(headbox.children).forEach(i => i.classList.add('hide'))
      },1000)

      setTimeout(() => {

        e.classList.add('left')
        button.filter(i => i != e).forEach(i => i.classList.add('none'))
        listdomain.classList.add('show')
        document.getElementById(`section-${e.innerText}`).classList.add('show-section')

        welcome.innerText = "About"
        welcome.classList.remove('inv-text')

        document.getElementById(`back-${e.innerText}`).addEventListener('click', e2 => {

          document.getElementById(`section-${e.innerText}`).classList.remove('show-section')
          listdomain.classList.remove('show')
          welcome.classList.add('inv-text')

          setTimeout(() => {
            button.filter(i => i != e).forEach(i => i.classList.remove('none'))
            listbox.classList.remove('to-head')
            headbox.classList.remove('hide')
            Array.from(headbox.children).forEach(i => i.classList.remove('hide'))
            label.classList.remove('hide')
            welcome.innerText = "Welcome to"
            welcome.classList.remove('inv-text')
            e.classList.remove('left')
            e.classList.remove('title')
          },1000)

          setTimeout(() => {
            button.filter(i => i != e).forEach(i => {i.classList.remove('hide'); i.classList.remove('fade-out'); i.classList.remove('disable-pointer')})
            label.classList.remove('fade-out')
            headbox.classList.remove('fade-out')
            e.classList.remove('disable-pointer')
          },2000)
        })
      },2000)
    })
  })
}


