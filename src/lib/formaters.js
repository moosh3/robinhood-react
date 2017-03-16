import numeral from 'numeral';
import moment from 'moment';

export function formatCurrency(d) {
    return numeral(d).format('$0,0.00');
}

export function formatPercent(d) {
    return numeral(d).format('0.00%');
}

export function formatCurrencyDiff(d) {
    let sign = d >= 0 ? '+' : '-'
    return `${sign}${numeral(Math.abs(d)).format('$0,0.00')}`;
}

export function formatPercentDiff(d) {
    let sign = d >= 0 ? '+' : '-'
    return `${sign}${numeral(Math.abs(d)).format('0.00%')}`;
}

export function formatTime(d, span) {
    d = new Date(d);
    let hours = d.getHours();
    let minutes = d.getMinutes();

    if(hours > 12) hours -= 12;
    if(hours < 10) hours = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;

    switch(span) {
        case 'day':
            return `${hours}:${minutes} EDT`;
        case 'week':
            return `${hours}:${minutes} EDT ${moment(d).format('MMM D')}`;
        case 'month':
            return `${moment(d).format('MMM D YYYY')}`;
        case 'quarter':
            return `${moment(d).format('MMM D YYYY')}`;
        case 'year':
            return `${moment(d).format('MMM D YYYY')}`;
        case 'all':
            return `${moment(d).format('MMM D YYYY')}`;
    }
}

export function formatRelativeTime (exactDate, span) {
    switch(span) {
        case 'day':
            return 'Today';
        case 'week':
            return 'Past Week';
        case 'month':
            return 'Past Month';
        case 'quarter':
            return 'Past 3M';
        case 'year':
            return 'Past Year';
        case 'all':
            return `Since ${moment(exactDate).format('MMM D YYYY')}`;
    }
}

export function formatNumberBig (d) {
    if(d < 1000000) {
        return numeral(d).format('0,0');
    } else {
        return numeral(d).format('0.000a');
    }
}

export function formatCurrencyBig (d) {
    if(d < 1000000) {
        return formatCurrency(d);
    } else {
        return numeral(d).format('$0.000a');
    }
}
