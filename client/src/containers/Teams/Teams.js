import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TeamItem from '../../components/TeamItem/TeamItem'

const Teams = (props) => {
	const { arrayOfTeams, teamsCreated } = props

	const renderTeams = () => {
		if (!teamsCreated) {
			return <Col><h2>Create teams at Generator page and come back!</h2></Col>
		} else if (teamsCreated && arrayOfTeams.length === 0) {
			return <Col><h2>Loading...</h2></Col>
		} else {
			return (
				arrayOfTeams.map((team, index) => {
					return (
						<TeamItem
							key={index}
							teamNumber={index + 1}
							team={team}
						/>
					)
				})
			)
		}
	}

	return (
		<section>
			<Container>
				<Row>
					{renderTeams()}
				</Row>
			</Container>
		</section>
	)
}

export default Teams
