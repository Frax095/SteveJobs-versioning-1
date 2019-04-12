users = [];
counter = 0;

exports.getUsers = function() {
    return users;
}

exports.postUser = function(name, surname, email, born, gender) {
    var user = {
        id: counter++,
        name: name,
        surname: surname,
        email: email,
        born: born,
        gender: gender
    }
    users.push(user);
    return users;
}

exports.deleteUserById = function(id) {
    for (var i=0; i< users.length; i++) {
        if (users[i].id === id) {
            users.splice(i ,1);
            return users;
        }
    }
}

exports.putCompletedById = function(id){
    for(var toDo of toDos) {
        if(toDo.id === id && toDo.completed === false) {
            toDo.completed = true;
            return toDo;
        }
        if(toDo.id === id && toDo.completed === true){
            toDo.completed = false;
            return toDo;
        }
    }
}

exports.getToDoByUser = function(user) {
    filtredArrayBySpecificUser = [];
    for(var toDo of toDos){
        if(toDo.assignedTo === user){
            filtredArrayBySpecificUser.push(toDo);
        }
    }
    return filtredArrayBySpecificUser;
}

exports.getToDoByCompleted = function(boolean){
    filtredArrayByCompleted = [];
    for(var toDo of toDos){
        if(toDo.completed === boolean){
            filtredArrayByCompleted.push(toDo);
        }  
    }
    return filtredArrayByCompleted;
}

exports.count = function() {
    return toDos.length;
}