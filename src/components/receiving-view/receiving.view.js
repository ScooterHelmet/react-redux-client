import React, { Component } from 'react';
import blocnetsLogo from "../../blocknetwhite-1.png";
import Grid from '@material-ui/core/Grid';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import {
    getShippingDataByShipmentID,
    getShippingDataByMaterialID,
    updateShippingDataByMaterialID,
    updateShippingDataByShipmentID
} from '../../redux/actions/shipping.and.receiving.actions';

let dataByShipmentID = [];
let dataByMaterialID = [];

var materialRows = [];
var shipmentRows = [];

let dataByMaterialIDManuallyShipped = 'NO';
let dataByShipmentIDManuallyShipped = 'NO';

let counter = 0;

function createData(info1, info2) {
    counter += 1;
    return { id: counter, info1, info2 };
}

class ReceivingView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showProgressLogo: false,
            materialID: '',
            materialIDInformed: false,
            shipmentID: '',
            shipmentIDInformed: false,
            openMaterialDialog: false,
            openShipmentDialog: false,
            received: false,
            snackbar: {
                autoHideDuration: 2000,
                message: '',
                open: false,
                sbColor: 'black'
            },
            counter: 0
        };
    }

    handleIDChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        if ([event.target.name].toString() === 'materialID' && event.target.value !== '') {
            this.setState({ materialIDInformed: true });
        } else if ([event.target.name].toString() === 'materialID' && event.target.value === '') {
            this.setState({ materialIDInformed: false });
        }
        if ([event.target.name].toString() === 'shipmentID' && event.target.value !== '') {
            this.setState({ shipmentIDInformed: true });
        } else if ([event.target.name].toString() === 'shipmentID' && event.target.value === '') {
            this.setState({ shipmentIDInformed: false });
        }
    };

    handleSubmit = (event) => {
        this.setState({ showProgressLogo: true });
        if (this.state.shipmentIDInformed === false) {
            let val = this.state.materialID;
            this.props.getShippingDataByMaterialID(val);
            setTimeout(
                function() {
                    this.setState({counter: 1});
                    if (this.state.counter === 1) {
                        dataByMaterialID = JSON.parse(sessionStorage.getItem('DataByMaterialID'));
                        if (dataByMaterialID) {
                            materialRows = [
                                createData('Material ID', this.state.materialID),
                                createData('Address', dataByMaterialID.address1 + ' ' + dataByMaterialID.city + ' ' + dataByMaterialID.state + ' ' + dataByMaterialID.country + ' ' + dataByMaterialID.postalCode),
                                createData('IP Address', dataByMaterialID.ipAddress),
                                createData('Manual Shipping', dataByMaterialIDManuallyShipped),
                            ];
                            this.setState({ openMaterialDialog: true });
                            if(dataByMaterialID.manuallyShipped === true) {
                                dataByMaterialIDManuallyShipped = 'YES'
                            }
                        }
                    }
                }
                    .bind(this),
                1000
            );
        } else if (this.state.materialIDInformed === false){
            this.setState({counter: 0});
            let val = this.state.shipmentID;
            this.props.getShippingDataByShipmentID(val);
            setTimeout(
                function() {
                    this.setState({counter: 1});
                    if (this.state.counter === 1) {
                        dataByShipmentID = JSON.parse(sessionStorage.getItem('DataByShipmentID'));
                        if (dataByMaterialID) {
                            shipmentRows = [
                                createData('Shipment ID', this.state.shipmentID),
                                createData('Address', dataByShipmentID.address1 + ' ' + dataByShipmentID.city + ' ' + dataByShipmentID.state + ' ' + dataByShipmentID.country + ' ' + dataByShipmentID.postalCode),
                                createData('IP Address', dataByShipmentID.ipAddress),
                                createData('Manual Shipping', dataByShipmentIDManuallyShipped),
                            ];
                            this.setState({ openShipmentDialog: true });
                            if(dataByShipmentID.manuallyShipped === true) {
                                dataByShipmentIDManuallyShipped = 'YES'
                            }
                        }
                    }
                }
                    .bind(this),
                1000
            );
        }

        this.setState({ showProgressLogo: false });

        /*this.setState({
            snackbar: {
                autoHideDuration: 2000,
                message: 'No shipping information!',
                open: true,
                sbColor: 'red'
            },
            openDialog: false
        }); */
        event.preventDefault();
    };

    handleDialogClose = () => {
        this.setState({
            openMaterialDialog: false,
            openShipmentDialog: false
        });
    };

    handleDialogReceiveShipment = (event) => {
        //this.setState({showProgressLogo: true}); to show blocnetsLogo before submit
        //this.setState({showProgressLogo: false}); to show blocnetsLogo after receiving response
        /*this.setState({
            snackbar: {
                autoHideDuration: 2000,
                message: 'Success',
                open: true,
                sbColor: 'black'
            }
        }); to show success message */
        /*this.setState({
            snackbar: {
                autoHideDuration: 2000,
                message: 'Error',
                open: true,
                sbColor: 'red'
            }
        }); to show error message */
        this.setState({ openDialog: false });
    };

    handleSnackbarClose = () => {
        this.setState({
            snackbar: {
                autoHideDuration: 2000,
                message: '',
                open: false,
                sbColor: 'black'
            },
        });
    };

    render() {

        if (this.props.requestError) {
            return <p>Oh No! Something went unexpected..</p>;
        }

        const buttonThemeYellow = createMuiTheme({
            palette: {
                primary: yellow
            },
        });



        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    {this.state.showProgressLogo ? <img src={blocnetsLogo} className="App-logo-progress" alt="" /> : ""}
                </div>
                <div style={{ padding: 24 }}>
                    <Grid container spacing={24}>
                        <Grid container item xs={6} sm={3}>
                            <TextField
                                value={this.state.materialID}
                                onChange={this.handleIDChange}
                                type="text"
                                name="materialID"
                                floatingLabelText="Material ID"
                                floatingLabelFixed={true}
                                style={{ "float": "left" }}
                                hintText=""
                                disabled={this.state.shipmentIDInformed}
                            />
                        </Grid>
                        <Grid container item xs={6} sm={3}>
                            <TextField
                                value={this.state.shipmentID}
                                onChange={this.handleIDChange}
                                type="text"
                                name="shipmentID"
                                floatingLabelText="Shipment ID"
                                floatingLabelFixed={true}
                                style={{ "float": "left" }}
                                hintText=""
                                disabled={this.state.materialIDInformed}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                        <Grid container item xs={12}>
                            <MuiThemeProvider theme={buttonThemeYellow}>
                                <Button type="submit" value="Submit" variant="contained" color="primary"
                                    fullWidth={true} disabled={!this.state.materialIDInformed && !this.state.shipmentIDInformed}>
                                    Submit
                                </Button>
                            </MuiThemeProvider>
                        </Grid>
                    </Grid>
                </div>
                <Dialog open={this.state.openShipmentDialog} onClose={this.handleDialogClose}>
                    <div style={{ padding: 24 }}>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <i className="material-icons" style={{ "cursor": "pointer" }}
                                    onClick={this.handleDialogClose}>close</i>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container justify="center">
                            <Grid item xs={12}>
                                <Paper style={{ "width": "100%" }}>
                                    <div style={{ "overflowX": "auto" }}>
                                        <Table>
                                            <TableBody>
                                                {shipmentRows.map(row => {
                                                    return (
                                                        <TableRow key={row.id}>
                                                            <TableCell>{row.info1}</TableCell>
                                                            <TableCell>{row.info2}</TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container justify="center">
                            <Grid container item xs={12}>
                                <MuiThemeProvider theme={buttonThemeYellow}>
                                    <Button type="submit" value="Receive" variant="contained"
                                        color="primary" fullWidth={true} onClick={this.handleDialogReceiveShipment}>
                                        Receive Shipment
                                    </Button>
                                </MuiThemeProvider>
                            </Grid>
                        </Grid>
                    </div>
                </Dialog>
                <Dialog open={this.state.openMaterialDialog} onClose={this.handleDialogClose}>
                    <div style={{ padding: 24 }}>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <i className="material-icons" style={{ "cursor": "pointer" }}
                                    onClick={this.handleDialogClose}>close</i>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container justify="center">
                            <Grid item xs={12}>
                                <Paper style={{ "width": "100%" }}>
                                    <div style={{ "overflowX": "auto" }}>
                                        <Table>
                                            <TableBody>
                                                {materialRows.map(row => {
                                                    return (
                                                        <TableRow key={row.id}>
                                                            <TableCell>{row.info1}</TableCell>
                                                            <TableCell>{row.info2}</TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container justify="center">
                            <Grid container item xs={12}>
                                <MuiThemeProvider theme={buttonThemeYellow}>
                                    <Button type="submit" value="Receive" variant="contained"
                                        color="primary" fullWidth={true} onClick={this.handleDialogReceiveShipment}>
                                        Receive Shipment
                                    </Button>
                                </MuiThemeProvider>
                            </Grid>
                        </Grid>
                    </div>
                </Dialog>
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

ReceivingView.propTypes = {};

const mapStateToProps = (state) => {
    return {
        //updateShippingDataByShipmentIDReducer: this.state.updateShippingDataByShipmentIDReducer,
        state,
    };
};

// This way, we can call our action creator by doing this.props.fetchData(url);
const mapDispatchToProps = (dispatch) => {
    return {
        getShippingDataByShipmentID: (val) => dispatch(getShippingDataByShipmentID(val)),
        getShippingDataByMaterialID: (val) => dispatch(getShippingDataByMaterialID(val)),
        updateShippingDataByMaterialID: (url, body) => dispatch(updateShippingDataByMaterialID(url, body)),
        updateShippingDataByShipmentID: (url, body) => dispatch(updateShippingDataByShipmentID(url, body))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReceivingView);