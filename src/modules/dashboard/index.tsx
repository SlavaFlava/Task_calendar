import { Avatar, Box, Typography } from "@mui/material";



const Dashboard = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      borderBottom={'2px solid '}
      borderColor={'secondary.light'}
      pb={2}
      mb={1}
    >
      <Typography
        variant={'h4'}
        component={'h2'}
        color={'secondary.main'}
        fontWeight={500}
      >
        Wed May 03 2023
      </Typography>
      <Box
      display={'flex'}
      alignItems={'center'}
      pr={2}
      >
        <Avatar
          sx={{
            bgcolor: 'secondary.main',
            width: 56,
            height: 56,
            mr: 2,
            color: 'background.default',
            fontWeight: '600'
          }}
        >
          SF
        </Avatar>
        <Typography
          variant={'h4'}
          component={'p'}
          fontWeight={'500'}
          color={'secondary.main'}
        >
          Slava Flava
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
