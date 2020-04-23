import React, { useState }from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import teamGeneratorApi from '../../apis/teamGeneratorApi'
import useResources from '../../hooks/useResources'
import Header from '../Header/Header'
import Generator from '../../containers/Generator/Generator'
import Teams from '../../containers/Teams/Teams'
import NotFound from '../../containers/NotFound/NotFound'

const App = () => {
	const workers = useResources(teamGeneratorApi, 'workers')
	const [arrayOfTeams, setArrayOfTeams] = useState([])
	const [teamsCreated, setTeamsCreated] = useState(false)

	return (
		<>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact render={() => <Generator workers={workers} setArrayOfTeams={setArrayOfTeams} setTeamsCreated={setTeamsCreated} />} />
					<Route path="/teams" render={() => <Teams arrayOfTeams={arrayOfTeams} teamsCreated={teamsCreated} />} />
					<Route path="*" component={NotFound} />
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default App
