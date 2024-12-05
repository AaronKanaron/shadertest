import './App.scss'
import { useRef } from 'react'
import Scene from './components/hero/Scene'
import BouncyDivider from './components/divider/BouncyDivider'
import StickyCursor from './components/StickyCursor'
import { SplitText } from './components/SplitText'
import { SplitWord } from './components/SplitWord'
import Header from './components/navigator/Header'

function App() {
  // const arrowArea = useRef(null);

  return (
    <>  
      <StickyCursor />
      <Header />
      <main>
        <Scene />
        {/* <div className="arrow-area-container">
          <div className="arrow-area" ref={arrowArea}>
            Lets work
          </div>
        </div> */}
        <BouncyDivider />
        <section className='about'>
          <div className="section-container">
            {/* <h1>About me</h1> */}
            <div className='about-me'>
              <div className="about-me--container">
                <p className='about-me--container--content'>
                  Hi, I’m <span className='Violet'>Aaron Alexander Clauss</span>, a 17-year-old <span className='Vintage'><SplitWord>web designer</SplitWord></span> and <span className='Bumerang'><SplitWord>developer</SplitWord></span> based in <span>Stockholm</span>, Sweden. With a passion for <span className='Vintage'><SplitWord>creativity</SplitWord></span> and <span className='Violet'><SplitWord>problem-solving</SplitWord></span>, I specialize in crafting <span className='Violet'><SplitWord>engaging</SplitWord></span>, <span className='Vintage'><SplitWord>functional</SplitWord></span> websites.

                  I enjoy <span className='Bumerang'><SplitWord>traveling</SplitWord></span> and immersing myself in different cultures. I’m always eager to learn, grow, and take on new projects.

                  {/* Whether you’re looking for a collaborative partner on your next web project or want to explore ideas, feel free to get in touch! */}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
