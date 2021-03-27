require('dotenv').config();
// const { CLIENT_GIT_ID }=process.env;
// console.log(process.env.CLIENT_GIT_ID)
const authGit = async (parent, args, context, info) => {
    
const lei=  `https://github.com/login/oauth/authorize?client_id=ab16220ce740752c7259&scope=user`;
 return lei;
};
export default authGit;
