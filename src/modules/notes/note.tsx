import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { notesStore } from '../../store/notes'




const Note = () => {

    const { noteCategory } = useParams()
    const categoryIndex = notesStore.notesArray.findIndex((e) => e.categoryUrl == noteCategory)
    const currentCategory = notesStore.notesArray[categoryIndex]

    return (
        
        <Paper variant={'outlined'} square={true} sx={{p:'22px',borderRadius:'10px',boxShadow:`4px 4px 14px -10px ${currentCategory.color}`}}>
            <Box display={'flex'} alignItems={'center'} mb={2}>
              <Typography color={currentCategory.color} variant={'h5'} textTransform={'uppercase'} fontWeight={'600'}>
                {currentCategory.name}
            </Typography>  
            </Box>
            
        </Paper>

    )
}

export default Note