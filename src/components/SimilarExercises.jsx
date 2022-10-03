import React from 'react'
import { Box, Stack, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg:'100px', xs:'0'}}}>

      {/* MUSCLE EXERCISES */}
      <Typography variant="h4" sx={{marginTop:{xs:'60px', xl:'0'}}} mb="33px" textTransform='capitalize' fontWeight="bold">
        Similar <span style={{color:"#ff2625"}}>Muscle Exercises </span>
      </Typography>

      <Stack direction="row" sx={{p:'2', position:'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>

      {/* EQUIPMENT EXERCISES */}
      <Typography variant="h4" mt="60px" mb="33px" textTransform='capitalize' fontWeight="bold">
        Similar <span style={{color:"#ff2625"}}>Equipment Exercises </span>
      </Typography>

      <Stack direction="row" sx={{p:'2', position:'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
      
    </Box>
  )
}

export default SimilarExercises