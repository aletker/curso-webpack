import React from 'react'
import ReactDOM from 'react-dom'
//import SilvaFamily from './silvaFamily'
import Family from './family'
import Member from './member'
//import SilvaFamily from './silvaFamily'

ReactDOM.render(
  <Family>    
    <Member name='Guilherme' lastName='Silva' />
  </Family>
, document.getElementById('app'))
