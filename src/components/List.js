import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const icons_clock = require('../images/icons_clock.png')
const icons_pin = require('../images/icons_pin.png')
const icons_phone = require('../images/icons_phone.png')
const icons_tag = require('../images/icons_tag.png') 

const black = '#1A001A'

const List = ({className, backGroundImage, imageAlt, siteName, district, hours, address, tel, ticket, info}) => {
  return (
    <div className={className}>

    <div className='upper'>
      <img className='backGroundImage' src={backGroundImage} alt={imageAlt} />

      <div className='name'>
        <div>{siteName}</div>
        <div>{district}</div>  
      </div>
    </div>

    <div className='lower'  onClick={() => alert(info)}>
    <div><img src={icons_clock} />{hours}</div>
    <div><img src={icons_pin} />{address}</div>
      <div>
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
  color: ${black};
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.20);
`

StyledList.displayName = 'List'

export default StyledList
