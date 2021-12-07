const opt1Check = document.getElementById('opt1')
const firstOptCheck = document.getElementById('firstOpt')

const opt2Check = document.getElementById('opt2')
const secondOptCheck = document.getElementById('secondOpt')

opt1Check.addEventListener('click', () => {
  if (opt1Check.checked == true) {
    firstOptCheck.style.display = 'block'
  } else {
    firstOptCheck.style.display = 'none'
  }
})

opt2Check.addEventListener('click', () => {
  if (opt2Check.checked == true) {
    secondOptCheck.style.display = 'block'
  } else {
    secondOptCheck.style.display = 'none'
  }
})
