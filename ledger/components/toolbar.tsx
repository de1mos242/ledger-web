import {
    AppBar,
    createStyles,
    IconButton,
    makeStyles,
    Menu,
    MenuItem, Tab, Tabs,
    Theme,
    Toolbar,
    Typography
} from "@material-ui/core";
import {MenuIcon} from "@material-ui/data-grid";
import React, {useEffect} from "react";
import {makeRequest, redirectToLogin, requestLogout} from "../services/http_service";
import {AccountCircle, ExitToApp} from "@material-ui/icons";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {loginUser, logoutUser} from "../states/user/actions";
import Link from "next/link";

const AppToolBar = (props) => {
    const {user, loginDispatch, logoutDispatch} = props

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        if (!user) {
            (async function () {
                let url = "/api/accounting/user/info";
                const res = await makeRequest(url, {}, false)
                if (res) {
                    loginDispatch(await res.json())
                }
            })()
        }
    }, [])

    const logout = async () => {
        await requestLogout()
        logoutDispatch()
        window.location.replace("/")
    }

    const login = () => {
        redirectToLogin()
    }

    return <AppBar position="sticky">
        <Toolbar>
            {/*<IconButton edge="start" aria-label="menu">*/}
            {/*    <MenuIcon/>*/}
            {/*</IconButton>*/}
            <Typography variant="h6">
                Ledger
            </Typography>
            <Tabs>
                <Link href="/" >
                    <Tab label="Home" component="a"/>
                </Link>
                <Link href="/categories">
                    <Tab label="Categories" component="a" />
                </Link>
            </Tabs>


            {user ? (
                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                    <Link href="/">Home</Link>
                    <Link href="/categories">Categories</Link>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <div>
                            <p>{`${user.firstName} ${user.lastName}`}</p>
                            <p>{user.email}</p>
                        </div>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                </div>
            ) : (
                <div>
                    <IconButton
                        aria-label="Login"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={login}
                        color="inherit"
                    >
                        <ExitToApp/>
                    </IconButton>
                </div>
            )}
        </Toolbar>
    </AppBar>
};

const mapStateToProps = (state) => ({
    user: state.user.userInfo
})

const mapDispatchToProps = (dispatch) => ({
    loginDispatch: bindActionCreators(loginUser, dispatch),
    logoutDispatch: bindActionCreators(logoutUser, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppToolBar);

