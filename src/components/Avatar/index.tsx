import { AvatarContainer, AvatarContent } from "./styles";
import avatrImg from "../../assets/avatar/avatar.svg"
import iconFigmaImg from "../../assets/avatar/iconfigma.svg"

export function Avatar() {
  return (
    <AvatarContainer>
      <AvatarContent>
        <img src={avatrImg} />
      </AvatarContent>
      <AvatarContent>
        <img src={iconFigmaImg} />
      </AvatarContent>
    </AvatarContainer>
  )
}