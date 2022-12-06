import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const getProject = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
    const fetchProject = () => {
        // try {
        //     const { projects: response } = await axios.get('http://127.0.0.1:8000/api/projects')
        //     setProjects(response.data)
        //     console.log(response.data)
        // } catch (err) {
        //     console.error(err)
        // }
         axios.get('http://127.0.0.1:8000/api/projects')
                    .then(res => {
                        setProjects(res.data)
                    })
                    .catch((err)=> {
                        console.log(err)
                    })
    }

    fetchProject()
}, [])
// console.log(projects)
        return projects
    }

// export default getProject