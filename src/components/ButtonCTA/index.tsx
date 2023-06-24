import { Button } from "./styles"

type ButtonCATprops = {
  text: string
}
export function ButtonCAT({ text}:ButtonCATprops) {
  return (
    <Button>{text.toLocaleUpperCase()}</Button>
  )
}