import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Loader from './Loader'

const ExerciseVideos = ({exerciseVideos, name}) => {
  
  return (

    <Box sx={{ marginTop: {lg: '100px', xs:'20px'}, padding:{ xs:'40px 0', xl:'40px'}}}>
      
      {/* HEADING */}
      <Typography variant="h4" mb="33px" textTransform='capitalize' fontWeight="bold">
        Watch <span style={{color:"#ff2625"}}>{name}</span>  exercise videos
      </Typography>

      {/* IF WE GET THE VIDEO, OUT OF IT, GO ONLY FOR 3 VIDEOS , ELSE SHOW THE LOADING ANIMATION */}
      {exerciseVideos.length? 
        
        <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{
          flexDirection: {sm:'row'},
          gap: { sm:'20px', lg: '60px', xs:'0'}
        }}>

          {exerciseVideos?.slice(0, 3).map((item, index)=> (
            <a
              key={index}
              className="exercise-video"
              href={ `https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              
              <img className='video-img' style={{objectFit:"cover" }} src={item.video.thumbnails[0].url}  alt= {item.video.tiltle}/>

              <Box>
                <Typography variant="h5" color="#000" fontWeight="bold">
                  {item.video.title}
                </Typography>

                <Typography variant="h6" color="#000">
                  {item.video.channelName}
                </Typography>

              </Box>
            </a>
          ))}

        </Stack>
        : 
        <Loader />
      }

    </Box>
  )
}

export default ExerciseVideos