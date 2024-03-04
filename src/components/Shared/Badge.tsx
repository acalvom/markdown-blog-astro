import { capitalize } from '@utils/capitalize'

interface BadgeProps {
  bgLevel: number
  letterLevel?: number
  text: string
}
export const Badge = ({ bgLevel, letterLevel = 900, text }: BadgeProps) => {
  const bgLevels: { [key: number]: string } = {
    100: 'bg-cyan-100',
    200: 'bg-cyan-200',
    300: 'bg-cyan-300',
    400: 'bg-cyan-400'
  }

  const letterLevels: { [key: number]: string } = {
    600: 'text-cyan-600',
    700: 'text-cyan-700',
    800: 'text-cyan-800',
    900: 'text-cyan-900'
  }

  return (
    <span
      className={`mx-1 my-2 w-fit rounded px-2.5 py-0.5 text-xs font-medium ${bgLevels[bgLevel]} ${letterLevels[letterLevel]}`}
    >
      {capitalize(text)}
    </span>
  )
}
