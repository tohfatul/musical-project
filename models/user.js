

let users=[
    {
        username: 'xyz@miu.edu',
        password:'abcd1234'
    },
    {
        username: 'abcd@miu.edu',
        password:'xyz1234'
    }
];


class User {
    static getUsers(){
        return users;
    }
}
module.exports=User;

