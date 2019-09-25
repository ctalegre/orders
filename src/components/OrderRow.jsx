import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/styles'

const styles = () =>{
    return {
        newer: {
            
        }
    }
}
function OrderRow({item, newer}) {
    const [newie, setNewie] = useState((newer ? 'animated bounceInDown delay-0s' : ''))
    
    useState(() => {
        setTimeout(() => setNewie(''), 1000)
    }, [])

    return (
        <div 
        className={newie}
        style={{    
            borderBottom: '1px solid rgb(234, 234, 234)',
            padding: 15,
            display:'flex',
            alignItems:'center'
            }}>
            <div style={{
                marginRight: 10,
                background: item.statusColor,
                width: 8,
                height: 8,
                borderRadius: 15
            }}></div>
            <span style={{
                width: 80
            }}><strong>#{item.orderId}</strong>
            </span>
            <span style={{
                flex: 3
            }}>{item.statusName}</span>
            <span style={{
                width: 80
            }}>
                {`${item.items} item`}
                {item.items > 1 && 's'}
            </span>
            <span style={{
                width: 80
            }}>{item.price} €</span>
            <span>{item.where}</span>
        </div>
    )
}

OrderRow.propTypes = {

}

export default withStyles(styles)(OrderRow)

