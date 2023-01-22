import { useState, useEffect } from 'react'
import { api } from '../lib/axios'
import dayjs from 'dayjs'

import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

interface HabitsListsProps {
  date: Date;
  onCompletedChanged: (completed: number) => void
}

interface HabitsInfoProps {
  possibleHabits: {
    id: string;
    title: string;
    created_at: string;
  }[], //Array
  completedHabits: string[]
}

export function HabitsList({ date, onCompletedChanged }: HabitsListsProps) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfoProps>()

  useEffect(() => {
    api.get('day', {
      params: {
        date: date.toISOString(),

      }
    }).then(response => {
      setHabitsInfo(response.data)
    })
  }, [])

  const isDateInPast = dayjs(date).endOf('day').isBefore(new Date())

  async function handleToggleHabit(habitId: string) {
    await api.patch(`/habits/${habitId}/toggle`)
    
    const isHabitAlreadyCompleted = habitsInfo!.completedHabits.includes(habitId)
    let completedHabits: string[] = []
    
    if (isHabitAlreadyCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(id => id !== habitId)
    }
    else {
      completedHabits = [...habitsInfo!.completedHabits, habitId]
    }

    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits,
    })

    onCompletedChanged(completedHabits.length)
  }

  return (
    <div className="mt-6 flex flex-col gap-3">
      {habitsInfo?.possibleHabits.map(habit => {
        return (
          <Checkbox.Root
            key={habit.id}
            onCheckedChange={() => handleToggleHabit(habit.id)}
            checked={habitsInfo.completedHabits.includes(habit.id)}
            disabled={isDateInPast}
            className="flex items-center gap-3 group focus:outline-none disabled:opacity-30"
          >
            <div className="w-8 h-8 rounded-lg flex justify-center items-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-data-[state=checked]:group-focus:ring-green-600 group-focus:ring-offset-2 group-focus:ring-offset-background">
              <Checkbox.Indicator>
                <Check size={20} className="text-white" />
              </Checkbox.Indicator>
            </div>

            <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
              {habit.title}
            </span>
          </Checkbox.Root>
        )
      })}
    </div>
  )
}