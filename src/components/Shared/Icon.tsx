interface IconProps {
  paths: string[]
}

export const Icon = ({ paths }: IconProps) => {
  return (
    <svg
      className="h-6 w-6 lg:w-8"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      {paths.map((path: string, i: number) => (
        <path d={path} key={i} />
      ))}
    </svg>
  )
}
