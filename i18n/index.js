import i18next from 'i18next';
import LocalBackend from 'i18next-node-fs-backend';
import LocizeBackend from 'i18next-locize-backend';
import * as path from "path";
import * as fs from "fs";

const resources = {
    ar: {
        ProjectX: {
            servicePoints: "هذ هي نقطة الخدمة",
            welcomeUser: "مرحبًا {{username}}",
            helloWorld: "مرحبا بك",
        },

    },
    en: {
        ProjectX: {
            servicePoints: "This is a service point",
            welcomeUser: "Welcome {{username}}",
            helloWorld: "Hello World",
        },
    }
}

// Read all json files and send keys
const getLocalKeys = async () => {
    const arJSON = path.resolve('locales', 'ar', 'ProjectX.json')
    const enJSON = path.resolve('locales', 'en', 'ProjectX.json')
    const arData = JSON.parse(fs.readFileSync(arJSON, 'utf-8'))
    const enData = JSON.parse(fs.readFileSync(enJSON, 'utf-8'))

    return {
        ar: Object.keys(arData),
        en: Object.keys(enData),
    }
}

const i18nLoader = async (level = 'local') => {
    if (level === 'memory') {
        return i18next
            .init({
                resources,
                defaultNS: 'ProjectX',
                lng: 'en',
                fallbackLng: 'en',
                saveMissing: true,
            })
    }

    if (level === 'local') {
        return i18next
            .use(LocalBackend)
            .init({
                debug: false,
                lng: 'en',
                fallbackLng: 'en',
                saveMissing: true,
                ns: "ProjectX",
                backend: {
                    loadPath: 'locales/{{lng}}/{{ns}}.json'
                }
            })
    }

    return i18next
        .use(LocizeBackend)
        .init({
            debug: false,
            lng: 'en',
            fallbackLng: 'en',
            saveMissing: true,
            ns: "ProjectX",
            backend: {
                projectId: "f4cd5bb3-a9db-4bd4-b4ce-ac854352dc7f",
                apiKey: "79c3858a-c11c-470e-a14d-2d71fbb734b0",
                referenceLng: 'en'
            }
        })
}

const localKeys = await getLocalKeys()
const memoryKeys = {
    ar : Object.keys(resources.ar.ProjectX),
    en : Object.keys(resources.en.ProjectX),
}

export {
    memoryKeys,
    localKeys,
    i18next,
}
export default i18nLoader;
