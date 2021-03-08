import useHttp from 'utils/hooks/useHttp'
import PageError from 'components/Misc/PageError'
import PageLayout from 'components/Misc/PageLayout'
import PageLoadingIndicator from 'components/Misc/PageLoadingIndicator'
import GenerationsList from 'components/Generations/GenerationsList'

const Generations = () => {
  const {
    data,
    hasError,
    isLoading
  } = useHttp('https://pokeapi.co/api/v2/generation')

  return (
    <PageLayout>
      {isLoading ? (
        <PageLoadingIndicator />
      ) : hasError ? (
        <PageError resourceName="Pokemon Generations" />
      ) : (
        <GenerationsList generations={data?.results} />
      )}
    </PageLayout>
  )
}

export default Generations