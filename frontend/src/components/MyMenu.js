import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'

import { categories } from '../config'
import { Link } from 'react-router-dom'

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
    return (
        <PopupState variant='popover' popupId='demo-popup-menu'>
            {(popupState) => (
                <>
                    <Button variant='contained' color='primary' {...bindTrigger(popupState)}>
                        Menu
                     </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>
                            <StyledMenuItem component={Link} to='/'>
                                <ListItemIcon>
                                    <HomeIcon fontSize='small' />
                                </ListItemIcon>
                                <ListItemText primary='Home' />
                            </StyledMenuItem>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                            <StyledMenuItem component={Link} to='/offers'>
                                <ListItemIcon>
                                    <LocalLibraryIcon fontSize='small' />
                                </ListItemIcon>
                                <ListItemText primary='All Offers' />
                            </StyledMenuItem>
                        </MenuItem>
                        {categories.map((item) =>
                            <MenuItem onClick={popupState.close} key={item.id} >
                                <StyledMenuItem component={Link} to={`/offers?category=${item.id}`}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.category} />
                                </StyledMenuItem>
                            </MenuItem>
                        )}
                    </Menu>
                </>
            )}
        </PopupState>
    )
}