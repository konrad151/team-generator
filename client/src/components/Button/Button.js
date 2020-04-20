import React from 'react'
import styles from './Button.module.scss'

const Button = (props) => {
	const { type, name } = props

	return (
		<button type={type} className={styles.btn}>{name}</button>
	)
}

export default Button
