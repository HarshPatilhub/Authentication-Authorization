import mongoose , {Schema} from "mongoose";
import bcrypt from "bcrypt"

const userSchema = Schema({
    username: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
})


//use pre middleware  to encrypt the password just before saving the password in database

userSchema.pre('save',  async function (next) {
    if (!this.isModified("password")) {
        return next()
    }

    const hashpassword = await bcrypt.hash(this.password,10)
    this.password = hashpassword;
    console.log("Password hash succesfully", this.password);
    next()
})

//use the method compare to decrypt the password from the database
userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

export const User = mongoose.model("User",userSchema)