import React from 'react'
import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
       <header className='header'>
           <h1>{title}</h1>
           <button className='btn'>Add Task</button>
       </header>
    )
}

Header.defaultProps = {
    title:'Task Managements'
}

Header.propTypes={
    title:PropTypes.string.isRequired
}
export default Header


