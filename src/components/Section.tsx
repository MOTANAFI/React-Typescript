import  { ReactNode } from 'react'

type sectionProps = {
    title?: string,
    children: ReactNode
}

export  function Section({children, title = "This is Mohamed"}: sectionProps) {
  return (
    <section>
        <h2>{title}</h2>
        <p>{children}</p>
    </section>
  )
}
