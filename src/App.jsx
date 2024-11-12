import React from 'react'
import "./global.css"
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/homeScreen'
import WorkspaceScreen from './Screens/workspaceScreen'
import EstadosScreen from './Screens/EstadosScreen'
import FormulariosScreen from './Screens/FormulariosScreen'

function App() {


  return (
    <div>
      <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/home' element={<HomeScreen/>}/>
          <Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>} />
          <Route path='/prueba' element={<h1>hola soy la prueba</h1>}/>
          <Route path='/estados' element={<EstadosScreen/>}></Route>
          <Route path='/formularios' element ={<FormulariosScreen/>}/>
      </Routes>
      
    </div>
  )
}
export default App

