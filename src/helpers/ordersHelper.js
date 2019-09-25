import _ from 'lodash'

let utils = {}

utils.statusColor = {
    '-1':'#ff483b',
    '0': '#ffc505',
    '1': '#77bf2a'
}

utils.statusList = {
    'new': {
        name:'new',
        color: utils.statusColor['1']
    },
    'collected': {
        name:'collected',
        color: utils.statusColor['0']
    },
    'cancelled': {
        name:'cancelled',
        color: utils.statusColor['-1']
    }
}

utils.places = ['Garage 1', 'Room 3', 'Room 2', 'Hall']
/**
 *  
    {
        statusColor: statusList['new'].color,
        orderId:'3453',
        statusName: statusList['new'].name,
        items:5,
        price: (5*(1,20)),
        where:'Garage'
    },
 */

utils.generatedRandomOrder = () => {
    let status = _.sample(utils.statusList)
    let statusName = status.name

    let numberOfItems = _.random(1, 10);
    let basePrice = _.random(0.20, 5.00).toFixed(2)
    let finalPrice = (numberOfItems*basePrice).toFixed(2)

    let where = _.sample(utils.places)

    return {
        statusColor: utils.statusList[statusName].color,
        orderId:_.random(1000, 9999),
        statusName: statusName,
        items:numberOfItems,
        price: finalPrice,
        where
    }
}

utils.generateXRandomOrders = (howMany=1) => {
    return _.fill(Array(howMany)).map(()=> utils.generatedRandomOrder())
}



export default utils

