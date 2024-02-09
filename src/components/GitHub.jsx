import axios from 'axios';
import { useEffect, useState } from 'react'
import {Text} from './Text.style'
export default function GitHub() {

    const [loading, setLoading ] = useState(true);

    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {

                const response = await axios.get(
                    "https://api.github.com/users/unexpectedlyalarming/repos"
                    
                    )
                    
                    
                    if (response.data) {
                        setData(response.data)
                        setLoading(false);
                    }
                } catch (error) {
                    console.error(error)
                }
        }
        fetchData()
    }, [])

    if (loading) return (
        <></>
    )

    return (
        <div className="github-container">
            <Text>I also have {data?.length} other repos on <a href="https://github.com/unexpectedlyalarming">GitHub.</a></Text>
        </div>
    )
}