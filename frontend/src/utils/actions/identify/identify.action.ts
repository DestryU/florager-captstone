'use server'

function uploadImage(identifyImage: any) {
    fetch(`{https://my-api.plantnet.org/v2/identify/all?include-related-images=false&no-reject=false&nb-results=3&lang=eng&api-key=${process.env.PLANTNET_API_KEY}`,
    {
        method: "POST",
        headers: {
           // 'Authorization': authorization ?? ""
        },
        body: identifyImage

    })
        .then(response => response.json())
        .then(json => {
            if (json.status !== 200) {
                console.error (json.message)
            } else {
                console.log('Response from Identify API', json);
            }
        })
}