import { arrowBackIconPaths, arrowNextIconPaths } from '@utils/icon-paths'
import { Icon } from './Icon'

interface PaginationProps {
  page: number
  setPage: (page: number) => void
}

export const Pagination = ({ page, setPage }: PaginationProps) => {
  const handleBack = () => {
    if (page === 0) return
    setPage(page - 1)
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  return (
    <div className="my-4 flex justify-center">
      <button
        className="me-3  flex h-8 items-center justify-center gap-2 rounded-lg border border-cyan-300 bg-cyan-300 px-3 text-sm font-medium text-cyan-900 hover:bg-cyan-200 hover:text-cyan-700 "
        onClick={handleBack}
      >
        <Icon paths={arrowBackIconPaths} />
        Previous
      </button>
      <button
        className="me-3  flex h-8 items-center justify-center gap-2 rounded-lg border border-cyan-300 bg-cyan-300 px-3 text-sm font-medium text-cyan-900 hover:bg-cyan-200 hover:text-cyan-700 "
        onClick={handleNext}
      >
        Next
        <Icon paths={arrowNextIconPaths} />
      </button>
    </div>
  )
}
