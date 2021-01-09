import { List, Paper, Box, Typography, useTheme } from '@material-ui/core'

import { PublicationProps } from '@/types'
import { Publication } from '@/components'

export type PublicationsListProps = {
  publications: PublicationProps[]
}

const PublicationsList = ({ publications }: PublicationsListProps) => {
  const theme = useTheme()
  const hasPublications = publications.length > 0
  const publicationByYearMap = publications.reduce(
    (accumulator, publication) => {
      const date = new Date(publication.publicationDate)
      const year = date.getUTCFullYear()
      const publications = accumulator.get(year) || []

      publications.push(publication)
      accumulator.set(year, publications as PublicationProps[])

      return accumulator
    },
    new Map<number, PublicationProps[]>()
  )

  const publicationsByYear = [...publicationByYearMap.entries()]

  return (
    <Box marginTop={2} maxHeight="70vh" overflow="auto" clone>
      <Paper elevation={1}>
        <List>
          {hasPublications ? (
            publicationsByYear.map(([year, publications]) => (
              <li key={year}>
                <Box component="ul" p={0}>
                  <Box
                    bgcolor={theme.palette.background.paper}
                    position="sticky"
                    top={0}
                    zIndex={1}
                    paddingX={2}
                    color={theme.palette.text.hint}
                    component="li"
                  >
                    <Typography component="p" variant="h2">
                      {year}
                    </Typography>
                  </Box>
                  {publications.map((publication: PublicationProps) => (
                    <Publication
                      key={publication.publicationLink}
                      {...publication}
                    />
                  ))}
                </Box>
              </li>
            ))
          ) : (
            <Typography component="h2" variant="h2">
              Nenhuma pulicação no momento
            </Typography>
          )}
        </List>
      </Paper>
    </Box>
  )
}

export default PublicationsList
