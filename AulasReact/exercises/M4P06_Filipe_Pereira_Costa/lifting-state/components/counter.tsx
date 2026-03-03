import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


interface CounterProps {
  selected: number;
}

export default function Counter({
  selected = 1

}: CounterProps) {

  return (

    <Stack direction="row" spacing={1}>
      {selected > 0 ? (
        <Chip
          sx={{ bgcolor: "white" }}
          label={`${selected} receitas escolhidas`}
        />
      ) : (
        <Chip
          sx={{
            bgcolor: '#ffebee7e'
          }}
          label={`${selected} receitas escolhidas`}
          variant="outlined"
        />
      )}

    </Stack>
  );
}
