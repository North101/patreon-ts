import express = require("express");
import * as dotenv from "dotenv";
import { format as formatUrl } from "url";
import { AddressInfo } from "net";

dotenv.config();

const HOST: string = "localhost:8080";
const PORT: number = 8080;
const REDIR: string = "/oauth/redirect";

const redirectUri = formatUrl({
    protocol: "http",
    host: HOST,
    pathname: REDIR
});

const clientId = process.env.PATREON_CLIENT_ID;
//const clientSecret = process.env.PATREON_CLIENT_SECRET;


//import requestPromise = require("request-promise-native");

const loginUrl: string = formatUrl({
    protocol: "https",
    host: "patreon.com",
    pathname: "/oauth2/authorize",
    query: {
        response_type: "code",
        client_id: clientId,
        redirect_uri: redirectUri,
        state: "chill",
    },
});

const app: express.Express = express();
const server = app.listen(PORT, () => {
    const port: AddressInfo = server.address() as AddressInfo;
    console.log(`Listening on http://localhost:${port.port}`);
});

app.get("/", (_req, res) => {
    res.send(`<a href="${loginUrl}">Link with Patreon</a>`);
});

app.get('/oauth/redirect', (req, res) => {
    const { code } = req.query
    //let token: string;

    console.log(`${code}`);
    res.send(`Denied`);


    // return oauthClient.getTokens(code, redirect)
    //     .then(({ access_token }) => {
    //         token = access_token // eslint-disable-line camelcase
    //         const apiClient = patreon(token)
    //         return apiClient('/current_user')
    //     })
    //     .then(({ store, rawJson }) => {
    //         const { id } = rawJson.data
    //         database[id] = { ...rawJson.data, token }
    //         console.log(`Saved user ${store.find('user', id).full_name} to the database`)
    //         return res.redirect(`/protected/${id}`)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //         console.log('Redirecting to login')
    //         res.redirect('/')
    //     })
});
