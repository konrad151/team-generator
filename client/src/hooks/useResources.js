import { useState, useEffect } from 'react'

const useResources = (api, resource) => {
	const [resources, setResources] = useState([])

	useEffect(() => {
		fetchResources(api, resource)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchResources = async (api, resource) => {
		try {
			const res = await api.get(`/${resource}`)
			setResources(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	return resources
}

export default useResources
