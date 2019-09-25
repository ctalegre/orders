import React, {useState, useCallback} from 'react'
// import PropTypes from 'prop-types'
import OrderRow from './OrderRow'
import orderHelper from '../helpers/ordersHelper'
import { withStyles } from '@material-ui/styles'

function OrdersList(props) {
    const [itemsList, setItemsList] = useState(orderHelper.generateXRandomOrders(6))
    
    
    const seeder = useCallback((itemsList) => [
        ...[...orderHelper.generateXRandomOrders(1)].map(item=>{
            item.newer=true
            return item
        })
        , ...itemsList]
    , [])

    
    // TODO -> wrapper timer set new Timers (to seed time and random n inputs each time)
    const timer = () => setInterval(() => setItemsList(seeder), 3000)

    useState(() => {
        timer()
    }, [])

    return (<>
    <div style={{margin:50}}>
        <div style={{
            textAlign: 'end',
            padding:'15px 0px',
            fontSize:13,
            color: '#a5a5b3'
        }}
        >
            <strong style={{marginRight: 3}}>
                {itemsList.length }
            </strong>
            <span>
            tickets.
            </span>
        </div>
        <div 
        style={{
            height: 400,
            minHeight: 400,
            overflowY: 'auto',
            borderRadius: 13,
            background: 'white',
            boxShadow: 'rgb(234, 234, 234) 0px 7px 7px 6px'
        }}>
            <div style={{backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,0),#fff)'}}></div>
            <div>
                {itemsList && itemsList.map((item, index) => {
                    return <OrderRow key={index} item={item} 
                    newer={item.newer}
                    // new={
                        
                        // }
                        // className={'animated bounceInDown delay-2s'}
                        />
                    })}
            </div>
        </div>
    </div>
   </> )
}

const styles = () => {
    return {
        container: {
            height: 400,
            minHeight: 400,
            overflowY: 'auto',
            margin:50,
            borderRadius: 13,
            background: 'white',
            boxShadow: 'rgb(234, 234, 234) 0px 7px 7px 6px',
            '&:before': {  
                content: "",
                position: 'absolute',
                top: '75%',
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,0),#fff)',
                zIndex: 20
            }
        }
    }
}

OrdersList.propTypes = {

}

export default withStyles(styles)(OrdersList)

