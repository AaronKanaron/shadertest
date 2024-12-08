import './App.scss'
import { useRef, useState } from 'react'
import Scene from './components/hero/Scene'
import BouncyDivider from './components/divider/BouncyDivider'
import StickyCursor from './components/StickyCursor'
import { SplitText } from './components/SplitText'
import { SplitWord } from './components/SplitWord'
import Header from './components/navigator/Header'

function App() {
  // const arrowArea = useRef(null);
  const sections = [useRef(null), useRef(null)];
  const StickyElement = useRef(null);

  return (
    <>  
      <StickyCursor stickyElement={StickyElement}/>
      <Header sections={sections}/>
      <main>
        <section className="hero" ref={sections[0]}>
          <Scene />
          <h1>Aaron Clauss<br />Portfolio 2025.</h1>
          <div className="cta" >
            <p>Get in contact</p>
            <div className="cta--bounds" ref={StickyElement} />
            <div className="cta--border" />
          </div>
        </section>
        {/* <div className="arrow-area-container">
          <div className="arrow-area" ref={arrowArea}>
            Lets work
          </div>
        </div> */}
        <BouncyDivider />
        <section className='about' ref={sections[1]}>
          <div className="section-container">
            {/* <h1>About me</h1> */}
            <div className='about-me'>
              <div className="about-me--container">
                <p className='about-me--container--content'>
                  Hi, I’m <span className='Violet'>Aaron Clauss</span>, a 17-year-old <span className='Vintage'><SplitWord>web designer</SplitWord></span> and <span className='Bumerang'><SplitWord>developer</SplitWord></span> based in <span>Stockholm</span>, Sweden. With a passion for <span className='Vintage'><SplitWord>creativity</SplitWord></span> and <span className='Violet'><SplitWord>problem-solving</SplitWord></span>, I specialize in crafting <span className='Violet'><SplitWord>engaging</SplitWord></span>, <span className='Vintage'><SplitWord>functional</SplitWord></span> websites.

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
