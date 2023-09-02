import { useEffect, useRef } from 'react';

export const ExampleComponent = () => {

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  })


  return (
    <div>
      <input ref={inputRef} type='number' />
      <input  type='text' />
      <button onClick={() => inputRef.current.focus()}> Try Focus</button>
    </div>
  )

}

export default ExampleComponent;