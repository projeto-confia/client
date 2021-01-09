import withStyles from '@material-ui/core/styles/withStyles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'

export const Accordion = withStyles({
  root: {
    width: '100%',
    border: 'none',
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
  },
})(MuiAccordion)

export const AccordionSummary = withStyles({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
  },
})(MuiAccordionSummary)

export const AccordionDetails = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
})(MuiAccordionDetails)
