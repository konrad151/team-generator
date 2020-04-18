import React, { useState, useEffect } from 'react'
import workersApi from '../apis/workers'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header/Header'
import Generator from '../containers/Generator/Generator'
import Teams from '../containers/Teams/Teams'
import NotFound from '../containers/NotFound/NotFound'

const App = () => {
	const [workers, setWorkers] = useState([])

	useEffect(() => {
		getWorkers()
	}, [])

	const getWorkers = async () => {
		try {
			const res = await workersApi.get('/workers')
			setWorkers(res.data)
			console.log(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact component={Generator} />
					<Route path="/teams" component={Teams} />
					<Route path="*" component={NotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
