import { useEffect, useState } from 'react'

import httpClient from '../services/http-client'

const useHttp = (url) => {
  const [isLoading, setLoading] = useState(true)

  const [data, setData] = useState()

  const [hasError, setHasError] = useState(false)

  const fetchData = async (url) => {
    try {
      setLoading(true)

      setHasError(false)

      const response = await httpClient.get(url)

      setData(response)
    } catch (error) {
      setHasError(true)
    } finally {
      setLoading(false)
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