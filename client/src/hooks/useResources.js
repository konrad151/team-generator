import { useState, useEffect } from 'react'
import teamGeneratorApi from '../apis/teamGeneratorApi'

const useResources = resource => {
	const [resources, setResources] = useState([])

	useEffect(() => {
		fetchResources(resource)
	}, [resource])

	const fetchResources = async resource => {
		try {
			const res = await teamGeneratorApi.get(`/${resource}`)
			setResources(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	return resources
}

export default useResources;