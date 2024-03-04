interface ButtonProps {
  onClick: () => void
  icon?: boolean
  children?: React.ReactNode | React.ReactNode[]
  customStyle?: string
}

export const Button = ({ onClick, icon = false, children, customStyle = '' }: ButtonProps) => {
  const iconStyle = !icon
    ? 'rounded-md border border-red-400 transition duration-200 ease-out hover:-translate-y-1 hover:scale-110 hover:border-none hover:bg-red-300 hover:text-red-900 hover:shadow-md hover:shadow-current'
    : ''

  return (
    <button
      className={
        customStyle === ''
          ? `mx-2 mb-2 mt-1 flex flex-row items-center gap-x-2 px-4 py-2 text-center text-sm ${iconStyle}`
          : customStyle
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}
