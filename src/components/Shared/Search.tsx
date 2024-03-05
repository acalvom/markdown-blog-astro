import { useEffect, useState, type ChangeEvent } from 'react'
import { Icon } from './Icon'
import { searchIconPaths, closeIconPaths } from '@utils/icon-paths'
import { Button } from './Button'

interface SearchProps {
  setSearch: (search: string) => void
}

export const Search = ({ setSearch }: SearchProps) => {
  const [input, setInput] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    if (input.length > 0) {
      setIsSearching(true)
      setSearch(input)
    }
    if (isSearching) {
      setIsSearching(false)
      setSearch('')
      setInput('')
    }
  }

  const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInput(target.value)
    if (target.value.length === 0) {
      setIsSearching(false)
      setSearch('')
    }
  }

  return (
    <div className="relative mx-auto my-3 flex w-56 flex-row ">
      <input
        type="text"
        className="bg-transparent block w-full rounded-md border border-cyan-400 p-2.5 text-sm text-gray-1dasd00 transition duration-300 ease-in focus:-translate-x-1 focus:scale-110 focus:outline-cyan-400"
        placeholder="Search"
        value={input}
        onChange={handleInput}
        required
        data-testid="search-input"
      />

      <Button
        onClick={handleSearch}
        customStyle="absolute end-0 top-0 h-full rounded-md p-2.5 text-sm font-medium rounded-l-none border-l border-cyan-400 transition duration-100 ease-in hover:scale-120 hover:translate-x-2 hover:border-none hover:bg-cyan-300 hover:text-cyan-900 hover:shadow-md hover:shadow-current"
      >
        <Icon paths={isSearching ? closeIconPaths : searchIconPaths} />
      </Button>
    </div>
  )
}
