import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add'
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Combinenav from "../../components/Nav/Combinednav/Combinenav";
import Maingooter from "../../components/footer/Mainfooter/Maingooter";
import Subfooter from "../../components/footer/Subfooter/Subfooter";

export default function AlignItemsList() {
    return (


        <div>

            <meta name="viewport" content="initial-scale=1, width=device-width" />

            <Combinenav />

            


                <div>

                    <List sx={{ width: '100%', opacity: '70%', backgroundSize: 'cover', minHeight: '100vh', backgroundImage: `url('https://www.thebalancemoney.com/thmb/j65dIWXtJFEPmjo1qkZ2cyBsNII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/job-fair-498213851-5b300e588e1b6e00366f8179.jpg')` }}>
                        <div style={{ textAlign: 'right' }}>
                            <Button variant="contained" startIcon={<AddIcon />} sx={{ marginLeft: 'auto',marginRight:20,marginTop:5 }}>
                                Add Your Event
                            </Button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <h1 style={{ marginBottom: 20 }}>Events</h1>

                            <ListItem sx={{ marginBottom: '5px', maxWidth: 860, bgcolor: '#C0C0C0', borderRadius: '10px' }}>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="../../assets/homer.avif" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Ali Connors
                                            </Typography>
                                            {" — I'll be in your neighborhood doing errands this…"}
                                            <a href=''>See More...</a>
                                        </React.Fragment>

                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start" sx={{ marginBottom: '5px', maxWidth: 860, bgcolor: '#C0C0C0', borderRadius: '10px' }}>
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="../../assets/homer.avif" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Summer BBQ"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                to Scott, Alex, Jennifer
                                            </Typography>
                                            {" — Wish I could come, but I'm out of town this…"}
                                            <a href=''>See More...</a>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start" sx={{ marginBottom: '5px', maxWidth: 860, bgcolor: '#C0C0C0', borderRadius: '10px' }}>
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="../../assets/homer.avif" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Summer BBQ"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                to Scott, Alex, Jennifer
                                            </Typography>
                                            {" — Wish I could come, but I'm out of town this…"}
                                            <a href=''>See More...</a>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start" sx={{ marginBottom: '5px', maxWidth: 860, bgcolor: '#C0C0C0', borderRadius: '10px' }}>
                                <ListItemAvatar>
                                    <Avatar alt="Cindy Baker" src="../../assets/homer.avif" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Oui Oui"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Sandra Adams
                                            </Typography>
                                            {' — Do you have Paris recommendations? Have you ever…'}
                                            <a href=''>See More...</a>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </div>
                    </List>
                </div>

            <Maingooter />
            <Subfooter />



        </div>
    );
}
