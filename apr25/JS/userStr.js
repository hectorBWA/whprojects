function userStr(evt){
    console.log(str, searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&access-token=${clientId}`, githubUsers);
    // if(
    //     evt.key !== 'undefined' &&
    //     evt.key !== 'Backspace' &&
    //     evt.key !== 'Tab'
    // )
    // str += evt.key;
}

function githubUsers(data){
    console.log(data);
}

