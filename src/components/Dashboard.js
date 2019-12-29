import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {CTX} from './Store';

const useStyles = makeStyles(theme => ({
    root: {
      margin:'50px',
      padding: theme.spacing(3, 2),
    },
    flex: {
        display:'flex',
        alignItems:'center'
    },
    
    topicsWindow: {
        width:'30%',
        height:'300px',
        borderRight:'1px solid grey'
    },
    chatWindow: {
        width:'70%',
        height:'300px',
    },
    chatBox: {
        width:'85%',
        
    },
    button: {
        width:'15%',
    },
  }));

export default function Dashboard() {

    const classes = useStyles();

    //CTX Store
    const [allChats] =  React.useContext(CTX);

    console.log({allChats});


    const [textValue, changeTextvalue] = React.useState('');

    return(
        <div>
            <Paper elevation={3} className={classes.root}>
                <Typography variant="h5" component="h3">
                    Chats
                </Typography>
                <Typography component="p">
                    Topic Placeholder
                </Typography>
                <div className ={classes.flex}>
                    <div className = {classes.topicsWindow}>
                        <List>
                            {
                                ['topic'].map(topic => (
                                    <ListItem key = {topic} button>
                                        <ListItemText primary="Topic" />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className = {classes.chatWindow}>
                        {
                            [{from:'user',msg:'hello!'}].map((chat,i) => (
                                <div className={classes.flex} key={i}>
                                    <Chip label={chat.from} className={classes.chip}></Chip>
                                    <Typography variant='p'>{chat.msg}</Typography>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField
                        label="Send a message" 
                        className = {classes.chatBox}
                        value = {textValue}
                        onChange = {event => changeTextvalue(event.target.value)}
                    />
                    <Button className = {classes.button} variant="contained" color="primary">
                                Send
                    </Button>
                </div>
            </Paper>
        </div>
    )


}


