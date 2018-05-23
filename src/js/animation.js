module.exports = () => {
  let button = Array.from(document.getElementsByClassName('subdomain'))
  let back_button = Array.from(document.getElementsByClassName('back-btn'))
  let welcome = document.getElementById('welcome')
  let headbox = document.getElementById('head-box')
  let label = document.getElementById('label')

  button.forEach(e => {
    e.addEventListener('click',() => {
      document.getElementById('list-box').classList.add('to-head')

      button.filter(i => i != e).forEach(i => i.classList.add('fade-out'))
      label.classList.add('fade-out')
      headbox.classList.add('fade-out')


      setTimeout(() => {
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
        document.getElementById('list-domain').classList.add('show')
        document.getElementById(`section-${e.innerText}`).classList.add('show-section')

        welcome.innerText = "About"
        welcome.classList.remove('inv-text')



        document.getElementById(`back-${e.innerText}`).addEventListener('click', e2 => {

          document.getElementById(`section-${e.innerText}`).classList.remove('show-section')
          document.getElementById('list-domain').classList.remove('show')
          document.getElementById('list-box').classList.remove('to-head')

          welcome.classList.add('inv-text')

          setTimeout(() => {
          button.filter(i => i != e).forEach(i => i.classList.remove('none'))
            e.classList.remove('left')
            e.classList.remove('title')
            headbox.classList.remove('hide')
            label.classList.remove('hide')
            button.filter(i => i != e).forEach(i => i.classList.remove('hide'))
            Array.from(headbox.children).forEach(i => i.classList.remove('hide'))
            welcome.innerText = "Welcome to"
            welcome.classList.remove('inv-text')
          },1000)

          setTimeout(() => {

            button.filter(i => i != e).forEach(i => i.classList.remove('fade-out'))
            label.classList.remove('fade-out')
            headbox.classList.remove('fade-out')

          },2000)
        })

      },2000)
    })
  })


}


