import React from 'react';
import PropTypes from 'prop-types';
import blocnetsLogo from '../../../blocknetwhite-1.png';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import yellow from '@material-ui/core/colors/yellow';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import { retrieveFileByKey } from '../../../redux/actions/FILE/file.action';
import { getUserMessageDataByUserID } from '../../../redux/actions/UMA/user.message.array.action';

let counter = 0;

const rows = [
    { id: 'fileName', label: 'Name' },
    { id: 'fileSize', label: 'Size' },
    { id: 'fileType', label: 'File Type' },
    { id: 'lastModifiedDate', label: 'Last Modified Date' },
    { id: 'lastModifed', label: 'Last Modified' }
];

class TableHeader extends React.Component {
    render() {
        return (
            <TableHead>
                <TableRow>
                    {rows.map(row => {
                        return (
                            <TableCell key={row.id}>
                                {row.label}
                            </TableCell>
                        );
                    })}
                </TableRow>
            </TableHead>
        );
    }
}

TableHeader.propTypes = {
    rowCount: PropTypes.number.isRequired,
};

class ReadDocumentView extends React.Component {

    componentDidMount() {
        !this.isCancelled && Promise.resolve(this.props.getUserMessageDataByUserID('Guest'))
            .then(() => {
                if (this.props.data.umaReducer.getUserMessageDataByUserIDSuccess) {
                    this.setState({
                        showProgressLogo: false,
                        data: this.createTableContent()
                    })
                } else {
                    this.setState({
                        showProgressLogo: false,
                        data: []
                    })
                }
            })
    }

    componentWillUnmount() {
        this.isCancelled = true;
    };

    constructor(props) {
        super(props);
        this.state = {
            showProgressLogo: false,
            data: [],
            page: 0,
            rowsPerPage: 10,
            userName: '',
            snackbar: {
                autoHideDuration: 2000,
                message: '',
                open: false,
                sbColor: 'black'
            }
        };
    }

    createTableContent = () => {
        let tableContent = [];
        let createData = (fileName, fileType, fileSize, lastModifiedDate, lastModified) => {
            counter += 1;
            return {
                id: counter,
                fileName,
                fileType,
                fileSize,
                lastModifiedDate,
                lastModified
            };
        };
        if (this.props.data.umaReducer.getUserMessageDataByUserIDSuccess) {
            if (this.props.data.umaReducer.getUserMessageDataByUserIDSuccess.userFiles.length > 0) {
                for (let i = 0; i < this.props.data.umaReducer.getUserMessageDataByUserIDSuccess.userFiles.length; i++) {
                    if (!this.props.data.umaReducer.getUserMessageDataByUserIDSuccess.userFiles[i] === 'string') {
                        let tmp = JSON.parse(this.props.data.umaReducer.getUserMessageDataByUserIDSuccess.userFiles[i])
                        Promise.resolve(this.props.retrieveFileByKey(tmp.fileName))
                            .then(() => {
                                console.log(this.props.data.umaReducer.retrieveFileByKeySuccess.userFiles[i])
                            })
                        tableContent.push(
                            createData(
                                tmp.fileName,
                                tmp.fileType,
                                tmp.fileSize,
                                tmp.lastModifiedDate,
                                tmp.lastModified,
                            ));
                    }
                }
            }
        }
        return tableContent;
    };

    render() {
        const { data, rowsPerPage, page } = this.state;

        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        const buttonThemeYellow = createMuiTheme({
            palette: {
                primary: yellow
            },
        });

        return (
            <form>
                <div>
                    {this.state.showProgressLogo ?
                        <div className="overlay"><img src={blocnetsLogo} className="App-logo-progress" alt="" />
                        </div> : ""}
                </div>
                <div style={{ padding: 24 }}>
                    <Grid container justify="center">
                        <Grid container item xs={12}>
                            <Paper style={{ "width": "100%" }}>
                                <div style={{ "overflowX": "auto" }}>
                                    <Table>
                                        <TableHeader
                                            rowCount={data.length}
                                        />
                                        <TableBody style={{ "overflowWrap": "break-word" }}>
                                            {data
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map(n => {
                                                    return (
                                                        <TableRow hover
                                                            tabIndex={-1} key={n.id}>
                                                            <TableCell
                                                                style={{ "cursor": "pointer" }}>
                                                                {n.fileName.toUpperCase()}
                                                            </TableCell>
                                                            <TableCell
                                                                style={{ "cursor": "pointer" }}>
                                                                {n.fileType}
                                                            </TableCell>
                                                            <TableCell
                                                                style={{ "cursor": "pointer" }}>
                                                                {n.fileSize}
                                                            </TableCell>
                                                            <TableCell
                                                                style={{ "cursor": "pointer" }}>
                                                                {n.lastModifiedDate}
                                                            </TableCell>
                                                            <TableCell
                                                                style={{ "cursor": "pointer" }}>
                                                                {n.lastModified}
                                                            </TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                            {emptyRows > 0 && (
                                                <TableRow style={{ height: 49 * emptyRows }}>
                                                    <TableCell colSpan={6} />
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                    <TablePagination
                                        component="div"
                                        count={data.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        backIconButtonProps={{
                                            'aria-label': 'Previous Page',
                                        }}
                                        nextIconButtonProps={{
                                            'aria-label': 'Next Page',
                                        }}
                                        onChangePage={this.handleChangePage}
                                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    />
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                <Snackbar
                    open={this.state.snackbar.open}
                    message={this.state.snackbar.message}
                    autoHideDuration={this.state.snackbar.autoHideDuration}
                    onRequestClose={this.handleSnackbarClose}
                    bodyStyle={{ backgroundColor: this.state.snackbar.sbColor }}
                />
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state,
    };
};

// This way, we can call our action creator by doing this.props.fetchData(url);
const mapDispatchToProps = (dispatch) => {
    return {
        getUserMessageDataByUserID: (url) => dispatch(getUserMessageDataByUserID(url)),
        retrieveFileByKey: (url) => dispatch(retrieveFileByKey(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadDocumentView);