import React from 'react'

function  Title() {
  console.log('Rendering Title')
  return (
    <h2>
      My Name is Siddharth
    </h2>
  )
}

export default React.memo(Title)
