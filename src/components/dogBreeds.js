const dogBreeds = [
  {
      "label": "affenpinscher",
      "value": "affenpinscher"
  },
  {
      "label": "african",
      "value": "african"
  },
  {
      "label": "airedale",
      "value": "airedale"
  },
  {
      "label": "akita",
      "value": "akita"
  },
  {
      "label": "appenzeller",
      "value": "appenzeller"
  },
  {
      "label": "shepherd australian",
      "value": "shepherd-australian"
  },
  {
      "label": "basenji",
      "value": "basenji"
  },
  {
      "label": "beagle",
      "value": "beagle"
  },
  {
      "label": "bluetick",
      "value": "bluetick"
  },
  {
      "label": "borzoi",
      "value": "borzoi"
  },
  {
      "label": "bouvier",
      "value": "bouvier"
  },
  {
      "label": "boxer",
      "value": "boxer"
  },
  {
      "label": "brabancon",
      "value": "brabancon"
  },
  {
      "label": "briard",
      "value": "briard"
  },
  {
      "label": "norwegian buhund",
      "value": "norwegian-buhund"
  },
  {
      "label": "boston bulldog",
      "value": "boston-bulldog"
  },
  {
      "label": "english bulldog",
      "value": "english-bulldog"
  },
  {
      "label": "french bulldog",
      "value": "french-bulldog"
  },
  {
      "label": "staffordshire bullterrier",
      "value": "staffordshire-bullterrier"
  },
  {
      "label": "australian cattledog",
      "value": "australian-cattledog"
  },
  {
      "label": "chihuahua",
      "value": "chihuahua"
  },
  {
      "label": "chow",
      "value": "chow"
  },
  {
      "label": "clumber",
      "value": "clumber"
  },
  {
      "label": "cockapoo",
      "value": "cockapoo"
  },
  {
      "label": "border collie",
      "value": "border-collie"
  },
  {
      "label": "coonhound",
      "value": "coonhound"
  },
  {
      "label": "cardigan corgi",
      "value": "cardigan-corgi"
  },
  {
      "label": "cotondetulear",
      "value": "cotondetulear"
  },
  {
      "label": "dachshund",
      "value": "dachshund"
  },
  {
      "label": "dalmatian",
      "value": "dalmatian"
  },
  {
      "label": "great dane",
      "value": "great-dane"
  },
  {
      "label": "scottish deerhound",
      "value": "scottish-deerhound"
  },
  {
      "label": "dhole",
      "value": "dhole"
  },
  {
      "label": "dingo",
      "value": "dingo"
  },
  {
      "label": "doberman",
      "value": "doberman"
  },
  {
      "label": "norwegian elkhound",
      "value": "norwegian-elkhound"
  },
  {
      "label": "entlebucher",
      "value": "entlebucher"
  },
  {
      "label": "eskimo",
      "value": "eskimo"
  },
  {
      "label": "lapphund finnish",
      "value": "lapphund-finnish"
  },
  {
      "label": "bichon frise",
      "value": "bichon-frise"
  },
  {
      "label": "germanshepherd",
      "value": "germanshepherd"
  },
  {
      "label": "italian greyhound",
      "value": "italian-greyhound"
  },
  {
      "label": "groenendael",
      "value": "groenendael"
  },
  {
      "label": "havanese",
      "value": "havanese"
  },
  {
      "label": "afghan hound",
      "value": "afghan-hound"
  },
  {
      "label": "basset hound",
      "value": "basset-hound"
  },
  {
      "label": "blood hound",
      "value": "blood-hound"
  },
  {
      "label": "english hound",
      "value": "english-hound"
  },
  {
      "label": "ibizan hound",
      "value": "ibizan-hound"
  },
  {
      "label": "plott hound",
      "value": "plott-hound"
  },
  {
      "label": "walker hound",
      "value": "walker-hound"
  },
  {
      "label": "husky",
      "value": "husky"
  },
  {
      "label": "keeshond",
      "value": "keeshond"
  },
  {
      "label": "kelpie",
      "value": "kelpie"
  },
  {
      "label": "komondor",
      "value": "komondor"
  },
  {
      "label": "kuvasz",
      "value": "kuvasz"
  },
  {
      "label": "labradoodle",
      "value": "labradoodle"
  },
  {
      "label": "labrador",
      "value": "labrador"
  },
  {
      "label": "leonberg",
      "value": "leonberg"
  },
  {
      "label": "lhasa",
      "value": "lhasa"
  },
  {
      "label": "malamute",
      "value": "malamute"
  },
  {
      "label": "malinois",
      "value": "malinois"
  },
  {
      "label": "maltese",
      "value": "maltese"
  },
  {
      "label": "bull mastiff",
      "value": "bull-mastiff"
  },
  {
      "label": "english mastiff",
      "value": "english-mastiff"
  },
  {
      "label": "tibetan mastiff",
      "value": "tibetan-mastiff"
  },
  {
      "label": "mexicanhairless",
      "value": "mexicanhairless"
  },
  {
      "label": "mix",
      "value": "mix"
  },
  {
      "label": "bernese mountain",
      "value": "bernese-mountain"
  },
  {
      "label": "swiss mountain",
      "value": "swiss-mountain"
  },
  {
      "label": "newfoundland",
      "value": "newfoundland"
  },
  {
      "label": "otterhound",
      "value": "otterhound"
  },
  {
      "label": "caucasian ovcharka",
      "value": "caucasian-ovcharka"
  },
  {
      "label": "papillon",
      "value": "papillon"
  },
  {
      "label": "pekinese",
      "value": "pekinese"
  },
  {
      "label": "pembroke",
      "value": "pembroke"
  },
  {
      "label": "miniature pinscher",
      "value": "miniature-pinscher"
  },
  {
      "label": "pitbull",
      "value": "pitbull"
  },
  {
      "label": "german pointer",
      "value": "german-pointer"
  },
  {
      "label": "germanlonghair pointer",
      "value": "germanlonghair-pointer"
  },
  {
      "label": "pomeranian",
      "value": "pomeranian"
  },
  {
      "label": "miniature poodle",
      "value": "miniature-poodle"
  },
  {
      "label": "standard poodle",
      "value": "standard-poodle"
  },
  {
      "label": "toy poodle",
      "value": "toy-poodle"
  },
  {
      "label": "pug",
      "value": "pug"
  },
  {
      "label": "puggle",
      "value": "puggle"
  },
  {
      "label": "pyrenees",
      "value": "pyrenees"
  },
  {
      "label": "redbone",
      "value": "redbone"
  },
  {
      "label": "chesapeake retriever",
      "value": "chesapeake-retriever"
  },
  {
      "label": "curly retriever",
      "value": "curly-retriever"
  },
  {
      "label": "flatcoated retriever",
      "value": "flatcoated-retriever"
  },
  {
      "label": "golden retriever",
      "value": "golden-retriever"
  },
  {
      "label": "rhodesian ridgeback",
      "value": "rhodesian-ridgeback"
  },
  {
      "label": "rottweiler",
      "value": "rottweiler"
  },
  {
      "label": "saluki",
      "value": "saluki"
  },
  {
      "label": "samoyed",
      "value": "samoyed"
  },
  {
      "label": "schipperke",
      "value": "schipperke"
  },
  {
      "label": "giant schnauzer",
      "value": "giant-schnauzer"
  },
  {
      "label": "miniature schnauzer",
      "value": "miniature-schnauzer"
  },
  {
      "label": "english setter",
      "value": "english-setter"
  },
  {
      "label": "gordon setter",
      "value": "gordon-setter"
  },
  {
      "label": "irish setter",
      "value": "irish-setter"
  },
  {
      "label": "english sheepdog",
      "value": "english-sheepdog"
  },
  {
      "label": "shetland sheepdog",
      "value": "shetland-sheepdog"
  },
  {
      "label": "shiba",
      "value": "shiba"
  },
  {
      "label": "shihtzu",
      "value": "shihtzu"
  },
  {
      "label": "blenheim spaniel",
      "value": "blenheim-spaniel"
  },
  {
      "label": "brittany spaniel",
      "value": "brittany-spaniel"
  },
  {
      "label": "cocker spaniel",
      "value": "cocker-spaniel"
  },
  {
      "label": "irish spaniel",
      "value": "irish-spaniel"
  },
  {
      "label": "japanese spaniel",
      "value": "japanese-spaniel"
  },
  {
      "label": "sussex spaniel",
      "value": "sussex-spaniel"
  },
  {
      "label": "welsh spaniel",
      "value": "welsh-spaniel"
  },
  {
      "label": "english springer",
      "value": "english-springer"
  },
  {
      "label": "stbernard",
      "value": "stbernard"
  },
  {
      "label": "american terrier",
      "value": "american-terrier"
  },
  {
      "label": "australian terrier",
      "value": "australian-terrier"
  },
  {
      "label": "bedlington terrier",
      "value": "bedlington-terrier"
  },
  {
      "label": "border terrier",
      "value": "border-terrier"
  },
  {
      "label": "cairn terrier",
      "value": "cairn-terrier"
  },
  {
      "label": "dandie terrier",
      "value": "dandie-terrier"
  },
  {
      "label": "fox terrier",
      "value": "fox-terrier"
  },
  {
      "label": "irish terrier",
      "value": "irish-terrier"
  },
  {
      "label": "kerryblue terrier",
      "value": "kerryblue-terrier"
  },
  {
      "label": "lakeland terrier",
      "value": "lakeland-terrier"
  },
  {
      "label": "norfolk terrier",
      "value": "norfolk-terrier"
  },
  {
      "label": "norwich terrier",
      "value": "norwich-terrier"
  },
  {
      "label": "patterdale terrier",
      "value": "patterdale-terrier"
  },
  {
      "label": "russell terrier",
      "value": "russell-terrier"
  },
  {
      "label": "scottish terrier",
      "value": "scottish-terrier"
  },
  {
      "label": "sealyham terrier",
      "value": "sealyham-terrier"
  },
  {
      "label": "silky terrier",
      "value": "silky-terrier"
  },
  {
      "label": "tibetan terrier",
      "value": "tibetan-terrier"
  },
  {
      "label": "toy terrier",
      "value": "toy-terrier"
  },
  {
      "label": "westhighland terrier",
      "value": "westhighland-terrier"
  },
  {
      "label": "wheaten terrier",
      "value": "wheaten-terrier"
  },
  {
      "label": "yorkshire terrier",
      "value": "yorkshire-terrier"
  },
  {
      "label": "vizsla",
      "value": "vizsla"
  },
  {
      "label": "spanish waterdog",
      "value": "spanish-waterdog"
  },
  {
      "label": "weimaraner",
      "value": "weimaraner"
  },
  {
      "label": "whippet",
      "value": "whippet"
  },
  {
      "label": "irish wolfhound",
      "value": "irish-wolfhound"
  }
]

export default dogBreeds