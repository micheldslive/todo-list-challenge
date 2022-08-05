export const filterValues = (value: string, filtered: string) => {
  return value.toLocaleLowerCase().includes(filtered)
}
