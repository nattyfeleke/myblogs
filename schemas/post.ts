export default {
    name:'post',
    title:"Post",
    type:'document',
    fields:[
        {
            name: 'title',
            title:'Title',
            description:'Keep it short!',
            type:'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}]
        },
    ]
}
