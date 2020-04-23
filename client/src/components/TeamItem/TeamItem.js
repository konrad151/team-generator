import React from 'react';
import { Col } from 'react-bootstrap'
import styles from './TeamItem.module.scss'

const TeamItem = (props) => {
	const { team, teamNumber } = props

	const renderWorkers = () => {
		return (
			team.map(worker => {
				return (
					<div className={styles.teamItem__worker} key={worker.id}>{worker.name}</div>
				)
			})
		)
	}

	return (
		<Col xs={12} sm={6} md={4} lg={3} className={styles.teamItem}>
			<div className={styles.teamItem__wrapper}>
				<div className={styles.teamItem__header}>Team {teamNumber}</div>
				<div className={styles.teamItem__workers}>
					{renderWorkers()}
				</div>
			</div>
		</Col>
	);
};

export default TeamItem;