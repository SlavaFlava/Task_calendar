import { Add } from "@mui/icons-material"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Menu, MenuItem, Popover, Stack, TextField } from "@mui/material"
import { useState } from "react"
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';



const AddCategory = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Box
        onClick={() => setOpen(true)}
        display={'flex'}
        justifyContent={'flex-end'}
        mt={2}
      >
        <Fab color='primary' aria-label='add'>
          <Add />
        </Fab>
      </Box>
      <Dialog open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth={'sm'}
      >
        <DialogTitle>
          Create New Category
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label={'Add category'}
            margin='dense'
          />
        </DialogContent>
        <DialogActions sx={{ p: '0 24px', pb: '20px', justifyContent: 'space-between' }}>
          <Stack direction={'row'}>
            <PopupState variant="popover" popupId="popup-color-menu">
              {(popupState) => (
                <>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Open Popover
                  </Button>
                 <Menu {...bindPopover(popupState)}>
                    <MenuItem>111</MenuItem>
                    <MenuItem>222</MenuItem>
                    <MenuItem>333</MenuItem>
                 </Menu>
                </>
              )}
            </PopupState>
          </Stack>
        </DialogActions>
      </Dialog >
    </>
  )
}

export default AddCategory