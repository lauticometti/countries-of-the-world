import styles from './Home.module.css'
import countries from '../../../mocks/countries.json'
import { Cards, FilterRegion, Header, SearchBar } from '../../components'
export function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
      <FilterRegion />
      <Cards countries={countries} />
    </div>
  )
}
