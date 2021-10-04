import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Link, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { CenterFocusStrong } from "@material-ui/icons";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';


export default function Login() {
    const paperStyle = { padding: 20, height: '70vh', width: 350, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'green' }
    const btnStyle = { margin: "8px 0" }

    return (


        <Grid container>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}> <VpnKeyOutlinedIcon /> </Avatar>
                    <h2> Sign In </h2>
                </Grid>
                <TextField style={btnStyle} variant="outlined" label="Username" placeholder="Enter Username" fullWidth required />
                <TextField style={btnStyle} variant="outlined" label="Password" placeholder="Enter Password" fullWidth required type="password" />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember Me"
                />
                <Button type="submit" variant="contained" style={btnStyle} color="primary" fullWidth> Sign In</Button>
                <Typography>
                    <Link href="#" >
                        Forgot your password ?
                    </Link>
                </Typography>
                <Typography> Do you have an account?
                    <Link href="/signup" >
                        Sign Up
                    </Link>
                </Typography>

            </Paper>
        </Grid>

    )
}
