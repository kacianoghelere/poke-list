import useHttp from '../utils/hooks/useHttp'
import GenerationsList from '../components/Generations/GenerationsList'
import PageLayout from '../components/Misc/PageLayout'

const Generations = () => {
  const {
    data,
    isLoading
  } = useHttp('https://pokeapi.co/api/v2/generation')

  return (
    <PageLayout>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <GenerationsList generations={data?.results} />
      )}
    </PageLayout>
  )
}

export default Generations