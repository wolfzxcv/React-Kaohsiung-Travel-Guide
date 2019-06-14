import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
  background: #FFFFFF;
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
  color: #000000;
  align-self: flex-start;
  flex: 1;
}

.four-options{
  display: flex;
  font-size: 24px;
  justify-content: space-around;
  flex: 2 0 0%;
}  

.option1{  
  width: 130px;
  height: 42px;
  font-size: 20px;
  font-weight: 700;
  color: #FFFFFF;
  background: #8A82CC;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.option2{  
  width: 130px;
  height: 42px;
  font-size: 20px;
  font-weight: 700;
  color: #FFFFFF;
  background: #FFA782;;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.option3{  
  width: 130px;
  height: 42px;
  font-size: 20px;
  font-weight: 700;
  color: #FFFFFF;
  background: #F5D105;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.option4{  
  width: 130px;
  height: 42px;
  font-size: 20px;
  font-weight: 700;
  color: #FFFFFF;
  background: #559AC8;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}


`


StyledPopular.displayName = 'Popular'

export default StyledPopular