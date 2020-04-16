import React, { useState, useEffect } from 'react'
import workersApi from '../apis/workers'

const App = () => {
	const [workers, setWorkers] = useState([])

	const getWorkers = async () => {
		try {
			const res = await workersApi.get('/workers')
			setWorkers(res.data)
			console.log(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getWorkers()
	}, [])

	return (
		<div>
			App
			{workers.map(worker => worker.name)}
		</div>
	)
}

export default App
