import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
    sendNotification: function(){
        console.log("sendNotification entry");
        const result = Meteor.http.get("http://www.mocky.io/v2/59451c2513000050075b6f67");
        console.log("http result="+JSON.stringify(result));
    }
})