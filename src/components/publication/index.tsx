import { Divider, Box, ListItemText, Link } from '@material-ui/core'

import { AbstractCollapse } from '@/components'
import { PublicationProps } from '@/types'

const Publication = ({
  title,
  authors,
  publicationLink,
  publishingInstitution,
  keywords,
  abstract,
}: PublicationProps) => {
  return (
    <>
      <Divider />
      <Box
        key={publicationLink}
        display="flex"
        flexDirection="column"
        alignItems="start"
        paddingY={1}
        paddingX={2}
        textAlign="left"
        component="li"
      >
        <ListItemText>
          {authors} &nbsp;
          <Link
            href={publicationLink}
            target="_blank"
            rel="noreferrer"
            variant="body2"
          >
            {title}
          </Link>
        </ListItemText>

        {publishingInstitution && (
          <ListItemText secondary={publishingInstitution} />
        )}

        {abstract && (
          <AbstractCollapse
            abstract={abstract}
            keywords={keywords}
            id={publicationLink}
          />
        )}
      </Box>
    </>
  )
}

export default Publication
