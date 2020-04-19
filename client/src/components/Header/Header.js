import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<Row>
					<Col xs={12} sm={'auto'}>
						<h1 className={styles.header__logo}>Team Generator</h1>
					</Col>
					<Col xs={12} sm>
						<nav className={styles.header__nav}>
							<Link to="/" className={styles.header__navItem}>Generator</Link>
							<Link to="/teams" className={styles.header__navItem}>Teams</Link>
						</nav>
					</Col>
				</Row>
			</Container>
		</header>
	)
}

export default Header
