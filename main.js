/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 * 
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
*/
const dates = [
    ['01.01.2000', '01.01.2016'],
    ['01.01.2016', '01.08.2016'],
    ['01.11.2015', '01.02.2017'],
    ['17.12.2016', '16.01.2017'],
    ['01.01.2016', '01.01.2016'],
    ['28.02.2015', '13.04.2018'],
    ['28.01.2015', '28.02.2015'],
    ['17.03.2022', '17.03.2023'],
    ['17.02.2024', '17.02.2025'],
];

// Receive string of dates one after each other
function outputDate(dates) {
    const date1 = dates[0].split('.');
    const date2 = dates[1].split('.');
    const jsDate1 = new Date(`${date1[2]}-${date1[1]}-${date1[0]}T00:00:00.000Z`);
    const jsDate2 = new Date(`${date2[2]}-${date2[1]}-${date2[0]}T00:00:00.000Z`);

    let difference = jsDate2 - jsDate1;
    if(difference < 0) {
        difference = jsDate1 - jsDate2;
        const tmpStart = jsDate1;
        jsDate1 = jsDate2;
        jsDate2 = tmpStart;
    }

    let answer = [];

    const differenceInYears = Math.floor(difference / (365 * 24 * 60 * 60 * 1000));
    if(differenceInYears) {
        answer.push(`${differenceInYears} year${differenceInYears > 1 ? 's' : ''}`);
    }

    const diff = new Date(jsDate2.getTime() - jsDate1.getTime());
    const differenceInMonths = diff.getMonth();
    if(differenceInMonths) {
        answer.push(`${differenceInMonths} month${differenceInMonths > 1 ? 's' : ''}`);
    }
    
    const differenceInDays = difference / (24 * 60 * 60 * 1000);
    answer.push(`total ${differenceInDays} day${differenceInDays !== 1 ? 's' : ''}`);

    return answer.join(', ');
}