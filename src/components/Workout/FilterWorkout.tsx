import { Badge } from '@components/Shared/Badge'
import { Icon } from '@components/Shared/Icon'
import { BodyPart } from '@interfaces/Workout'
import { caretDownIconPaths, caretUpIconPaths } from '@utils/icon-paths'
import { useState } from 'react'

export const FilterWorkout = () => {
  const [open, setOpen] = useState(false)
  const [bodyPart, setBodyPart] = useState('')

  return (
    <div className="pl-3 pr-4 flex w-fit max-w-1/4 flex-col rounded-md border">
      <button
        type="button"
        className="flex min-h-14 w-full items-center  gap-x-1.5 py-2 text-sm font-semibold text-white shadow-sm"
        onClick={() => setOpen(!open)}
      >
        <Icon paths={open ? caretUpIconPaths : caretDownIconPaths} />
        Body Part
        {bodyPart !== 'None' ? <Badge text={bodyPart} bgLevel={300} /> : null}
      </button>

      {open && (
        <ul className="divide-y bg-transparent">
          {Object.keys({ None: 'none', ...BodyPart }).map((key) => (
            <li
              className="cursor-pointer p-2 text-sm"
              key={key}
              onClick={() => setBodyPart(key)}
            >
              {key}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
