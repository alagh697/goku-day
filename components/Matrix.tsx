import React, { useEffect, useRef } from 'react'

function Matrix() {
    // Initialising the canvas
    /*const ref = useRef()

useEffect(() => {
  
  const canvas = ref.current.getContext('2d')

  // Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
const letters = ['R', 'O','N','I','N','D','E','V','O', '{', '}', ';', '(', ')'];


// Setting up the columns
var fontSize = 10,
columns = canvas?.width / fontSize;

// Setting up the drops
let drops = [];
for (var i = 0; i < columns; i++) {
drops[i] = 1;
}

// Setting up the draw function
function draw() {
  canvas.fillStyle = 'rgba(0, 0, 0, .1)';
  canvas.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    canvas.fillStyle = '#ff1414';
    canvas.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }


// Loop the animation
setInterval(draw, 100);
}, [])
*/


  return (
    <>
   {/*} <canvas ref={ref} className='relative  font-body'>
       <img src="/GokuAvatar.png" alt="" className='z-50 relative'/>     
  </canvas>*/}
</>
  )
}

export default Matrix
