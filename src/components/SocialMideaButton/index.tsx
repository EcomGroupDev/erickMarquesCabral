import gitIcon from "../../assets/icon/githubIcon2.svg"
import instaIcon from "../../assets/icon/Instagram.svg"
import { SocialMideaButtonConteiner } from "./styles"

export function SocialMideaButton() {
  return (
    <SocialMideaButtonConteiner>
      <a href="https://github.com/erickmarquesc" target="_blank">
        <img src={gitIcon} />
      </a>
      <a href="https://www.instagram.com/erickmarques_c/" target="_blank">
        <img src={instaIcon} />
      </a>
    </SocialMideaButtonConteiner>
  )
}