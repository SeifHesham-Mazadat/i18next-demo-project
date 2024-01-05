import path from 'path'
import fs from "fs";

const defaultLang = 'en'
const defaultKeys = ['lng', 'count']

const localeJsonParser = (lang) => {
    const arJSON = path.resolve('locales', 'ar', 'ProjectX.json')
    const enJSON = path.resolve('locales', 'en', 'ProjectX.json')

    return {
        ar: JSON.parse(fs.readFileSync(arJSON, 'utf-8')),
        en: JSON.parse(fs.readFileSync(enJSON, 'utf-8')),
    }
}

const searchDeep = (obj, path) => {
    const parts = path.split('.');
    let currentPart = obj;

    for (let part of parts) {
        if (currentPart[part] === undefined) {
            return undefined;
        }
        currentPart = currentPart[part];
    }

    return currentPart;
}

const placeholderParser = (key, values) => {
    return key.replace(/{{(.*?)}}/g, (match, p1) => {
        if (!values[p1]) {
            return p1
        }
        return values[p1]
    })
}

const i18nParser = (key, accessData) => {
    if (!("lng" in accessData)) {
        accessData.lng = defaultLang
    }

    const sources = (localeJsonParser(accessData.lng))[accessData.lng]

    const result = searchDeep(sources, key)

    if (!result) {
        return key
    }

    return placeholderParser(result, accessData)
}


export default {
    t: i18nParser
}
