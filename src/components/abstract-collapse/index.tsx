import { Box, Typography } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

import * as S from './styled'
import { PublicationProps } from '@/types'

export type AbstractCollapseProps = {
  id: string | number
} & Pick<PublicationProps, 'abstract' | 'keywords'>

export type KeywordsProps = {
  id: string | number
  children: React.ReactNode
}

export const Keywords = ({ id, children }: KeywordsProps) => (
  <Box display="flex">
    <Typography component="label" variant="subtitle2" id={`${id}-keywords`}>
      Palavras-chave:&nbsp;
    </Typography>
    <Typography
      aria-labelledby={`${id}-keywords`}
      component="p"
      variant="body2"
    >
      {children}
    </Typography>
  </Box>
)

const AbstractCollapse = ({
  abstract,
  keywords,
  id,
}: AbstractCollapseProps) => (
  <S.Accordion TransitionProps={{ unmountOnExit: true }}>
    <S.AccordionSummary
      expandIcon={<ExpandMore />}
      aria-controls={`${id}-content`}
      id={`${id}-header`}
    >
      <Typography variant="subtitle2">Resumo</Typography>
    </S.AccordionSummary>
    <S.AccordionDetails>
      <Typography component="p" variant="body1" gutterBottom>
        {abstract}
      </Typography>

      {keywords && <Keywords id={id}>{keywords}</Keywords>}
    </S.AccordionDetails>
  </S.Accordion>
)

export default AbstractCollapse
