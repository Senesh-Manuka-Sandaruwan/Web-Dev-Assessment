document.addEventListener('alpine:init', () => {
    Alpine.store('home', {
        is_editor_visible: false,
        block_six: [
            {
                image1: '/Web-Dev-Assessment/images/SS1.jpg',
                title1: 'Welcome to Sri Lankan Wildlife',
            },
            {
                image2: '/Web-Dev-Assessment/images/SS2.jpg',
                title2: 'Welcome to Sri Lankan Wildlife',
            },
            {
                image3: '/Web-Dev-Assessment/images/SS3.jpg',
                title3: 'Welcome to Sri Lankan Wildlife',
            },
        ],
        block_one: {
            title: 'INTRODUCTION',
            body: "Welcome to Sri Lanka's rich wildlife tapestry. From rainforests to coastal wonders, "
                + "the island's biodiversity captivates. Explore Sinharaja Forest, Horton Plains, and Yala Park "
                + "for unique flora and fauna. Dive into pristine coral reefs and witness whales off Mirissa. Engage "
                + "in local conservation and sustainable tourism. Sri Lanka invites you to a compact, immersive encounter with its vibrant natural treasures."
        },
        block_two: {
            sub_title: 'Our Leopard',
            title: 'Sri Lankan Leopard',
            body: "The Sri Lankan Leopard, scientifically known as Panthera pardus kotiya, graces the island's "
                + "landscapes with its captivating presence. Endemic to Sri Lanka, this elusive big cat is a symbol of the country's unique biodiversity. "
                + "With its golden coat adorned by distinctive dark rosettes, the Sri Lankan Leopard is a master of stealth, "
                + "navigating the diverse habitats of dense jungles and open plains. Thriving in protected areas such as Yala and Wilpattu National Parks, "
                + "the leopard has become an icon of wildlife conservation in Sri Lanka. Its agile movements and remarkable adaptability have earned it a reputation as a skilled "
                + "hunter, primarily preying on deer and other small mammals.",
            image: '/Web-Dev-Assessment/images/leopard.jpg',
            link: '/Web-Dev-Assessment/leopard.html',
        },
          block_three: {
            sub_title: 'Yala Sri Lanka',
            title: 'Yala National Park',
            body: "Nestled in the southeast of Sri Lanka, Yala National Park is a testament to the country's "
                + "awe-inspiring biodiversity. Its diverse ecosystems, ranging from dense forests to expansive grasslands, harbor a rich "
                + "tapestry of wildlife. The park is renowned as a global hotspot for leopard sightings, adding a touch of the "
                + "extraordinary to its lush landscapes. Beyond the majestic leopards, Yala is a sanctuary for elephants, sloth bears, crocodiles, "
                + "and over 200 species of birds. The intertwining of varied landscapes, complemented by ancient ruins and historical sites, "
                + "creates a truly immersive experience. A safari through Yala's open plains and verdant vegetation unveils the delicate balance of "
                + "nature, where both flora and fauna thrive harmoniously. It beckons wildlife enthusiasts, nature lovers, and those yearning for a profound connection "
                + "with Sri Lanka's exceptional natural heritage.",
            image: '/Web-Dev-Assessment/images/yala.jpg',
            link: '/Web-Dev-Assessment/yala.html',
        },
         block_four: {
            sub_title: 'Wilpattu Sri Lanka',
            title: 'Wilpattu National Park',
            body: "Wilpattu National Park, the oldest and largest national park in Sri Lanka, "
                + "beckons with its untouched landscapes and diverse ecosystems. Nestled on the northwest "
                + "coast, the park boasts dense forests, expansive grasslands, and serene lakes. Noted for its "
                + "resident leopard population, Wilpattu provides a unique opportunity to observe these majestic big cats in their natural "
                + "environment. The park is also a habitat for elephants, sloth bears, and a myriad of bird species. Its "
                + "natural lakes, known as 'villus', serve as vital watering holes for the diverse wildlife. Beyond its rich "
                + "biodiversity, Wilpattu is adorned with ancient ruins, adding a historical and cultural dimension to the "
                + "wilderness. A safari through Wilpattu unfolds a captivating narrative of conservation, "
                + "where nature thrives in harmony with the park's breathtaking landscapes.",
            image: '/Web-Dev-Assessment/images/wilpattu.jpeg',
            link: '/Web-Dev-Assessment/willpattu.html',
        },
        block_five: {
            title: 'Explore the Wonders',

            sub_title1: '1. The Rainforests',
            body1: " Delve into the heart of Sri Lanka's rainforests, where towering trees and"
                + " exotic"
                + "creatures create a mesmerizing ecosystem."
                + "Dense canopies shelter rare species, such as the vibrant Ceylon Frogmouth,"
                +"while"
                + "cascading waterfalls provide a picturesque backdrop to this lush haven.",
            body2: "Venture through winding trails and let the symphony of bird calls guide you"
                +"to"
                +"hidden treasures."
                +"As you explore, encounter playful troops of macaques swinging through the"
                +"trees"
                +"and elusive leopards prowling in the undergrowth.", 
            image2: '/Web-Dev-Assessment/images/wonders1.jpg',
            link1: '/Web-Dev-Assessment/rainforest.html',

            sub_title2: '2. Coastal Marvels',
            body3:"Embrace the serene beauty of Sri Lanka's coastal regions, where sandy shores"
                +"meet"
                +"the azure waters of the Indian Ocean."
                +"Witness ancient sea turtles nesting along the beaches, a heartwarming"
                +"testament"
                +"to the country's commitment to conservation.",
            body4:"Dive into the vibrant coral reefs that teem with colorful fish, showcasing"
                +"the"
                +"underwater wonders of Sri Lanka."
                +"Learn about the efforts to protect these fragile ecosystems and the"
                +"importance"
                +"of sustainable tourism in preserving the marine environment.",
            image1: '/Web-Dev-Assessment/images/wonders2.jpg',
            link2: '/Web-Dev-Assessment/Coastal Marvels.html',

            sub_title3: '3. Highland Sanctuary',
            body5:"Ascend to the misty highlands, where emerald tea plantations and rolling"
                +"hills"
                +"create a picturesque setting for unique wildlife encounters."
                +"Marvel at the graceful dance of Sri Lanka's national bird, the majestic Sri"
                +"Lankan Junglefowl, against the backdrop of scenic tea estates.",
            body6:"Encounter herds of majestic elephants peacefully grazing in expansive"
                +"grasslands,"
                +"and gain insight into the delicate balance between wildlife conservation and"
                +"human activities in this enchanting region.",
            image3: '/Web-Dev-Assessment/images/wonders3.jpg',
            link3: '/Web-Dev-Assessment/Highland Sanctuary.html',
        },

        toggleEditor(block_id){
            this.is_editor_visible = block_id;
        },
        saveBlock(block_id){

            this.toggleEditor(false);
        }
    });
});