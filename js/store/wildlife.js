document.addEventListener('alpine:init', () => {
    Alpine.store('wildlife', {
        is_editor_visible: false,
        block_one: [
            {
                image: '/Web-Dev-Assessment/images/animal.jpeg',
                title: 'INDIGENOUS ANIMAL OF SRI LANKA',
            },

        ],

        block_two: {
            title: "INTRODUCTION",
            body: "Sri Lanka, a tropical island nestled in the Indian Ocean, boasts a rich biodiversity that includes a"
                +" variety of indigenous animals."
                +" The country's diverse ecosystems, ranging from lush rainforests to arid plains, provide a habitat"
                +" for a wide array of unique wildlife."
                +" Here's a brief overview of some notable indigenous animals in Sri Lanka.",
        },

        block_three: {
            title: "Asian Elephant",
            sub_title: "Elephas maximus maximus",
            body: "The Asian Elephant (Elephas maximus maximus) is the largest land animal in Asia,"
                +" characterized by its"
                +" immense size, distinctive trunk, and complex social structure."
                +" Indigenous to Sri Lanka, these majestic creatures inhabit a range of ecosystems, from"
                +" grasslands to"
                +" forests. Adult males, weighing between 4,500 to 11,000 pounds"
                +" and standing 8.2 to 13 feet tall at the shoulder, exhibit smaller ears compared to their"
                +" African"
                +" counterparts. Living in family groups led by a matriarch,"
                +" Asian elephants are revered in Sri Lankan culture, playing essential roles in religious"
                +" ceremonies and"
                +" festivals. Unfortunately, this species faces endangerment"
                +" due to habitat loss, fragmentation, and human-elephant conflicts. Conservation efforts in"
                +" Sri Lanka aim"
                +" to protect these elephants through initiatives such as"
                +" establishing protected areas and raising awareness about coexistence. Witnessing these"
                +" incredible"
                +" creatures"
                +" in national parks like Yala and Wilpattu offers a glimpse into their vital role in shaping"
                +" ecosystems"
                +" and contributes to ongoing conservation endeavors.",
            image: "/Web-Dev-Assessment/images/animal2.jpg",
        },

        block_four: {
            title: "Sloth Bear",
            sub_title: "Melursus ursinus inornatus",
            body: "The Sloth Bear (Melursus ursinus inornatus), a distinctive and charismatic species native to"
                +" Sri Lanka, captures attention with its shaggy coat and long claws."
                +" This medium-sized bear is recognized for its unique feeding habits, primarily relying on a"
                +" diet of insects, particularly termites and ants,"
                +" which it extracts with its specialized long, curved claws. With a robust build and a"
                +" distinctively shaped snout, sloth bears have a keen sense of smell,"
                +" aiding them in foraging for their preferred prey. These bears are known to be solitary"
                +" creatures, and their encounters with humans are generally rare."
                +" However, habitat loss, poaching, and conflicts with humans pose significant threats to their"
                +" survival. Conservation efforts in Sri Lanka focus on safeguarding"
                +" the sloth bear population by preserving their habitats and raising awareness about the"
                +" importance of coexistence. Observing these fascinating creatures in the wild,"
                +" particularly in protected areas like Yala and Wilpattu National Parks,"
                +" provides a unique opportunity to appreciate the natural behaviors of this intriguing species"
                +" while contributing to their conservation.",
            image: "/Web-Dev-Assessment/images/animal3.jpg",
        },

        block_five: {
            title: "Spotted Deer",
            sub_title: "Axis axis ceylonensis",
            body: "The Spotted Deer (Axis axis ceylonensis), a prominent herbivore indigenous to Sri Lanka, adds to the"
                +" country's vibrant wildlife tapestry with its distinctively marked coat."
                +" Found in various ecosystems ranging from grasslands to forests, the spotted deer is a common sight in"
                +" Sri Lanka's national parks, notably Yala and Wilpattu. Recognized for"
                +" its elegant stature and the striking pattern of white spots on its reddish-brown fur, this species plays"
                +" a vital role in the ecological balance of its habitats."
                +" As a favored prey of predators like leopards, the spotted deer's presence also contributes to the"
                +" dynamic interplay of predator-prey relationships in these ecosystems."
                +" Conservation efforts in Sri Lanka aim to safeguard the populations of these deer by preserving their"
                +" habitats and addressing challenges such as"
                +" habitat fragmentation and human-wildlife conflicts, ensuring the continued existence of this iconic"
                +" species in the island nation's natural landscapes.",
            image: "/Web-Dev-Assessment/images/animal4.jpg",
        },

        block_six: {
            title: "Purple-faced Langur",
            sub_title: "Semnopithecus vetulus",
            body: "The Purple-faced Langur (Semnopithecus vetulus), an endemic primate species to Sri Lanka, occupies the"
                +" montane forests of the island, showcasing a distinctive and"
                +" enchanting appearance. Characterized by its vibrant purple face, the langur is a medium-sized monkey"
                +" with a long tail and a coat that ranges from dark brown to gray."
                +" This species is recognized for its arboreal lifestyle, adeptly navigating the treetops in search of a"
                +" varied diet consisting of leaves, fruits, and flowers. Facing"
                +" threats such as habitat loss and fragmentation, conservation initiatives in Sri Lanka focus on"
                +" preserving the montane forests and raising awareness about the"
                +" importance of protecting the Purple-faced Langur. As an integral part of Sri Lanka's unique"
                +" biodiversity, observing these langurs in"
                +" their natural habitat provides a rare opportunity to witness the intricate behaviors of this endemic"
                +" primate while contributing to the ongoing efforts to ensure its survival.",
            image: "/Web-Dev-Assessment/images/animal5.jpg",
        },
        block_seven: {
            title: "The Saltwater Crocodile",
            sub_title: "Crocodylus porosus",
            body: "The Saltwater Crocodile (Crocodylus porosus) is a formidable reptile that inhabits the coastal areas and"
                +" estuaries of Sri Lanka,"
                +" adding to the country's diverse wildlife. Known for its adaptability to saltwater environments, this"
                +" species is the largest living reptile"
                +" and occasionally ventures into Sri Lankan waters. Recognized for its robust build, powerful jaws, and"
                +" ability to thrive in both marine and freshwater habitats,"
                +" the Saltwater Crocodile plays a crucial role in maintaining the ecological balance of aquatic"
                +" ecosystems."
                +" Conservation efforts in Sri Lanka focus on promoting coexistence with these crocodiles, balancing the"
                +" need for habitat preservation with human safety measures."
                +" As an apex predator, the Saltwater Crocodile exemplifies the intricate interplay of species in Sri"
                +" Lanka's coastal ecosystems,"
                +" highlighting the importance of conserving these habitats for the overall health of the region's"
                +" biodiversity.",
            image: "/Web-Dev-Assessment/images/animal6.jpg",
        },

        toggleEditor(block_id){
            this.is_editor_visible = block_id;
        },
        saveBlock(block_id){

            this.toggleEditor(false);
        }
    });
});