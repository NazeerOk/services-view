import React, {Fragment} from 'react';
import ReactFlow, {Background, Controls} from 'react-flow-renderer';
import initialElements from '../assests/datas'
import  { BillingSelector, AccountSelector,ShippingSelector, ProductSelector } from './NodeSelector'



const onLoad = (reactFlowInstance) =>  {
    reactFlowInstance.fitView();
}


const nodeTypes = {
    selectorNode: AccountSelector,
    shippingNode: ShippingSelector,
    billingNode: BillingSelector,
    productNode: ProductSelector
}


const Node = () => {

    return(
        <Fragment>
            <ReactFlow
            elements={initialElements}
            onLoad={onLoad}
            style={{width:'100%',height: '100vh'}}
            nodeTypes={nodeTypes} 
            >
                <Background
                style={{backgroundColor:'#212336'}}
                color='#212336'
                />
               
                <Controls />
            </ReactFlow>

        </Fragment>
    )
}

export default Node;