import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Form from '../../components/Form/Form'

const Generator = (props) => {
	const { workers, setArrayOfTeams, setTeamsCreated } = props

	const randomWorker = (numOfWorkers, allWorkers) => {
		const randomNumber = Math.floor(Math.random() * numOfWorkers)
		const worker = allWorkers.find((element, index) => index === randomNumber)
		return worker
	}

	const createTeams = (teamSize) => {
		const allWorkers = [...workers]
		let numOfWorkers = allWorkers.length

		const teams = []

		do {
			const teamWorkers = []
			for (let i = 1; i <= teamSize; i++) {
				teamWorkers.push(randomWorker(numOfWorkers, allWorkers))
				numOfWorkers--
			}
			teams.push(teamWorkers)
		} while (numOfWorkers > 0)

		setArrayOfTeams(teams)
		setTeamsCreated(true)
	}

	return (
		<main>
			<Container>
				<Row>
					<Col xs={12}>
						<Form
							label='Max team size'
							inputType='number'
							redirect='/teams'
							createTeams={createTeams}
						/>
					</Col>
				</Row>
			</Container>
		</main>
	)
}

export default Generator
