import { useEffect, useState } from 'react'
import axios from "axios"
 
function useFetch(resource:string) {

    const [ data, setData ] = useState<any>([])
    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    const baseApiURL = "https://jsonplaceholder.typicode.com/"
    
    useEffect(()=> {
        const fetchData = async() => {
            try {
                const { data } = await axios.get( baseApiURL + resource )
                setData(data);                
            }
            catch(error) {
                console.log(error);
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [resource])

  return { data, isLoading }
}

export default useFetch