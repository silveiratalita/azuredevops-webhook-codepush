// import session from 'express-session';
// import dotenv from 'dotenv';
// import envalid from 'envalid';
// import * as oauth2 from 'oauth2-api-azure';
// import { IAuthSettings, SecurityStrategies } from 'oauth2-api-azure';

// dotenv.config();

// const env = envalid.cleanEnv(process.env, {
//   TENANT_ID: envalid.str({
//     example: 'd197a05e-...',
//     desc: 'Azure AD tenant name or ID. e.g. contoso.onmicrosoft.com',
//   }),
//   CLIENT_ID: envalid.str({
//     example: 'd197a05e-...',
//     desc:
//       'The APP ID of the client app that was registered and configured to have access to the Azure resource',
//   }),
//   CLIENT_SECRET: envalid.str({
//     example: 'd197a05e-...',
//     desc: 'The Client Secret of the Client App above',
//   }),
//   RESOURCE_ID: envalid.str({
//     example: 'd197a05e-...',
//     desc: 'The unique APP ID of the Azure Web API to obtain access to',
//   }),
//   RBAC_GROUP: envalid.str({
//     example: 'API Group',
//     desc:
//       'The name of the group of users for whom access to this API is granted',
//   }),

// });

// const authSettings = new IAuthSettings({
//   tenant: env.TENANT_ID,
//   clientId: env.CLIENT_ID,
//   clientSecret: env.CLIENT_SECRET,
//   apiAppId: env.RESOURCE_ID,
//   redirectUri: `${hostname}:${port}${baseApiUrl}`, //ONDE ELE VAI BATER
//   validateIssuer: false,
//   isB2C: false,
//   issuer: '',
//   scope: 'offline_access',
//   allowHttpForRedirectUrl: true,
//   loggingLevel: 'error',
//   logginNoPII: false,
//   useCookieInsteadOfSession: false,
// });

// const passportAuthOptions = {
//   session: false,
//   passReqToCallback: true,
//   authInfo: true,
//   failureMessage: true,
//   failWithError: true,
//   successMessage: false,
// };

// //A SESSÃO VAI PRECISAR GUARDAR OS VALORES, JOGAR ELE DEPOIS DO middleware DE AUTENTICAÇÃO NA RORTA
// // app.use(cookieParser());
// app.use(
//   session({
//     secret: 'HelloOAuth2',
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // INICIA A AUTENTIÇÃOA PASSANDO PARAMETROS DE AUTENTICAÇÃO QUE VEM LA DA ENV E SEM SEGUIDA RECEBENCO UMA CALBACK QUE P RETORNO DA FUNÇÃO
// //PASSADA COMO SEGUNDO PARAMETRO
// oauth2.authInit(authSettings, validateUserRoleCallback);

// // iNICIA O  OAuth middleware QUE JA TEM AS CONFS
// const authMiddleware = new oauth2.OAuthMiddleware(
//   authSettings,
//   passportAuthOptions,
//   `${hostname}:${port}`, //ONDE ELE VAI BATER, INSIRO ELE DEPOIS DA CHAMADO COM O METODO POST
//   baseApiUrl
// );

// // Couple the app to the Auth routes
// app = authMiddleware.setAppHandler(app);

// // define a route handler for the default home page
// app.get('/', (req, res) => {
//   res.send(
//     `API Home Page. Try to call API endpoint with your name: ${hostname}:${port}/api/hello/<your name>`
//   );
// });

// app.get(
//   `${baseApiUrl}/hello/:name`,
//   // here goes the Azure OAuth2 Middleware
//   authMiddleware.authenticate(SecurityStrategies.AUTH_CODE),
//   (request, response) => {
//     const name = request.params.name;

//     if (!isNaN(name)) {
//       response.status(400).send('No string as name');
//     } else {
//       request.session.userName = name;
//       response.json({
//         message: 'Hello, ' + name,
//       });
//     }
//   }
// );

// // Error handler
// app.use((err: any, req, res, next) => {
//   err.status = err.status === undefined ? 500 : err.status;
//   // if unauthorized
//   if (err.status === 401) {
//     // destroy session's JWT token
//     req.session.idToken = undefined;
//     req.session.accessToken = undefined;
//   }

//   // Send the error message to the user
//   res.status(err.status).send(err.message);
// });

// async function validateUserRoleCallback(
//   request,
//   user,
//   issuer,
//   sub,
//   claims,
//   params,
//   requestedResource,
//   passToAuthCallback
// ) {
//   try {
//     let isAuthorized = false;

//     // obtain the list of all AD Groups
//     const groups = await authMiddleware.getAllADGroups();

//     if (groups) {
//       // iterate through the all groups
//       for (const grp of groups) {
//         if (grp.displayName === env.RBAC_GROUP) {
//           const grpId = grp.id;

//           // find if the user is a member of the API group
//           if (
//             authMiddleware.findIfUserIsMemberOfGroup(grpId, user.displayName)
//           ) {
//             isAuthorized = true;
//           }
//         }
//       }

//       if (isAuthorized) {
//         // user is a member of the group allowing access to API
//         return passToAuthCallback(null, user);
//       } else {
//         // this user doesn't belong to a group that allows access to API
//         return passToAuthCallback(
//           new Error(
//             "Unauthorized. User doesn't belong to a group that allows access to API"
//           ),
//           user
//         );
//       }
//     }
//   } catch (error) {
//     console.error(error);
//     passToAuthCallback(error, user);
//   }
// }
