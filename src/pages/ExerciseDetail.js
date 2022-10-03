import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material'
import {exerciseOptions, youtubeOptions, fetchData} from '../utils/fetchData'

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';


const ExerciseDetail = () => {

  // EXERCISE DETAIL
  const [exerciseDetail, setExerciseDetail] = useState({});
  // RELATED VIDEOS
  const [exerciseVideos, setExerciseVideos] = useState([]);
  // RELATED MUSCLE EXERCISES
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  // RELATED EQUIPMENT EXERCISES
  const [equipmentExercises, setEquipmentExercises] = useState([])

  // USING ID FROM THE PATH TO FETCH THE EXERCISE DATA
  const {id} = useParams();

  
  useEffect (() => {
    const fetchExercisesData= async () => {

      //URL FOR THE EXERCISE DATA
      const exerciseDbUrl= 'https://exercisedb.p.rapidapi.com';
      //URL FOR THE YOUTUBE VIDEOS DATA
      const youtubeSearchUrl= 'https://youtube-search-and-download.p.rapidapi.com';

      //FOR THE SPECIFIC EXERCISE
      const exerciseDetailData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      //FOR THE VIDEO DETAILS
      const exerciseVideosData= await fetchData( `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      //FOR THE TARGET MUSCLE
      const targetMuscleExercisesData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      //FOR THE EQUIPMENTS DETAIL
      const equipmentExercisesData= await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    }

    //CALLING THE ABOVE FUNCTION
    fetchExercisesData();

    // RENDERING ONLY ON THE CHANGE OF THE PATH ID
  }, [id])


  return (
    <Box m="auto">

      {/* SPECIFIC EXERCISE DETAIL INFO SECTION */}
      <Detail exerciseDetail={exerciseDetail} />

      {/* RELATED VIDEOS SECTION */}
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>

      {/* SIMILAR EXERCISES SECTION */}
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />

    </Box>
  )
}

export default ExerciseDetail