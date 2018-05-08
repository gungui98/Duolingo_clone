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

import {dailySalesChart} from '../../variables/charts';

//
import Loading from "../../views/Loading/loading.jsx"
Loading();
class Demo extends React.Component {

    constructor(){
        super();

    }
    render() {
        return (
            <div>
                <Grid container>
                    <ItemGrid xs={12} sm={6} md={9}>
                        <RegularCard
                            cardTitle='Chủ đề'
                            cardSubtitle='chọn 1 trong các chủ đề bắt đầu bài học'
                            plainCard={true}
                            content={
                                <Paper>
                                    <Grid container justify={'center'} style ={{paddingTop:'2%'}}>

                                        <Topic
                                            image='https://image.shutterstock.com/image-vector/group-working-people-diversity-diverse-260nw-589527299.jpg'
                                            topic='Cơ bản 1'
                                            description='1 số đại từ nhân xưng'
                                            numOfWords={8}
                                            disabled={false}
                                        />
                                        <Topic
                                            image='https://thumbs.dreamstime.com/b/summer-print-stylized-fruits-collection-flat-material-design-fruit-icon-set-feeling-spatial-hexagon-cut-half-papaya-70122269.jpg'
                                            topic='Cơ bản 2'
                                            description='1 số loại hoa quả'
                                            numOfWords={10}
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
                            description='8'
                            small='Từ'
                            statIcon={Warning}
                            statIconColor='danger'
                            statLink={{text: 'tra cứu từ?', href: '/dictionary'}}
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
                            title='Quá trình học trong tuần'
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
