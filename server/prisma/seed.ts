import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const oneHabitId = '0730ffac-d039-4194-9571-01aa2aa0efbd' //1 Beber 2L de água
const oneHabitCreationDate = new Date('2022-12-31T03:00:00.000')

const twoHabitId = '00880d75-a933-4fef-94ab-e05744435297' //2 Ir pra academia
const twoHabitCreationDate = new Date('2023-01-03T03:00:00.000')

const threeHabitId = 'fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00' //3 Dormir 8h
const threeHabitCreationDate = new Date('2023-01-08T03:00:00.000')

const fourHabitId = 'b49ae3eb-9e54-4992-a237-9df52b9a7f01' //4 Estudar React 2h
const fourHabitCreationDate = new Date('2023-01-08T03:00:00.000')

const fiveHabitId = '17d12202-dacc-4fa9-b16c-ae33896f14c2' //5 Não beber muito
const fiveHabitCreationDate = new Date('2023-01-09T03:00:00.000')

const sixHabitId = 'cedcfb14-c1f5-4efa-ba5e-a7e3092be385' //6 Sair com amigos
const sixHabitCreationDate = new Date('2023-01-09T03:00:00.000')

const sevenHabitId = '2b7ebaba-e104-48cd-97b9-fbfb3582a252' //7 Levar doguinho pra passear
const sevenHabitCreationDate = new Date('2023-01-09T03:00:00.000')

async function run() {
  await prisma.habit.deleteMany()
  await prisma.day.deleteMany()

  /**
   * Creating habits
   */
  await Promise.all([
    prisma.habit.create({
      data: {
        id: oneHabitId,
        title: 'Beber 2L de água',
        created_at: oneHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: twoHabitId,
        title: 'Ir pra academia',
        created_at: twoHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: threeHabitId,
        title: 'Dormir 8h',
        created_at: threeHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: fourHabitId,
        title: 'Estudar React 2h',
        created_at: fourHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: fiveHabitId,
        title: 'Não beber muito',
        created_at: fiveHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 6 },
            { week_day: 0 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: sixHabitId,
        title: 'Sair com amigos',
        created_at: sixHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 6 },
            { week_day: 0 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: sevenHabitId,
        title: 'Levar doguinho pra passear',
        created_at: sevenHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 6 },
            { week_day: 0 },
          ]
        }
      }
    }),
  ])


  /**
   * Completing habits
   */
  await Promise.all([
    /**
     * Habits day 02
     */
    prisma.day.create({
      data: {
        /** Monday */
        date: new Date('2023-01-02T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: oneHabitId,
          }
        }
      }
    }),
    
    /**
     * Habits day 04
     */
    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-01-04T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: oneHabitId },
            { habit_id: twoHabitId }
          ]
        }
      }
    }),

    /**
     * Habits day 05
     */
    prisma.day.create({
      data: {
        /** Thursday */
        date: new Date('2023-01-05T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: oneHabitId,
          }
        }
      }
    }),

    /**
     * Habits day 06
     */
    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-06T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: oneHabitId,
          }
        }
      }
    }),
    
    // /**
    //  * Habits day 07
    //  */
    // prisma.day.create({
    //   data: {
    //     /** Saturday */
    //     date: new Date('2023-01-07T03:00:00.000z'),
    //     dayHabits: {
    //       create: [
    //         { habit_id: oneHabitId },
    //         { habit_id: twoHabitId }
    //       ]
    //     }
    //   }
    // }),

    /**
     * Habits day 08
     */
    prisma.day.create({
      data: {
        /** Monday */
        date: new Date('2023-01-08T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: oneHabitId,
          }
        }
      }
    }),
    
    /**
     * Habits day 09
     */
    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-01-09T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: twoHabitId },
            { habit_id: threeHabitId },
          ]
        }
      }
    }),

    /**
     * Habits day 10
     */
    prisma.day.create({
      data: {
        /** Thursday */
        date: new Date('2023-01-10T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: oneHabitId },
            { habit_id: twoHabitId },
            { habit_id: threeHabitId },
            { habit_id: fourHabitId },
          ]
        }
      }
    }),

    /**
     * Habits day 11
     */
    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-11T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: oneHabitId },
            { habit_id: twoHabitId },
            { habit_id: fourHabitId },
          ]
        }
      }
    }),
    
    /**
     * Habits day 12
     */
    prisma.day.create({
      data: {
        /** Saturday */
        date: new Date('2023-01-12T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: oneHabitId },
            { habit_id: threeHabitId },
            { habit_id: fourHabitId },
          ]
        }
      }
    }),

    /**
     * Habits day 13
     */
    prisma.day.create({
      data: {
        /** Saturday */
        date: new Date('2023-01-13T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: twoHabitId },
            { habit_id: fourHabitId },
          ]
        }
      }
    }),

    /**
     * Habits day 14
     */
    prisma.day.create({
      data: {
        /** Saturday */
        date: new Date('2023-01-14T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: twoHabitId },
            { habit_id: threeHabitId },
            { habit_id: fiveHabitId },
            { habit_id: sixHabitId },
          ]
        }
      }
    }),

    /**
     * Habits day 15
     */
    prisma.day.create({
      data: {
        /** Saturday */
        date: new Date('2023-01-15T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: sevenHabitId,
          }
        }
      }
    }),

    /**
     * Habits day 16
     */
    prisma.day.create({
      data: {
        /** Thursday */
        date: new Date('2023-01-16T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: oneHabitId },
            { habit_id: twoHabitId },
            { habit_id: threeHabitId },
          ]
        }
      }
    }),

    /**
     * Habits day 17
     */
    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-17T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: twoHabitId },
            { habit_id: threeHabitId },
            { habit_id: fourHabitId },
          ]
        }
      }
    }),

    /**
     * Habits day 20
     */
    prisma.day.create({
      data: {
        /** Saturday */
        date: new Date('2023-01-20T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: oneHabitId },
            { habit_id: twoHabitId },
            { habit_id: fourHabitId },
          ]
        }
      }
    }),

    /**
     * Habits day 21
     */
    prisma.day.create({
      data: {
        /** Saturday */
        date: new Date('2023-01-21T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: twoHabitId },
            { habit_id: threeHabitId },
            { habit_id: fiveHabitId },
            { habit_id: sixHabitId },
          ]
        }
      }
    }),
  ])
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })