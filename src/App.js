import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-36 px2">
       <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
         <div className="md:grid md:grid-cols-3">
            <InputForm/>
            <h1>qrcode</h1>
         </div>
       </div>
    </div>
  );
}

export default App;
