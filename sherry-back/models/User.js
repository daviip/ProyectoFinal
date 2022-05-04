var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Tarifa = require("./Tarifa");
var bcrypt = require("bcryptjs");

var UserSchema =  new Schema({
  _id: {type: Schema.Types.ObjectId, auto: true},
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  dni: {
    type: Number,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tarifa: {
    type: String,
    required: true,
  }
});

UserSchema.pre("save", function(next){
  var user = this;
  if(!user.isModified("password")) return next();
  bcrypt.genSalt(10, function(err, salt){
    if(err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash){
      if(err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(cadidatePassword, cb){
  bcrypt.compare(cadidatePassword, this.password, function(err, isMatch){
    if(err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);