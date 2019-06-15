import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const white = '#F3E7E7'
const black = '#1A001A'

const Popular = ({className, option1, option2, option3, option4}) => {
  return (
    <div className={className}>

    <div className='left'>Popular districts</div>
     
    <div className='four-options'>
    <div className='option1' onClick={option1}>美濃區</div>
    <div className='option2' onClick={option2}>三民區</div>
    <div className='option3' onClick={option3}>大樹區</div>
    <div className='option4' onClick={option4}>岡山區</div>     
    </div>  
 
    </div>
  )
}

Popular.propTypes = {
  className: PropTypes.string
}

const StyledPopular = styled(Popular)`
  background: ${white};
  margin: 80px auto;
  box-shadow: 0 2px 5px 3px rgba(0,0,0,0.20);
  border-radius: 5px;
  width: 800px;
  height: 112px;
  display: flex;
  flex-direction: column;

.left{
  margin: 10px;
  font-size: 18px;
  font-weight: 500;
  color: ${black};
  align-self: flex-start;
  flex: 1;
}

.four-options{
  display: flex;
  font-size: 24px;
  justify-content: space-around;
  flex: 2 0 0%;
}  

.option1, .option2, .option3, .option4{  
  width: 130px;
  height: 42px;
  font-size: 20px;
  font-weight: 700;
  color: ${white};
  background: #8A82CC;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.option1{
  background: #8A82CC;
}
.option2{  
  background: #FFA782;;
}

.option3{  
  background: #F5D105;
}

.option4{  
  background: #559AC8;
}
`


StyledPopular.displayName = 'Popular'

export default StyledPopular