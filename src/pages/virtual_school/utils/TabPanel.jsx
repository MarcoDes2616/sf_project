import Box from '@mui/material/Box';

const TabPanel = ({ children, value, index, ...other }) => {

    return (
      <div
        role="tabpanel"
        className='tabpanel autoM'
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  export default TabPanel;