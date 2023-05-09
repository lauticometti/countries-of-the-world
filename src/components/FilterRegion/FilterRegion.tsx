export function FilterRegion() {
  const regions = ['Africa', 'America', 'Asia']
  return (
    <select>
      {regions && regions.length ? (
        regions.map(region => <option>{region}</option>)
      ) : (
        <option>Loading regions...</option>
      )}
    </select>
  )
}
