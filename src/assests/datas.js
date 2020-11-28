import svg from './logo.svg'

const initialElements = [
    {
        id:"Management Service",
        sourcePosition: 'right',
        targetPosition: 'left',
        data:{label:
            <>
                <img src={svg} alt='logo'></img>
                <p>Management Service</p>
            </>
        },
        position: {x:-112, y: 0}
    },
    {
        id:'Billing Service',
        type:'billingNode',
        position: {x:-107, y:63}
    },
    {
        id:'Notification Service',
        sourcePosition: 'left',
        targetPosition: 'right',
        
        data:{label:
            <>
                <img src={svg} alt='logo'></img>
                <p>Notification Service</p>
            </>
        },
        position: {x:-117, y:129}
    },
    {
        id:'Shipping Service',
        type:'shippingNode',
        position:{x:-111, y:212},
        arrowHeadType: 'arrowclosed',
    },
    {
        id:'Account Service',
        position:{x: 140, y: 51 },
        connectable: true,
        type:'selectorNode',
        style: {padding: '0px 10px' }
    },
    {
        id:'Inventory Service',
        sourcePosition: 'right',
        targetPosition: 'left',
        data:{label:
            <>
                <img src={svg} alt='logo'></img>
                <p>Inventory Service</p>
            </>
        },
        position:{x: 141, y: 137 }
    },
    {
        id: 'Cart Server',
        sourcePosition: 'left',
        targetPosition: 'right',
        data:{label:
            <>
                <img src={svg} alt='logo'></img>
                <p>Cart Server</p>
            </>
        },
        position:{x:384,y:4}
    },
    {
        id:'Java',
        sourcePosition:'right',
        targetPosition:'left',
        data:{label:
            <>
                <img src={svg} alt='logo'></img>
                <p>Java</p>
            </>
        },
        position:{x:390,y:83}
    },
    {
        id: 'Product Catalogue',
        type: 'productNode',
        position:{x:391,y:189}
    },

    //Connections

    {id:'con-1',source:'Management Service',target:'Account Service',arrowHeadType: 'arrowclosed'},
    {id:'con-2',source:'Account Service',target:'Billing Service',arrowHeadType: 'arrowclosed'},
    {id:'con-3',source:'Billing Service',target:'Notification Service'},
    {id:'con-4',source:'Billing Service',target:'Shipping Service'},
    {id:'con-5',source:'Account Service',target:'Inventory Service'},
    {id:'con-6',source:'Shipping Service',target:'Inventory Service'},
    {id:'con-7',source:'Shipping Service',target:'Product Catalogue',label:'>',labelStyle:{fill:'white'}},
    {id:'con-8',source:'Inventory Service',target:'Java'},
    {id:'con-9',source:'Cart Server',target:'Product Catalogue'},
    {id:'con-10',source:'Account Service',target:'Product Catalogue',sourceHandle:'a'}
    
]

export default initialElements