import React, {useEffect, useState} from 'react'
import { Pagination } from '@mui/material'
import {Box, Stack, Typography} from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({setExercises, bodyPart, exercises}) => {

  // RELATED TO PAGINATION
  // STARTING PAGE = 1
  const [currentPage, setCurrentPage] = useState(1);
  // EXERCISES/ ELEMENTS PER PAGE = 9
  const exercisesPerPage= 9;
  // CALCULATING THE LAST EXERCISE OF EVERY PAGE
  const indexOfLastExercise = currentPage*exercisesPerPage;
  // CALCULATING THE FIRST EXERCISE OF EVERY PAGE (eg. 18-9=9 -> 1ST EXERCISE OF 2ND PAGE)
  const indexOfFirstExercise= indexOfLastExercise-exercisesPerPage;
  // WHICH EXERCISES WILL BE SHOWN ON THE CURRENT PAGE (ARRAY)
  const currentExercises= exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  // FILLING PAGINATION BUTTONS 
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior:'smooth' })
  }

  // USE EFFECT USED ONLY WHEN CHANGE TO BODYPART
  useEffect( ()=> {

    const fetchExercisesData= async()=>{
      // CREATE EMPTY ARRAY
      let exercisesData= [];

      // IF BODYPART ==='ALL', FETCH FOR THIS PARTICULAR DATA
      if(bodyPart=== 'all'){
        exercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      }
      // IF BODYPART !== 'ALL', FETCH FOR THIS URL
      else{
        exercisesData= await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }
      //MAKE CHANGES TO THE EXERCISES ACCORDINGLY
      setExercises(exercisesData);  
    }

    // CALL THE ABOVE FUNCTION
    fetchExercisesData();

  }, [bodyPart])

  return (

    <Box
      sx={{mt: {lg: '110px'}}}
      mt="50px"
      p="20px"
    >
      {/* HEADING */}
      <Typography variant='h3' mb="46px" >
        Showing Results
      </Typography>

      {/* SHOWING ALL THE RESULTS */}
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px'}}} flexWrap="wrap" justifyContent="center">
        {/* MAPPING THROUGH THIS EXERCISE DATA SPECIFIC TO THAT PAGE */}
        {currentExercises.map( (exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        )        
        )}

      </Stack>

      {/* PAGINATION UI */}
      {/* COUNT = CEIL [EXERCISES.LENGTH/ EXERCISES PER PAGE] i.e. 23/9= 3 */}
      <Stack mt='100px' alignItems="center">
        {exercises.length>9 && (
          <Pagination 
            boundaryCount={1} 
            defaultPage={1}
            siblingCount={0}
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length/ exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises