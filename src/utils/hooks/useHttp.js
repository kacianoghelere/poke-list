import { useEffect, useState } from 'react'
import axios from 'axios'

const useHttp = (url) => {
  const [isLoading, setLoading] = useState(true)

  const [data, setData] = useState()

  const [hasError, setHasError] = useState(false)

  const fetchData = async (url) => {
    try {
      setLoading(true)

      setHasError(false)

      const response = await axios.get(url).then(({ data }) => data)

      setData(response)

      setLoading(false)
    } catch (error) {
      setHasError(true)
    }
  }

  useEffect(() => {
    fetchData(url)

    return () => {
      setData(null)
    }
  }, [url])

  return {
    data,
    hasError,
    isLoading
  }
}

export default useHttp