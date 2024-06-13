import UserService from "../services/user-service.js";

const userService= new UserService();
export const signup= async(req,res)=>{

    try {
        const user= await userService.signup({
            email:req.body.email,
            password:req.body.password,
            name:req.body.name
        });
        console.log(user);
        return res.status(200).json({
            data:user,
            success:true,
            message:'Successfully created a new user',
           
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'something went wrong',
            data:{},
            err:error
        })
    }
}