'use client'
import { Command, CommandInput, CommandItem, CommandList } from 'cmdk'

export default function TestComponent() {
  return (
    <Command>
      <CommandInput placeholder="Digite algo..." />
      <CommandList>
        <CommandItem>Item 1</CommandItem>
        <CommandItem>Item 2</CommandItem>
      </CommandList>
    </Command>
  )
}
