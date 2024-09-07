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
   for(let i=0; i<10; i++){
       let plant = {
          plant_id: null,
          plant_scientific_name: '' ,
          plant_common_names: [],
          plant_image_url: 'https://ourURL.com',
          plant_reference_url: `https://www.gbif.org/species/${data[i].gbifId}`
       }
       let individualdata = await fetch(createUrl(data[i].gbifId))
           .then(res => res.json())
       console.log(individualdata.result[0].media)

    }

  }
function createUrl(gbifId: string) {
 return `https://www.gbif.org/api/occurrence/search?limit=200&taxonKey=${gbifId}&typeStatus=TYPE&typeStatus=TYPE_SPECIES&typeStatus=TYPE_GENUS&typeStatus=ALLOLECTOTYPE&typeStatus=ALLONEOTYPE&typeStatus=ALLOTYPE&typeStatus=COTYPE&typeStatus=EPITYPE&typeStatus=EXEPITYPE&typeStatus=EXHOLOTYPE&typeStatus=EXISOTYPE&typeStatus=EXLECTOTYPE&typeStatus=EXNEOTYPE&typeStatus=EXPARATYPE&typeStatus=EXSYNTYPE&typeStatus=EXTYPE&typeStatus=HAPANTOTYPE&typeStatus=HOLOTYPE&typeStatus=ICONOTYPE&typeStatus=ISOLECTOTYPE&typeStatus=ISOPARATYPE&typeStatus=ISONEOTYPE&typeStatus=ISOSYNTYPE&typeStatus=ISOTYPE&typeStatus=LECTOTYPE&typeStatus=NEOTYPE&typeStatus=PARALECTOTYPE&typeStatus=PARANEOTYPE&typeStatus=PARATYPE&typeStatus=PLASTOHOLOTYPE&typeStatus=PLASTOISOTYPE&typeStatus=PLASTOLECTOTYPE&typeStatus=PLASTONEOTYPE&typeStatus=PLASTOPARATYPE&typeStatus=PLASTOSYNTYPE&typeStatus=PLASTOTYPE&typeStatus=SECONDARYTYPE&typeStatus=SUPPLEMENTARYTYPE&typeStatus=SYNTYPE&typeStatus=TOPOTYPE&typeStatus=ORIGINALMATERIAL`
}

dataDownloader().catch(error => console.error(error))