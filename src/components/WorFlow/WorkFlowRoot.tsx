
import { ReactNode } from "react"

interface IWorkFlowRootProps{
  children: ReactNode
}
export function WorkFlowRoot({ children }: IWorkFlowRootProps) {
  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  )
}