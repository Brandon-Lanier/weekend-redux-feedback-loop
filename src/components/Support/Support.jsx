import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { LinearProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { Slide } from '@mui/material';


function Support() {

    const [support, setSupport] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        console.log(support);
        if (support) {
            dispatch({ type: 'ADD_SUPPORT', payload: support })
            history.push('/comments');
        } else {
            Swal.fire({
                confirmButtonColor: '#07aa9e',
                text: 'Please enter a selection!'
            })
        }
    }

    const goBack = () => {
        history.push('/understand');
    }

    return (
        <>
            <Slide direction="up" in="open" mountOnEnter unmountOnExit>
                <Card sx={{ width: 700 }} >
                    <LinearProgress variant="determinate" value={60} />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            How well are you being supported?
                        </Typography>
                        <FormControl>
                            <FormLabel id="radio-buttons-group-label">Support?</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="radio-buttons-group-label"
                                value={support}
                                name="understand-radios"
                                onChange={(e) => setSupport(e.target.value)}
                            >
                                <FormControlLabel value="0" control={<Radio />} label="0" />
                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                <FormControlLabel value="5" control={<Radio />} label="5" />
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                    <CardActions className="cardActions">
                        <Button size="medium" variant="outlined" onClick={goBack}>Go Back</Button>
                        <Button size="medium" variant="contained" onClick={handleSubmit}>Next</Button>
                    </CardActions>
                </Card>
            </Slide>
        </>

    )
}

export default Support;