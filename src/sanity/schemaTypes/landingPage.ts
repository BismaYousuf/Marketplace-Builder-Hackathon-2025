export default {
    title:'Landing Page',
    name:'landingpage',
    type: 'document',
    fields:[
      {
        title: 'Section',
        name:'section',
        type: 'array',
        of:[
            {type:'hero'},
            {type:'foodcategory'},
            {type:'whychooseus'},
        ]
      }
    ]
}