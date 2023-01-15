import {render, screen, fireEvent} from '@testing-library/react' 
import AddInput  from '../AddInput' 

const mockInput = jest.fn()

test("testing addInput component", () => {

 render(<AddInput  
    todos={[]}  
    setTodos={mockInput}
    />) 

const inputElement = screen.getByPlaceholderText('Add a new task here...')  
expect(inputElement).toBeInTheDocument()
}) 

test("testing input tag", () => {
    render(<AddInput todos={[]} setTodos={mockInput}/>) 

    const inputElement = screen.getByPlaceholderText("Add a new task here...") 
    const buttonElement = screen.getByRole("button")  
    fireEvent.change(inputElement, {target: {value: "munashe"}})   
    fireEvent.click(buttonElement, {name: "Add"})
    expect(inputElement.value).toBe("")
})