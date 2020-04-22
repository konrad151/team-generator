import React, { useState }from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import useResources from '../../hooks/useResources'
import Header from '../Header/Header'
import Generator from '../../containers/Generator/Generator'
import Teams from '../../containers/Teams/Teams'
import NotFound from '../../containers/NotFound/NotFound'

const App = () => {
	const workers = useResources('workers')
	const [teams, setTeams] = useState([])

	return (
		<>
			{workers.length ? console.log('render, ', workers) : console.log('render, brak workers')}
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact render={() => <Generator workers={workers} setTeams={setTeams} />} />
					<Route path="/teams" render={() => <Teams teams={teams} />} />
					<Route path="*" component={NotFound} />
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default App
