import { Typography } from "@mui/material"
import { ICategory } from "./models"




const CategoryNotes = ({ name, color }: ICategory) => {
  return (
    <>
      <Typography color={color} variant={'h5'} fontWeight={'600'} textTransform={'uppercase'}>
        {name}
      </Typography>
    </>
  )
}

export default CategoryNotes