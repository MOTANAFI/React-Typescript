import React, { ReactElement } from 'react'

type HeadingProps = {title: string}

export default function Heading({title}: HeadingProps): ReactElement {
  return  <h1>{title}</h1>
  
}
