import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Select = ({className}) => {
  return (
    <div className={className}>
      
    </div>
  )
}

Select.propTypes = {
  className: PropTypes.string
}

const StyledSelect = styled(Select)`
 height: 500px;
`

StyledSelect.displayName = 'Select'

export default StyledSelect
