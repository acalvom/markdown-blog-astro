interface LinkButtonProps {
  path: string
  icon?: boolean
  children: React.ReactNode | React.ReactNode[]
}

export const LinkButton = ({ path, icon = false, children }: LinkButtonProps) => {
  const iconStyle = !icon
  ? 'rounded-md border border-red-400 transition duration-200 ease-out hover:-translate-y-1 hover:scale-110 hover:border-none hover:bg-red-300 hover:text-red-900 hover:shadow-md hover:shadow-current'
  : ''
    
  return (
    <a
      className={`mx-2 mb-2 mt-1 flex flex-row items-center gap-x-2 px-4 py-2 text-center text-sm ${iconStyle}`}
      href={path}
    >
      {children}
    </a>
  )
}
