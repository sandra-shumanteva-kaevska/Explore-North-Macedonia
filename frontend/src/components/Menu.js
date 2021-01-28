import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike'
import NaturePeopleIcon from '@material-ui/icons/NaturePeople'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import HomeIcon from '@material-ui/icons/Home'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem)

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >   <ListItemIcon>
                    <HomeIcon fontSize="small" />
                </ListItemIcon>
                Home Menu
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <SupervisedUserCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="About us" />
                </StyledMenuItem>


                <StyledMenuItem component="a" href="/offers">
                    <ListItemIcon>
                        <LocalLibraryIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="All Offers" />
                </StyledMenuItem>

                <StyledMenuItem component="a" href="/offers?category=hiking-tours">
                    <ListItemIcon>
                        <NaturePeopleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Hiking Tour" />
                </StyledMenuItem>

                <StyledMenuItem component="a" href="/offers?category=biking-tours">
                    <ListItemIcon>
                        <DirectionsBikeIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Biking Tour" />
                </StyledMenuItem>

                <StyledMenuItem component="a" href="/offers?category=culture-tours">
                    <ListItemIcon>
                        <AccountBalanceIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Culture Tour" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <ContactMailIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Contact us" />
                </StyledMenuItem>

            </StyledMenu>
        </div>
    );
}