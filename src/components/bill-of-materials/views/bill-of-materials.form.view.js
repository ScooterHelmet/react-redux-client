import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import {Step, Stepper, StepLabel, StepContent} from 'material-ui/Stepper';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from 'material-ui/Checkbox';

class BillOfMaterialsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showBillOfMaterialsForm: false,
            showBillOfMaterialsReview: true,
            showBillOfMaterialsTree: false,
            activeStep: 0,
            materialID: '',
            errorText1: 'This is a required field.',
            materialName: '',
            errorText2: 'This is a required field.',
            materialDescription: '',
            errorText3: 'This is a required field.',
            partNo: '',
            partName: '',
            partDescription: '',
            volume: '',
            weight: '',
            length: '',
            width: '',
            height: '',
            temperatureLimits: '',
            shockVibration: '',
            altitudeRestrictions: '',
            compressionRestrictions: '',
            alwaysUpright: '',
            alwaysUpright2: 'NO',
            metallic: '',
            metallic2: 'NO',
            hazmat: '',
            hazmat2: 'NO',
            magnetic: '',
            magnetic2: 'NO',
            lengthTolerance: '',
            roundTolerance: '',
            nonSkidTolerance: '',
            shipAddressLine1: '',
            shipAddressLine2: '',
            shipCity: '',
            shipAddressState: '',
            shipPostalCode: '',
            shipCountry: '',
            shipIPAddress: '',
            billAddressLine1: '',
            billAddressLine2: '',
            billCity: '',
            billAddressState: '',
            billPostalCode: '',
            billCountry: '',
            billIPAddress: '',
            paymentTerms: '',
            minEOQuantities: '',
            maxEOQuantities: '',
            maxEPWithdrawRate: '',
            minOrderLeadTimes: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            addressState: '',
            postalCode: '',
            country: '',
            ipAddress: '',
            matSupPerIPAddress: '',
            supPaymentTerms: '',
            supOrderPolicy: ''
        };
    }

    getSteps = () => {
        return ['Material Dimensions',
            'Material Handling Characteristics',
            'Material Other',
            'Material Quality Standards',
            'Supplier Customer Definition',
            'Supplier Payment Terms',
            'Supplier Order Quantities Controls',
            'Suppliers'];
    };

    getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <div>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="volume"
                                    floatingLabelText="Volume"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.volume}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="weight"
                                    floatingLabelText="Weight"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.weight}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="length"
                                    floatingLabelText="Length"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.length}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="width"
                                    floatingLabelText="Width"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.width}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="height"
                                    floatingLabelText="Height"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.height}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="temperatureLimits"
                                    floatingLabelText="Temperature Limits"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.temperatureLimits}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="shockVibration"
                                    floatingLabelText="Shock/Vibration"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.shockVibration}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="altitudeRestrictions"
                                    floatingLabelText="Altitude Restrictions"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.altitudeRestrictions}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="compressionRestrictions"
                                    floatingLabelText="Compression Restrictions"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.compressionRestrictions}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="alwaysUpright"
                                                color="default"
                                                onClick={this.handleCheckboxChange}
                                            />
                                        }
                                        label=""
                                    />
                                </FormGroup>
                                Always Upright
                            </Grid>
                        </Grid>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <br/>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="metallic"
                                                color="default"
                                                onClick={this.handleCheckboxChange}
                                            />
                                        }
                                        label=""
                                    />
                                </FormGroup>
                                Metallic
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="hazmat"
                                                color="default"
                                                onClick={this.handleCheckboxChange}
                                            />
                                        }
                                        label=""
                                    />
                                </FormGroup>
                                Hazmat
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="magnetic"
                                                color="default"
                                                onClick={this.handleCheckboxChange}
                                            />
                                        }
                                        label=""
                                    />
                                </FormGroup>
                                Magnetic
                            </Grid>
                        </Grid>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="lengthTolerance"
                                    floatingLabelText="Length Tolerance"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.lengthTolerance}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="roundTolerance"
                                    floatingLabelText="Round Tolerance"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.roundTolerance}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="nonSkidTolerance"
                                    floatingLabelText="Non-Skid Tolerance"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.nonSkidTolerance}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="shipAddressLine1"
                                    floatingLabelText="Ship To Address"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.shipAddressLine1}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="shipAddressLine2"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="Address Line 2"
                                    value={this.state.shipAddressLine2}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="shipCity"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="City"
                                    value={this.state.shipCity}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="shipAddressState"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="State"
                                    value={this.state.shipAddressState}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="shipPostalCode"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="Postal Code"
                                    value={this.state.shipPostalCode}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="shipCountry"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="Country"
                                    value={this.state.shipCountry}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="shipIPAddress"
                                    floatingLabelText="Ship To IP Address"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.shipIPAddress}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="billAddressLine1"
                                    floatingLabelText="Bill To Address"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.billAddressLine1}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="billAddressLine2"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="Address Line 2"
                                    value={this.state.billAddressLine2}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="billCity"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="City"
                                    value={this.state.billCity}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="billAddressState"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="State"
                                    value={this.state.billAddressState}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="billPostalCode"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="Postal Code"
                                    value={this.state.billPostalCode}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="billCountry"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="Country"
                                    value={this.state.billCountry}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="billIPAddress"
                                    floatingLabelText="Bill To IP Address"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.billIPAddress}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                    </div>
                );
            case 5:
                return (
                    <div>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="paymentTerms"
                                    floatingLabelText="Payment Terms"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.paymentTerms}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                    </div>);
            case 6:
                return (
                    <div>
                        <Grid container spacing={24}>
                            <Grid container item xs={12} sm={6}>
                                <TextField
                                    type="text"
                                    name="minEOQuantities"
                                    floatingLabelText="Minimum Economic Order Quantities"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    fullWidth={true}
                                    value={this.state.minEOQuantities}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={12} sm={6}>
                                <TextField
                                    type="text"
                                    name="maxEOQuantities"
                                    floatingLabelText="Maximum Economic Order Quantities"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="" fullWidth={true}
                                    value={this.state.maxEOQuantities}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid container item xs={12} sm={6}>
                                <TextField
                                    type="text"
                                    name="maxEPWithdrawRate"
                                    floatingLabelText="Maximum Economic Product Withdraw Rate"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    fullWidth={true}
                                    value={this.state.maxEPWithdrawRate}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={12} sm={6}>
                                <TextField
                                    type="text"
                                    name="minOrderLeadTimes"
                                    floatingLabelText="Minimum Order Lead Times"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.minOrderLeadTimes}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                    </div>
                );
            case 7:
                return (
                    <div>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="addressLine1"
                                    floatingLabelText="Address"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.addressLine1}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="addressLine2"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="Address Line 2"
                                    value={this.state.addressLine2}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="city"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="City"
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="addressState"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="State"
                                    value={this.state.addressState}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="postalCode"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="Postal Code"
                                    value={this.state.postalCode}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="country"
                                    floatingLabelText=" "
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText="Country"
                                    value={this.state.country}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="ipAddress"
                                    floatingLabelText="IP Address"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.ipAddress}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="matSupPerIPAddress"
                                    floatingLabelText="Material Supplied Per IP Address"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.matSupPerIPAddress}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="supPaymentTerms"
                                    floatingLabelText="Supplier Payment Terms"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.supPaymentTerms}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid container item xs={6} sm={3}>
                                <TextField
                                    type="text"
                                    name="supOrderPolicy"
                                    floatingLabelText="Supplier Order Policy"
                                    floatingLabelFixed={true}
                                    style={{"float": "left"}}
                                    hintText=""
                                    value={this.state.supOrderPolicy}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                    </div>
                );
            default:
                return 'Unknown step';
        }
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        if ([event.target.name].toString() === 'materialID' && event.target.value) {
            this.setState({errorText1: ''});
        } else if ([event.target.name].toString() === 'materialID' && !event.target.value) {
            this.setState({errorText1: 'This is a required field.'});
        }
        if ([event.target.name].toString() === 'materialName' && event.target.value) {
            this.setState({errorText2: ''});
        } else if ([event.target.name].toString() === 'materialName' && !event.target.value) {
            this.setState({errorText2: 'This is a required field.'});
        }
        if ([event.target.name].toString() === 'materialDescription' && event.target.value) {
            this.setState({errorText3: ''});
        } else if ([event.target.name].toString() === 'materialDescription' && !event.target.value) {
            this.setState({errorText3: 'This is a required field.'});
        }
    };

    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked});
        if ([event.target.name].toString() === 'alwaysUpright' && event.target.checked === true) {
            this.setState({alwaysUpright2: 'YES'});
        } else if ([event.target.name].toString() === 'alwaysUpright' && event.target.checked === false) {
            this.setState({alwaysUpright2: 'NO'});
        }
        if ([event.target.name].toString() === 'metallic' && event.target.checked === true) {
            this.setState({metallic2: 'YES'});
        } else if ([event.target.name].toString() === 'metallic' && event.target.checked === false) {
            this.setState({metallic2: 'NO'});
        }
        if ([event.target.name].toString() === 'hazmat' && event.target.checked === true) {
            this.setState({hazmat2: 'YES'});
        } else if ([event.target.name].toString() === 'hazmat' && event.target.checked === false) {
            this.setState({hazmat2: 'NO'});
        }
        if ([event.target.name].toString() === 'magnetic' && event.target.checked === true) {
            this.setState({magnetic2: 'YES'});
        } else if ([event.target.name].toString() === 'magnetic' && event.target.checked === false) {
            this.setState({magnetic2: 'NO'});
        }
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleNext = (event, steps) => {
        if (this.state.activeStep !== steps.length - 1) {
            this.setState(state => ({
                activeStep: state.activeStep + 1,
            }));
        } else {
            event.preventDefault();
            this.props.viewHandler(this.state);
        }
    };

    render() {

        const steps = this.getSteps();

        const {activeStep} = this.state;

        const buttonThemeYellow = createMuiTheme({
            palette: {
                primary: yellow
            },
        });

        const formComplete = this.state.materialID && this.state.materialName && this.state.materialDescription;

        return (
            <div>
                <div style={{padding: 24}}>
                    <Grid container spacing={24}>
                        <Grid container item xs={12} sm={3}>
                            <TextField
                                type="text"
                                name="materialID"
                                floatingLabelText="Material ID"
                                floatingLabelFixed={true}
                                style={{"float": "left"}}
                                hintText=""
                                value={this.state.materialID}
                                onChange={this.handleChange}
                                errorText={this.state.errorText1}
                                errorStyle={{"float": "left"}}
                            />
                        </Grid>
                        <Grid container item xs={12} sm={3}>
                            <TextField
                                type="text"
                                name="materialName"
                                floatingLabelText="Material Name"
                                floatingLabelFixed={true}
                                style={{"float": "left"}}
                                hintText=""
                                value={this.state.materialName}
                                onChange={this.handleChange}
                                errorText={this.state.errorText2}
                                errorStyle={{"float": "left"}}
                            />
                        </Grid>
                        <Grid container item xs={12} sm={3}>
                            <TextField
                                type="text"
                                name="materialDescription"
                                floatingLabelText="Material Description"
                                floatingLabelFixed={true}
                                style={{"float": "left"}}
                                hintText=""
                                value={this.state.materialDescription}
                                onChange={this.handleChange}
                                errorText={this.state.errorText3}
                                errorStyle={{"float": "left"}}
                            />
                        </Grid>
                        <Grid container item xs={12} sm={3} justify="flex-end">
                            <Grid>
                                <MuiThemeProvider theme={buttonThemeYellow}>
                                    <Button type="submit" value="Upload" variant="contained"
                                            color="primary" disabled>
                                        Upload...
                                    </Button>
                                </MuiThemeProvider>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                        <Grid container item xs={12} sm={3}>
                            <TextField
                                type="text"
                                name="partNo"
                                floatingLabelText="Part No."
                                floatingLabelFixed={true}
                                style={{"float": "left"}}
                                hintText=""
                                value={this.state.partNo}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid container item xs={12} sm={3}>
                            <TextField
                                type="text"
                                name="partName"
                                floatingLabelText="Part Name"
                                floatingLabelFixed={true}
                                style={{"float": "left"}}
                                hintText=""
                                value={this.state.partName}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid container item xs={12} sm={3}>
                            <TextField
                                type="text"
                                name="partDescription"
                                floatingLabelText="Part Description"
                                floatingLabelFixed={true}
                                style={{"float": "left"}}
                                hintText=""
                                value={this.state.partDescription}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid container item xs={12} sm={3}>
                        </Grid>
                    </Grid>
                </div>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <div>{this.getStepContent(index)}</div>
                                    <div>
                                        <div>
                                            <br/>
                                            <Grid container spacing={24}>
                                                <Grid container item xs={12} sm={3}>
                                                    <Grid container item xs>
                                                        <MuiThemeProvider theme={buttonThemeYellow}>
                                                            <Button type="submit" value="Submit" variant="contained"
                                                                    color="primary" disabled={activeStep === 0}
                                                                    onClick={this.handleBack}>
                                                                Back
                                                            </Button>
                                                        </MuiThemeProvider>
                                                    </Grid>
                                                    <Grid container item xs>
                                                        <MuiThemeProvider theme={buttonThemeYellow}>
                                                            <Button type="submit" value="Submit" variant="contained"
                                                                    color="primary" disabled={!formComplete}
                                                                    onClick={(event) => {
                                                                        this.handleNext(event, steps)
                                                                    }}>
                                                                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                                            </Button>
                                                        </MuiThemeProvider>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <br/>
                                            <br/>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        );
                    })}
                </Stepper>
            </div>
        );
    }
}


export default BillOfMaterialsForm;