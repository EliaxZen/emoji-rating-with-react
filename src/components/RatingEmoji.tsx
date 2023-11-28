type Props = {
  nota: number;
}

export const RatingEmoji = ({ nota }: Props) => {
  if (nota > 5) nota = 5;
  if (nota < 0) nota = 0;
  
  let notaInt = Math.floor(nota);
  
  let emoji = '😁'.repeat(notaInt) + '😶'.repeat(5 - notaInt)
  
  return (
    <div className="flex justify-center items-center text-6xl">
      <h1 className="bg-slate-400  p-3 rounded">{nota.toFixed(1)}</h1>
      <div className="ml-3">{emoji}</div>
    </div>
  )
}
