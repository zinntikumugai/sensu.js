const request = require('request');
class Client {
    constructor(apikey = null, type = "platform") {

        if(apikey == null)
            throw new Error("API_NOT_FOUND");
        this.apikey = apikey;
        this.APIURL = "https://sensu.tips/api/v1/" + type;
        
    }

    enc(command) {
        var commandRequest = "";
        command.forEach(element => {
            commandRequest += "/" + encodeURIComponent(element);
        });
        return commandRequest;
    }

    ssplit(str) {
        var st = str.replace(/[\s　\n]+/g, '');
        st = st.split(' ').filter(v => v);
        return st;
    }

    post(command = [""], social_account = null, call) {
        if(social_account == null)
            throw new Error("SOCIAL_ACCOUNT_NOT_FOUND");
        var options = {
            uri: this.APIURL + this.enc(command),
            method: 'POST',
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            form: {
                "api_key": this.apikey,
                "social_account": social_account
            }
        }
        request.post(options, call);
    }
}

module.exports = Client;