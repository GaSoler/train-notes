export const exercises = [
  { value: "1", label: "Supino reto com barra", muscle: "Chest", equipment: "Barbell" },
  { value: "2", label: "Supino reto com halteres", muscle: "Chest", equipment: "Dumbbell" },
  { value: "3", label: "Prancha frontal", muscle: "Abdominals", equipment: "None" },
  { value: "4", label: "Abdominal crunch", muscle: "Abdominals", equipment: "None" },
  { value: "5", label: "Puxada alta na polia", muscle: "Upper Back", equipment: "Machine" },
  { value: "6", label: "Crucifixo reto com halteres", muscle: "Chest", equipment: "Dumbbell" },
  { value: "7", label: "Elevação frontal com barra", muscle: "Shoulders", equipment: "Barbell" },
  { value: "8", label: "Elevação lateral com halteres", muscle: "Shoulders", equipment: "Dumbbell" },
  { value: "9", label: "Afundo com halteres", muscle: "Quadriceps", equipment: "Dumbbell" },
  { value: "10", label: "Afundo com barra", muscle: "Quadriceps", equipment: "Barbell" },
  { value: "11", label: "Agachamento sumô", muscle: "Quadriceps", equipment: "Barbell" },
  { value: "12", label: "Agachamento frontal", muscle: "Quadriceps", equipment: "Barbell" },
  { value: "13", label: "Rosca martelo com halteres", muscle: "Biceps", equipment: "Dumbbell" },
  { value: "14", label: "Rosca direta com barra", muscle: "Biceps", equipment: "Barbell" },
  { value: "15", label: "Remada unilateral com halteres", muscle: "Upper Back", equipment: "Dumbbell" },
  { value: "16", label: "Remada com barra", muscle: "Upper Back", equipment: "Barbell" },
  { value: "17", label: "Levantamento terra", muscle: "Lower Back", equipment: "Barbell" },
  { value: "18", label: "Agachamento livre", muscle: "Quadriceps", equipment: "None" },
  { value: "19", label: "Flexão de braço", muscle: "Chest", equipment: "None" },
  { value: "20", label: "Prancha lateral", muscle: "Abdominals", equipment: "None" },
]

export const exerciseType = [
  { value: "1", label: "Weight Reps" },
  { value: "2", label: "Reps Only" },
  { value: "3", label: "Weighted Bodyweight" },
  { value: "4", label: "Assisted Bodyweight" },
  { value: "5", label: "Duration" },
  { value: "6", label: "Weight & Duration" },
  { value: "7", label: "Distance Duration" },
  { value: "8", label: "Weight & Distance" },
]

export const equipment = [
  { value: "All", label: "All Equipment" },
  { value: "None", label: "None" },
  { value: "Barbell", label: "Barbell" },
  { value: "Dumbbell", label: "Dumbbell" },
  { value: "Kettlebell", label: "Kettlebell" },
  { value: "Machine", label: "Machine" },
  { value: "Plate", label: "Plate" },
  { value: "Resistance Band", label: "Resistance Band" },
  { value: "Suspension", label: "Suspension" },
  { value: "Other", label: "Other" },
]

export const muscles = [
  { value: "All", label: "All Muscles" },
  { value: "Abdominals", label: "Abdominals" },
  { value: "Abductors", label: "Abductors" },
  { value: "Adductors", label: "Adductors" },
  { value: "Biceps", label: "Biceps" },
  { value: "Lower Back", label: "Lower Back" },
  { value: "Upper Back", label: "Upper Back" },
  { value: "Cardio", label: "Cardio" },
  { value: "Chest", label: "Chest" },
  { value: "Calves", label: "Calves" },
  { value: "Forearms", label: "Forearms" },
  { value: "Glutes", label: "Glutes" },
  { value: "Hamstrings", label: "Hamstrings" },
  { value: "Lats", label: "Lats" },
  { value: "Quadriceps", label: "Quadriceps" },
  { value: "Shoulders", label: "Shoulders" },
  { value: "Triceps", label: "Triceps" },
  { value: "Traps", label: "Traps" },
  { value: "Neck", label: "Neck" },
  { value: "Full Body", label: "Full Body" },
  { value: "Other", label: "Other" },
]

