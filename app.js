// import i18next from 'i18next';
// import Backend from 'i18next-node-fs-backend';
// import Backend from 'i18next-locize-backend';
//
// i18next
//     // .use(Backend)
//     .init({
//         fallbackLng: 'en',
//         resources: {
//             ar: {
//                 ProjectX: {
//                     servicePoints: "هذ هي نقطة الخدمة",
//                 }
//             },
//             en: {
//                 ProjectX: {
//                     servicePoints: "This is a service point",
//                     welcomeUser: "Welcome {{username}}",
//                 },
//             }
//         },
//         debug: false,
//     })
//
// console.log(i18next.t('ProjectX:servicePoints', {
//     lng: 'en',
//     username: "Seif"
// }))

// i18next
//     .use(Backend)
//     .init({
//         debug: true,
//         lng: 'en',
//         fallbackLng: 'en',
//         saveMissing: true,
//         ns: "ProjectX",
//         backend: {
//             projectId: "f4cd5bb3-a9db-4bd4-b4ce-ac854352dc7f",
//             apiKey: "79c3858a-c11c-470e-a14d-2d71fbb734b0",
//             referenceLng: 'en'
//         }
//     }).then(t => {
//         console.log(`the key => ${t('key')}`)
//     })

// const app = express();
//
// app.get("/api", (req, res) => {
//     const {username = 'Mazadat'} = req.query;
//     res.send(i18next.t('translation:welcomeUser', {
//         lng: "ar",
//         lastLogin: "'12-8-2022'",
//         username,
//     }))
// })
//
//
// app.listen(3000, () => {
//     console.log("server is running on port 3000")
// })
// console.log(i18next.t('translation:welcomeUser', {
//     lng: "ar",
//     lastLogin: "'12-8-2022'",
//     username: "Mazadat",
// }))

// i18next
//     .use(Backend)
//     .init({
//         fallbackLng: 'en',
//         preload: ['en', 'ar'],
//         defaultNS: [],
//         debug: false,
//         backend: {
//             loadPath: 'locales/{{lng}}/{{ns}}.json',
//         }
//     })
//     .then((t) => {
//         console.log(`this is the translations ====> `, t('translation:earlyDropOff.earlyDropOffItemsBody', {
//             lng: 'ar',
//             count: 15,
//             escapeValue: false,
//             postTitle: '"ايفون 15 برو ماكس"',
//             SP: '"أكتوبر"',
//         }))
//     })


