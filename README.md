# Documentation for Localization Demo APIs

This documentation covers the APIs used in a localization demo application. The APIs are designed to handle different levels of localization, including in-memory, local file-based, and integration with the Locize third-party library.

* List Localization Keys API

   URL: `http://localhost:3000/api/list/keys`
   Parameter: `level`
   Description: `This API endpoint is used to retrieve a list of localization keys. It supports different levels of localization sources.`
   Usage:
   Query Parameter:
    
    `level` - `This parameter specifies the localization source. The valid values are:`
   
        "memory": `Fetches keys stored in memory.`

        "local": `Retrieves keys from locally stored files within the codebase`.

        "locize": Accesses keys from the Locize third-party service.

    Example Request: `http://localhost:3000/api/list/keys?level=locize`
   
    Expected Response: `A list of localization keys relevant to the specified source`.


* Retrieve Localized Message API
    URL: `http://localhost:3000/api/message/`

     - Parameters: level, lang, key
     - Description: This API endpoint is used for retrieving localized messages based on the specified language and key.
     - Usage: <br>
         `Query Parameters`:

             "level": The source of the localization. Valid options are memory, local, and locize.
             "lang": The language code for which the message is required (e.g., ar for Arabic).
             "key": The specific key of the localization string.
             "Example Request": http://localhost:3000/api/message/?level=memory&lang=ar&key=welcomeUser
             "Expected Response": The localized message corresponding to the provided key and lang from the specified level.
