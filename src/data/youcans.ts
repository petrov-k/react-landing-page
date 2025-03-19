export interface YouCan {
  title: string;
  heading: string;
  headingColor: string;
  description: string;
  isLast?: boolean;
}

export const youcans: YouCan[] = [
  {
    title: 'Контролювати',
    heading: 'Кожну гривню',
    headingColor: 'purple',
    description: 'Завдяки таблиці витрат ти знатимеш, куди йдуть твої гроші, і легко скоротиш зайві витрати.',
  },
  {
    title: 'Побачити',
    heading: 'Своє фінансове майбутнє',
    headingColor: 'orange',
    description: 'Ти побудуєш модель на 10 років і знатимеш, як твої звички вплинуть на твої фінанси — і як їх змінити на краще.',
  },
  {
    title: 'Системазувати',
    heading: 'Активи',
    headingColor: 'green',
    description: 'Усі твої ресурси — від заощаджень до власності — будуть у зручному дашборді, щоб ти завжди був у курсі.',
  },
  {
    title: 'Жити',
    heading: 'Без фінансового стресу',
    headingColor: 'blue',
    description: 'Ти забудеш про хаос і паніку — твої гроші стануть інструментом для твоїх мрій, а не проблемою.',
  },
  {
    title: 'Планувати',
    heading: 'Великі цілі',
    headingColor: 'red',
    description: 'Відпустка, нова машина чи власний бізнес? Ти знатимеш, як профінансувати будь-яку мрію!',
    isLast: true,
  },
];
