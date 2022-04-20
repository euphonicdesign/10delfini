var cadre_ch3 = [
    //port
    {
      "nume_cadru": "port",
      "nrVizite": 1, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 0,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 1, x:210, y:340}, //city intersection
      ],
      textPrim:
        "Continuing from last time...\
            You are still in the port area with this pressing thought on your\
            mind,\
            and a lot of determination. Time to get moving!",
      textSecund:
        "You take the up route and drive along the coastline until you\
            reach the port. To the east, you see lines of ships\
            and big naval cranes moving cargo around. In your area, there are\
            mainly light vessels used by tourists and sailing enthusiasts.\
            You get closer to one of the ships. This one has a tall mast and\
            long white sails. On one of its sides there is a shiny inscription.\
            It says 'Princess'. You go aboard and\
            you encounter a sailor, who is looking far into the sea. He has a\
            couple of drawings on his table.",
      actiuni: [
      ],
      items: [],
      npcs: [],
    },
    //city_intersection
    {
      "nume_cadru": "city_intersection",
      "nrVizite": 0, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 1,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 0, x:140, y:30},
        {nr_cadru: 2, x:500, y:110},
      ],
      textPrim:
        "In the middle of the interesection there is a\
            big artisanal fountain. You could either go right to visit the east city,\
            or you could go up to return to the port.",
      textSecund:
        "In the middle of it, there is a\
            big artisanal fountain. You could either go right to visit the east city,\
            or you could go up to return to the port.",
      actiuni: [
      ],
      items: [],
      npcs: [],
    },
    //east city
    {
      "nume_cadru": "east city",
      "nrVizite": 1, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 1,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 1, x:50, y:345},
        {nr_cadru: 3, x:310, y:210},
      ],
      textPrim:
        "",
      textSecund:
        "You could continue driving to the right and exit the city, or you\
            could choose to go left and return to the city intersection.",
      actiuni: [
      ],
      items: [],
      npcs: [],
    },

    //forest
    {
      "nume_cadru": "forest",
      "nrVizite": 0, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 1,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 4, x:420, y:230},
      ],
      textPrim:
        "You go right, and drive on this route until you reach the\
            edge of a forest. The road leading into the forest is not paved.\
            Knowing that your car is not in a very good shape, and that the brakes are\
            not working very well, you ponder whether you should continue on this\
            way, or not. You check the gas indicator, and  it seems there is not too much\
            fuel left in the reservoir either. You think about\
            it for a second, and then you decide to walk on foot into the forest.\
            ",
      textSecund:
      "",
      actiuni: [
        {
          nume:"admire vegetation",
          text:
            "As you walk, you admire the vegetation and all the greenery that\
            surrounds you.\
            The branches of the trees cast long shadows on the ground.\
            Through the branches, you see and hear various\
            birds that are chirping and singing\
            melodic trills.\
            The air is very rich and pleasant, and\
            you feel at peace.\
            The more you advance, the more you find things\
            that captivate your attention, and make you want to go even further\
            into the forest.\
            At some point, you ask yourself whether you should return. It is then\
            when you realize that nothing in your environment would\
            indicate your way back. You are lost...",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "As you walk, you admire the vegetation and all the greenery that\
            surrounds you.\
            The branches of the trees cast long shadows on the ground.\
            Through the branches, you see and hear various\
            birds that are chirping and singing\
            melodic trills.\
            The air is very rich and pleasant, and\
            you feel at peace.\
            The more you advance, the more you find things\
            that captivate your attention, and make you want to go even further\
            into the forest.\
            At some point, you ask yourself whether you should return. It is then\
            when you realize that nothing in your environment would\
            indicate your way back. You are lost...",
        },
      ],
      items: [],
      npcs: [],
    },

    //camping1
    {
      "nume_cadru": "camping1",
      "nrVizite": 1, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 4,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 3, x:30, y:260},
      ],
      textPrim:
      "You continue to walk until you encounter a large and empty trunk\
      of an old tree, fallen down on the ground. Behind it, you find what\
      seems to be the remnants of a camping fire. Someone must have been\
      here before... There are some rocks arranged in a concentric manner,\
      and some ashes and leftovers of the wood that must have burnt\
      inside the containment.\
      Not too far away, you also notice a pile of neatly arranged wood\
      sticks.\
      You would like to advance beyond this point,\
      but you stop... Something is blocking the way. There is large spider web covering the way ahead...",
      textSecund:
        "In the middle of this place there is what seems to be the remnants of a\
            camping fire with some ashes and wood leftovers, surrounded by rocks.\
            Not too far away, there is a pile of neatly arranged wood sticks.\
            You want to advance beyond this point,\
            but a large spider web is preventing you from doing it...",
      actiuni: [
        {
          nume:"web",
          "conditie": {
            "required": true,
            "itemsRequired": [],
            "itemsReturned": [],
            "cadruReturnat": 5,
            "textConditieTrue":
              "You go towards the spider web. It looks very peculiar from the outside.",
            "textConditieFalse":
            "You go towards the spider web. It looks very peculiar from the outside.",
            },
          text:
            "",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "",
        },
        {
          nume:"fireplace",
          "conditie": {
            "required": true,
            "itemsRequired": [],
            "itemsReturned": [],
            "cadruReturnat": 6,
            "textConditieTrue":
              "You go towards the fireplace.",
            "textConditieFalse":
            "You go towards the fireplace.",
            },
          text:
            "",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "",
        },
        {
          nume:"get stick",
          text:
            "You pick up a stick from the nearby pile.",
          items: ["stick"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You already have one.",
        },
      ],
      items: [],
      npcs: [],
    },

    //web
    {
      "nume_cadru": "web",
      "nrVizite": 1, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 5,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 4, x:530, y:260},
      ],
      textPrim:
        "",
      textSecund:
      "You go towards the spider web. It looks very peculiar from the outside.",
      actiuni: [
        {
          nume:"watch",
          text:
            "You get closer to the web and start looking at the details.\
                    It seems rather sticky... Better not to touch it!\
                    But wait! There is something there making small movements.\
                    A small ladybug seems to be entrapped...",
          items: ["ladybug observation"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You get closer to the web, and start looking at the details.\
                    It seems rather sticky... Better not to touch it!",
        },
        {
          nume:"release ladybug",
          "conditie": {
            "required": true,
            "itemsRequired": ["ladybug observation",],
            "itemsReturned": ["leafs"],
            "textConditieTrue":
              "No ladybugs around...",
            "textConditieFalse":
              "With a careful touch, you manage to release the ladybug. She flies away and lands on a pile of dry leafs. You pick up a couple of them.",
            },
          text:
            "",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "",
        },
        {
          nume:"push",
          text:
            "Too sticky... you would rather not do that!",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Really sticky... you would rather not do that!",
        },
        {
          nume:"shout",
          text:
            "'Move away!' you shout... Nope, that doesn't seem to work either...",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Really sticky... you would rather not do that!",
        },
        {
          nume:"use stick",
          "conditie": {
            "required": true,
            "itemsRequired": ["stick",],
            "itemsReturned": [],
            "textConditieTrue":
              "You need to find a stick.",
            "textConditieFalse":
              "The web seems to be highly resistant. What sort of spider\
                    web is this?",
            },
          text:
            "",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "",
        },
        {
          nume:"use torch",
          "conditie": {
            "required": true,
            "itemsRequired": ["torch",],
            "itemsReturned": ["web melted"],
            "cadruReturnat": 7,
            "textConditieTrue":
              "You need to find a torch.",
            "textConditieFalse":
              "You use the lighting torch on the spider web and the web melts away.\
                    You are now able to pass!\
                    You walk ahead and reach a medium sized open area surrounded by trees.\
                    There are many flowers growing around with colors ranging from\
                    bright red to full white. The flowers are large and fragrant. They\
                    seem to be wild peonies.  It's strange, because you thought they\
                    grew only in the Spring. At the edge of the\
                    area, next to the forest trees, you notice some mushrooms.",
            },
          text:
            "",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "",
        },

      ],
      items: [],
      npcs: [],
    },

    //fireplace
    {
      "nume_cadru": "fireplace",
      "nrVizite": 1, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 6,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 4, x:530, y:260},
      ],
      textPrim:
        "",
      textSecund:
      "You get closer to the fireplace. A circle of rocks surrounds some ashes and wood\
            leftovers.",
      actiuni: [
        {
          nume:"watch",
          "conditie": {
            "required": true,
            "itemsRequired": ["fire started"],
            "itemsReturned": [],
            "textConditieTrue":
              "You get closer to the fireplace. A circle of rocks surrounds some ashes and wood\
              leftovers.",
            "textConditieFalse":
            "You watch the campfire. There are a couple of rocks arranged\
                    in a circle, and in the middle of it, there is a small fire burning\
                    lightly. From time to time you hear some pops and cracks, and you see\
                    small red dots raising up into the air and then vanishing\
                    away. Unless you add more dry leafs, the fire is going to\
                    fade away pretty soon.",
            },
          text:
            "",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "",
        },

        {
          nume:"use rock",
          "conditie": {
            "required": true,
            "itemsRequired": ["rock","fireplace prepared"],
            "itemsReturned": ["fire started",],
            "textConditieTrue":
              "You need a rock and make sure the fireplace is prepared",
            "textConditieFalse":
              "You take your rock and then you pick a second one from the circle\
                    of stones. You pick the one that shines the most,\
                    and then you strike the two of them to create a\
                    spark... Unfortunately, it doesn't work like in the movies,\
                    and there is one more detail you might have overlooked -\
                    these are not flint stones! Fortunately, there was a box of\
                    matches next to the shiny rock you have picked up, and you\
                    use it to light up\
                    the fire. You are as happy as a child with the result!",
            },
          text:
            "",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "",
        },
        {
          nume:"use leafs",
          "conditie": {
            "required": true,
            "itemsRequired": ["leafs",],
            "itemsReturned": ["fireplace prepared",],
            "textConditieTrue":
              "You need to find a some leafs first",
            "textConditieFalse":
              "You remove the ashes and other wood leftovers, you take the\
                    dry leafs you have\
                    collected, and then you spread them inside the circle of rocks.\
                    You make sure sure they are distributed evenly, and there is\
                    enough air in between.",
            },
          text:
            "",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "",
        },
        {
          nume:"get rock",
          text:
            "You have picked up a rock.",
          items: ["rock"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
          "You already have one.",
        },
        {
        nume:"use stick",
        "conditie": {
          "required": true,
          "itemsRequired": ["stick","fire started"],
          "itemsReturned": ["torch",],
          "textConditieTrue":
            "You need a stick and make sure the fire is started",
          "textConditieFalse":
            "You push the end of the stick into the fire and then you\
                    pull it out. You have just created an olympic torch.",
          },
        text:
          "",
        items: [],
        "active" : true,
        "numarClicks" : 0,
        "textSecund" :
          "",
        },


      ],
      items: [],
      npcs: [],
    },

    //forest clearing
    {
      "nume_cadru": "forest clearing",
      "nrVizite": 0, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 7,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 10, x:500, y:250},
      ],
      textPrim:
        "You use the olympic torch on the spider web, and the web melts away! You are\
            now able to pass!\
            You walk ahead and reach a medium sized open area surrounded by trees.\
            There are many flowers growing around with colors ranging from\
            bright red to full white. The flowers are large and fragrant. They\
            seem to be wild peonies.  It's strange, because you thought they\
            grew only in the Spring. At the edge of the\
            area, next to the forest trees, you notice some mushrooms.",
      textSecund:
      "This place is surrounded by trees and there are\
            many flowers growing around, with colors ranging from\
            bright red to full white. The flowers are large and fragrant. They\
            seem to be wild peonies. At the edge of the\
            area, next to the forest trees, you notice some mushrooms.",
      actiuni: [
        {
        nume:"mushrooms",
        "conditie": {
          "required": true,
          "itemsRequired": [],
          "itemsReturned": [],
          "cadruReturnat": 8,
          "textConditieTrue":
            "",
          "textConditieFalse":
            "You get closer to the mushrooms area. There is a big tree in front\
            of you that looks quite old, with a very large crown, and a wide trunk.\
            The branches seem heavy and leaning a bit towards the ground. It is\
            adorned with beautiful blooming flowers.\
            At its base grow multiple groups of mushrooms. You can distinguish two kinds.\
			         There are the colourful mushrooms, which almost look like candies.\
            Unfortunately, they have a high level of toxicity, and generally\
            speaking, they are not edible.\
  			       There are also the simple mushrooms. They have a white/brownish shade,\
            and look very plain. These are the types that are healthy and edible.\
            Which one would you choose?",
          },
        text:
          "",
        items: [],
        "active" : true,
        "numarClicks" : 0,
        "textSecund" :
          "",
        },
        {
        nume:"peonies",
        "conditie": {
          "required": true,
          "itemsRequired": [],
          "itemsReturned": [],
          "cadruReturnat": 9,
          "textConditieTrue":
            "",
          "textConditieFalse":
            "You move closer to the flowers. The peonies are blooming and have\
            white and bright red colors.\
            This place has a nice fragrance. You avail yourself of the opportunity\
            and lie\
            back down on the grass. Birds are chirping. The sun is warm. Life is good.\
            While laying down on your back, you notice a butterfly flying\
            around.",
          },
        text:
          "",
        items: [],
        "active" : true,
        "numarClicks" : 0,
        "textSecund" :
          "",
        },
        {
        nume:"whistle",
        "conditie": {
          "required": true,
          "itemsRequired": ["deers sound",],
          "itemsReturned": [],
          "cadruReturnat": 11,
          "textConditieTrue":
            "You start whistling... Nothing happens.",
          "textConditieFalse":
            "A little skeptical at first, you decide to give it a try.\
                    You hold your hands together, creating a hollow space\
                    between your thumbs. Then, you make  a little opening close\
                    to the thumbs, and start blowing air into it, just\
                    like you were doing when you were a child. This creates a\
                    particular sound that resembles the sound made by\
                    deers. Nothing happens.\
                    You try whistling again, this time blowing more air and for \
                    a longer period of time.\
                    Still, no response.\
                    You blow air again. This time, after a pause of 3 seconds, you\
                    hear back the sound of the deers. They must be getting closer...\
                    ",
          },
        text:
          "",
        items: [],
        "active" : true,
        "numarClicks" : 0,
        "textSecund" :
          "",
        },
      ],
      items: [],
      npcs: [],
    },
    //mushrooms
    {
      "nume_cadru": "mushrooms",
      "nrVizite": 0, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 8,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 7, x:420, y:230},
      ],
      textPrim:
        "",
      textSecund:
      "You get closer to the mushrooms area. There is a big tree in front\
            of you that looks quite old, with a very large crown, and a wide trunk.\
            The branches seem heavy and leaning a bit towards the ground. It is\
            adorned with beautiful blooming flowers.\
            At its base grow multiple groups of mushrooms. You can distinguish two kinds.\
			There are the colourful mushrooms, which almost look like candies.\
            Unfortunately, they have a high level of toxicity, and generally\
            speaking, they are not edible.\
			There are also the simple mushrooms. They have a white/brownish shade,\
            and look very plain. These are the types that are healthy and edible.\
            Which one would you choose?",
      actiuni: [
        {
          nume:"pick colourful",
          text:
            "You cannot help it, and go for the colourful mushrooms.\
                    As you touch them, you get some sort of allergic reaction,\
                    and you start feeling bad. This sensation lasts for about\
                    half an hour.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You would rather not do that again. It may have side effects.",
        },
        {
          nume:"pick simple",
          text:
            "You start inspecting the mushrooms. They look the right\
                    kind, the type that can be eaten. They are rich in vitamin D.\
                    You take a bite and your energy level goes up. You feel good!\
                    You take a couple of them as food reserve.",
          items: ["mushrooms"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You already have some.",
        },
      ],
      items: [],
      npcs: [],
    },
    //peonies
    {
      "nume_cadru": "peonies",
      "nrVizite": 1, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 9,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 7, x:420, y:230},
      ],
      textPrim:
        "",
      textSecund:
      "You move closer to the flowers. The peonies are blooming and have\
      white and bright red colors.\
      This place has a nice fragrance. You avail yourself of the opportunity\
      and lie\
      back down on the grass. Birds are chirping. The sun is warm. Life is good.\
      While laying down on your back, you notice a butterfly flying\
      around.",
      actiuni: [
        {
          nume:"follow butterfly",
          text:
            "You go after the butterfly as he graciously flies from\
                    flower to flower. At some point, he lands on a flower and stays longer\
                    than usual. You get closer, and notice the rainbow on its\
                    flaping wings, as well as its long and curved antennas. Suddenly, you hear a long\
                    sound coming from the woods, and the butterfly flies away. The\
                    sound has a mysterious tone, but at the same time it has a familiar touch.\
                    Yes, you remember clearly now, it is the sound that\
                    deers make when roaming around the forest. Your father used to\
                    teach you when you were a child how to attract them.",
          items: ["deers sound"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
                  "You go after the butterfly as he graciously flies from\
                  flower to flower. At some point, he lands on a flower and stays longer\
                  than usual. You get closer, and notice the rainbow on its\
                  flaping wings, as well as its long and curved antennas. Suddenly, you hear a long\
                  sound coming from the woods, and the butterfly flies away. The\
                  sound has a mysterious tone, but at the same time it has a familiar touch.\
                  Yes, you remember clearly now, it is the sound that\
                  deers make when roaming around the forest. Your father used to\
                  teach you when you were a child how to attract them.",
        },
      ],
      items: [],
      npcs: [],
    },
    //squirell
    {
      "nume_cadru": "squirell",
      "nrVizite": 0, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 10,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 7, x:50, y:270},
      ],
      textPrim:
        "You go right and arrive at a place where there are a couple of trees spread\
            around, and some low grass that is growing and covering the ground.\
            While you look at the trees and how the sunlight falling through their branches\
            creates\
            patches of golden areas on the grass, with the corner of the eye, you\
            catch some movement in the grass, and then nothing. You thought\
            it was just an illusion, but then the same thing happens again!\
            Something like a small ball of brownish/reddish color is moving around\
            with quick, but light steps. It is a lovely squirrel! It has a lot of\
            energy, moving around, going up in the trees, and then jumping from branch\
            to branch. Then coming down, then coming to you, then leaving and\
            moving around once more.",
      textSecund:
      "Here, there are a couple of trees spread around, and some low grass\
            that is growing and covering the ground. The sunlight falling through the branches\
            of the trees creates\
            patches of golden areas on the grass. The super agile squirrel is still\
            around. It has a lot of\
            energy, moving around, going up in the trees, and then jumping from branch\
            to branch. Then coming down, then coming to you, then leaving and\
            moving around once more.",
      actiuni: [
        {
        nume:"give walnut",
        "conditie": {
          "required": true,
          "itemsRequired": ["walnut"],
          "itemsReturned": [],
          "cadruReturnat": 12,
          "textConditieTrue":
            "You don't have any walnuts that you can give to the squirell...",
          "textConditieFalse":
            "As soon as you take out the walnut, the squirrel\
                    stops wandering around, raises on two of its feet and looks\
                    at you holding its tail up in the air. In an instant she is next\
                    to you. You give her the walnut. She picks it and then runs\
                    up towards the tallest tree, climbing to the top.\
                    You lose the squirrel from sight but you notice another\
                    peculiar inhabitant of the forest.\
                    It is a bird with a very long beak. Must be a woodpecker.\
                    The woodpecker flies away to another tree and you can no\
                    longer see it. However you hear it starting to hit the wood.\
                    You go in the direction of the sound. When you reach it,\
                    the woodpecker flies away to a different tree and start\
                    pecking at the tree. You go towards it.\
                    After a couple more times. You reach another area.",
          },
        text:
          "",
        items: [],
        "active" : true,
        "numarClicks" : 0,
        "textSecund" :
          "",
        },
      ],
      items: [],
      npcs: [],
    },

    //waterfall
    {
      "nume_cadru": "waterfall",
      "nrVizite": 0, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 11,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 7, x:420, y:230},
      ],
      textPrim:
        "Now that you have mastered the technique, you call the deers\
            once more. The next moment, you hear some tree leaves\
            swishing, and a couple of sparkling eyes appearing from\
            behind the shrubs. A little cautious at first, they get\
            closer to you, revealing their big antlers and strong bodies.\
            They are now in front of you, within an arm's length distance.\
            You could almost touch them. They look at you straight into the\
            eyes for\
            a few moments, and then they turn and go into the woods.\
            You follow them until you reach an\
            impressive scene. The waterfall that reveals in front of you\
            is making a soothing noise. At its base, the\
            water is calm and clear. The deers go to drink some water.\
            There are some walnuts on the ground, just below the trees.",
      textSecund:
      "The waterfal that reveals in front of you\
            is making a soothing noise. At its base, the\
            water is calm and clear.",
      actiuni: [
        {
          nume:"watch deers",
          text:
          "Now that you have mastered the technique, you call the deers\
              once more. The next moment, you hear some tree leaves\
              swishing, and a couple of sparkling eyes appearing from\
              behind the shrubs. A little cautious at first, they get\
              closer to you, revealing their big antlers and strong bodies.\
              They are now in front of you, within an arm's length distance.\
              You could almost touch them. They look at you straight into the\
              eyes for\
              a few moments, and then they turn and go into the woods.\
              You follow them until you reach an\
              impressive scene. The waterfall that reveals in front of you\
              is making a soothing noise. At its base, the\
              water is calm and clear. The deers go to drink some water.\
              There are some walnuts on the ground, just below the trees.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
                  "You watch the deers drinking water...",
        },
        {
          nume:"pick walnut",
          text:
            "You have picked up a walnut.",
          items: ["walnut"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You already have one",
        },
        {
          nume:"drink",
          text:
            "As you are getting closer to the water to drink some,\
                    in the reflection,\
                    you notice the head of a white unicorn,\
                    which is standing right behind you.\
                    This makes you thrill for one second... The unicorn then\
                    raises one of his legs and\
                    touches you lightly, pushing you slightly towards the water,\
                    and then he stops. For a split of a second you thought you were\
                    going to fall into the water... Funny unicorn...",
          items: ["water"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You are not thirsty anymore...",
        },
        {
        nume:"talk",
        "conditie": {
          "required": true,
          "itemsRequired": ["water","blueberries received"],
          "itemsReturned": ["moss knowledge"],
          "textConditieTrue":
            "Talking by yourself is not considered the most wise thing to do...",
          "textConditieFalse":
            "You talk to the unicorn. He seems to be having a good time...\
            The unicorn tells you that due to the fact that he knows\
                    you, he is\
                    going to tell you a little secret. It is about the\
                    symbiosis between moss and trees. Yes, you remember,\
                    you learned about it in school. Moss tends to grow on a\
                    particular side of the tree - the north side.\
            ",
          },
        text:
          "",
        items: [],
        "active" : true,
        "numarClicks" : 0,
        "textSecund" :
          "",
        },
        {
        nume:"give blueberries",
        "conditie": {
          "required": true,
          "itemsRequired": ["water","blueberries",],
          "itemsReturned": ["blueberries received"],
          "textConditieTrue":
            "Who would you give the blueberries to?...Do you have any?...",
          "textConditieFalse":
            "The unicorn looks at you and raises one of its eyebrows. He asks\
            you whether you think he looks like a bear? Unicorns don't\
            eat blueberries... That's why they are called white\
            unicorns, and NOT blue unicorns... You don't know what to\
            say... He then adds, that he was just pulling your leg,\
            and he eats the blueberries in an instant... Indeed, very\
            funny unicorn...",
          },
        text:
          "",
        items: [],
        "active" : true,
        "numarClicks" : 0,
        "textSecund" :
          "",
        },
      ],
      items: [],
      npcs: [],
    },

    //shrubs
    {
      "nume_cadru": "shrubs",
      "nrVizite": 0, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 12,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 7, x:420, y:230},
      ],
      textPrim:
        "As soon as you take out the walnut, the squirrel\
            stops wandering around, raises on two of its feet and looks\
            at you, while holding her tail up in the air. In an instant she is next\
            to you. You give her the walnut. She picks it quickly, and then runs\
            up towards the tallest tree, climbing to the top.\
            You lose the squirrel from sight, but you notice another\
            peculiar inhabitant of the forest.\
            It is a bird with a very long beak. Must be a woodpecker.\
            The woodpecker flies away to another tree, and you can no\
            longer see it. However, you hear it starting to peck at the wood.\
            You go into the direction of the sound. When you reach it,\
            the woodpecker flies away to a different tree and starts\
            pecking at it. You go towards it, and after\
            a couple more times, you reach a different area of the forest.\
            You notice a couple of shrubs and\
            a distinctive tree that is growing in a very an uncommon form.",
      textSecund:
      "You notice a couple of shrubs and\
            a distinctive tree that is growing in a very an uncommon form.",
      actiuni: [
        {
          nume:"get blueberries",
          text:
            "You get some blueberries.",
          items: ["blueberries"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
                  "You already have some...",
        },
        {
        nume:"observe tree",
        "conditie": {
          "required": true,
          "itemsRequired": ["moss knowledge",],
          "itemsReturned": [],
          "cadruReturnat": 13,
          "textConditieTrue":
            "You look at the tree. Seem to be covered with different shades of green and brown.",
          "textConditieFalse":
            "You look closer. Part of the tree is covered with green moss.\
                    Moss grows on that part because of the way the sun rises\
                    and sunsets. There is more humidity towards the north side.\
                    Since you now know where north is, you choose to go into\
                    that direction. You walk until you reach\
                    the banks of a river that is flowing rapidly. You try the water\
                    and it seems to be rather cold and deep. How could you cross onto the\
                    other side?\
                    There are a couple of rocks in the middle of the river, but they are too far to jump on, and\
                    too small to hold ones equilibrium. The trees on your side might\
                    be the key. There are some lianas growing up. If you could only\
                    grab one of their ends.",
          },
        text:
          "",
        items: [],
        "active" : true,
        "numarClicks" : 0,
        "textSecund" :
          "",
        },
      ],
      items: [],
      npcs: [],
    },

    //lianas
    {
      "nume_cadru": "lianas",
      "nrVizite": 0, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 13,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 13, x:420, y:230},
      ],
      textPrim:
        "You look closer. Part of the tree is covered with green moss.\
            Moss grows on that part because of the way the sun rises\
            and sets. There is more humidity towards the north side.\
            Since you now know where north is, you choose to go into\
            that direction. You walk until you reach\
            the banks of a river that is flowing rapidly. You try the water\
            and it seems to be rather cold and deep. How could you cross onto the\
            other side?\
            There are a couple of rocks in the middle of the river, but they are too far to jump on, and\
            too small to hold ones equilibrium. The trees on your side might\
            be the key. There are some lianas growing up. If you could only\
            grab one of their ends.",
      textSecund:
      "There is a river in front of you that is flowing very rapidly.\
            There are a couple of rocks in the middle of it, but they are too far away to jump on,\
            and\
            too small to hold ones equilibrium. The trees on your side might\
            be the key. There are some lianas growing up... If you could only\
            grab one of their ends...",
      actiuni: [

        {
        nume:"grab lianas",
        "conditie": {
          "required": true,
          "itemsRequired": ["free liana",],
          "itemsReturned": [],
          "cadruReturnat": 14,
          "textConditieTrue":
            "You try reaching one of the lianas, but to no avail. They are\
                    too high, and climbing the tree may not be the best\
                    solution. You know that from experience! You know how it\
                    feels to embrace mother earth in an unplanned manner...\
                    There are better ways...",
          "textConditieFalse":
          "You roll the liana end around your wrist, and holding it strongly\
              with both hands you move back to create some momentum, and then\
              you rush forward and jump across the river 'Tarzan style'.\
              You land safely on the other side of the river.\
              The forest clears away here, and you have an open view of the\
              surroundings. The place looks like a meadow covered with grass\
              and vegetation. Some wild grain plants and sunflowers are also present.\
              The color cast is the one created by the sunlight\
              of a late afternoon. In front of you, not very far away, you notice\
              the shiny reflections of a big block of metal sitting on rails.\
              The rails go far into the distance and tend to have an S shape\
              as they get closer to the distant hills.\
              ",
          },
        text:
          "",
        items: [],
        "active" : true,
        "numarClicks" : 0,
        "textSecund" :
          "",
        },
        {
          nume:"use stick",
          text:
            "You use the stick to move the end of the liana until it falls\
                    down. You can now reach the liana with your own hands.",
          items: ["free liana"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
                  "You have done that already...",
        },
      ],
      items: [],
      npcs: [],
    },

    //train
    {
      "nume_cadru": "train",
      "nrVizite": 0, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 14,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        //{nr_cadru: 13, x:420, y:230},
      ],
      textPrim:
        "You roll the liana end around your wrist, and holding it strongly\
            with both hands you move back to create some momentum, and then\
            you rush forward and jump across the river 'Tarzan style'.\
            You land safely on the other side of the river.\
            The forest clears away here, and you have an open view of the\
            surroundings. The place looks like a meadow covered with grass\
            and vegetation. Some wild grain plants and sunflowers are also present.\
            The color cast is the one created by the sunlight\
            of a late afternoon. In front of you, not very far away, you notice\
            the shiny reflections of a big block of metal sitting on rails.\
            The rails go far into the distance and tend to have an S shape\
            as they get closer to the distant hills.\
            You move closer to the big metal object. Looks like a train, but one\
            of a type you have not encountered before. There is only\
            the engine and one car. The engine has a long shape with one big wheel in\
            the back and several smaller ones towards the front. Its design is\
            very interesting, having several curves and lines converging towards key\
            points. It has a very nice shape. On one side, there is a small panel\
            and a hole.  Might be powered by solar power, but you do not\
            know for sure.",
      textSecund:
      "It is an interesting train having only the engine and one car.\
            The engine has a long shape with one big wheel in\
            the back and several smaller ones towards the front. Its design is\
            very interesting, having several curves and lines converging towards key\
            points. On one side, there is a small panel\
            and a hole.",
      actiuni: [
        {
          nume: "admire metal object",
          text: "You move closer to the big metal object. Looks like a train, but one\
          of a type you have not encountered before. There is only\
          the engine and one car. The engine has a long shape with one big wheel in\
          the back and several smaller ones towards the front. Its design is\
          very interesting, having several curves and lines converging towards key\
          points. It has a very nice shape. On one side, there is a small panel\
          and a hole.  Might be powered by solar power, but you do not\
          know for sure.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
          "You move closer to the big metal object. Looks like a train, but one\
          of a type you have not encountered before. There is only\
          the engine and one car. The engine has a long shape with one big wheel in\
          the back and several smaller ones towards the front. Its design is\
          very interesting, having several curves and lines converging towards key\
          points. It has a very nice shape. On one side, there is a small panel\
          and a hole.  Might be powered by solar power, but you do not\
          know for sure.",
        },

        {
        nume:"open panel",
        "conditie": {
          "required": true,
          "itemsRequired": ["unlocked panel",],
          "itemsReturned": ["controls"],
          "textConditieTrue":
            "The panel is locked...",
          "textConditieFalse":
            "You open the panel, and inside you find an electronic board. \
            Looks familiar. Must be the control unit...",
          },
        text:
          "",
        items: [],
        "active" : true,
        "numarClicks" : 0,
        "textSecund" :
          "",
        },
        {
          nume:"use rock",
          text:
            "You strike the panel with the rock and manage to unlock it.",
          items: ["unlocked panel"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
                  "You have done that already...",
        },
        {
        nume:"tinker controls",
        "conditie": {
          "required": true,
          "itemsRequired": ["controls",],
          "itemsReturned": [],
          "cadruReturnat": 15,
          "textConditieTrue":
            "You require access to the control unit...",
          "textConditieFalse":
            "You start to investigate whether you can start the train.\
                    There are a couple of switches and jumpers that you can set\
                    in different positions, but without some sort of instructions\
                    it is difficult to figure out how they work. You try a couple of\
                    them and notice how several of the leds change color.\
                    At some point, the train makes a big sound and you hear what seems\
                    to be cogs in motion. You work on it for almost one hour, but\
                    you still have no clue how to start and control this thing.\
                    Your morale is at the bottom, until something else happens...\
                    ",
          },
        text:
          "",
        items: [],
        "active" : true,
        "numarClicks" : 0,
        "textSecund" :
          "",
        },
      ],
      items: [],
      npcs: [],
    },

    //end of the chapter
    {
      "nume_cadru": "theend",
      "nrVizite": 0, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 15,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
      ],
      textPrim:
        "You continue to work on the controller and adjust the parameters\
            so that the ride ahead is fast and comfortable. You pay special\
            attention to the P and I components. You start the train and do\
            a final test. Everything is set up for the upcoming journey. You are\
            very happy with the result, and exclaim 'Voila!'.\
            The princess looks at you with an inquiring look... and then she\
            asks you: 'What took you so long? You should have asked me...'",
      textSecund:
      "Chapter 1 ends here... In the next chapters, we are going\
            to meet some other interesting characters...",
      actiuni: [
        {
          nume:"relax",
          text:
            "You feel someone's presence near you and a light touch on your\
            shoulder. A nice feminine voice is talking. When you\
            turn around, she asks you something, and shows you a couple of\
            schematics. 'Where you looking for this?', she asks.  You were actually\
            looking for her... but anyways, coming back to the story... You take\
            the schematics , happy to see her again, and while you work on\
            figuring out how to start the train, you continue the conversation.\
            It ends up that at some point in time you got out of her sight, and she couldn't\
            find you anymore. She wondered what happened, and while\
            looking around, she found an interesting place with wild peonies that have\
            a very nice scent. Then she found this train...\
            You continue to work on the controller and adjust the parameters\
                so that the ride ahead is fast and comfortable. You pay special\
                attention to the P and I components. You start the train and do\
                a final test. Everything is set up for the upcoming journey. You are\
                very happy with the result, and exclaim 'Voila!'.\
                The princess looks at you with an inquiring look... and then she\
                asks you: 'What took you so long? You should have asked me...'",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
          "You feel someone's presence near you and a light touch on your\
          shoulder. A nice feminine voice is talking. When you\
          turn around, she asks you something, and shows you a couple of\
          schematics. 'Where you looking for this?', she asks.  You were actually\
          looking for her... but anyways, coming back to the story... You take\
          the schematics , happy to see her again, and while you work on\
          figuring out how to start the train, you continue the conversation.\
          It ends up that at some point in time you got out of her sight, and she couldn't\
          find you anymore. She wondered what happened, and while\
          looking around, she found an interesting place with wild peonies that have\
          a very nice scent. Then she found this train...\
          You continue to work on the controller and adjust the parameters\
              so that the ride ahead is fast and comfortable. You pay special\
              attention to the P and I components. You start the train and do\
              a final test. Everything is set up for the upcoming journey. You are\
              very happy with the result, and exclaim 'Voila!'.\
              The princess looks at you with an inquiring look... and then she\
              asks you: 'What took you so long? You should have asked me...'",
        },
      ],
      items: [],
      npcs: [],
    },


  ];
