import { Menu } from "./styles";

interface IHeaderMenuNavegationProps {
  menuItem: {
    id: string,
    text: string,
  }[]
}
export function HeaderMenuNavegation({ menuItem }: IHeaderMenuNavegationProps) {
  return (
    <Menu>
      <ul>
        {menuItem.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.id}>{item.text}</a>
            </li>
          )
        })}
      </ul>
    </Menu>
  )
}