import React, {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Select from './components/Select'
import Popular from './components/Popular'
import List from './components/List'

const header_bg = require('../src/images/header_bg.png')
const icons_down = require('../src/images/icons_down.png')
const btn_goTop = require('../src/images/btn_goTop.png')
const all = require('./components/allData')

const blue = '#559AC8'
const white = '#F3E7E7'
const black = '#1A001A'

const App = ({className}) => {
  const [select, setSelect] = useState('please select a district')
  
  const filterSelectOptions = all.allData.reduce( (eachData, zone) => {
    eachData[zone.Zone] = 0  
   return eachData   },{})
  
  const getSelectOptions= Object.keys(filterSelectOptions)

  const option1 = () => setSelect('美濃區')
  const option2 = () => setSelect('三民區')
  const option3 = () => setSelect('大樹區')
  const option4 = () => setSelect('岡山區')
  
  const resultArr = all.allData.filter( x=> select.includes(x.Zone))

  console.log(resultArr)
 
  return (
    <div className={className}>
      <a name="top"></a>

      <header>
      <img src={header_bg} />
      <p>Kaohsiung Travel Guide</p>
      </header>

     <div className='select'>
     <select value={select} onChange={e => setSelect(e.target.value)} >
      <option value='please select a district' disabled>please select a district</option>
      {getSelectOptions.map( (option, idx) => 
      <Select 
      key={idx}
      value={option}
      select={option}         
      />)}
     </select>    
    </div>

    <Popular option1={option1} option2={option2} option3={option3} option4={option4} /> 

    <hr/><img className='icons_down' src={icons_down} />

    <div className='show-title'>{select}</div> 
    
    <div className='list-container'>
     {resultArr.map( (list, idx) =>
     <List
     key={idx}
     backGroundImage={list.Picture1} 
     imageAlt={list.Picdescribe1}
     siteName={list.Name}
     district={list.Zone}
     hours={list.Opentime}
     address={list.Add}
     tel={list.Tel}
     ticket={list.Ticketinfo}
     info={list.Description}
     />)}
     </div>

    <a href='#top'><img className='btn_goTop' src={btn_goTop} /></a>
    
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
 font-family: "Comic Sans MS", cursive, "Microsoft YaHei", "微软雅黑", "华文细黑";

 header{
  margin: 230px 0 200px 0;
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

.select{
  height: 100px; 
  display: flex;
  justify-content: center;
}

select{
  background: rgba(255,255,255,0.70);
  border: 3px solid ${white};
  border-radius: 3px;
  font-size: 18px;
  color: ${black};
  line-height: 21px;
  width: 452px;
  height: 48px;
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

.show-title{
  display: flex;
  justify-content: center;
  color: #8A82CC;
  font-size: 36px;
}

.list-container{
  width: 70vw;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
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

