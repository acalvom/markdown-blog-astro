import { Badge } from '@components/Shared/Badge'
import { LinkButton } from '@components/Shared/LinkButton'
import { CardBadges } from './CardBadges'
import type { Workout } from '@interfaces/Workout'
import { capitalize } from '@utils/capitalize'
import { categoriesIconPaths, equipmentIconPaths, bodyIconPaths } from '@utils/icon-paths'

interface WorkoutPreviewProps {
  workout: Workout
  key: string
}

export const WorkoutPreview = ({ workout }: WorkoutPreviewProps) => {
  const { bodyPart, equipment, gifUrl, id, name, secondaryMuscles, target } = workout

  return (
    <article className="m-4 flex w-full flex-col justify-between rounded-lg border p-8 sm:max-w-sm sm:px-16 md:w-1/2 md:px-8 lg:w-1/3">
      <div className="flex flex-row items-center gap-6">
        <img className="max-w-16 rounded-sm border-2 border-gray-400" src={gifUrl} alt={name} />
        <h2 className="mx-auto text-center text-2xl font-extralight text-white lg:text-3xl">
          {capitalize(name)}
        </h2>
      </div>
      <div className="mt-6 flex flex-col">
        <CardBadges key="BodyPart" sectionName="Body Part" iconPaths={categoriesIconPaths}>
          <Badge bgLevel={100} text={bodyPart} />
        </CardBadges>

        <CardBadges key="Equipment" sectionName="Equipment" iconPaths={equipmentIconPaths}>
          <Badge bgLevel={200} text={equipment} />
        </CardBadges>

        <CardBadges key="Muscles" sectionName="Muscles" iconPaths={bodyIconPaths}>
          {[target, ...secondaryMuscles].map((muscle) => (
            <Badge key={muscle} bgLevel={400} text={muscle} />
          ))}
        </CardBadges>
      </div>
      <LinkButton path={`workouts/${id}`}>
        <span className="mx-auto font-semibold">Instructions</span>
      </LinkButton>
    </article>
  )
}
