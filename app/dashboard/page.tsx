import React from 'react' // Import React at the top


export default function Page() {
  return (
    <div>
      <Alhamdulillah/>
    </div>
  )
}

function Alhamdulillah() {
  return <div className="p-6 text-3xl">Alhamdulillah, I can show Dashboard!</div>
}


function handleClick() {
  console.log('Clicked!')
}