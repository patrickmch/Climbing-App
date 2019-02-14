import React from 'react'
import PropTypes from 'prop-types'

// import Icon from '../components/icons/Icon'
import { faHome, faHandRock, faBookMedical, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PrimaryNav = props => {

  PrimaryNav.propTypes = {
      title: PropTypes.string.isRequired
  }

  const { title } = props

  return (
    <nav>
      <div className="primary-nav">
        <FontAwesomeIcon icon={faHandRock} size="2x" className="nav-logo" />
        <FontAwesomeIcon icon={faHome} size="2x" className="nav-item" />
        <FontAwesomeIcon icon={faBookMedical} size="2x" className="nav-item" />
        <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" className="nav-item" />
      </div>
    </nav>
  )
}

export default PrimaryNav
