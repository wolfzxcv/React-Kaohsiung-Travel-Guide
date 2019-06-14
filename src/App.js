import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Select from './components/Select'
import List from './components/List'

const header_bg = require('../src/images/header_bg.png')
const icons_down = require('../src/images/icons_down.png')
const btn_goTop = require('../src/images/btn_goTop.png')
const all = require('./components/allData')

const blue = '#559AC8'
const white = '#F3E7E7'

const App = ({className}) => {
  return (
    <div className={className}>
      <header>
      <img src={header_bg} />
      <p>Kaohsiung Travel Guide</p>
      </header>
      <Select />
      <hr/><img className='icons_down' src={icons_down} />
      {console.log(all.allData.map(i=> i.Name))} 
      <List />
      <img className='btn_goTop' src={btn_goTop} />
      <footer>
      <p>Kaohsiung Travel</p>  
      <p>Data source <a href='https://www.kcg.gov.tw/EN/Default.aspx' target='_blank'>Kaohsiung City Government</a></p>  
      </footer>
    </div>
  )
}

App.propTypes = {
  className: PropTypes.string
}

const StyledApp = styled(App)` 

 header{
  margin-top: 250px;
  font-size: 40px;
  color: ${white};
  letter-spacing: 3.89px;

 p{
  text-align: center;
 }  

 img{ 
  position: absolute; 
  top: 0;
  width: 100vw;
  z-index: -1;
  }
}

hr {
	border: 2px dashed ${blue};
	width: 1200px;
}

.icons_down{
  width: 20px;
  height: 20px;
  color: ${blue} 
  display: flex;
  position: relative;
  top: -25px;
  margin: 0 auto;
  padding: 10px;
  border: 2px solid ${blue};  
  border-radius: 50%;
}

.btn_goTop{
	position: fixed;
	right: 20px;
	bottom: 110px;
}

footer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 22px;
  text-align: center;
  color: ${white};
  height: 100px;
  background: ${blue};
  
  p{
    margin: 5px;
  }

  a{
   text-decoration: none;
   color: inherit;
  &:hover{
   color: #8B0000; 
  } 
  }
}
`

StyledApp.displayName = 'App'

export default StyledApp

