export type TranslationKey = keyof typeof translations.en;

type Translations = {
  [lang: string]: { [key in TranslationKey]?: string };
};

export const translations: Translations = {
  en: {
    viewMap: "View Map",
    districtsOfPanem: "Districts of Panem",
    clickDistrictInfo:
      "Click on the district's coat of arms to learn more about it.",
    location: "Location",
    industry: "Industry",
    victors: "Victors",
    victorOf: "Victor of the",
    coVictorOf: "Co-victor of the",
    hungerGames: "Hunger Games",
    officialMapOfPanem: "Official Map of Panem",
    alternativeMapOfPanem: "Alternative Map of Panem",
    mapOfPanem: "Map of Panem",
    backHome: "Back Home",
    otherDistricts: "Other Districts",
    footerDescription:
      "So you can get to know the districts of the dystopian nation of Panem from The Hunger Games saga.",
    footerSource: "All information shown here is obtained from",
    footerWiki: "The Hunger Games Fandom Wiki.",
    codedBy: "Coded with 🤍 by Emcahell",
    titleDistrict1: "District 1",
    titleDistrict2: "District 2",
    titleDistrict3: "District 3",
    titleDistrict4: "District 4",
    titleDistrict5: "District 5",
    titleDistrict6: "District 6",
    titleDistrict7: "District 7",
    titleDistrict8: "District 8",
    titleDistrict9: "District 9",
    titleDistrict10: "District 10",
    titleDistrict11: "District 11",
    titleDistrict12: "District 12",
    victorUnspecifiedFemale5: "District 5 female",
    victorUnspecifiedMale5: "District 5 male",
    victorUnspecifiedFemale6: "District 6 female",
    victorUnspecifiedMale6: "District 6 male",
    victorUnspecifiedFemale9: "District 9 female",
    victorUnspecifiedMale9: "District 9 male",
    victorUnspecifiedFemale10: "District 10 female",
    victorUnspecifiedMale10: "District 10 male",
    unknownGames: "Victor of an unknown Hunger Games",
    locationD1:
      "District 1 is located in western North America, to the northwest of Panem along the Rocky Mountains. Geographically, District 1 territory is primarily centered around the U.S. states of Montana, Idaho, Utah, and Wyoming. District 1 borders four districts as well as the Capitol: District 4 (to the west), District 7 (to the north), District 9 (to the east), the Capitol (to the southeast), and District 5 (to the south).",
    industryD1:
      "They were in charge of producing luxury items for the Capitol. Around the time of the 10th Hunger Games, they produced items such as decent liquor, makeup, and tobacco, though they were often hard to get ahold of and very expensive, which made the black market in the Capitol flourish.",
    locationD2:
      "District 2 is located directly to the south of the Capitol, primarily centered in the states of Colorado and New Mexico.",
    industryD2:
      "They were in change of masonry and construction, with mines or stone quarries, but over time they dedicated themselves to the training and lodging of the Peacekeepers.",
    locationD3:
      "District 3 is located in the eastern part of the continent, centered around the states of Illinois, Indiana, Iowa, and Minnesota. It is bordered by Districts 12 (to the east), 8 (to the south), 9 (to the west), and 6 (to the north).",
    industryD3:
      "The district contains many factories for the production of electronic devices. Children in District 3 learn audio editing techniques in school, and tributes appear to have practical skills with wiring and programming various electronic devices. This makes it likely that they, unlike children in District 12, are expected to work in their districts industry before they turn 18. Additionally, despite District 6 being the district responsible for transportation, Katniss mentions that District 3 manufactures automobiles.",
    locationD4:
      "District 4 is located on the western coast of the continent, roughly corresponding to California and Oregon, with notable territories in Nevada and southern Washington. The district borders District 7 (to the north), District 1 (to the east), and District 5 (to the southeast).",
    industryD4:
      "Its major industry is fishing, and children are trained for jobs in this industry from a young age. Not much is known about District 4s way of living aside from their specialization in fishing. This makes them adept at tying knots, weaving, and wielding weapons like spears and tridents. They can also make and use nets, improvise fish hooks, and identify edible marine life. Presumably, they also practice aquaculture.",
    locationD5:
      "District 5 is located directly southwest of the Capitol, primarily centered in the state of Arizona and southern Utah. This geographical location makes sense, as it would have to be located in close proximity to meet the power needs of the city. Being located around the Colorado River. District 5 borders District 4 (to the northeast), District 1 (to the north), The Capitol (to the northwest), District 2 (to the east), and District 10 (to the southeast).",
    industryD5:
      "Its main industry is power and utility, and the district is responsible for generating the power of the entire nation. The districts industry, along with District 6, are the last ones to be revealed. Nowhere in the original trilogy books suggest that District 5 provides power and utilities to the nation, unlike District 9 being the grain district. They are only revealed at the time the film adaptation of The Hunger Games has been announced. The hydroelectric dam attack in District 5 is a new addition to the Second Rebellion.",
    locationD6:
      "District 6 is located in the midwest area of North America, primarily centered in the states of Michigan and Wisconsin and the southern part of the Canadian province of Ontario. Borders District 3 (to the south and east), District 9 (to the northwest), and District 13 (to the east).",
    industryD6:
      "The industry of District 6 is transportation. The districts industry, along with District 5, are the last ones to be revealed, only at the time the film adaptation of The Hunger Games has been announced. Nowhere in the original trilogy books suggest that District 6 provides transportation, unlike the case of District 9 being hinted from the then-unidentified wheat and bread district.",
    locationD7:
      "District 7 is located in the Pacific Northwest, also known as Cascadia. Its territory primarily covers the Canadian provinces of British Columbia, Alberta, and Saskatchewan, as well as the U.S. states of Montana and Washington. According to this map, it is one of the few districts primarily located outside the contiguous United States, alongside District 13 and District 10. It borders District 4 (to the southwest), District 1 (to the south and southeast), and District 9 (to the east).",
    industryD7:
      "District 7 provided lumber and paper to the Capitol. Nothing is mentioned about the typical lives of citizens. However, Katniss noted Johannas skill with axes, and she mused that Johanna had probably been handling them since she was a toddler. If that is the case, it seems that citizens from District 7 began working in their districts lumber industry at an early age. Both Lamina and Treech also handled axes during the 10th Hunger Games, appearing to support Katnisss theory.",
    locationD8:
      "District 8s territory corresponds to a long, narrow region in the northern part of southeast North America. Its territory is primarily centered on the U.S. states of Kansas, Missouri, southern Illinois, and Tennessee. District 8 borders five other districts: District 12 (to the east and northeast), District 11 (to the south), District 2 (to the west), District 9 (to the northwest), and District 3 (to the north).",
    industryD8:
      "Its main industry is textile production. They have at least one factory that is used for making Peacekeeper uniforms.",
    locationD9:
      "District 9 is located in the central area of North America, along the region known as the Great Plains. From south to north, its territory corresponds primarily to the U.S. states of Nebraska, North Dakota, South Dakota, and the Canadian province of Manitoba. District 9 borders six districts as well as the Capitol, the most of any district: District 6 (to the northeast), District 3 (to the east), District 8 (to the south and southeast), District 2 (to the southwest), the Capitol (to the west), District 1 (to the west), and District 7 (to the northwest). District 9 is the poorest district to share a border with the Capitol.",
    industryD9:
      "Its primary industry is grain production. It was known to have poor education and long hours in the grain fields.  Its territory correlates strongly with the districts industry as Panems breadbasket, as the Great Plains region is known for its flat farmland and fields of wheat. It is mentioned that the district has many factories, most likely for processing the harvested grain.",
    locationD10:
      "District 10 is located in the southwest of North America. As the southernmost district of Panem, District 10s territory primarily corresponds to the western part of the U.S. state of Texas and the northern and central Mexican states of Aguascalientes, Chihuahua, Coahuila, Durango, Guanajuato, Nuevo León, San Luis Potosí, and Tamaulipas. District 10 borders three districts: District 11 (to the northeast), District 2 (to the north), and District 5 (to the northwest).",
    industryD10:
      "Its main industry is livestock, and it provides meat to the Capitol. District 10 operated slaughterhouses, butchering hogs and cattle. Unlike District 12, 10 was one of the districts where adolescents participated in their industry, giving some tributes an advantage in the arena.",
    locationD11:
      "District 11 is located in the far southeast of North America, along the Gulf Coast. From west to east, its territory corresponds primarily to the U.S. states of Oklahoma, Arkansas, Louisiana, Mississippi, Alabama, and Georgia. District 11 borders four districts: District 12 (to the northeast), District 8 (to the north), District 10 (to the southwest), and District 2 (to the northwest).",
    industryD11:
      "District 11 specializes in agriculture. There are many tracker jacker nests in the district, causing workers to keep medical leaves on hand. In the orchards, small children are sent to high branches to pick the highest fruits. They work long hours from sunrise to sunset. During the harvest they often work until well after dark, using torchlight and night vision glasses. Crops are sent to the Capitol, and people in the district are not allowed to eat them. In addition to tending the fields and orchards, District 11 is responsible for herds of dairy cattle.",
    locationD12:
      "District 12 is located in the northeast of North America. Its territory corresponds primarily to the U.S. states of Kentucky, Ohio, and West Virginia. Historically, this region is known for its strong coal mining industry and its extensive coal beds, particularly in West Virginia and Kentucky, which ties well with the districts industry.",
    industryD12:
      "District 12s main industry is coal mining, but after the Second Rebellion, their main industry was converted to medicine.",
    viewTimeline: "View Timeline",
    timelineTitle: "Timeline",
    timelineSubtitle: "The major events that shaped Panem",
    timelineScrollHint: "Scroll to see more",
    timelineLegend: "Hover over the points for more details",
    legendMajor: "Major",
    legendNotable: "Notable",
    legendMinor: "Minor",
    legendDeath: "Death",
    event1Title: "The Dark Days Begin",
    event1Desc: "Civil war erupts across Panem",
    event1Tooltip:
      "The 13 districts launch a major civil war against the Capitol. District 13 becomes the military headquarters, distributing weapons and communication tools to the rebels.",
    event2Title: "Treaty of Treason",
    event2Desc: "Creation of the Hunger Games",
    event2Tooltip:
      "Conceived by Casca Highbottom and Crassus Snow. One boy and one girl (ages 12-18) from each district are selected annually to fight to the death.",
    event3Title: "First Hunger Games",
    event3Desc: "Held in the Capitol Arena",
    event3Tooltip:
      "The first Hunger Games are held in the Capitol Arena. The early Games are simple and lack the spectacle they would develop over time.",
    event4Title: "10th Hunger Games",
    event4Desc: "Lucy Gray Baird wins",
    event4Tooltip:
      "Lucy Gray Baird wins as District 12's first victor. Capitol students become mentors, introducing interviews and sponsorships. A young Coriolanus Snow is sent to District 12 as a Peacekeeper.",
    event5Title: "First Quarter Quell",
    event5Desc: "Tributes chosen by vote",
    event5Tooltip:
      "The 25th Hunger Games introduce the first special rule: instead of a lottery, each district must vote to select their tributes. The Cornucopia is formally introduced.",
    event5bTitle: "Beetee Wins 34th Games",
    event5bDesc: "Electrical wire strategy",
    event5bTooltip:
      "Beetee Latier from District 3 wins the 34th Hunger Games by using electrical wiring to electrocute competing tributes.",
    event5cTitle: "Wiress Wins 49th Games",
    event5cDesc: "Mirror arena victory",
    event5cTooltip:
      "Wiress from District 3 wins the 49th Hunger Games in a mirror-filled arena, using reflections to her advantage.",
    event6Title: "Haymitch Survives",
    event6Desc: "Second Quarter Quell",
    event6Tooltip:
      "The 50th Games (Second Quarter Quell) forces double the number of tributes. Haymitch Abernathy survives using the arena's force field against the final tribute, but his family is executed as punishment.",
    event7Title: "Finnick Odair Wins",
    event7Desc: "Youngest victor at 14",
    event7Tooltip:
      "Finnick from District 4 wins the 65th Hunger Games at just 14 years old, becoming the youngest victor in the history of the Games.",
    event7bTitle: "Johanna Mason Wins",
    event7bDesc: "71st Hunger Games victor",
    event7bTooltip:
      "Johanna Mason from District 7 wins the 71st Hunger Games. Known for her skill with axes, she becomes a fierce rebel ally.",
    event8Title: "Annie Cresta Wins",
    event8Desc: "Katniss's father dies",
    event8Tooltip:
      "Annie wins the 70th Hunger Games. A mining explosion in District 12 kills Katniss's father, forcing young Katniss to become the provider for her family.",
    event9Title: "74th Hunger Games",
    event9Desc: "Katniss & Peeta defy the Capitol",
    event9Tooltip:
      "Primrose is reaped but Katniss volunteers. Katniss and Peeta threaten suicide with nightlock berries, forcing the Capitol to declare them both victors - a direct act of defiance.",
    event9bTitle: "Katniss Receives the Mockingjay Pin",
    event9bDesc: "Symbol of rebellion is born",
    event9bTooltip:
      "After Katniss volunteers for Prim at the reaping, Madge Undersee visits her in the Justice Building to say goodbye and gives her the gold mockingjay pin. It becomes the symbol of the rebellion.",
    event10Title: "75th Games & Escape",
    event10Desc: "Third Quarter Quell & Rebellion",
    event10Tooltip:
      "Victors are forced to compete. A conspiracy extracts Katniss from the arena. The Capitol retaliates by destroying District 12.",
    event11Title: "Katniss Becomes the Mockingjay",
    event11Desc: "Symbol of the revolution",
    event11Tooltip:
      "Katniss agrees to become the Mockingjay, the symbol of the rebellion, in exchange for immunity for the captured victors.",
    event11bTitle: "Death of Primrose Everdeen",
    event11bDesc: "Katniss loses her sister",
    event11bTooltip:
      "During the final assault on the Capitol, a hovercraft drops bombs on Capitol children. Prim, now a medical volunteer, is killed in the explosion.",
    event11cTitle: "Execution of President Coin",
    event11cDesc: "Katniss kills the true tyrant",
    event11cTooltip:
      "Katniss realizes Coin orchestrated Prim's death. Instead of executing Snow, Katniss shoots Coin, ending her rule.",
    event11dTitle: "Death of President Snow",
    event11dDesc: "The tyrant falls",
    event11dTooltip:
      "President Snow dies in the chaos following Coin's execution, either from his injuries or trampled by the crowd.",
    event12Title: "New Republic",
    event12Desc: "Freedom for Panem",
    event12Tooltip:
      "Panem transforms into a democratic republic. The Hunger Games are permanently abolished and the arenas demolished to build memorials. Katniss and Peeta start a family.",
    viewFamilyTree: "Family Tree D12",
    familyTreeTitle: "District 12 Family Tree",
    familyTreeSubtitle:
      "The families connected by blood, love, and sacrifice in District 12",
    familyTreeInstructions:
      "Click on a person to see their details. Scroll to zoom, drag to pan.",
    familyTreeMainTitle: "Everdeen, Mellark & The Covey",
    familyTreeDonnerTitle: "Donner & Undersee",
    familyTreeHawthorneTitle: "Hawthorne",
    familyTreeFooter:
      "Based on the District 12 family trees from The Hunger Games series by Suzanne Collins",
    ftRoleMusicians: "Musicians",
    ftRoleCoveySinger: "Covey Singer",
    ftRoleCoveyMusician: "Covey Musician",
    ftRole10thVictor: "10th Games Victor",
    ftRoleCoalMiner: "Coal Miner",
    ftRoleHealer: "Healer",
    ftRoleMockingjay: "The Mockingjay",
    ftRoleMedicalVolunteer: "Medical Volunteer",
    ftRoleChild: "Child",
    ftRoleBaker: "Baker",
    ftRoleBakerVictor: "Baker / Victor",
    ftRole50thVictor: "50th Games Victor",
    ftRoleMother: "Mother",
    ftRoleBrother: "Brother",
    ftRoleGrandmother: "Grandmother",
    ftRoleSweetshopOwner: "Sweetshop Owner",
    ftRole50thTribute: "50th Games Tribute",
    ftRoleMayorsWife: "Mayor's Wife",
    ftRoleMayor: "Mayor of District 12",
    ftRoleMayorsDaughter: "Mayor's Daughter",
    ftRoleSeamMother: "Seam Mother",
    ftRoleHunter: "Hunter",
    ftRoleLaundress: "Laundress",
    ftCoveyEldersDesc: "Nomadic musical family of District 12.",
    ftBarbAzureDesc: "Covey member. Probable mother of Burdock Everdeen.",
    ftMaudeIvoryDesc: "Covey member. Probable mother of Lenore Dove.",
    ftTamAmberDesc: "Covey member who crafted arrows for Burdock.",
    ftLucyGrayDesc: "Victor of the 10th Hunger Games and Covey member.",
    ftClerkCarmineDesc:
      "Covey member, guardian of Lenore Dove. Distant family of the Baird cousins.",
    ftBillyTaupeDesc:
      "Covey member and brother of Clerk Carmine. Former love of Lucy Gray.",
    ftBurdockDesc: "Katniss's father, died in a mining accident.",
    ftAsteridDesc: "Katniss's mother, from the merchant class.",
    ftKatnissDesc: "Victor of the 74th Hunger Games and face of the rebellion.",
    ftPrimroseDesc:
      "Katniss's younger sister, killed during the Second Rebellion.",
    ftKatnissSonDesc: "Katniss and Peeta's son.",
    ftKatnissDaughterDesc: "Katniss and Peeta's daughter.",
    ftOthoDesc: "Owner of the Mellark Bakery, Peeta's father.",
    ftMrsMellarkDesc: "Peeta's mother, known for her cruelty.",
    ftPeetaDesc: "Victor of the 74th Hunger Games. Married Katniss.",
    ftPeetaBrotherDesc: "Peeta's unnamed older brother.",
    ftLenoreDoveDesc: "Haymitch's love, cousin of Burdock Everdeen.",
    ftPaAbernathyDesc: "Haymitch's father, died in a mining fire.",
    ftWillamaeDesc:
      "Haymitch's mother, known as Ma. Raised her sons alone after Pa's death.",
    ftSidDesc: "Haymitch's younger brother, who loved the stars.",
    ftHaymitchDesc:
      "Victor of the 50th Hunger Games. Mentor to Katniss and Peeta.",
    ftDonnerGrandmotherDesc:
      "Maysilee's grandmother, original owner of the mockingjay pin.",
    ftMrDonnerDesc: "Owner of the Donner Sweetshop in District 12.",
    ftMrsDonnerDesc: "Co-owner of the Donner Sweetshop.",
    ftMaysileeDesc:
      "Tribute in the 50th Hunger Games. Owned the mockingjay pin, later passed to her niece Madge.",
    ftMerrileeDesc:
      "Maysilee's sister. Married Mayor Undersee, mother of Madge.",
    ftMayorUnderseeDesc: "Mayor of District 12.",
    ftMadgeDesc:
      "Gave Katniss the mockingjay pin before the 74th Hunger Games.",
    ftHawthorneSrDesc: "Gale's father, died in the same accident as Burdock.",
    ftHawthorneMrsDesc: "Gale's mother.",
    ftGaleDesc: "Katniss's best friend and hunting partner.",
    ftHazelleDesc: "Gale's sister, works as a laundress.",
  },
  es: {
    viewMap: "Ver Mapa",
    districtsOfPanem: "Distritos de Panem",
    clickDistrictInfo:
      "Haz clic en el escudo del distrito para obtener más información.",
    location: "Ubicación",
    industry: "Industria",
    victors: "Vencedores",
    victorOf: "Vencedor de los",
    coVictorOf: "Co-vencedor de los",
    hungerGames: "Juegos del Hambre",
    officialMapOfPanem: "Mapa Oficial de Panem",
    alternativeMapOfPanem: "Mapa Alternativo de Panem",
    mapOfPanem: "Mapa de Panem",
    backHome: "Volver al Inicio",
    otherDistricts: "Otros Distritos",
    footerDescription:
      "Para que puedas conocer los distritos de la nación distópica de Panem de la saga Los Juegos del Hambre.",
    footerSource: "Toda la información mostrada aquí se obtiene de",
    footerWiki: "The Hunger Games Fandom Wiki.",
    codedBy: "Codificado con 🤍 por Emcahell",
    titleDistrict1: "Distrito 1",
    titleDistrict2: "Distrito 2",
    titleDistrict3: "Distrito 3",
    titleDistrict4: "Distrito 4",
    titleDistrict5: "Distrito 5",
    titleDistrict6: "Distrito 6",
    titleDistrict7: "Distrito 7",
    titleDistrict8: "Distrito 8",
    titleDistrict9: "Distrito 9",
    titleDistrict10: "Distrito 10",
    titleDistrict11: "Distrito 11",
    titleDistrict12: "Distrito 12",
    victorUnspecifiedFemale5: "Mujer del Distrito 5",
    victorUnspecifiedMale5: "Hombre del Distrito 5",
    victorUnspecifiedFemale6: "Mujer del Distrito 6",
    victorUnspecifiedMale6: "Hombre del Distrito 6",
    victorUnspecifiedFemale9: "Mujer del Distrito 9",
    victorUnspecifiedMale9: "Hombre del Distrito 9",
    victorUnspecifiedFemale10: "Mujer del Distrito 10",
    victorUnspecifiedMale10: "Hombre del Distrito 10",
    unknownGames: "Vencedor de unos Juegos del Hambre desconocidos",
    locationD1:
      "El distrito 1 se encuentra en el oeste de América del Norte, al noroeste de Panem a lo largo de las Montañas Rocosas. Geográficamente, el territorio del Distrito 1 se centra principalmente en los estados de Montana, Idaho, Utah y Wyoming. El Distrito 1 limita con cuatro distritos, así como el Capitolio: Distrito 4 (al oeste), Distrito 7 (al norte), Distrito 9 (al este), el Capitolio (al sureste) y Distrito 5 (al sur).",
    industryD1:
      "Ellos estaban a cargo de la producción de artículos de lujo para el Capitolio. Alrededor de la época de los 10mos Juegos del Hambre, producían artículos como licor decente, maquillaje y tabaco, aunque a menudo eran difíciles de encontrar y muy caros, lo que hizo florecer el mercado negro en el Capitolio.",
    locationD2:
      "El Distrito 2 está ubicado directamente al sur del Capitolio, centrado principalmente en los estados de Colorado y Nuevo México.",
    industryD2:
      "Estaban a cargo de mampostería y construcción, con minas o canteras de piedra, pero con el tiempo se dedicaron a la formación y alojamiento de armamento y de las Fuerzas de Paz.",
    locationD3:
      "El Distrito 3 se encuentra en la parte oriental del continente, centrado en los estados de Illinois, Indiana, Iowa y Minnesota. Limita con los distritos 12 (al este), 8 (al sur), 9 (al oeste) y 6 (al norte).",
    industryD3:
      "El distrito contiene muchas fábricas para la producción de dispositivos electrónicos. Los niños en el Distrito 3 aprenden técnicas de edición de audio en la escuela, y los tributos parecen tener habilidades prácticas con el cableado y la programación de varios dispositivos electrónicos. Esto hace que sea probable que, a diferencia de los niños en el Distrito 12, se espera que trabajen en la industria de su distrito antes de cumplir 18 años. Además, a pesar de que el Distrito 6 es el distrito responsable del transporte, Katniss menciona que el Distrito 3 fabrica automóviles.",
    locationD4:
      "El Distrito 4 se encuentra en la costa occidental del continente, aproximadamente correspondiente a California y Oregon, con territorios notables en Nevada y el sur de Washington. El distrito limita con el Distrito 7 (al norte), el Distrito 1 (al este) y el Distrito 5 (al sureste).",
    industryD4:
      "Su principal industria es la pesca, y los niños están capacitados para puestos de trabajo en esta industria desde una edad temprana. No se sabe mucho sobre la forma de vivir del Distrito 4 aparte de su especialización en la pesca. Esto los hace expertos en atar nudos, tejer y empuñar armas como lanzas y tridentes. También pueden fabricar y usar redes, improvisar anzuelos de peces e identificar la vida marina comestible. Presumiblemente, también practican la acuicultura.",
    locationD5:
      "El Distrito 5 se encuentra directamente al suroeste del Capitolio, principalmente centrado en el estado de Arizona y el sur de Utah. Esta ubicación geográfica tiene sentido, ya que tendría que estar ubicada muy cerca para satisfacer las necesidades de energía de la ciudad. Estar ubicado alrededor del río Colorado. El Distrito 5 limita con el Distrito 4 (al noreste), el Distrito 1 (al norte), el Capitolio (al noroeste), el Distrito 2 (al este) y el Distrito 10 (al sureste).",
    industryD5:
      "Su principal industria es la energía y la electricidad, y el distrito es responsable de generar la energia de toda la nación. La industria del distrito, junto con el Distrito 6, son los últimos en revelarse. En ninguna parte de los libros originales de la trilogía sugieren que el Distrito 5 proporciona energía y servicios públicos a la nación, a diferencia del Distrito 9 es el distrito de granos. Solo se revelan en el momento en que se anunció la adaptación cinematográfica de Los Juegos del Hambre. El ataque de la presa hidroeléctrica en el Distrito 5 es una nueva adición a la Segunda Rebelión.",
    locationD6:
      "El distrito 6 se encuentra en el área del medio oeste de América del Norte, principalmente centrada en los estados de Michigan y Wisconsin y la parte sur de la provincia canadiense de Ontario. Distrito 3 de Fronteras (al sur y al este), Distrito 9 (al noroeste) y Distrito 13 (al este).",
    industryD6:
      "La industria del Distrito 6 es el transporte. La industria del distrito, junto con el Distrito 5, son los últimos en revelarse, solo en el momento en que se anunció la adaptación cinematográfica de Los Juegos del Hambre. En ninguna parte de los libros de trilogía originales se sugiere que el Distrito 6 proporciona transporte, a diferencia del caso del Distrito 9 que se insinúa desde el distrito de trigo y pan no identificado.",
    locationD7:
      "El Distrito 7 se encuentra en el noroeste del Pacífico, también conocido como Cascadia. Su territorio cubre principalmente las provincias canadienses de Columbia Británica, Alberta y Saskatchewan, así como los estados de los Estados Unidos de Montana y Washington. Según este mapa, es uno de los pocos distritos ubicados principalmente fuera de los Estados Unidos contiguos, junto con el Distrito 13 y el Distrito 10. Limita con el Distrito 4 (al suroeste), el Distrito 1 (al sur y al sureste) y el Distrito 9 (al este).",
    industryD7:
      "El Distrito 7 proporciona madera y papel al Capitolio. No se menciona nada sobre la vida típica de los ciudadanos. Sin embargo, Katniss notó la habilidad de Johanna con los hachas, y reflexionó que Johanna probablemente los había estado manejando desde que era una niña pequeña. Si ese es el caso, parece que los ciudadanos del Distrito 7 comenzaron a trabajar en la industria maderera de su distrito a una edad temprana. Tanto Lamina como Treech también manejaron hachas durante los 10mos Juegos del Hambre, apoyando la teoría de Katniss.",
    locationD8:
      "El territorio del distrito 8 corresponde a una región larga y estrecha en la parte norte del sureste de América del Norte. Su territorio se centra principalmente en los estados de Kansas, Missouri, el sur de Illinois y Tennessee. El Distrito 8 limita con otros cinco distritos: Distrito 12 (al este y al noreste), Distrito 11 (al sur), Distrito 2 (al oeste), Distrito 9 (al noroeste) y Distrito 3 (al norte).",
    industryD8:
      "Su principal industria es la producción textil. Tienen al menos una fábrica que se utiliza para hacer los uniformes de los Agentes de la Paz.",
    locationD9:
      "El Distrito 9 se encuentra en la zona central de América del Norte, a lo largo de la región conocida como las Grandes Llanuras. De sur a norte, su territorio corresponde principalmente a los estados estadounidenses de Nebraska, Dakota del Norte, Dakota del Sur y la provincia canadiense de Manitoba. El Distrito 9 limita con seis distritos, así como el Capitolio, la mayor parte de cualquier distrito: Distrito 6 (al noreste), Distrito 3 (al este), Distrito 8 (al sur y sureste), Distrito 2 (al suroeste), el Capitolio (al oeste), Distrito 1 (al oeste) y Distrito 7 (al noroeste). El Distrito 9 es el distrito más pobre de los que comparte frontera con el Capitolio.",
    industryD9:
      "Su industria principal es la producción de cereales. Se sabía que tenía una educación deficiente y largas horas en los campos de grano. Su territorio se correlaciona fuertemente con la industria del distrito como la cesta de pan de Panem, ya que la región de las Grandes Llanuras es conocida por sus tierras de cultivo planas y campos de trigo. Se menciona que el distrito tiene muchas fábricas, muy probablemente para procesar el grano cosechado.",
    locationD10:
      "El distrito 10 está situado en el suroeste de América del Norte. Como el distrito más meridional de Panem, el territorio del Distrito 10 corresponde principalmente a la parte occidental del estado estadounidense de Texas y a los estados del norte y centro de México de Aguascalientes, Chihuahua, Coahuila, Durango, Guanajuato, Nuevo León, San Luis Potosí y Tamaulipas. El Distrito 10 limita con tres distritos: Distrito 11 (al noreste), Distrito 2 (al norte) y Distrito 5 (al noroeste).",
    industryD10:
      "Su principal industria es la ganadería y proporciona carne al Capitolio. El distrito 10 operaba mataderos, cerdos de carnicería y ganado. A diferencia del Distrito 12, el 10 fue uno de los distritos donde los adolescentes participaron en su industria, dando a algunos tributos una ventaja en la arena.",
    locationD11:
      "El Distrito 11 se encuentra en el extremo sureste de América del Norte, a lo largo de la costa del Golfo. De oeste a este, su territorio corresponde principalmente a los estados de Oklahoma, Arkansas, Louisiana, Mississippi, Alabama y Georgia. El Distrito 11 limita con cuatro distritos: Distrito 12 (al noreste), Distrito 8 (al norte), Distrito 10 (al suroeste) y Distrito 2 (al noroeste).",
    industryD11:
      "El Distrito 11 está especializado en agricultura. Hay muchos nidos de rastrevispulas en el distrito, lo que hace que los trabajadores mantengan las hojas médicas a mano. En los huertos, los niños pequeños son enviados a ramas altas para recoger las frutas más altas. Trabajan largas horas desde el amanecer hasta el atardecer. Durante la cosecha, a menudo funcionan hasta mucho después del anochecer, utilizando la luz de la antorcha y las gafas de visión nocturna. Los cultivos son enviados al Capitolio, y la gente en el distrito no puede comerlos. Además de cuidar los campos y huertos, el Distrito 11 es responsable de los rebaños de ganado lechero.",
    locationD12:
      "El distrito 12 está ubicado en el noreste de Norteamérica. Su territorio corresponde principalmente a los estados de Kentucky, Ohio y Virginia Occidental. Históricamente, esta región es conocida por su fuerte industria minera de carbón y sus extensos lechos de carbón, particularmente en Virginia Occidental y Kentucky, que se unen bien con la industria del distrito.",
    industryD12:
      "La principal industria del Distrito 12 es la minería del carbón, pero después de la Segunda Rebelión, su principal industria se convirtió en medicina.",
    viewTimeline: "Ver Línea de Tiempo",
    timelineTitle: "Línea de Tiempo",
    timelineSubtitle: "Los eventos principales de Panem",
    timelineScrollHint: "Desliza para ver más",
    timelineLegend: "Pasa el cursor sobre los puntos para más detalles",
    legendMajor: "Principal",
    legendNotable: "Notable",
    legendMinor: "Menor",
    legendDeath: "Muerte",
    event1Title: "Los Días Oscuros Comienzan",
    event1Desc: "Guerra civil estalla en Panem",
    event1Tooltip:
      "Los 13 distritos inician una guerra civil contra el Capitolio. El Distrito 13 se convierte en el cuartel general militar, distribuyendo armas y herramientas de comunicación a los rebeldes.",
    event2Title: "Tratado de Traición",
    event2Desc: "Creación de los Juegos del Hambre",
    event2Tooltip:
      "Concebido por Casca Highbottom y Crassus Snow. Un niño y una niña (12-18 años) de cada distrito son seleccionados anualmente para luchar a muerte.",
    event3Title: "Primeros Juegos del Hambre",
    event3Desc: "Celebrados en la Arena del Capitolio",
    event3Tooltip:
      "Los primeros Juegos del Hambre se celebran en la Arena del Capitolio. Los primeros Juegos son simples y carecen del espectáculo que desarrollarían con el tiempo.",
    event4Title: "Los 10mos Juegos",
    event4Desc: "Lucy Gray Baird gana",
    event4Tooltip:
      "Lucy Gray Baird gana como primera vencedora del Distrito 12. Estudiantes del Capitolio se convierten en mentores, introduciendo entrevistas y patrocinios. Un joven Coriolanus Snow es enviado al Distrito 12 como Agente de la Paz.",
    event5Title: "Primer Vasallaje de los 25",
    event5Desc: "Tributos elegidos por votación",
    event5Tooltip:
      "Los 25tos Juegos introducen la primera regla especial: en lugar de un sorteo, cada distrito debe votar para elegir a sus tributos. Se introduce formalmente la Cornucopia.",
    event5bTitle: "Beetee Gana los 34tos Juegos",
    event5bDesc: "Estrategia con cable eléctrico",
    event5bTooltip:
      "Beetee Latier del Distrito 3 gana los 34tos Juegos del Hambre usando cableado eléctrico para electrocutar a los tributos rivales.",
    event5cTitle: "Wiress Gana los 49nos Juegos",
    event5cDesc: "Victoria en arena de espejos",
    event5cTooltip:
      "Wiress del Distrito 3 gana los 49nos Juegos del Hambre en una arena llena de espejos, usando los reflejos a su favor.",
    event6Title: "Haymitch Sobrevive",
    event6Desc: "Segundo Vasallaje",
    event6Tooltip:
      "Los 50mos Juegos (Segundo Vasallaje) obligan a enviar el doble de tributos. Haymitch Abernathy sobrevive usando la fuerza del campo de la arena contra el último tributo, pero su familia es ejecutada como castigo.",
    event7Title: "Finnick Odair Gana",
    event7Desc: "Vencedor más joven a los 14",
    event7Tooltip:
      "Finnick del Distrito 4 gana los 65tos Juegos a los 14 años, convirtiéndose en el vencedor más joven de la historia de los Juegos.",
    event7bTitle: "Johanna Mason Gana",
    event7bDesc: "Vencedora de los 71ros Juegos",
    event7bTooltip:
      "Johanna Mason del Distrito 7 gana los 71ros Juegos del Hambre. Conocida por su habilidad con los hachas, se convierte en una feroz aliada rebelde.",
    event8Title: "Annie Cresta Gana",
    event8Desc: "Muerte del padre de Katniss",
    event8Tooltip:
      "Annie gana los 70mos Juegos. Una explosión minera en el Distrito 12 mata al padre de Katniss, forzando a una joven Katniss a ser la proveedora de su familia.",
    event9Title: "74tos Juegos del Hambre",
    event9Desc: "Katniss y Peeta desafían al Capitolio",
    event9Tooltip:
      "Primrose es seleccionada pero Katniss se ofrece como voluntaria. Katniss y Peeta amenazan con suicidio con bayas nightlock, forzando al Capitolio a declarar a ambos vencedores - un acto directo de desafío.",
    event9bTitle: "Katniss Recibe el Pin del Sinsajo",
    event9bDesc: "El símbolo de la rebelión nace",
    event9bTooltip:
      "Después de que Katniss se ofrece como voluntaria por Prim en la cosecha, Madge Undersee la visita en el Edificio de Justicia para despedirse y le regala el Pin dorado del sinsajo. Se convierte en el símbolo de la rebelión.",
    event10Title: "75tos Juegos y Escape",
    event10Desc: "Tercer Cuarto Quell y Rebelión",
    event10Tooltip:
      "Los vencedores son forzados a competir. Una conspiración saca a Katniss de la arena. El Capitolio responde destruyendo el Distrito 12.",
    event11Title: "Katniss se Convierte en el Sinsajo",
    event11Desc: "Símbolo de la revolución",
    event11Tooltip:
      "Katniss acepta convertirse en el Sinsajo, el símbolo de la rebelión, a cambio de inmunidad para los vencedores capturados.",
    event11bTitle: "Muerte de Primrose Everdeen",
    event11bDesc: "Katniss pierde a su hermana",
    event11bTooltip:
      "Durante el asalto final al Capitolio, una aeronave lanza bombas sobre niños del Capitolio. Prim, ahora voluntaria médica, muere en la explosión.",
    event11cTitle: "Ejecución de la Presidenta Coin",
    event11cDesc: "Katniss mata a la verdadera tirana",
    event11cTooltip:
      "Katniss se da cuenta de que Coin orquestó la muerte de Prim. En lugar de ejecutar a Snow, Katniss dispara a Coin, terminando su gobierno.",
    event11dTitle: "Muerte del Presidente Snow",
    event11dDesc: "El tirano cae",
    event11dTooltip:
      "El Presidente Snow muere en el caos después de la ejecución de Coin, ya sea por sus heridas o arrollado por la multitud.",
    event12Title: "La Nueva República",
    event12Desc: "Libertad para Panem",
    event12Tooltip:
      "Panem se transforma en una república democrática. Los Juegos del Hambre son abolidos permanentemente y las arenas demolidas para construir monumentos conmemorativos. Katniss y Peeta forman una familia.",
    viewFamilyTree: "Árbol Familiar D12",
    familyTreeTitle: "Árbol Familiar Distrito 12",
    familyTreeSubtitle:
      "Las familias conectadas por sangre, amor y sacrificio en el Distrito 12",
    familyTreeInstructions:
      "Haz clic en una persona para ver sus detalles. Desplaza para hacer zoom, arrastra para mover.",
    familyTreeMainTitle: "Everdeen, Mellark y la Covey",
    familyTreeDonnerTitle: "Donner y Undersee",
    familyTreeHawthorneTitle: "Hawthorne",
    familyTreeFooter:
      "Basado en los árboles familiares del Distrito 12 de la saga Los Juegos del Hambre de Suzanne Collins",
    ftRoleMusicians: "Músicos",
    ftRoleCoveySinger: "Cantante de la Covey",
    ftRoleCoveyMusician: "Músico de la Covey",
    ftRole10thVictor: "Vencedor de los 10mos Juegos",
    ftRoleCoalMiner: "Minero de carbón",
    ftRoleHealer: "Curandera",
    ftRoleMockingjay: "El Sinsajo",
    ftRoleMedicalVolunteer: "Voluntaria médica",
    ftRoleChild: "Hijo/a",
    ftRoleBaker: "Panadero",
    ftRoleBakerVictor: "Panadero / Vencedor",
    ftRole50thVictor: "Vencedor de los 50mos Juegos",
    ftRoleMother: "Madre",
    ftRoleBrother: "Hermano",
    ftRoleGrandmother: "Abuela",
    ftRoleSweetshopOwner: "Dueño de la Dulcería",
    ftRole50thTribute: "Tributo de los 50mos Juegos",
    ftRoleMayorsWife: "Esposa del Alcalde",
    ftRoleMayor: "Alcalde del Distrito 12",
    ftRoleMayorsDaughter: "Hija del Alcalde",
    ftRoleSeamMother: "Madre del Seam",
    ftRoleHunter: "Cazador",
    ftRoleLaundress: "Lavandera",
    ftCoveyEldersDesc: "Familia musical nómada del Distrito 12.",
    ftBarbAzureDesc: "Miembro de la Covey. Posible madre de Burdock Everdeen.",
    ftMaudeIvoryDesc: "Miembro de la Covey. Posible madre de Lenore Dove.",
    ftTamAmberDesc: "Miembro de la Covey que fabricaba flechas para Burdock.",
    ftLucyGrayDesc:
      "Vencedora de los 10mos Juegos del Hambre y miembro de la Covey.",
    ftClerkCarmineDesc:
      "Miembro de la Covey, tutor de Lenore Dove. Familia lejana de los primos Baird.",
    ftBillyTaupeDesc:
      "Miembro de la Covey y hermano de Clerk Carmine. Ex-amor de Lucy Gray.",
    ftBurdockDesc: "Padre de Katniss, murió en un accidente minero.",
    ftAsteridDesc: "Madre de Katniss, de la clase mercantil.",
    ftKatnissDesc:
      "Vencedora de los 74tos Juegos del Hambre y rostro de la rebelión.",
    ftPrimroseDesc:
      "Hermana menor de Katniss, asesinada durante la Segunda Rebelión.",
    ftKatnissSonDesc: "Hijo de Katniss y Peeta.",
    ftKatnissDaughterDesc: "Hija de Katniss y Peeta.",
    ftOthoDesc: "Dueño de la Panadería Mellark, padre de Peeta.",
    ftMrsMellarkDesc: "Madre de Peeta, conocida por su crueldad.",
    ftPeetaDesc: "Vencedor de los 74tos Juegos del Hambre. Casado con Katniss.",
    ftPeetaBrotherDesc: "Hermano mayor de Peeta sin nombre.",
    ftLenoreDoveDesc: "El amor de Haymitch, prima de Burdock Everdeen.",
    ftPaAbernathyDesc: "Padre de Haymitch, murió en un incendio minero.",
    ftWillamaeDesc:
      "Madre de Haymitch, conocida como Ma. Crió sola a sus hijos tras la muerte de Pa.",
    ftSidDesc: "Hermano menor de Haymitch, que amaba las estrellas.",
    ftHaymitchDesc:
      "Vencedor de los 50mos Juegos del Hambre. Mentor de Katniss y Peeta.",
    ftDonnerGrandmotherDesc:
      "Abuela de Maysilee, dueña original del pin del sinsajo.",
    ftMrDonnerDesc: "Dueño de la Dulcería Donner en el Distrito 12.",
    ftMrsDonnerDesc: "Co-dueña de la Dulcería Donner.",
    ftMaysileeDesc:
      "Tributo de los 50mos Juegos del Hambre. Dueña del pin del sinsajo, luego pasado a su sobrina Madge.",
    ftMerrileeDesc:
      "Hermana de Maysilee. Casada con el Alcalde Undersee, madre de Madge.",
    ftMayorUnderseeDesc: "Alcalde del Distrito 12.",
    ftMadgeDesc:
      "Le dio a Katniss el pin del sinsajo antes de los 74tos Juegos del Hambre.",
    ftHawthorneSrDesc:
      "Padre de Gale, murió en el mismo accidente que Burdock.",
    ftHawthorneMrsDesc: "Madre de Gale.",
    ftGaleDesc: "Mejor amigo y compañero de caza de Katniss.",
    ftHazelleDesc: "Hermana de Gale, trabaja como lavandera.",
  },
};
