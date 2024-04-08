document.addEventListener('alpine:init', () => {
    Alpine.store('wildlife_dept', {
        is_editor_visible: false,

        block_two: {
            title: 'INTRODUCTION',
            body: "The Department of Wildlife Conservation has been entrusted with the responsibility of preserving eco"
                +" system endowed with various plants and animal species which has inherited the country with enormous"
                +" bio-diversity."
                +" The main function of the Department of Wildlife Conservation established in 1949 is the conservation"
                +" of wildlife resources in Sri Lanka. Accordingly,"
                +" the sources of water feeding all the main revivers in Sri Lanka and catchment areas of 40 major"
                +" reservoirs providing water for agriculture and hydro-power generation are"
                +" protected within this wildlife reservation network which exceed 13% of the total land area of the"
                +" island."
                +" The responsibility of managing this wildlife reservation network is solely falling upon the"
                +" Department of Wildlife Conservation."
                +" This network consists of reservations declared under various reservation levels."
        },

        block_three: {
            title: '',

            fpoint1: "Ensuring sustainability of wildlife resources found in all geographical,"
                +" climatic biological zones through the establishment of wildlife reservation network"
                +" in Sri Lanka",

            fpoint2: "Declaration and proper management of wildlife reservations with the specific"
                +" objectives of"
                +" preserving catchment areas of major reservoirs providing water for"
                +" agriculture and hydro-power generation, preservation of religious and cultural"
                +" heritage,"
                +" endemic and rear wildlife species and exclusive ecological systems",
                
            fpoint3: "Ensuring long-term existence of threatened endemic wildlife species"
                +" by implementing special projects and adopting suitable measures for conservation of"
                +" the same.",
            
            fpoint4: "Ensuring the safety of wild animal species living outside the wildlife reservation"
                +" areas",

            fpoint5: "Effective implementation of the contemporary national wildlife policy and the law.",
            
            fpoint6: "Taking action upon the authority given for implementing Convention on International"
                +" Trade on Endangered Species (CITES),"
                +" Convention on Internationally Important Wet Lands (Ramsar) and Convention on"
                +" Migratory Species (CMS-Bonn).",
            
            fpoint7: "Planning and Implementation of education programmers on wildlife to obtain maximum"
                +" contribution of the general public,"
                +" public officers and other group interested in wildlife conservation.",
            
            fpoint8: "Planning and implementation socio-economic development programmes aimed at"
                +" minimizing people's dependence on natural resources in wildlife reservations.",
            
            fpoint9: "Promotion of eco-tourism in reservation areas and keeping its contribution to the"
                +" national economy at optimum level.",
            
            fpoint10: "Promoting research activities on collecting necessary data and"
                +" information which facilitate wildlife conservation and scientific management of the"
                +" same.",
            
            fpoint11: "Strengthening of the conservation process by building the mutual trust and"
                +" coordination with the other institutions involved in conservation of natural"
                +" resources",
            
            fpoint12: "Conducting educational programs on wildlife conservation for the government"
                +" officers, general public and other group",
            
            fpoint13: "Implementation of socio economic development programs"
                +" targeting minimizing the dependence of forest associate populations on wildlife"
                +" resources.",
            
            spoint1: "Strengthening the Security",
            spoint2: "Strengthening legal infrastructure",
            spoint3: " Strengthening the border fence construction for elephant particularly in the"
                +" vulnerable areas and construction of elephant care center",
            spoint4: "Livelihood development",
            spoint5: "Wildlife tourism Development",
            spoint6: "Research and Development",
            spoint7: " Strengthening Department of wildlife conservation",

            vpoint1: "Vision -"
                +" Long term conservation of wildlife resources for present and future"
                +" generations.",
            vpoint2: "Mission -" 
                +" To ensure conservation of wildlife resources by all together under"
                +" Professional Management.",

        },

        block_four: {
            title: "WILDLIFE PROTECTED AREAS IN SRI LANKA",

            sub_title1: "NATIONAL PARKS",
            sub_title2: "SANCTUARIES",

            park1: "Ruhuna (Yala) N.P",
            park2: "Wilpattuwa",
            park3: "Gal Oya",
            park4: "Udawalawa",
            park5: "Maduruoya",
            park6: "Wasgamuwa",

            num1: "011-xxxxxxx",
            num2: "011-xxxxxxx",
            num3: "011-xxxxxxx",
            num4: "011-xxxxxxx",
            num5: "011-xxxxxxx",
            num6: "011-xxxxxxx",

            visitors1: "√",
            visitors2: "√",
            visitors3: "√",
            visitors4: "√",
            visitors5: "√",
            visitors6: "√",

            point1: "Wilpattu_North",
            point2: "Telwatta",
            point3: "Weerawila_Tissa",
            point4: "Katagamuwa",
            point5: "Polonnaruwa",
            point6: "Tangamallei",
            point7: "Mihinthale",
            point8: "Kataragama",
            point9: "Anuradhapura",
            point10: "Udawattakelle",
            point11: "Rocky islets (Ambalangoda)",
            point12: "Peakwilderness",
            point13: "Kalametiya",
            point14: "Sri Jayawardenapura",
            point15: "Victoriya_Randenigala_Rantambe",
            point16: "Parapatuwa Nuns Island",
            point17: "Kahalla_Pallekelle",
            point18: "Sigiriya",
            point19: "Bellanwila_Attidiya",
            point20: "Bar Reef Island (Welipara)",
            point21: "Nimalawa",
            point22: "Madunagala",
            point23: "Muthurajawela Block i",
            point24: "Anawilundawa",
        },

        toggleEditor(block_id){
            this.is_editor_visible = block_id;
        },
        saveBlock(block_id){

            this.toggleEditor(false);
        }
    });
});