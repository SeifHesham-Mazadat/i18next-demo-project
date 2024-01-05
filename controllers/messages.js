import i18nLoader, {localKeys, memoryKeys, i18next} from "../i18n/index.js";
import axios from "axios";


const listKeys = async (req, res, next) => {
    let {level} = req.query

    if (!level) {
        level = 'local'
    }

    if (level === 'memory') {
        return res.send(memoryKeys)
    }

    if (level === 'local' || level === 'customParser') {
        return res.send(localKeys)
    }

    if (level === 'locize') {
        const {data: ar} = await axios.get('https://api.locize.app/f4cd5bb3-a9db-4bd4-b4ce-ac854352dc7f/latest/en/ProjectX')
        const {data: en} = await axios.get('https://api.locize.app/f4cd5bb3-a9db-4bd4-b4ce-ac854352dc7f/latest/ar/ProjectX')

        return res.send({
            ar: Object.keys(ar),
            en: Object.keys(en)
        })
    }
}

const getSingleMessage = async (req, res, next) => {
    let {level, lang = 'en', key} = req.query;
    const data = req.body

    if (!level) {
        level = 'local'
    }

    const t = await i18nLoader(level)

    if (!i18next.exists(key) && level !== 'customParser') {
        return res.status(404).send({
            message: 'key not found',
        })
    }

    if (Object.keys(data).length === 0) {
        return res.send(t(key, {
            lng: lang,
        }))
    }


    return res.send(t(key, {
        lng: lang,
        ...data,
    }))
}

export default {
    listKeys,
    getSingleMessage,
}
