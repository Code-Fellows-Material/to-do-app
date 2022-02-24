import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Header({ incomplete }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 3,
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '50%',
          height: 200,
        },
      }}
    >
      <Paper elevation={3}>
        <Typography m={1} variant="h4">To Do List: </Typography>
        <Typography align='center' m={1} variant="h2">{incomplete} </Typography>
        <Typography align='center' m={1} variant="h4">items pending</Typography>
      </Paper>
    </Box>
  );
}

export default Header;
