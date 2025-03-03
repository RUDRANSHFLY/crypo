import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'


interface MaxWidthWrapperProps {
    children : ReactNode
    className? : string ,
}

const MaxWidthWrapper = ({children , className} : MaxWidthWrapperProps) => {
  return (
    <div className={cn("max-w-7xl w-full mx-auto",className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper