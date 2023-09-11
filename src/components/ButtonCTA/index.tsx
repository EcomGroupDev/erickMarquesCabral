import { Button } from "./styles"
import whatsappIcon from "../../assets/icon/whatsapp.svg"
export function ButtonCAT() {

  const FONENUMBER = '5521976818468'
  const MESAGE = 'Olá Erick, gostaria de saber sua disponibilidade para conversarmos sobre um projeto. Me interessei pelo seu trabalho e acredito que vc possa me ajudar.'

  return (
    <div>
      <Button
        href={`https://api.whatsapp.com/send?phone=${FONENUMBER}&text=${MESAGE}`}
        target="_blank">
        <strong>
          entre em contato pelo whatsapp
        </strong>
        <img src={whatsappIcon} />
      </Button>
    </div>

  )
}


