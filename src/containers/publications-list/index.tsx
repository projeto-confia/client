import { PublicationProps } from '@/types'

export type PublicationsListProps = {
  publications: PublicationProps[]
}
const PublicationsList = ({ publications }: PublicationsListProps) => {
  const hasPublications = publications.length > 0

  return (
    <ul>
      {hasPublications &&
        publications.map(({ title }) => <li key={title}>{title}</li>)}
    </ul>
  )
}

export default PublicationsList
