import { render, screen } from '@testing-library/react';
import TodoFooter from "../TodoFooter"
import { BrowserRouter } from "react-router-dom"

const MockFooter = ({numberOfIncompleteTasks}) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
    </BrowserRouter>
  )
}

test("testing the correct number received from props", async() => {
render(<MockFooter numberOfIncompleteTasks={7}/>) 
const pElement = screen.getByText('7 tasks left') 
expect(pElement).toBeInTheDocument()
})