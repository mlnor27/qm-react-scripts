import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Flex.module.scss'

const Flex = ({ children, className, disabled, ...props }) => {
  if (disabled) return false

  const filterableProps = Object.entries(props)
  const defaultProps = Object.keys(Flex.defaultProps)

  const stylesProps = filterableProps
    .filter(([prop]) => defaultProps.includes(prop))
    .reduce((acc, [key, value]) => ({ ...acc, [styles[key]]: value }), {})

  const othersProps = filterableProps
    .filter(([prop]) => !defaultProps.includes(prop))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

  return (
    <div
      className={cx(styles.Flex, {
        [className]: Boolean(className),
        ...stylesProps,
      })}
      {...othersProps}
    >
      {children}
    </div>
  )
}

Flex.propTypes = {
  children: PropTypes.node,
  row: PropTypes.bool,
  column: PropTypes.bool,
  grow: PropTypes.bool,
  wrap: PropTypes.bool,
  shrink: PropTypes.bool,
  debug: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

Flex.defaultProps = {
  column: false,
  row: false,
  center: false,
  grow: false,
  wrap: false,
  shrink: false,
  debug: false,
  disabled: false,
}

export default Flex
