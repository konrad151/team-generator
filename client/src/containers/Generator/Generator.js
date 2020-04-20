import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Form from '../../components/Form/Form'

const Generator = () => {
	return (
		<main>
			<Container>
				<Row>
					<Col xs={12}>
						<Form
							label='Max team size'
							inputType='number'
							redirect='/teams'
						/>
					</Col>
				</Row>
			</Container>
		</main>
	)
}

export default Generator
