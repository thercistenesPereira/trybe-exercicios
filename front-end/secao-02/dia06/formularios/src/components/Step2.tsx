import React, { useState } from 'react'


function Step2() {

const [name, setName] = useState('');

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  return (
    <div>
      <h2>Etapa 2</h2>
      <label> Name:
        <input
         type="text" 
         name='name'
         value={ name } 
         onChange={handleName}
         />
      </label>
    </div>
  )
}

export default Step2
