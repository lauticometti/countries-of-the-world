import { CountryType } from '../../types/types'
import styles from './Card.module.css'

export function Card({ country }: { country: CountryType }) {
  return (
    <div className={styles.container}>
      <div className={styles.flagContainer}>
        <img
          src={country.flag}
          alt={country.name}
          className={styles.flag}
          width={200}
          height={80}
        />
      </div>
      <h3>{country.name}</h3>
      <div>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital ?? 'No capital'}</p>
      </div>
    </div>
  )
}
