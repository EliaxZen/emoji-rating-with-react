const getWeekday = (today: Date) => {
  return new Intl.DateTimeFormat('pt-BR', { weekday: "long" }).format(today);
}

type Props = {
  name: string;
  avatar?: string;
  rules: string[];
}

export const Person = ({ name, avatar = 'https://manofmany.com/wp-content/uploads/2021/03/Starbase-Elon-Musk-1.jpg', rules }: Props) => {
  return (
    <>
      <h1>{name}</h1>
      <img src={avatar} alt={name} className="w-64" />
      <ul>
        <li>{rules[0]}</li>
        <li>{rules[1]}</li>
      </ul>
    </>
  )
}