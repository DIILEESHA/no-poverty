import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Combinenav from "../../components/Nav/Combinednav/Combinenav";
import Maingooter from "../../components/footer/Mainfooter/Maingooter";
import Subfooter from "../../components/footer/Subfooter/Subfooter";
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function ViewEvents() {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (


        <div>

            <meta name="viewport" content="initial-scale=1, width=device-width" />

            <Combinenav />

            


                <div style={{ width: '100%', opacity: 80, backgroundSize: 'cover',  backgroundImage: `url('https://www.medidata.com/wp-content/uploads/2021/09/shutterstock_379892197_LR-1024x529.jpg')` }}>

                    
                    <Grid item >
                    <Box
                        sx={{
                            
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            
                        }}
                    >

                        <Typography component="h1" variant="h5" sx={{marginTop:5}}>
                            Event Details
                        </Typography>
                        <div style={{backgroundColor:'white',margin:5, borderRadius:5,opacity:50}}>
                        <Box component="form" sx={{ margin:5,opacity:100}}  noValidate onSubmit={handleSubmit} xs={12} sm={8} md={5} elevation={6} square>
                            
                            <TextField
                                margin="10"
                                required
                                fullWidth
                                id="event"
                                label="Event Name"
                                name="event"
                               
                                defaultValue={'Event'}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="author"
                                label="Author Name"
                                defaultValue={'Author'}
                                id="author"
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Event Date" required defaultValue={dayjs('2022-04-17')}/>
                                </DemoContainer>
                            </LocalizationProvider>
                            <TextField
                                
                                margin="normal"
                                required
                                fullWidth
                                name="venue"
                                label="Venue"
                                defaultValue={'Venue'}
                                id="venue"
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={[
                                    'TimePicker'
                                ]}>
                                    <DemoItem label="Time" required>
                                        <TimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>

                            <Button href="http://localhost:3000/Events/Update"
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Update Event Details
                            </Button>
                            <Button href="http://localhost:3000/Events/" startIcon={<DeleteIcon />} variant="contained"  fullWidth  color="error" sx={{ mt: 3, mb: 2 }}>
                                Delete
                            </Button>
                            


                        </Box>
                        </div>
                        </Box>
                        </Grid>
                    
                </div>

            <Maingooter />
            <Subfooter />



        </div>
    );
}
