import Link from 'next/link'
import { ButtonGroup, Button } from '@material-ui/core'

export type PaginatonLink = {
  active: boolean
  url: string
}

export type PaginationProps = {
  links: PaginatonLink[]
}

const Pagination = ({ links }: PaginationProps) => {
  return (
    <ButtonGroup aria-label="grupo de botões para as páginas disponíveis">
      {links.map(({ url, active }, index) => (
        <Link key={url} href={url} passHref>
          <Button color="primary" variant={active ? 'contained' : 'text'}>
            {index + 1}
          </Button>
        </Link>
      ))}
    </ButtonGroup>
  )
}

export default Pagination
