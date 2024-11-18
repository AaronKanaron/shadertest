import './App.scss'
import React, { useEffect, useRef } from 'react'
import { SplitText } from './components/SplitText.jsx'
import { SplitWord } from './components/SplitWord.jsx'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import * as reactSpring from '@react-spring/three'
import { motion, useScroll, useMotionValueEvent, useSpring } from "motion/react"
import { Shader } from "./components/Shader.jsx"


function App() {
  return (
    <>
      <Shader />
      <section>
      
      <SplitWord>Aaron</SplitWord><SplitWord>Alexander</SplitWord> <SplitWord>Clauss</SplitWord>
      {/* <SplitText>Hej mitt namn är Aaron och idag, händer mycket. </SplitText>
      <SplitText>Duis cupidatat culpa aliquip magna sint officia sit incididunt irure ex officia.</SplitText>
      <SplitText>Aliqua eu ipsum excepteur mollit anim qui elit commodo aute deserunt consequat et.</SplitText>
      <SplitText>Eu esse eiusmod enim ut commodo ea mollit excepteur cupidatat excepteur occaecat cupidatat.</SplitText>
      <SplitText>Laborum in amet deserunt ad laboris culpa ullamco id.</SplitText> */}
      </section>
      <section>
      </section>
    </>
  )
}

export default App
