import React from 'react'
import ReactDOM from 'react-dom'
//import SilvaFamily from './silvaFamily'
import Family from './family'
import Member from './member'
//import SilvaFamily from './silvaFamily'

ReactDOM.render(
  <Family lastName='Silva'>    
    <Member name='Guilherme'  />
    <Member name='Rafael'  />
    <Member name='Julia'  />
  </Family>
, document.getElementById('app'))
