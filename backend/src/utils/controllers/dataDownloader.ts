import {response} from "express";

async function dataDownloader() {

/*        {
            id: '',
            commonNames: [],
            scientificNameWithoutAuthor: '',
            scientificNameAuthorship: '',
            gbifId: 0,
            powoId: '',
            iucnCategory: ''
   }  */
    let data = await fetch(`https://my-api.plantnet.org/v2/projects/k-southwestern-u-s-a/species?lang=en&api-key=${process.env.PLANTNET_API_KEY}`)
     .then(res => res.json())
   for(let i=0; i<data.length; i++){
       let plant = {
          plant_id: null,
          plant_scientific_name: '' ,
          plant_common_names: [],
          plant_image_url: 'https://ourURL.com',
          plant_reference_url: `https://www.gbif.org/species/${data[0].gbifId}`
       }
       break
       let individualdata = await fetch(`https://www.gbif.org/api/occurrence/search?limit=200&taxonKey=${process.env.TAXON_API_KEY}`)
    .then(res => res.json())
    for(let j= 0; j < individualdata.length; j++){
    let plantImageUrl = individualdata.filter
    return plantImageUrl
      }
   }

    console.log(data[0])
 }

dataDownloader().catch(error => console.error(error))