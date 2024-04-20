import Button from '../../util/Button'

const RegionFilter = () => {
  return (
    <>
    <div>Region:</div>
    <div className='mb-12 flex flex-wrap'>
        <Button>Asia</Button>
        <Button>Americas</Button>
        <Button>Europe</Button>
        <Button>Antarctic</Button>
        <Button>Africa</Button>
        <Button>Oceania</Button>
    </div>
    </>
  )
}

export default RegionFilter