import './App.scss'
import { useRef } from 'react'
import Scene from './components/hero/Scene'
import BouncyDivider from './components/BouncyDivider'
import StickyCursor from './components/StickyCursor'

function App() {
  // const arrowArea = useRef(null);

  return (
    <>  
      <StickyCursor />

      <main>
        <Scene />
        {/* <div className="arrow-area-container">
          <div className="arrow-area" ref={arrowArea}>
            Lets work
          </div>
        </div> */}
      </main>
      <BouncyDivider />
      <section>
      </section>
    </>
  )
}

export default App
