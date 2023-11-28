type Props = {
  nota: number;
}

export const RatingEmoji = ({ nota }: Props) => {
  if (nota > 5) nota = 5;
  if (nota < 0) nota = 0;

  let notaInt = Math.floor(nota);

  let emoji = ''

  if (nota < 2) {
    emoji = '😐'.repeat(notaInt) + '😶'.repeat(5 - notaInt);
  } else if (nota < 3) {
    emoji = '😯'.repeat(notaInt) + '😶'.repeat(5 - notaInt);
  } else if (nota < 4) {
    emoji = '😎'.repeat(notaInt) + '😶'.repeat(5 - notaInt);
  } else if (nota < 5) {
    emoji = '😁'.repeat(notaInt) + '😶'.repeat(5 - notaInt);
  } else if (nota === 5) {
    emoji = '😍'.repeat(notaInt) + '😶'.repeat(5 - notaInt);
  }

  return (
    <div className="flex justify-center items-center text-6xl">
      <h1 className="bg-slate-400  p-3 rounded">{nota.toFixed(1)}</h1>
      <div className="ml-3">
        {emoji}
      </div>
    </div>
  )
}


// Outra forma de fazer 
/*
type Props = {
  nota: number;
}

export const RatingEmoji = ({ nota }: Props) => {
  if (nota > 5) nota = 5;
  if (nota < 0) nota = 0;

  let notaInt = Math.floor(nota);
  const emojisArray = ['', 😐', '😯', '😎', '😁', '😍']
   let emoji = `${emojis[notaInt]}`.repeat(notaInt) + '😶'repeat(5 - notaInt);


  return (
    <div className="flex justify-center items-center text-6xl">
      <h1 className="bg-slate-400  p-3 rounded">{nota.toFixed(1)}</h1>
      <div className="ml-3">
        {emoji}
      </div>
    </div>
  )
}
*/
