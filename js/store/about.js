document.addEventListener('alpine:init', () => {
    Alpine.store('about', {
        is_editor_visible: false,
        block_one: [
            {
                image: '/Web-Dev-Assessment/images/aboutpic.jpg',
                title: 'THE SRI LANKAN WILDLIFE EXPLORATION',
            },

        ],

        block_two: {
            title: "Horton Plains National Park",

            body: "Horton Plains National Park, nestled in the central highlands of Sri Lanka near Nuwara"
                +" Eliya, is a captivating expanse of natural beauty spanning over 31,000 acres."
                +" Renowned for its panoramic vistas and diverse ecosystems, the park boasts iconic attractions"
                +" like 'World's End', "
                +" a dramatic cliff offering breathtaking views, and the serene Baker's"
                +" Falls. Its unique montane cloud forests shelter endemic species, including the rare Horton"
                +" Plains slender loris and various bird species. Visitors can traverse scenic trails,"
                +" immersing themselves in the park's rich biodiversity, which contributes to the conservation"
                +" of the island's highland ecosystems. Designated a UNESCO World Heritage Site, Horton Plains"
                +" promises a remarkable journey through rolling hills, grasslands, and lush forests,"
                +" making it a haven for nature enthusiasts and a vital sanctuary for Sri Lanka's remarkable"
                +" biodiversity.",

            image1: "/Web-Dev-Assessment/images/hp2.jpg",
            image2: "/Web-Dev-Assessment/images/hp1.jpg",
            image3: "/Web-Dev-Assessment/images/hp3.jpg",
            link: "https://maps.app.goo.gl/Wrrz4XpCVzx5yiTD6",
        },

        block_three: {
            title: "Sinharaja Forest Reserve",

            body: "Sinharaja Forest Reserve, a UNESCO World Heritage Site nestled in the southwestern lowland"
                +" wet zone of Sri Lanka, stands as a verdant testament to the island's ecological richness."
                +" Spanning approximately 11,187 hectares, this tropical rainforest is a biodiversity hotspot,"
                +" boasting a profusion of endemic flora and fauna found nowhere else on Earth."
                +" With its dense canopy, Sinharaja shelters a remarkable array of wildlife, including the"
                +"vibrant Sri Lanka blue magpie, the elusive purple-faced langur, and a kaleidoscope of"
                +" endemic amphibians and insects."
                +" Trekking through its labyrinthine trails unveils towering trees, glistening streams, and the"
                +" symphony of bird calls, offering a immersive experience for nature enthusiasts. The"
                +" reserve's conservation significance extends beyond its borders,"
                +" contributing to the preservation of Sri Lanka's unique biological heritage and providing a"
                +" living classroom for those eager to explore the wonders of a tropical rainforest ecosystem.",

            image1: "/Web-Dev-Assessment/images/sf1.jpg",
            image2: "/Web-Dev-Assessment/images/sf2.jpp",
            image3: "/Web-Dev-Assessment/images/sf3.jpg",
            link: "https://maps.app.goo.gl/psNkuhGDPV9DzLD59",
        },

        block_four: {
            title: "Minneriya National Park",

            body: "Located in the North Central Province of Sri Lanka, 8,889 hectares of magical refuge that is"
                +" Minneriya National Park is well-known for its breathtaking yearly event called the"
                +" 'Gathering'."
                +" The park, which revolves on the historic Minneriya Tank, comes to life from June to"
                +" September, when hundreds of Asian elephants gather close to the reservoir to feed and"
                +" mingle, producing a breathtaking display."
                +" Beyond the famous Gathering, the park is home to a variety of habitats including as marshes"
                +" and grasslands that support a rich biodiversity that includes many different species of"
                +" birds, sloth bears, leopards, sambar deer, and Sri Lankan axis deer."
                +" The park's historical charm is enhanced by the opportunity for tourists to examine old"
                +" inscriptions and ruins among its natural beauty."
                +" A safari via Minneriya provides.",

            image1: "/Web-Dev-Assessment/images/mf1.jpg",
            image2: "/Web-Dev-Assessment/images/mf2.jpg",
            image3: "/Web-Dev-Assessment/images/mf3.jpg",
            link: "https://maps.app.goo.gl/xaRtRcg7WEyhokqL6",
        },

        block_five: {
            title: "Biodiversity Snapshot",

            sub_title1: "Animal Name",
            sub_title2: "Interesting Facts",
            sub_title3: "Search More",
            
            name1: "Horton Plains Slender Loris",
            name2: "Sambar Deer",
            name3: "Sri Lanka Blue Magpie",
            name4: "Sri Lanka Kangaroo Lizard",
            name5: "Asian Elephant",
            name6: "Sri Lankan Axis Deer",

            fact1: "Endemic to Horton Plains, nocturnal primate",
            fact2: "Large herbivore found in Horton Plains",
            fact3: "Colorful and endemic bird in Sinharaja",
            fact4: "Endemic reptile species in Sinharaja",
            fact5: "Featured in the 'Gathering' at Minneriya",
            fact6: "Common herbivore in Minneriya National Park",

            link1: "https://en.wikipedia.org/wiki/Red_slender_loris",
            link2: "https://en.wikipedia.org/wiki/Sambar_deer",
            link3: "https://en.wikipedia.org/wiki/Sri_Lanka_blue_magpie",
            link4: "https://en.wikipedia.org/wiki/Otocryptis_wiegmanni",
            link5: "https://en.wikipedia.org/wiki/Asian_elephant",
            link6: "https://en.wikipedia.org/wiki/Sri_Lankan_axis_deer",

        },

        toggleEditor(block_id){
            this.is_editor_visible = block_id;
        },
        saveBlock(block_id){

            this.toggleEditor(false);
        }
    });
});