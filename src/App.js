import { createContext, useState } from "react";
import InputForm from "./components/InputForm";
import QrCode from "./components/QrCode";
import axios from "axios";

export const InputContext = createContext();

function App() {

  const [inputValue,setInputValue] = useState({
    url:'',
    color:''
  })

 const [response,setResponse] = useState('')
 const [error,setError] = useState(null)
 const [isLoading,setIsLoading] = useState(false)
  const config = {
    headers : {
      Authorization: 'Bearer 5b0e33a0-eeb6-11ee-a0cb-39377d85ab75'
    }
  }
  const bodyParametrs = {
    "colorDark": inputValue.color,
    "qrCategory":"url",
    "text":inputValue.url
  }
  const getQrCode = async() => {
    try {
       setIsLoading(true)
       const res = await axios.post('https://qrtiger.com/api/qr/static',
       bodyParametrs,
       config
       )
       setResponse(res.data.url)
    } catch (error) {
      setError(error)
    }finally{
      setIsLoading(false)
    }
  }
  
  const value = {
    inputValue,
    setInputValue,
    getQrCode,
    response,
    isLoading,
    error
  }

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-36 px2">
       <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
         <div className="md:grid md:grid-cols-3">
            <InputContext.Provider value={value}>
                <InputForm/>
                <QrCode/>
            </InputContext.Provider>
         </div>
       </div>
    </div>
  );
}

export default App;
