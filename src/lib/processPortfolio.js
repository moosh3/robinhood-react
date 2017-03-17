/* eslint-disable prefer-const */
import _ from 'lodash';
import moment from 'moment';

function processPortfolioData(data) {
  const portfolio = data.responseJSON.results[0];

  portfolio.equity = +portfolio.equity;
  portfolio.extended_hours_equity = +portfolio.extended_hours_equity;

  return portfolio;
}

function processDayData(data) {
  let day = data.responseJSON;
  let dayHistoricals = day.equity_historicals;

  dayHistoricals = dayHistoricals.map((d, i) => {
    d.xVal = i;
    d.yVal = +d.adjusted_open_equity;
    return d;
  }.bind(this));

  day.equity_historicals = dayHistoricals;

  return day;
}

function processWeekData(data, portfolio) {
  let week = data.responseJSON;
  let weekHistoricals = week.equity_historicals;
  if (moment(weekHistoricals[0].begins_at).hour(0).minute(0).second(0).isAfter(moment(portfolio.start_date).hour(0).minute(0).second(0))) {
    weekHistoricals = weekHistoricals.map(function(d, i){
      d.xVal = i;
      d.yVal = +d.adjusted_close_equity;
      return d;
    }.bind(this));
  } else {
    weekHistoricals = _.filter(weekHistoricals, (d, i) => {
      d.xVal = i;
      d.yVal = +d.adjusted_close_equity;
      return moment(d.begins_at).hour(0).minute(0).second(0).isAfter(moment(portfolio.start_date).hour(0).minute(0).second(0).subtract(1, 'day'));
    }.bind(this));
  }

  week.equity_historicals = weekHistoricals;

  return week;
}

function processYearData(data, portfolio) {
  let month = {};
  let quarter = {};
  let year = data.responseJSON;
  let monthHistoricals = [];
  let quarterHistoricals = [];
  let yearHistoricals = [];
  let yearData = year.equity_historicals;

  if (moment(yearData[0].begins_at).hour(0).minute(0).second(0).isAfter(moment(portfolio.start_date).hour(0).minute(0).second(0))) {
    _.each(yearData, (d, i) => {
      d.xVal = i;
      d.yVal = +d.adjusted_close_equity;

      if (moment(d.begins_at).hour(0).minute(0).second(0).isAfter(moment(_.last(yearData).begins_at).hour(0).minute(0).second(0).subtract(3, 'month'))) {
        quarterHistoricals.push(Object.assign({}, d));
        if (moment(d.begins_at).hour(0).minute(0).second(0).isAfter(moment(_.last(yearData).begins_at).hour(0).minute(0).second(0).subtract(1, 'month'))) {
          monthHistoricals.push(Object.assign({}, d));
        }
      }

      yearHistoricals.push(Object.assign({}, d));
    }.bind(this));
  } else {
    yearData = _.filter(yearData, function(d, i){
      d.xVal = i;
      d.yVal = +d.adjusted_close_equity;

      if (moment(d.begins_at).hour(0).minute(0).second(0).isAfter(moment(_.last(yearData).begins_at).hour(0).minute(0).second(0).subtract(3, 'month'))) {
        quarterHistoricals.push(Object.assign({}, d));
        if (moment(d.begins_at).hour(0).minute(0).second(0).isAfter(moment(_.last(yearData).begins_at).hour(0).minute(0).second(0).subtract(1, 'month'))) {
          monthHistoricals.push(Object.assign({}, d));
        }
      }

      yearHistoricals.push(Object.assign({}, d));
      return moment(d.begins_at).hour(0).minute(0).second(0).isAfter(moment(portfolio.start_date).hour(0).minute(0).second(0).subtract(1, 'month'));
    }.bind(this));
  }

  month.equity_historicals = monthHistoricals
  quarter.equity_historicals = quarterHistoricals
  year.equity_historicals = yearHistoricals

  return { month, quarter, year };
}

function processAllData(data, portfolio) {
  let all = data.responseJSON;
  let allHistoricals = all.equity_historicals;
  if (moment(allHistoricals[0].begins_at).hour(0).minute(0).second(0).isAfter(moment(portfolio.start_date).hour(0).minute(0).second(0))) {
    allHistoricals = allHistoricals.map((d, i) => {
      d.xVal = i;
      d.yVal = +d.adjusted_close_equity;
      return d;
    }.bind(this));
  } else {
    allHistoricals = _.filter(allHistoricals, (d, i) => {
      d.xVal = i;
      d.yVal = +d.adjusted_close_equity;
      return moment(d.begins_at).hour(0).minute(0).second(0).isAfter(moment(portfolio.start_date).hour(0).minute(0).second(0).subtract(1, 'month'));
    }.bind(this));
  }

  all.equity_historicals = allHistoricals;

  return all;
}

function processPortfolio(portfolioRes, dayRes, weekRes, yearRes, allRes) {
  let portfolio = processPortfolioData(portfolioRes);
  let day = processDayData(dayRes);
  let week = processWeekData(weekRes, portfolio);
  let { month, quarter, year } = processYearData(yearRes, portfolio);
  let all = processAllData(allRes, portfolio);

  portfolio.historicals = {
    day,
    week,
    month,
    quarter,
    year,
    all
  };

  return portfolio;
};

export default processPortfolioData;
