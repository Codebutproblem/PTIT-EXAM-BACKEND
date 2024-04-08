import AccountAdmin from "../../models/account-admin-model";

export const findAccount = async (username: string, password: string): Promise<any> =>{
    const account = await AccountAdmin.findOne({
        where:{
            username: username
        }
    });
    if(!account){
        return null;
    }

    if(account.password !== password){
        return null;
    }

    return account;
}