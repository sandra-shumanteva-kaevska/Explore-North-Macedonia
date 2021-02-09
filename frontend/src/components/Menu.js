import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'

import { categories } from '../config'
import { Link } from 'react-router-dom'

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

export const MyMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >   <ListItemIcon>
                    <HomeIcon fontSize="small" />
                </ListItemIcon>
                Menu
            </Button>

            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <StyledMenuItem component={Link} to="/">
                    <ListItemIcon>
                        <LocalLibraryIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </StyledMenuItem>

                <StyledMenuItem component={Link} to="/offers">
                    <ListItemIcon>
                        <LocalLibraryIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="All Offers" />
                </StyledMenuItem>

                {categories.map((item) =>
                    <StyledMenuItem component={Link} to={`/offers?category=${item.id}`} key={item.id} >
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.category} />
                    </StyledMenuItem>
                )}

                <StyledMenuItem>
                    <ListItemIcon>
                        <SupervisedUserCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="About us" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <ContactMailIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Contact us" />
                </StyledMenuItem>

            </StyledMenu>
        </>
    );
}