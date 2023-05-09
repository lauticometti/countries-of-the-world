import styles from './SearchBar.module.css'
import { useId } from 'react'
import magnifyingGlass from '../../assets/magnifying-glass-solid.svg'

export function SearchBar() {
  const searchBarId = useId()

  return (
    <div className={styles.container}>
      <label htmlFor={searchBarId}>
        <img src={magnifyingGlass} alt="" />
      </label>
      <input id={searchBarId} placeholder="Search for a country..." />
    </div>
  )
}
