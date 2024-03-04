import { useState } from 'react'
import { Icon } from './Icon'
import { searchIconPaths } from '@utils/icon-paths'
import { Button } from './Button'

interface SearchProps {
  setSearch: (search: string) => void
}

export const Search = ({ setSearch }: SearchProps) => {
  const [input, setInput] = useState('')

  return (
    <div className="relative my-3 ml-auto mr-0 flex w-56 flex-row">
      <input
        type="text"
        className="focus:border-ring-focus focus-within:none serc block w-full rounded-md border  border-red-400 p-2.5  text-sm text-gray-200 focus:border-none focus:outline-red-400"
        placeholder="Search"
        onChange={(e) => setInput(e.target.value)}
        required
        data-testid="search-input"
      />

      <Button
        onClick={() => setSearch(input)}
        customStyle="absolute end-0 top-0 h-full rounded-md p-2.5 text-sm font-medium"
      >
        <Icon paths={searchIconPaths} />
      </Button>
    </div>
  )
}
