import requestGithubToken from "#root/helpers/authGit";

const gitCode = async (parent,args,context,info) => {
    const {code}=args;
    var code2=code.slice(6)
    

    const res= await requestGithubToken("ab16220ce740752c7259","82ae5c7a546de3aac3cd610732affda0064b6e65",code);
    console.log(res.data)
    return code2
}

export default gitCode;