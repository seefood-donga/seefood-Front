import Link from 'next/link';
import React, { ReactNode } from 'react';

const CustomLink = ({children , path}:{children: ReactNode, path:string}) => {
  return(
    <Link href={path}>
      <a>
        {children}
      </a>
    </Link>
  )
}

export default CustomLink;