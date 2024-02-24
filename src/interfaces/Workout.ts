export type Workout = {
  bodyPart: string
  equipment: string
  gifUrl: string
  id: string
  name: string
  target: string
  secondaryMuscles: string[]
  instructions: string[]
}

export enum BodyPart {
  Back = 'back',
  Cardio = 'cardio',
  Chest = 'chest',
  LowerArms = 'lower arms',
  LowerLegs = 'lower legs',
  Neck = 'neck',
  Shoulders = 'shoulders',
  UpperArms = 'upper arms',
  UpperLegs = 'upper legs',
  Waist = 'waist'
}

export enum Target {
  Abductors = 'abductors',
  Abs = 'abs',
  Adductors = 'adductors',
  Biceps = 'biceps',
  Calves = 'calves',
  CardiovascularSystem = 'cardiovascular system',
  Delts = 'delts',
  Forearms = 'forearms',
  Glutes = 'glutes',
  Hamstrings = 'hamstrings',
  Lats = 'lats',
  LevatorScapulae = 'levator scapulae',
  Pectorals = 'pectorals',
  Quads = 'quads',
  SerratusAnterior = 'serratus anterior',
  Spine = 'spine',
  Traps = 'traps',
  Triceps = 'triceps',
  UpperBack = 'upper back'
}
