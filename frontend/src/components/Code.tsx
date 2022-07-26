import { chakra, Code } from '@chakra-ui/react'

type CodePanelProps = {
  children: string
}

const Pre = chakra('pre', {
  baseStyle: {
    bgColor: 'ui.neutrals.light',
    w: 'full',
  },
})

const CustomCode = chakra(Code, {
  baseStyle: {
    color: 'ui.neutrals.medium',
    w: 'full',
    p: '4',
    whiteSpace: 'pre-wrap',
  },
})

export const CodePanel = ({ children }: CodePanelProps) => {
  return (
    <Pre>
      <CustomCode>{children}</CustomCode>
    </Pre>
  )
}
