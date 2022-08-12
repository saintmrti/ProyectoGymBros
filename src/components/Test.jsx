import { useEffect } from "react"

const Test = () => {

  useEffect(() => {
    setTimeout(() => {
      
    }, 2000);
  }, [])

  function handleOnClick() {
    console.log("first")
  }

  function handleOnKeyDown(e) {
    // const inputTxt = document.getElementById('entradaTxt')
    let keycode = e.keycode || e.which 
    keycode == 65 || keycode == 69 || keycode == 73 || keycode == 79 || keycode == 85 ? e.preventDefault() : console.log(e)
  }
  return (
    <>
      <div className="mt-9 ml-20" onClick={handleOnClick}>Prueba Aquí</div>
      <input id="entradaTxt" className="ml-20 border border-black" type="text" onKeyDown={handleOnKeyDown}/>
    </>
  )
}

export default Test