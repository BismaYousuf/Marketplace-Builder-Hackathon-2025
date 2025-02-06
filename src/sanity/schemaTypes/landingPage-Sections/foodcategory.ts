export default {
    title:'FoodCategory',
    name:'foodcategory',
    type:'object',
    fields:[
        {title: 'Food Sub heading', name: 'foodsubhead', type:'string'},
        {title: 'Orange Food Heading', name: 'orangefoodHeading', type:'string'},
        {title: 'Food Heading', name: 'foodHeading', type:'string'},
      
         {
            title: 'Food Category Cards',
            name: 'foodcategorycards',
            type: 'array',
            of:[
                {
                    type: 'object',
                    fields: [
                {title:'Food Cards Image', name: 'foodcardimg', type:'image'},
                {title:' Food Title', name: 'foodtitle', type:'string'},
                {title:' Food Discount', name: 'fooddis', type:'string'},
                    ]
                }
            ]
         }
    ]
} 