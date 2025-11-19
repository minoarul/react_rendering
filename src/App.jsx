
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/navbar"
import Homepage from './components/homepage'
import String from './components/String'
import Numbers from './components/Numbers'
import Boolean from './components/Boolean'

const App=()=>{
  return(
    <>
      <div>
        <div>
          <h1>Movies</h1>
        </div>
        
    
        
      </div>
      <div>
        <Navbar/>
        <main>
          <Routes>
           <Route path="/" element={<Homepage/>}/>
           
          </Routes>
        </main>
        <div>
          <String/>
        </div>
        <div>
          <Numbers/>
        </div>
        <div>
          <Boolean/>
        </div>

      </div>
      
  
         
    </>
  )


}
export default App