export default {
    title:'Why Choose Us',
    name:'whychooseus',
    type:'object',
    fields:[
         {
            title: 'Why Choose Us Cards',
            name: 'whychooseusCards',
            type: 'array',
            of:[
                {
                    type: 'object',
                    fields: [
                {title:'Why Cards Image', name: 'whycardimg', type:'image'},
                    ]
                }
            ]
         },

         {title: 'Why Sub heading', name: 'whysubhead', type:'string'},
         {title: 'Orange Why Heading', name: 'orangewhyHeading', type:'string'},
         {title: 'Why Heading', name: 'whyHeading', type:'string'},
         {title: 'Why Paragraph', name: 'whypara', type:'string'},
       
    ]
} 