/**
 * Created by AHMER on 11/22/2014.
 */
panaReporter.factory('userFactory',function(){
    var User;

    var setUser = function(user){
        User = user;
        console.log(User);
    }
    var getUser = function(){
        return User;
    }

    return {
        setUser : setUser,
        getUser : getUser
    }



})