import { useState } from 'react'
import Counter from './components/Counter/Counter'
import './App.css'
import logo from './assets/logo.png'

function App() {


  return (
    <div className="App">
      <header>


        <div className="header">
          IEEE
          <span className='job'>
            {' '}
            JOB FAIR
            {' '}
          </span>
           2023
        </div>

        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </header>

      <main>
        <div className="coming-soon">
          <h1 className="coming">COMING <span className='soon'>SOON</span></h1>
        </div>
        <Counter />
      </main>


      <div className="prev">
        <p>
          Previous Iterations
        </p>

        <button className="button-57" role="button" onClick={() => window.location.href = 'https://ieeejobfair.com'}><span className="text">Job Fair</span><span>2022</span></button>

      </div>
    </div>
  )
}

export default App