export const timers = [
  "00:05",
  "00:10",
  "00:15",
  "00:20",
  "00:25",
  "00:30",
  "00:35",
  "00:40",
  "00:45",
  "00:50",
  "00:55",
  "01:00",
  "01:05",
  "01:10",
  "01:15",
  "01:20",
  "01:25",
  "01:30",
  "01:35",
  "01:40",
  "01:45",
  "01:50",
  "01:55",
  "02:00",
  "02:05",
  "02:10",
  "02:15",
  "02:20",
  "02:25",
  "02:30",
  "02:35",
  "02:40",
  "02:45",
  "02:50",
  "02:55",
  "03:00",
  "03:05",
  "03:10",
  "03:15",
  "03:20",
  "03:25",
  "03:30",
  "03:35",
  "03:40",
  "03:45",
  "03:50",
  "03:55",
  "04:00",
  "04:05",
  "04:10",
  "04:15",
  "04:20",
  "04:25",
  "04:30",
  "04:35",
  "04:40",
  "04:45",
  "04:50",
  "04:55",
  "05:00",
]

export const setDetails = [
  {
    name: 'Warm up',
    shorter: 'WU',
    description: 'séries para “aquecimento”, de 18-20reps, não precisa falhar. Deixe de 3-5 repetições antes da falha. Sem ter qualquer ajuda para executar as últimas repetições.',
  },
  {
    name: 'Working set',
    shorter: 'WS',
    description: 'série depois do warm up, ficando 1 a 3 repetições antes da falha. Pode chegar próximo a falha concêntrica ou até o movimento não sair mais com perfeição. Sem ter qualquer ajuda para executar as últimas repetições.',
  },
  {
    name: 'Feeder set',
    shorter: 'FS',
    description: 'série de “preparação”, ficando 4-6 repetições antes da falha.',
  },
  {
    name: 'Hard set / Top set',
    shorter: 'HS TS',
    description: '(FALHA TOTAL) NAS PRIMEIRAS SEMANAS, A IDEIA É ENTENDER SE OS EXERCÍCIOS ESTÃO DE ACORDO COM A NECESSIDADE E SE EXISTE ALGUMA MUDANÇA A SER FEITO. COMO ESTÁ VOLTANDO A TER UM ROTINA DE TREINAMENTO, PRECISAMOS INICIAR O TREINO DE UM PONTO INICIAL PARA ASSIM SEGUIR COM A PERIODIZAÇÃO E PROGRESSÃO',
  },
  {
    name: 'Back off set',
    shorter: 'BO',
    description: 'nesse método o indivíduo consegue explorar um volume maior em menos tempo sem perder tanto a intensidade. Porque no back of set o indivíduo realiza, por exemplo, 8 repetições guarda o peso, descansa 30 segundos e diminui cerca de 20-30% da carga e faz mais repetições próximo a falha ou até a falha',
  },
  {
    name: 'Rest pause',
    shorter: 'RP',
    description: 'é uma série onde se preserva a intensidade, por exemplo, o indivíduo realiza um agachamento com 6 repetições máximas, guarda o peso e descansa entre 10-20 segundos, e faz até a falha. Esse é o rest pause, normalmente usado sempre na última série de alguns exercícios, nas séries mais intensas. Pode fazer até 3 rest pause na série.',
  },
  {
    name: 'Cluster set',
    shorter: 'CS',
    description: 'parecido com o rest pause, só que o cluster tem intervalo maior, por exemplo, usa uma série de 8/12/16 repetições, ao invés de realizar essa série de maneira direta, será quebrado em blocos de 4repetições, executar e descansar de 10-15 segundos e vai realizar mais 4 repetições, até chegar a falha de maneira que preserve a execução',
  },
]