const CarInfo = [
    {
        model: "Ioniq 6",
        make: "Hyundai",
        rank: 1,
        year: 2023,
        score: 8.3,
        msrpStart: '$41,600',
        msrpEnd: '$56,100',
        mpgCity: 141,
        mpgHwy: 115,
        review: "The 2023 Hyundai Ioniq 6 offers an expertly crafted and spacious cabin, two solid powertrains, a smooth ride and a wealth of standard features. It also has excellent driving range. The trunk is small, and the rear row could use more headroom, but the Ioniq 6 is still a great electric car overall.",
        img1: "https://cars.usnews.com/pics/size/350x262/images/Auto/custom/15122/2023_Hyundai_Ioniq_6_1.jpg",
        img2: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15122/2023_Hyundai_Ioniq_6_49.jpg",
        img3: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15122/2023_Hyundai_Ioniq_6_2.jpg",
        pros: {
            pro1: "Impressive driving range",
            pro2: "Spacious and high-tech cabin",
            pro3: "Serene ride",
            pro4: "Lots of standard features"
        },
        cons: {
            con1: "Small Trunk",
            con2: "Limited rear headroom",
            con3: "",
            con4: "",
        },
        featuresAndSpecs: {
            spec1: "Seats 5",
            spec2: "RWD, AWD",
            spec3: "141 City / 115 Hwy",
            spec4: "230 Horsepower"
        }
    },
    {
        model: "Bolt",
        make: "Chevrolet",
        rank: 2,
        year: 2023,
        score: 8.0,
        msrpStart: '$25,600',
        msrpEnd: '$28,800',
        mpgCity: 131,
        mpgHwy: 109,
        review: "As its name suggests, the 2023 Chevrolet Bolt knows how to get up to speed quickly, but that's far from this Chevy's only strength. The Bolt provides a spacious cabin for such a petite vehicle, and it offers tremendous driving range compared to the competition.",
        img1: "https://cars.usnews.com/pics/size/350x262/images/Auto/custom/15043/2023_Chevrolet_Bolt_1.jpg",
        img2: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15043/2023_Chevrolet_Bolt_5.jpg",
        img3: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15043/2023_Chevrolet_Bolt_2.jpg",
        pros: {
            pro1: "Peppy powertrain",
            pro2: "Playful driving dynamics",
            pro3: "Superb all-electric range",
            pro4: "Large cargo capacity for the class",
        },
        cons: {
            con1: "Firm ride",
            con2: "",
            con3: "",
            con4: "",
        },
        featuresAndSpecs: {
            spec1: "Seats 5",
            spec2: "FWD",
            spec3: "131 City / 109 Hwy",
            spec4: "200 Horsepower"
        }
    },
    {
        model: "Leaf",
        make: "Nissan",
        rank: 3,
        year: 2023,
        score: 7.6,
        msrpStart: '$28,040',
        msrpEnd: '$36,040',
        mpgCity: 121,
        mpgHwy: 98,
        review: "The 2023 Nissan Leaf is an enticing commuter, thanks to its low starting price, wealth of tech and safety features and energetic driving experience. However, a short driving range and limited fast-charging ability sour its overall value.",
        img1: "https://cars.usnews.com/pics/size/350x262/images/Auto/izmo/i159615472/2023_nissan_leaf_angularfront.jpg",
        img2: "https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159615472/2023_nissan_leaf_dashboard.jpg",
        img3: "https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159615472/2023_nissan_leaf_angularrear.jpg",
        pros: {
            pro1: "Lively acceleration and handling",
            pro2: "Spacious, comfortable interior",
            pro3: "Easy-to-use infotainment system",
            pro4: "Many standard safety features",
        }, 
        cons: {
            con1: "Mediocre cabin materials",
            con2: "Short driving range",
            con3: "",
            con4: "",
        },
        featuresAndSpecs: {
            spec1: "Seats 5", 
            spec2: "FWD",
            spec3: "121-123 City / 98-99 Hwy",
            spec4: "147 - 214 Horsepower",
        }
    },
    {
        model: "Electric Hardtop",
        make: "MINI",
        rank: 4,
        year: 2024,
        score: 6.7,
        msrpStart: '$30,900',
        msrpEnd: '$30,900',
        mpgCity: 119,
        mpgHwy: 100,
        review: "The 2024 Mini Electric Hardtop marries the longtime characteristics of the brand — sporty handling, quirky styling and cramped space — with a forward-thinking electric powertrain, but it doesn't have enough capability to seriously compete in the growing EV landscape.",
        img1: "https://cars.usnews.com/pics/size/350x262/images/Auto/custom/15262/2024_Mini_Electric_Hardtop_1.jpg",
        img2: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15262/2024_Mini_Electric_Hardtop_3.jpg",
        img3: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15262/2024_Mini_Electric_Hardtop_2.jpg",
        pros: {
            pro1: "Surefooted, fun handling",
            pro2: "Brisk acceleration from a stop",
            pro3: "Intuitive cabin controls",
            pro4: "",
        },
        cons: {
            con1: "Short driving range",
            con2: "Cramped rear seats",
            con3: "Firm ride quality",
            con4: "",
        },
        featuresAndSpecs: {
            spec1: "Seats 4",
            spec2: "FWD",
            spec3: "119 City / 100 Hwy",
            spec4: "181 Horsepower"
        }
    },
    {
        model: "EV6",
        make: "Kia",
        rank: 5,
        year: 2023,
        score: 6.5,
        msrpStart: '$48,700',
        msrpEnd: '$61,600',
        mpgCity: 85,
        mpgHwy: 74,
        review: "The 2023 Kia EV6 impresses with a long driving range, fun driving dynamics and a wealth of technology. If you can get past its high price, it makes a solid case as a capable daily-use EV.",
        img1: "https://cars.usnews.com/pics/size/350x262/images/Auto/custom/15170/2023_Kia_EV6_1.jpg",
        img2: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15170/2023_Kia_EV6_17.jpg",
        img3: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15170/2023_Kia_EV6_2.jpg",
        pros: {
            pro1: "Engaging driving dynamics",
            pro2: "Impressive range",
            pro3: "Roomy seating",
            pro4: "Many active safety features and great crash-test results",
        },
        cons: {
            con1: "Undersized cargo hold",
            con2: "Some complicated dashboard controls",
            con3: "High price for the class",
            con4: "",
        },
        featuresAndSpecs: {
            spec1: "Seats 5",
            spec2: "RWD, AWD",
            spec3: "85-134 City / 74-108 Hwy",
            spec4: "225 - 576 Horsepower",
        }
    },
    {
        model: "Mustang Mach-E",
        make: "Ford",
        rank: 6,
        year: 2023,
        score: 6.3,
        msrpStart: '$46,895',
        msrpEnd: '$68,895',
        mpgCity: 90,
        mpgHwy: 77,
        review: "The 2023 Ford Mustang Mach-E continues to impress with its lengthy all-electric range, lively driving dynamics, spacious and upscale interior and wealth of standard features. However, steady price increases have begun to undermine the Mach-E's value proposition.",
        img1: "https://cars.usnews.com/pics/size/350x262/images/Auto/izmo/i159615493/2023_ford_mustang_mach_e_angularfront.jpg",
        img2: "https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159615493/2023_ford_mustang_mach_e_dashboard.jpg",
        img3: "https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159615493/2023_ford_mustang_mach_e_angularrear.jpg",
        pros: {
            pro1: "Swift acceleration",
            pro2: "Lengthy driving range",
            pro3: "Confident Handling",
            pro4: "Roomy, upscale interior"
        },
        cons: {
            con1: "Touchy brakes",
            con2: "",
            con3: "",
            con4: "",
        },
        featuresAndSpecs: {
            spec1: "Seats 5",
            spec2: "RWD, AWD",
            spec3: "90-110 City / 77-96 HWY",
            spec4: "226 - 480 Horsepower"
        }
    },
    {
        model: "Kona EV",
        make: "Hyundai",
        rank: 7,
        year: 2023,
        score: 5.5,
        msrpStart: '$33,550',
        msrpEnd: '$41,550',
        mpgCity: 134,
        mpgHwy: 106,
        review: "The 2023 Hyundai Kona Electric entices shoppers with its low starting price, wealth of standard equipment and lively performance. If you don't need lots of interior room or cargo space, this is a great everyday electric crossover.",
        img1: "https://cars.usnews.com/pics/size/350x262/images/Auto/izmo/i159615494/2023_hyundai_kona_electric_angularfront.jpg",
        img2: "https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159615494/2023_hyundai_kona_electric_dashboard.jpg",
        img3: "https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159615494/2023_hyundai_kona_electric_angularrear.jpg",
        pros: {
            pro1: "Spunky acceleration and sporty handling",
            pro2: "Excellent MPGe ratings",
            pro3: "User-friendly infotainment system",
            pro4: ""
        },
        cons: {
            con1: "Tight second-row space",
            con2: "Small cargo hold",
            con3: "",
            con4: ""
        },
        featuresAndSpecs: {
            spec1: "Seats 5",
            spec2: "FWD",
            spec3: "134 City / 106 Hwy",
            spec4: "201 Horsepower"
        }
    },
    {
        model: "ID.4",
        make: "Volkswagen",
        rank: 8,
        year: 2023,
        score: 5.2,
        msrpStart: '$38,995',
        msrpEnd: '$55,245',
        mpgCity: 104,
        mpgHwy: 93,
        review: "The 2023 Volkswagen ID.4 is a spacious EV with a comfortable ride and good cargo room, but its driving experience lacks excitement, its infotainment system is not user-friendly, and the base model has a low driving range.",
        img1: "https://cars.usnews.com/pics/size/350x262/images/Auto/custom/15079/2023_Volkswagen_ID.4_Angular_Front_1.jpg",
        img2: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15079/2023_Volkswagen_ID.4_Dashboard_1.jpg",
        img3: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15079/2023_Volkswagen_ID.4_Angular_Rear_1.jpg",
        pros: {
            pro1: "Long list of standard infotainment and active safety features",
            pro2: "Attractive starting price for the class",
            pro3: "Composed ride and handling",
            pro4: "Large maximum cargo hold"
        },
        cons: {
            con1: "Short drive range in base model",
            con2: "Overreliance on touch controls",
            con3: "",
            con4: "",
        },
        featuresAndSpecs: {
            spec1: "Seats 5",
            spec2: "RWD, AWD",
            spec3: "104-115 City / 93-99 Hwy",
            spec4: "145 - 295 Horsepower"
        }
    },
    {
        model: "Solterra",
        make: "Subaru",
        rank: 9,
        year: 2023,
        score: 4.7,
        msrpStart: '$44,995',
        msrpEnd: '$51,995',
        mpgCity: 95,
        mpgHwy: 80,
        review: "The 2023 Solterra is Subaru's first attempt at a fully electric SUV. It is a solid pick if you want an EV to take off road, but many competitors offer longer driving ranges for less money.",
        img1: "https://cars.usnews.com/pics/size/350x262/images/Auto/custom/14935/2023_Subaru_Solterra_1.jpg",
        img2: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/14935/2023_Subaru_Solterra_20.jpg",
        img3: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/14935/2023_Subaru_Solterra_2.jpg",
        pros: {
            pro1: "Solid off-raod capabilities",
            pro2: "Comfortable, quiet ride",
            pro3: "",
            pro4: ""
        },
        cons: {
            con1: "Shorter driving range than many rivals",
            con2: "Bland interior",
            con3: "",
            con4: ""
        },
        featuresAndSpecs: {
            spec1: "Seats 5",
            spec2: "AWD",
            spec3: "95 City / 80 Hwy",
            spec4: "215 Horsepower"
        }
    },
    {
        model: "MX-30",
        make: "Mazda",
        rank: 10,
        year: 2023,
        score: 3.2,
        msrpStart: '$34,110',
        msrpEnd: '$37,120',
        mpgCity: 98,
        mpgHwy: 85,
        review: "The 2023 Mazda MX-30 is a small electric SUV with an upscale vibe and lithe handling. However, with sedate acceleration, a paltry 100-mile driving range, an impractical back seat and extremely limited availability, the MX-30 is apt to be a blip on the radar in this fast-growing segment.",
        img1: "https://cars.usnews.com/pics/size/350x262/images/Auto/custom/15243/2023_Mazda_MX-30_1.jpg",
        img2: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15243/2023_Mazda_MX-30_6.jpg",
        img3: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15243/2023_Mazda_MX-30_2.jpg",
        pros: {
            pro1: "Well-balanced ride and handling",
            pro2: "Agreeable interior quality",
            pro3: "",
            pro4: ""
        },
        cons: {
            con1: "Very limited driving range",
            con2: "Cramped rear seat and cargo area",
            con3: "Leisurely acceleration",
            con4: "Inconvenient half-size rear doors"
        },
        featuresAndSpecs: {
            spec1: "Seats 5",
            spec2: "FWD",
            spec3: "98 City / 85 Hwy",
            spec4: "143 Horsepower"
        }
    }
]

module.exports = CarInfo