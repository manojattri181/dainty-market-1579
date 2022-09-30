import { Button } from '@chakra-ui/react'
import React from 'react'

const ButtonComp = ({words,s, bg, clr, bord, hov}) => {
  return (
    <div>
        <Button zIndex="1" cursor="pointer" border={bord} width={s} bgColor={bg} _hover={{bgColor:hov}} color={clr}>
           { words}
        </Button>
    </div>
  )
}

export default ButtonComp