import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {

    const onClick=()=>{

        console.log('clicked')
    }
    return (
        <>
       <header className='header'>
           <h1>{title}</h1>
            <Button onClick={onClick} color='crimsong' text='Add Task'/>
      
       </header>

       </>
    )
}

Header.defaultProps = {
    title:'Task Management'
}

Header.propTypes={
    title:PropTypes.string.isRequired
}
export default Header


