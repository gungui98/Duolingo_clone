import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Answer from '../../../imports/components/Answer/Answer.jsx'

import {questions} from "../../../imports/api/Questions.jsx"
import {dict} from "../../../imports/api/Dictionary.jsx"
import {media} from "../../../imports/variables/general.jsx"
import Card from "material-ui/Card/Card";
import {blue, CardMedia, createMuiTheme, green, Grid, Icon, red} from "material-ui";
import {Button} from "material-ui/index";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const question = [
    {
        "_id": "1",
        'type': 'choice',
        "word": "angry",
        "answer": "3",
        "question": "Chọn từ cho 'Giận giữ'",
        "answer1": "agree",
        "answer2": "attack",
        "answer3": "angry"
    },
    {
        "_id": "1",
        'type': 'choice',
        "word": "angry",
        "answer": "3",
        "question": "Chọn từ cho 'Giận giữ'",
        "answer1": "agree",
        "answer2": "attack",
        "answer3": "angry"
    },
    {
        "_id": "1",
        'type': 'choice',
        "word": "angry",
        "answer": "3",
        "question": "Chọn từ cho 'Giận giữ'",
        "answer1": "agree",
        "answer2": "attack",
        "answer3": "angry"
    },
    {
        "_id": "2",
        'type': 'choice',
        "word": "cruel",
        "answer": "3",
        "question": "Chọn từ cho 'Độc ác'",
        "answer1": "clever",
        "answer2": "create",
        "answer3": "cruel"
    },

];
const styles = theme => ({

    root: {

        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        marginBottom: 20,
        marginTop: '2vh',
        backgroundColor: theme.palette.background.default,
    },
    content: {

        height: '64vh',
        overflow: 'hidden',
        width: '100%',
    },
    image: {
        maxHeight: '30vh',
        maxWidth: '30vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        display: 'table-cell',
        verticalAlign: 'middle'
    },
    card: {
        marginTop: '3vh',
        margin: 'auto',
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: '80%', // 16:9
    },
    answer: {
        maxWidth: '60vh',
        margin: 'auto',
        marginTop: '10vh'
    },
});
const btnColor = createMuiTheme({
    palette: {
        primary: blue,
        secondary: green
    },
});

class Question extends React.Component {
    constructor() {
        super();
    }

    state = {
        activeStep: 0,
        isGotRight: undefined
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({activeStep});
    };
    submit = event => {
        setTimeout(500);
        if (this.state.activeStep !== question.length - 1) {
            let checkAnswer = event.currentTarget.getAttribute('data')
            this.setState(prevState => ({
                activeStep: prevState.activeStep,
                isGotRight: checkAnswer === 'T'
            }));
            setTimeout(function () {
                this.setState(prevState => ({
                        activeStep: prevState.activeStep + 1,
                        isGotRight: false
                    })
                )
            }.bind(this), 3000);
        }
    };

    render() {
        const {classes, theme} = this.props;
        const {activeStep} = this.state;

        const maxSteps = question.length;

        return (
            <MuiThemeProvider theme={btnColor}>
                <div className={classes.root}>
                    <Paper square elevation={0} className={classes.header}>
                        <Typography variant="button" gutterBottom>{question[activeStep].question}</Typography>
                    </Paper>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.activeStep}
                        onChangeIndex={this.handleStepChange}
                        enableMouseEvents
                    >

                        {question.map((step, i) => (
                            <div className={classes.content} key={i}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image={media + '/' + dict.findOne({'en': step.word}).image}
                                    />

                                </Card>
                                {
                                    step.type === 'choice' ?
                                        <Grid container className={classes.answer} spacing={8} align='center'>
                                            <Grid item xs={4}>
                                                <Button variant="raised" color="default" onClick={this.submit}
                                                        data={step.answer === "1" ? 'T' : 'F'}
                                                        className={classes.button}>
                                                    {step.answer1}
                                                </Button>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Button variant="raised" color="primary" onClick={this.submit}
                                                        data={step.answer === "2" ? 'T' : 'F'}
                                                        className={classes.button}>
                                                    {step.answer2}
                                                </Button>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Button variant="raised" color="primary" onClick={this.submit}
                                                        data={step.answer === "3" ? 'T' : 'F'}
                                                        className={classes.button}>
                                                    {step.answer3}
                                                </Button>
                                            </Grid>
                                        </Grid> : <div>
                                            <Answer/>
                                        </div>
                                }
                            </div>
                        ))}
                    </SwipeableViews>
                    <MobileStepper
                        variant="progress"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        className={classes.mobileStepper}
                        nextButton={
                            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                                Next
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                            </Button>
                        }
                        backButton={
                            <div>
                                {
                                    <Icon className={classes.icon} color="primary">
                                        {console.log(this.state.isGotRight)}
                                        {this.state.isGotRight ? 'done' : 'error'}
                                    </Icon>
                                }
                            </div>}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

Question.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Question);