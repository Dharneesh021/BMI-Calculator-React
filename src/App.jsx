import { useState } from 'react'
import './App.css'

function App() {

  const [height , setHeight] = useState("")
  const [weight , setWeight] = useState("")
  const [score , setScore] = useState(null)
  const [status , setStatus] = useState("")
  const [stsColor , setStsColor] = useState("")
  const [scrColor , setScrColor] = useState("")
  const [error , setError] = useState("")

  const handleClick = () =>{
    const isValidHeight = /^\d+$/.test(height)
    const isValidWeight = /^\d+$/.test(weight)
    if(isValidHeight && isValidWeight){
      setError("")
      const heightInCm = height / 100;
      const bmiValue = weight / (heightInCm * heightInCm);
      setScore(bmiValue.toFixed(1))
    
      if(bmiValue  < 18.5){
        setStatus("Under Weight")
        setStsColor("orange")
        setScrColor("#c983028c")
      }
      else if(bmiValue  >= 18.5 && bmiValue  < 24.9){
        setStatus("Normal Weight")
        setStsColor("green")
        setScrColor("#01c001b7")
      }
      else if(bmiValue  >= 25 && bmiValue  < 29.9){
        setStatus("Over Weight")
        setStsColor("red")
        setScrColor("#ff000085")
      }
      else {
        setStatus("Obese");
        setStsColor("purple");
        setScrColor("#800080");
      }
    }
    else{
      setScore(null)
      setStatus("")
      setError("Please enter valid numeric values for height and weight")
    }
  }

  const handleClear = () =>{
    setHeight("")
    setWeight("")
    setError("")
    setScore(null)
  }
  return (
    <>
      <div className="container">
        {/* Image */}
        <div className="block"></div>

        <div className="block-2">
          <h1>BMI Calculator</h1>
          {error &&
              <p className='error'>{error}</p>
            }
          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input type="text" placeholder='Eg.(160)' value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (kg):</label>
            <input type="text" placeholder='Eg.(50)' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
            <button onClick={handleClick}>Calculate BMI</button>
            <button onClick={handleClear} className='reset'>Reset</button>

         {score !== null && (<div className="result">
            <p>Your BMI Score : <span style={{color:scrColor}}>{score}</span></p>
            <p>BMI Status : <span style={{color:stsColor}}>{status}</span></p>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default App
