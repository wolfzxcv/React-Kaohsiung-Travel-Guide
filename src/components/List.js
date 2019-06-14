import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const icons_clock = require('../images/icons_clock.png')
const icons_phone = require('../images/icons_phone.png')
const icons_pin = require('../images/icons_pin.png')
const icons_tag = require('../images/icons_tag.png') 

const List = ({className}) => {
  return (
    <div className={className}>
      
    </div>
  )
}

List.propTypes = {
  className: PropTypes.string
}

const StyledList = styled(List)`
  height: 500px;
`

StyledList.displayName = 'List'

export default StyledList
