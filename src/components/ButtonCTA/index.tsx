import { Button } from "./styles"

type ButtonCATprops = {
  text: string
}
export function ButtonCAT({ text }: ButtonCATprops) {

  const FONENUMBER = '5521976818468'
  const MESAGE = 'Olá Erick, gostaria de saber sua disponibilidade para conversarmos sobre um projeto. Me interessei pelo seu trabalho e acredito que vc possa me ajudar.'
  
  return (
    <Button
      href={`https://api.whatsapp.com/send?phone=${FONENUMBER}&text=${MESAGE}`}
      className="buttonsLink"
      target="_blank">
      {text.toLocaleUpperCase()}
    </Button>
  )
}


