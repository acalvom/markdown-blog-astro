import { arrowBackIconPaths, arrowNextIconPaths } from '@utils/icon-paths'
import { Icon } from './Icon'

interface PaginationProps {
  page: number
  setPage: (page: number) => void
}

export const Pagination = ({ page, setPage }: PaginationProps) => {
  return (
    <div className="my-4 flex justify-between md:justify-around">
      <button
        className="ms-4 flex h-8 items-center justify-center gap-2 rounded-lg border border-cyan-300 bg-cyan-300 px-3 text-sm font-medium text-cyan-900 hover:bg-cyan-100 hover:text-cyan-700 disabled:border-none disabled:bg-gray-300 disabled:text-gray-700"
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
      >
        <Icon paths={arrowBackIconPaths} />
        Previous
      </button>
      <button
        className="me-4 flex h-8 items-center justify-center gap-2 rounded-lg border border-cyan-300 bg-cyan-300 px-3 text-sm font-medium text-cyan-900 hover:bg-cyan-100 hover:text-cyan-700"
        onClick={() => setPage(page + 1)}
      >
        Next
        <Icon paths={arrowNextIconPaths} />
      </button>
    </div>
  )
}
