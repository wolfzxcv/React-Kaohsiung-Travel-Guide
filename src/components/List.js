import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const icons_clock = require('../images/icons_clock.png')
const icons_pin = require('../images/icons_pin.png')
const icons_phone = require('../images/icons_phone.png')
const icons_tag = require('../images/icons_tag.png') 

const white = '#F3E7E7'
const black = '#1A001A'

const List = ({className, backGroundImage, imageAlt, siteName, district, hours, address, tel, ticket, info}) => {
  return (
    <div className={className}>

    <div className='upper'>    
      <div className='name'>
        <h3>{siteName}</h3>
        <h4>{district}</h4>  
      </div>
    </div>

    <div className='lower'  onClick={() => alert(info)}>
    <div><img src={icons_clock} />{hours}</div>
    <div><img src={icons_pin} />{address}</div>
      <div className='left-right'>
        <div><img src={icons_phone} />{tel}</div>
        <div><img src={icons_tag} />{ticket}</div>
      </div>
    </div>

    </div>
  )
}

List.propTypes = {
  className: PropTypes.string
}

const StyledList = styled(List)`
  box-sizing: border-box;
  margin: 30px;
  padding: 0;
  color: ${black};
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 3px 2px rgba(0,0,0,0.20);
  width: 500px;
  height: 350px;

.upper{
  width: 100%;
  height: 250px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  background-image: url(${props => props.backGroundImage});
  
  .name{
    width: 100%; 
    padding: 0 7px;
    display: flex;
    justify-content: space-between;
    color: ${black}; 
    h3, h4{
    background-color: rgba(255,255,255,0.8); 
    box-shadow: 0 2px 3px 2px rgba(0,0,0,0.20);
    border-radius: 25px; 
    } 
} 

.lower{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100px;
  padding: 7px;
}

.left-right{
  display: flex;
  justify-content: space-between;  
}
`

StyledList.displayName = 'List'

export default StyledList
