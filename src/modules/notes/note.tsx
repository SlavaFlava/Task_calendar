import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { notesStore } from '../../store/notes'
import Colors from './components/colors'
import AddNote from './components/add-note'
import { INote } from './components/models'
import { observer } from 'mobx-react'
import { toJS } from "mobx";



const Note = observer(() => {

  const { noteCategory } = useParams()
  const currentCategory = toJS(notesStore.notesArray).filter((e) => e.categoryUrl == noteCategory)[0] 
  

  return (

    <Paper variant={'outlined'} square={true} sx={{ p: '22px', borderRadius: '10px', boxShadow: `4px 4px 14px -10px ${currentCategory.color}` }}>
      <Box display={'flex'} alignItems={'center'} mb={2}>
        <Typography color={currentCategory.color} variant={'h5'} textTransform={'uppercase'} fontWeight={'600'}>
          {currentCategory.name}
        </Typography>
      </Box>
      {
        currentCategory.notes.map((e: INote) => (
          <NavLink key={e.title} to={`./${e.noteUrl}`}>
            <Paper key={e.title} variant={'outlined'} sx={{ p: 1, pl: 2, mb: 1, borderRadius: '6px' }}>
              <Typography variant={'h6'}>
                {e.title}
              </Typography>
            </Paper>
          </NavLink>
        ))
      }
      <AddNote />
    </Paper>

  )
})

export default Note 