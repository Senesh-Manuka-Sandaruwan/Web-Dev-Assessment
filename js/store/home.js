document.addEventListener('alpine:init', () => {
    Alpine.store('home', {
        is_editor_visible: false,
        slideshow: [
            {
                image: '/images/SS1.jpg',
                title: 'Welcome to Sri Lankan Wildlife',
            },
            {
                image: '/images/SS2.jpg',
                title: 'Welcome to Sri Lankan Wildlife',
            },
            {
                image: '/images/SS3.jpg',
                title: 'Welcome to Sri Lankan Wildlife',
            }
        ],
        block_one : {
            title: 'INTRODUCTION',
            body: "Welcome to Sri Lanka's rich wildlife tapestry. From rainforests to coastal wonders,"
               +"the island's biodiversity captivates. Explore Sinharaja Forest, Horton Plains, and Yala Park"
               +"for unique flora and fauna. Dive into pristine coral reefs and witness whales off Mirissa. Engage "
               +"in local conservation and sustainable tourism. Sri Lanka invites you to a compact, immersive encounter with its vibrant natural treasures."
        },

        block_two : {
            sub_title: 'Our Leopard',
            title: 'Sri Lankan Leopard',
            body1: " The Sri Lankan Leopard, scientifically known as Panthera pardus kotiya, graces the island's"
            +"landscapes with its captivating presence."
            +"Endemic to Sri Lanka, this elusive big cat is a symbol of the country's unique biodiversity."
            +"With its golden coat adorned by distinctive dark rosettes,"
            +"the Sri Lankan Leopard is a master of stealth,"
            +"navigating the diverse habitats of dense jungles and open plains.",
           body2:"Thriving in protected areas such as Yala and Wilpattu National Parks, the leopard has become"
            +"an icon of wildlife conservation in Sri Lanka."
            +"Its agile movements and remarkable adaptability have earned it a reputation as a skilled"
            +"hunter,"
            +"primarily preying on deer and other small mammals. ",
            image: '/Web-Dev-Assessment/images/leopard.jpg',
            link: '/Web-Dev-Assessment/leopard.html"',
        },

        block_three : {
            sub_title: 'Our Leopard',
            title: 'Sri Lankan Leopard',
            body: "The Department of Wildlife Conservation has been entrusted with the responsibility of preserving eco system endowed with various plants and animal species which has inherited the country with enormous bio-diversity. The main function of the Department of Wildlife Conservation established in 1949 is the conservation of wildlife resources in Sri Lanka. The Sri Lankan leopard (Panthera pardus kotiya) is a leopard subspecies native to Sri Lanka. It was first described in 1956 by Sri Lankan zoologist Paules Edward Pieris Deraniyagala.[2] ",
            image: '/images/kotiya.jpeg',
            link: '#',
        },

    })
})