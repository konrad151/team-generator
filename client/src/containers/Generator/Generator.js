import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Form from '../../components/Form/Form'

const Generator = (props) => {
	const { workers, setArrayOfTeams, setTeamsCreated } = props

	let remainedWorkers = [...workers]
	let numOfRemainedWorkers = remainedWorkers.length

	let fittingRemainedWorkers = [...remainedWorkers]
	let numOfFittingRemainedWorkers = remainedWorkers.length

	const updateRemainedWorkers = worker => {
		remainedWorkers = remainedWorkers.filter(e => e !== worker)
		numOfRemainedWorkers--
	}

	const randomWorker = (numOfRemainedWorkers, remainedWorkers) => {
		const randomNumber = Math.floor(Math.random() * numOfRemainedWorkers)
		const worker = remainedWorkers.find((element, index) => index === randomNumber)
		return worker
	}

	const workerFitToTeamMates = (worker, filterOptions) => {
		if (filterOptions.districts.includes(worker.district) ||
			filterOptions.ages.includes(worker.age) ||
			filterOptions.departments.includes(worker.department)) {
			return false
		} else {
			return true
		}
	}

	const addWorkerToTeam = (worker, filterOptions, teamWorkers) => {
		teamWorkers.push(worker)
		updateRemainedWorkers(worker)
		addFilters(worker, filterOptions)
	}

	const addFilters = (worker, filterOptions) => {
		filterOptions.districts.push(worker.district)
		filterOptions.ages.push(worker.age)
		filterOptions.departments.push(worker.department)
	}

	const updateFittingWorkers = worker => {
		fittingRemainedWorkers = fittingRemainedWorkers.filter(e => e !== worker)
		numOfFittingRemainedWorkers--
	}

	const clearFittingWorkers = () => {
		fittingRemainedWorkers = [...remainedWorkers]
		numOfFittingRemainedWorkers = remainedWorkers.length
	}

	const createTeams = (teamSize) => {
		const teams = []
		/* eslint no-labels: ["error", { "allowLoop": true }] */
		do {
			const teamWorkers = []
			const filterOptions = {
				districts: [],
				ages: [],
				departments: []
			}
			clearFittingWorkers()

			loop1:
			for (let i = 1; i <= teamSize; i++) {
				let worker
				worker = randomWorker(numOfRemainedWorkers, remainedWorkers)

				if (teamWorkers.length === 0) {
					addWorkerToTeam(worker, filterOptions, teamWorkers)
					clearFittingWorkers()
				} else {
					loop2:
					for (let i = 0; ; i++) {
						if (numOfFittingRemainedWorkers === 0) {
							break loop1
						}
						if (workerFitToTeamMates(worker, filterOptions)) {
							addWorkerToTeam(worker, filterOptions, teamWorkers)
							clearFittingWorkers()
							break
						} else {
							updateFittingWorkers(worker)
							worker = randomWorker(numOfFittingRemainedWorkers, fittingRemainedWorkers)
						}
					}
				}
			}
			teams.push(teamWorkers)
		} while (numOfRemainedWorkers > 0)

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
