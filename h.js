let val = '', result

function getNumber(value) {
  // condition to stop octal numbers //
  let temp
  if (val.includes('0')) {
    if (val.at(0) === '0') {
      val = ''
    }
    if (val.includes('+0')) {
      temp = val.replace('+0', '+')
      val = temp
    }
    if (val.includes('-0')) {
      temp = val.replace('-0', '-')
      val = temp
    }
    if (val.includes('*0')) {
      temp = val.replace('*0', '*')
      val = temp
    }
    if (val.includes('/0')) {
      temp = val.replace('/0', '/')
      val = temp
    }
  }
  val += String(value)
  // condition to stop duplication of same operators //
  if (value === '+') {
    temp = val.replace('++', '+')
    val = temp
  } else if (value === '-') {
    temp = val.replace('--', '-')
    val = temp
  } else if (value === '*') {
    temp = val.replace('**', '*')
    val = temp
  } else if (value === '/') {
    temp = val.replace('//', '/')
    val = temp
  } else if (value === '.') {
    temp = val.replace('..', '.')
    val = temp
  }
  console.log(val)
  document.getElementById('calc_screen').innerText = val
}

function Result() {
  result = String(eval(val))

  if (result === 'Infinity') {
    result = '0'
  }

  console.log(result) //remove this afterward
  val = String(result)

  document.getElementById('calc_screen').innerText = result
}

function clearScreen() {
  document.getElementById('calc_screen').innerText = 0
  val = ''
}

function deleteLast() {
  // last element doesnt get cleared from result (done)
  val = val.substring(0, val.length - 1)
  document.getElementById('calc_screen').innerText = val
  console.log(val) //remove this afterwards
}

function setStyle(value) {
  const root = document.querySelector(':root')

  if (value === '1') {
    root.style.setProperty('--very-dark-blue', 'hsl(222, 26%, 31%)')
    root.style.setProperty('--body-blue', 'hsl(223, 31%, 20%)')
    root.style.setProperty('--screen-blue', 'hsl(224, 36%, 15%)')
    root.style.setProperty('--dark-blue-key-background', 'hsl(225, 21%, 49%)')
    root.style.setProperty('--dark-blue-key-shadow', 'hsl(224, 28%, 35%)')
    root.style.setProperty('--red-key-background', 'hsl(6, 63%, 50%)')
    root.style.setProperty('--dark-red-key-shadow', 'hsl(6, 70%, 34%)')
    root.style.setProperty('--light-grayish-orange-key-background', 'hsl(30, 25%, 89%)')
    root.style.setProperty('--grayish-orange-key-shadow', 'hsl(28, 16%, 65%)')
    root.style.setProperty('--very-dark-grayish-blue', 'hsl(221, 14%, 31%)')
    root.style.setProperty('--white', 'hsl(0, 0%, 100%)')
    root.style.setProperty('--white-font', 'hsl(0, 0%, 100%)') //font
    root.style.setProperty('--equals-key', 'hsl(0, 0%, 100%)')
    root.style.setProperty('--main-keys-hover-background', 'hsl(0, 0%,100%)') // main keys hover
    root.style.setProperty('--dark-blue-key-hover-background', 'hsl(224, 51%, 76%)')
    root.style.setProperty('--red-key-hover-background', 'hsl(6, 93%, 67%)')
  } else if (value === '2') {
    root.style.setProperty('--very-dark-blue', 'hsl(0, 0%, 90%)')
    root.style.setProperty('--body-blue', 'hsl(0, 5%, 81%)')
    root.style.setProperty('--screen-blue', 'hsl(0, 0%, 93%)')
    root.style.setProperty('--dark-blue-key-background', 'hsl(185, 42%, 37%)')
    root.style.setProperty('--dark-blue-key-shadow', 'hsl(185, 58%, 25%)')
    root.style.setProperty('--red-key-background', 'hsl(25, 98%, 40%)')
    root.style.setProperty('--dark-red-key-shadow', 'hsl(25, 99%, 27%)')
    root.style.setProperty('--light-grayish-orange-key-background', 'hsl(45, 7%, 89%)')
    root.style.setProperty('--grayish-orange-key-shadow', 'hsl(35, 11%, 61%)')
    root.style.setProperty('--very-dark-grayish-blue', 'hsl(60, 10%, 19%)')
    root.style.setProperty('--white', 'hsl(0, 0%, 100%)')
    root.style.setProperty('--white-font', 'hsl(0,0%,0%)') //font
    root.style.setProperty('--equals-key', 'hsl(0,0%,100%)')
    root.style.setProperty('--main-keys-hover-background', 'hsl(0, 0%,100%)') // main keys hover
    root.style.setProperty('--dark-blue-key-hover-background', 'hsl(185, 39%, 56%)') //function key hover
    root.style.setProperty('--red-key-hover-background', 'hsl(25, 100%, 60%)') //equal key hover
  } else if (value === '3') {
    root.style.setProperty('--very-dark-blue', 'hsl(268, 75%, 9%)')
    root.style.setProperty('--body-blue', 'hsl(268, 71%, 12%)')
    root.style.setProperty('--screen-blue', 'hsl(268, 71%, 12%)')
    root.style.setProperty('--dark-blue-key-background', 'hsl(281, 89%, 26%)')
    root.style.setProperty('--dark-blue-key-shadow', 'hsl(285, 91%, 52%)')
    root.style.setProperty('--red-key-background', 'hsl(176, 100%, 44%)')
    root.style.setProperty('--dark-red-key-shadow', 'hsl(177, 92%, 70%)')
    root.style.setProperty('--light-grayish-orange-key-background', 'hsl(268, 47%, 21%)')
    root.style.setProperty('--grayish-orange-key-shadow', 'hsl(290, 70%, 36%)')
    root.style.setProperty('--very-dark-grayish-blue', 'hsl(52, 100%, 62%)') //calc button
    root.style.setProperty('--white', 'hsl(52, 100%, 62%)')
    root.style.setProperty('--white-font', 'hsl(52, 100%, 62%)') //font
    root.style.setProperty('--equals-key', 'hsl(198, 20%, 13%)')
    root.style.setProperty('--main-keys-hover-background', 'hsl(267, 53%, 43%)') // main keys hover
    root.style.setProperty('--dark-blue-key-hover-background', 'hsl(280, 56%, 44%)') //function keys hover
    root.style.setProperty('--red-key-hover-background', 'hsl(176, 100%, 79%)') //equal key hover
  }

}