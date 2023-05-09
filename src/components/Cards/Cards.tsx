import { Card } from '..'
import { CountryType } from '../../types/types'

export function Cards({ countries }: { countries: CountryType[] }) {
  return (
    <div>
      {countries && countries.length ? (
        countries.slice(0, 15).map(country => <Card country={country} />)
      ) : (
        <p>No countries found</p>
      )}
    </div>
  )
}
