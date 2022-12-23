import React, { ReactNode } from 'react'
interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode
}

export default function List<T,>({items, render}: ListProps<T>) {
  return (
    <ul>
        {items.map((item, i) => (
            <li key={1}>
                {render(item)}
            </li>
        ))}
    </ul>
  )
}
