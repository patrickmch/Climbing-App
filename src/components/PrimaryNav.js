import React from 'react'
import PropTypes from 'prop-types'

const PrimaryNav = props => {

  PrimaryNav.propTypes = {
      title: PropTypes.string.isRequired
  }

  const { title } = props

  return (
    <header>
      <div className="primary-nav">
        <h1>{title}</h1>
      </div>
    </header>
  )
}

export default PrimaryNav
