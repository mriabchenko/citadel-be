const {google} = require('googleapis');
const googleConfig = require('./../../config/google');

/*************/
/** HELPERS **/
/*************/

function createConnection() {
    return new google.auth.OAuth2(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
    );
}

function getConnectionUrl(auth) {
    return auth.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: defaultScope
    });
}

function getGooglePlusApi(auth) {
    return google.plus({ version: 'v1', auth });
}

/**********/
/** MAIN **/
/**********/

/**
 * Part 1: Create a Google URL and send to the client to log in the user.
 */
exports.urlGoogle = function () {
    const auth = createConnection();
    const url = getConnectionUrl(auth);
    return url;
};

/**
 * Part 2: Take the "code" parameter which Google gives us once when the user logs in, then get the user's email and id.
 */
exports.getGoogleAccountFromCode = async function (code) {
    const auth = createConnection();
    const data = await auth.getToken(code);
    const tokens = data.tokens;
    auth.setCredentials(tokens);
    const plus = getGooglePlusApi(auth);
    const me = await plus.people.get({ userId: 'me' });
    const userGoogleId = me.data.id;
    const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;
    return {
        id: userGoogleId,
        email: userGoogleEmail,
        tokens: tokens,
    };
};
