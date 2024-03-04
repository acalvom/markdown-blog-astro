import { Icon } from '@components/Shared/Icon'

interface IconProps {
  sectionName: string
  iconPaths: string[]
  children: React.ReactNode | React.ReactNode[]
}

export const CardBadges = ({ sectionName, iconPaths, children }: IconProps) => {
  return (
    <div className="flex flex-row items-start justify-between">
      <p className="md:text-md mb-3 flex flex-row items-center gap-2 text-sm font-medium">
        <Icon paths={iconPaths} />
        {sectionName}:
      </p>
      <p className="flex flex-wrap justify-end">{children}</p>
    </div>
  )
}
