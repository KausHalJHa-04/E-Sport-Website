const Users = require("../model/user.schema");


const getUser = async (req , res)=>{
    try {
        const user = req.user;
      

        res.status(200).json({message:"user fetched successfully",user})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
const updateUser = async (req , res)=>{
    try {
        const {id} = req.user;

        const user = await Users.findByIdAndUpdate(id,req.body);
        res.status(200).json({message:"user updated successfully"})
    } catch (error) {
        res.status(400).json({message:"error.message"})
    }
}
const togglecart = async (req , res)=>{
    try {
        const {id} = req.params;
        const user = await Users.findById(req.user.id);
        const isProduct = user.cart.find((productId) => productId.toString() === id);
       
        if (isProduct) {
            await Users.findByIdAndUpdate(req.user.id, {
                $pull: { cart: id },
            });

        }else{
            
            await Users.findByIdAndUpdate(req.user.id, {
                $push: { cart: id },
            });
        }
        res.status(200).json({message:"cart updated successfully"})
    }catch (error) {
        res.status(400).json({message:error.message})
    }    
}

const toggleFavourites = async (req , res)=>{
    try {
        const {id} = req.params;
        const user = await Users.findById(req.user.id);
        const isProduct = user.favourites.find((productId) => productId.toString() === id);
       
        if (isProduct) {
            await Users.findByIdAndUpdate(req.user.id, {
                $pull: { favourites: id },
            });

        }else{
            
            await Users.findByIdAndUpdate(req.user.id, {
                $push: { favourites: id },
            });
        }
        res.status(200).json({message:"favourites updated successfully"})
    }catch (error) {
        res.status(400).json({message:error.message})
    }    
}

module.exports = {getUser ,updateUser , togglecart , toggleFavourites}