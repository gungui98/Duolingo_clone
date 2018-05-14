import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Mongo} from 'meteor/mongo';
import PropTypes from 'prop-types';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
import {withStyles, Grid, GridList, GridListTile} from 'material-ui';
import {
    ChartCard,
    RegularCard,
    ItemGrid,
    StatsCard,
    Topic
} from '../../components';
import Icon from 'material-ui/Icon';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {Card, CardContent,Paper} from 'material-ui'
import dashboardStyle from '../../assets/jss/material-dashboard-react/dashboardStyle';
import {AccessTime, ContentCopy, DateRange, School, Store, Warning, Work} from '@material-ui/icons/index';

//import data
import {dict} from '../../../imports/api/Dictionary'
import {dailySalesChart, emailsSubscriptionChart} from '../../variables/charts';
//
import Loading from "../../views/Loading/loading.jsx"
Loading();
class Demo extends React.Component {

    render() {
        return (
            <div>
                <Grid container>
                    <ItemGrid xs={12} sm={6} md={9}>
                        <RegularCard
                            cardTitle='Title'
                            cardSubtitle='Subtitle'
                            plainCard={true}
                            content={
                                <Paper>
                                    <Grid container justify={'center'} style ={{paddingTop:'2%'}}>
                                        <Topic
                                            image='http://imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg'
                                            topic='topic 1'
                                            description='this is description'
                                            numOfWords={20}
                                            disabled={false}
                                        />
                                        <Topic
                                            image='http://imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg'
                                            topic='topic 1'
                                            description='this is description'
                                            numOfWords={20}
                                            disabled={false}
                                        />
                                        <Topic
                                            image='http://imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg'
                                            topic='topic 1'
                                            description='this is description'
                                            numOfWords={20}
                                            disabled={true}
                                        />
                                        <Topic
                                            image='http://imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg'
                                            topic='topic 1'
                                            description='this is description'
                                            numOfWords={20}
                                            disabled={true}
                                        />
                                        <Topic
                                            image='http://imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg'
                                            topic='topic 1'
                                            description='this is description'
                                            numOfWords={20}
                                            disabled={true}
                                        />

                                    </Grid>
                                </Paper>
                            }
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={6} md={3}>
                        <StatsCard
                            icon={ContentCopy}
                            iconColor='orange'
                            title='Số từ đã học'
                            description='descr'
                            small='Từ'
                            statIcon={Warning}
                            statIconColor='danger'
                            statLink={{text: 'Get More Space...', href: '#pablo'}}
                        />
                        <ChartCard
                            chart={
                                <ChartistGraph
                                    className='ct-chart'
                                    data={dailySalesChart.data}
                                    type='Line'
                                    options={dailySalesChart.options}
                                    listener={dailySalesChart.animation}
                                />
                            }
                            chartColor='green'
                            title='Daily Sales'
                            // text={
                            //     <span>
                            //       <span className={this.props.classes.successText}>
                            //         <ArrowUpward
                            //             className={this.props.classes.upArrowCardCategory}
                            //         />{' '}
                            //           55%
                            //       </span>{' '}
                            //                         increase in today sales.
                            //     </span>
                            // }
                            statIcon={AccessTime}
                            statText='updated 4 minutes ago'
                        />
                    </ItemGrid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(dashboardStyle)(Demo);
