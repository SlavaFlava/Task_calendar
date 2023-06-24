import { Box, Paper, SvgIcon } from "@mui/material";
import { observer } from "mobx-react";
import { notesStore } from "../../store/notes";
import { ICategory } from "./components/models";
import { NavLink } from "react-router-dom";
import CategoryNotes from "./components/category";
import AddCategory from "./components/addCategory";
import { Delete } from "@mui/icons-material";


const Notes = observer(() => {
  return (
    <>
      <Box display={'flex'} flexWrap={'wrap'} m={'-5px'} >
        {
          notesStore.notesArray.map((e: ICategory) => (
            <Paper key={e.categoryUrl} sx={{
              flexBasis: 'calc(33.3% - 10px)',
              position: 'relative',
              m: '5px',
              minHeight: '205px',
              flexGrow: '1',
              cursor: 'pointer',
              borderRadius: '10px',
            }}>
              <NavLink
                to={`./${e.categoryUrl}`}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  padding: '30px'

                }}
              >
                <CategoryNotes name={e.name} color={e.color} icon={e.icon} notes={e.notes} categoryUrl={e.categoryUrl} />
              </NavLink>
              <SvgIcon onClick={() => notesStore.delCategory(e.categoryUrl)}
                sx={{ color: '#a6a1a1', fontSize: '25px', position: 'absolute', bottom: '10px', right: '15px' }}>
                <Delete />
              </SvgIcon>
            </Paper>
          ))
        }
      </Box>
      <AddCategory />
    </>
  )
})

export default Notes;
