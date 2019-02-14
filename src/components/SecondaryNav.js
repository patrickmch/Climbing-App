import React from 'react'
import PropTypes from 'prop-types'

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';


const SecondaryNav = props => {

  SecondaryNav.propTypes = {
      // title: PropTypes.string.isRequired
  }

  // const { title } = props

  return (
    <Accordion className="secondary-nav">
      <AccordionItem>
          <AccordionItemTitle>
              <h3 className="u-position-relative">
                  Lesson
                  <div className="accordion__arrow" role="presentation" />
              </h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <ol>
              <li>Topic</li>
              <li>Topic</li>
              <li>Topic</li>
              <li>Topic</li>
            </ol>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3 className="u-position-relative">
                    Lesson
                    <div className="accordion__arrow" role="presentation" />
                </h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>Topic</li>
                <li>Topic</li>
                <li>Topic</li>
                <li>Topic</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemTitle>
                  <h3 className="u-position-relative">
                      Lesson
                      <div className="accordion__arrow" role="presentation" />
                  </h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                <ul>
                  <li>Topic</li>
                  <li>Topic</li>
                  <li>Topic</li>
                  <li>Topic</li>
                </ul>
              </AccordionItemBody>
            </AccordionItem>
      </Accordion>
  )
}

export default SecondaryNav
