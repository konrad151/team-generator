import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import { useHistory } from 'react-router-dom'
import styles from './Form.module.scss'

const Form = (props) => {
	const [groupSize, setGroupSize] = useState('')

	const { label, inputType, redirect, createTeams } = props

	const history = useHistory()
	
	const validation = () => {
		if (groupSize >= 1 && groupSize <= 5) {
			return true
		} else {
			alert('Number must be from 1 to 5')
			return false
		}
	}

	const onFormSubmit = (event) => {
		event.preventDefault()
		if (!validation()) return
		createTeams(groupSize)
		history.push(redirect)
	}

	return (
		<div className={styles.formWrapper}>
			<form onSubmit={onFormSubmit} className={styles.form}>
				<div className={styles.form__field}>
					<label
						className={styles.form__label}>
						{label}
					</label>
					<input
						className={styles.form__input}
						type={inputType}
						value={groupSize}
						onChange={e => setGroupSize(e.target.value)}
					/>
				</div>
				<Button
					type='submit'
					name='Create teams'
				/>
			</form>
		</div>

	)
}

export default React.memo(Form)
