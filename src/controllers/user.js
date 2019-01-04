import {User} from '../models/user';


export const createUser = async (req,res) => { 
    const {email,password} = req.body;
    if(!email || !password){
        res.status(401).send({message:"either email or password is missing"})
    }else{
        try{
            const result = await User.create({
                email,
                password
            })
            res.status(200).send(result)
        }
        catch(err){
            res.status(401).send({message:"cannot save data in database"})
        }
    }
}