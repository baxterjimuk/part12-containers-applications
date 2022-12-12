import React from "react";
import Todo from "./Todo";
import { render, screen } from "@testing-library/react";

describe('display correctly', () => {
  const dummy = () => {
    return
  }
  it('a done todo', () => {
    const todo = {
      text: 'todo 1',
      done: true
    }
    render(<Todo todo={todo} onClickComplete={dummy} onClickDelete={dummy} />)
    expect(screen.getByText('todo 1')).toBeInTheDocument()
    expect(screen.getByText('This todo is done')).toBeInTheDocument()
    expect(screen.queryByText('This todo is not done')).not.toBeInTheDocument()
    expect(screen.queryByText('Set as done')).not.toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
  })

  it('a not done todo', () => {
    const todo = {
      text: 'todo 2',
      done: false
    }
    render(<Todo todo={todo} onClickComplete={dummy} onClickDelete={dummy} />)
    expect(screen.getByText('todo 2')).toBeInTheDocument()
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
    expect(screen.queryByText('This todo is done')).not.toBeInTheDocument()
    expect(screen.getByText('Set as done')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
  })
})