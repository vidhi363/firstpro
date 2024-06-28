import React from 'react'
import Component3 from './Component3'

export default function Component2({user}) {
  return (
    <div>
        <h1>c2{user}</h1>
        <Component3 user={user}/>
    </div>
  )
}
