import mongoose, {Schema} from 'mongoose';
import * as bcrypt from 'bcrypt'


const userSchema = new Schema ({
firstName:{ type: String,
required: [true, "Firstname is required"]},

lastName: String,
email: String,
password: String,
avatar: String,
date: Date,
gender: String,
},
{
timestamps: true
}
)

userSchema.pre("save", function (next) {
    const user = this
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(10, function (saltError, salt) {
        if (saltError) {
          return next(saltError)
        } else {
          bcrypt.hash(user.password, salt, function(hashError, hash) {
            if (hashError) {
              return next(hashError)
            }
            user.password = hash
            next()
          })
        }
      })
    } else {
      return next()
    }
  })


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;