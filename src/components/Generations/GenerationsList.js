import GenerationCard from './GenerationCard'

const GenerationsList = ({ generations }) => (
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    {generations.map((generation) => (
      <div
        className="col mb-4"
        key={generation.name}
      >
        <GenerationCard generationName={generation.name} />
      </div>
    ))}
  </div>
)

export default GenerationsList
