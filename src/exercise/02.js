// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    if (allowedTypes.includes(child.type)) {
      return React.cloneElement(child, {on, toggle})
    }

    return child
  })
}

const ToggleOn = ({on, children}) => {
  return on ? children : null
}

const ToggleOff = ({on, children}) => {
  return on ? null : children
}

const ToggleButton = ({on, toggle, ...props}) => {
  return <Switch on={on} onClick={toggle} {...props} />
}

const MyToggleText = ({on, toggle}) => {
  return on ? '토글 on' : '토글 off'
}

const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
        <MyToggleText />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
