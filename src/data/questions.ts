export type Question = {
  title: string,
  answers: Array<{ label: string, value: number }>
}

export const questions: Question[] = [
  {
    title: "1. Який ваш рівень знань?",
    answers: [
      {
        label: "Початківець (1-2 роки)",
        value: 0
      },

      {
        label: "Середній рівень (2-4 роки)",
        value: 1
      },

      {
        label: "Середній рівень (6-8 років)",
        value: 1
      },

      {
        label: "Експерт (більше 8 років)",
        value: 1
      },
    ]
  },

  {
    title: "2. Наскільки на вашу думку ви знаєте функціональне програмування?",
    answers: [
      {
        label: "Не знаю",
        value: 0
      },

      {
        label: "Погано",
        value: 1
      },

      {
        label: "Користуюсь часом",
        value: 1
      },

      {
        label: "Користуюсь завжди",
        value: 1
      },

      {
        label: "Працюю функціональним програмістом",
        value: 1
      },
    ]
  },

  {
    title: "3. Чи ви знаєте що таке 'Монада'?",
    answers: [
      {
        label: "Не знаю",
        value: 0
      },

      {
        label: "Погано",
        value: 1
      },

      {
        label: "Користуюсь часом",
        value: 1
      },

      {
        label: "Користуюсь завжди",
        value: 1
      },

      {
        label: "Працюю функціональним програмістом (кожень день використовую монади)",
        value: 1
      },
    ]
  },

  {
    title: "4. Як часто ви отримуєте помилки 'NullPointerException' або схожі (cannot read properties of undefined)",
    answers: [
      {
        label: "Щодня",
        value: 0
      },

      {
        label: "Періодично",
        value: 1
      },

      {
        label: "Рідко",
        value: 1
      },

      {
        label: "Ніколи",
        value: 1
      },
    ]
  },

  {
    title: "5. Чи ви користуєтесь LINQ (C#) / Stream API (Java)?",
    answers: [
      {
        label: "Щодня",
        value: 0
      },

      {
        label: "Періодично",
        value: 1
      },

      {
        label: "Рідко",
        value: 1
      },

      {
        label: "Ніколи",
        value: 1
      },
    ]
  },

  {
    title: "6. Чи подобається вам користуватися конструкцією async-await (С#, Python, Rust, TypeScript, JavaScript, etc)",
    answers: [
      {
        label: "Так",
        value: 0
      },

      {
        label: "Місцями",
        value: 1
      },

      {
        label: "Ні",
        value: 1
      },

      {
        label: "Не розумію нащо вони потрібні",
        value: 1
      },
    ]
  },

  {
    title: "7. Чи подобається вам обьектно-орієнтоване програмування?",
    answers: [
      {
        label: "Так",
        value: 0
      },

      {
        label: "Ні",
        value: 1
      },

      {
        label: "Я не знаю обьектно-орієнтоване програмування",
        value: 1
      },
    ]
  },

  {
    title: "8. Чи змінили б ви свою роботу, якщо вам запропонували вакансію функціонального програміста?",
    answers: [
      {
        label: "Так",
        value: 0
      },

      {
        label: "Ні",
        value: 1
      },

      {
        label: "Не знаю",
        value: 1
      },
    ]
  },

];



