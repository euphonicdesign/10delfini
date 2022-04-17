var cadre_ch1 = [
    //central
    {
      "nume_cadru": "central",
      "nrVizite": 1, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 0,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 1, x:310, y:40}, //attic
        {nr_cadru: 2, x:270, y:400}, //riverside
        {nr_cadru: 5, x:40, y:250}, //tree
        {nr_cadru: 4, x:530, y:260}, //tree
      ],
      textPrim:
        "The story begins here... Once upon a time... \
        (Really?! Remember that you can 'restart' at any point. \
        Buena suerte!)\
        You are now in the central area. This place looks like a big\
            intersection with multiple roads coming in and out. It is a\
            beautiful day outside and you feel ready to explore the\
            surroundings. There are multiple directions where you can go.",
      textSecund:
        "This place looks like a big intersection with\
            multiple roads coming in and out. It is a beautiful day outside\
            and you feel ready to explore the surroundings. There are multiple\
            directions where you can go.",
      actiuni: [
      ],
      items: [],
      npcs: [],
    },
    //attic
    {
      "nume_cadru": "attic",
      "nrVizite": 0, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 1,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 0, x:280, y:400},
      ],
      textPrim:
        "This place looks like the attic of an old building. Although,\
        there is only one window, the rays of the sun are sufficient to reveal most of\
        the area and you are able to make your way around. Little specks of dust\
         are flowing into the\
        air and create an interesting visual effect. There are a couple of\
        objects in this forgotten place. One of them is rather shiny and looks\
        interesting.",
      textSecund:
        "This place looks like the attic of an old building. Although,\
        there is only one window, the rays of the sun are sufficient to reveal most of\
        the area and you are able to make your way around. Little specks of dust\
         are flowing into the\
        air and create an interesting visual effect.",
      actiuni: [
        {
          nume:"pick shield",
          text:
            "You get closer to the shiny object and pick up the shield. You \
            take with you some food and some clothes.",
          items: ["shield", "food", "clothes"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You already have one.",
        },
      ],
      items: [],
      npcs: [],
    },
    //riverside
    {
      "nume_cadru": "riverside",
      "nrVizite": 0, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 1,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 0, x:290, y:160},
        {nr_cadru: 3, x:280, y:400},
      ],
      textPrim:
        "The road continues down south, and to the left side\
            there is a narrow river flowing downstream. You are sitting on the\
            right side of the road. From here, you can see green grass and\
            a deep forest looming into the background. You hear a strange noise\
            coming from nearby. A white unicorn is resting down on the ground.\
                        He does not look very well...",
      textSecund:
        "The road continues down south, and to the left side\
            there is a narrow river flowing downstream. You are sitting on the\
            right side of the road. From here, you can see green grass and\
            a deep forest looming into the background. You hear a strange noise\
            coming from nearby.\
            A white unicorn is resting down on the ground.\
                        He does not look very well...",
      actiuni: [
        {
          nume:"talk",
          "conditie": {
            "required": true,
            "itemsRequired": ["unicorn strength","unicorn hidratation"],
            "itemsReturned": ["flower"],
            "textConditieTrue":
              "You talk to the unicorn and\
                  you find out his story. He needs your help.",
            "textConditieFalse":
            "Suddenly he feels rejuvenated, he gets up and\
            runs into the deep forest. He leaves an interesting flower behind him\
            and you pick it up.",
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
          nume:"give food",
          "conditie": {
            "required": true,
            "itemsRequired": ["food",],
            "itemsReturned": ["unicorn strength"],
            "textConditieTrue":
              "You don't have any food left...",
            "textConditieFalse":
            "The unicorn eats the little food you offer him. He gets \
            additional strength back.",
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
          nume:"give water",
          "conditie": {
            "required": true,
            "itemsRequired": ["water",],
            "itemsReturned": ["unicorn hidratation"],
            "textConditieTrue":
              "You don't have any water left...",
            "textConditieFalse":
            "The unicorn drinks the water you have brought him. He gets \
            additional strength back.",
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

    //princess
    {
      "nume_cadru": "princess",
      "nrVizite": 1, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 1,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 2, x:290, y:160},
      ],
      textPrim:
        "",
      textSecund:
      "You arrive at another house and choose to enter the main room. It is a\
          delightful place. There are some books spread on a nearby\
          table. In the middle of the table, there is a vase with some colourful\
          flowers, and at the table side there are two comfortable chairs.\
          Looking into the background, you see a window and a couple of plants\
          showering into the light. You also notice a beautiful princess that is\
          looking at you.",
      actiuni: [
        {
          nume:"talk",
          text:
            "The princess offers you a \
            cup of coffee and tells you that she had a busy day. She had to\
            leave her office at 3PM, and then run to the university to take an exam.\
            She can now finally rest. You continue to talk. The\
            conversation is nice and stimulating. She feels relaxed now.",
          items: ["coffee"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "The princess is relaxed now.",
        },
        {
          nume:"give flower",
          "conditie": {
            "required": true,
            "itemsRequired": ["flower",],
            "itemsReturned": ["smile"],
            "textConditieTrue":
              "You don't have any flowers...",
            "textConditieFalse":
            "The princess takes the flower and starts smiling",
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
          nume:"give zapatos",
          "conditie": {
            "required": true,
            "itemsRequired": ["zapatos","smile"],
            "itemsReturned": ["smile1"],
            "cadruReturnat": 6,
            "textConditieTrue":
              "You need a pair of zapatos and make sure the princess is happy...",
            "textConditieFalse":
            "You show her the pair of zapatos you have found.\
              They remind you of an Argentinian folk dance called Chacarera, where the man does\
              this pattern with his feet, resembling the attitude of a wild horse. It may look a bit silly, but\
              can be great fun. She finds the zapatos a little bit old fashioned, and shows you\
              her pair of dance shoes. You find the heels just a bit too high and a little bit too\
              sharp, and you ponder on the idea that they could be used as weapons. \
              She laughs. Everything is fine now and you got a big smile.\
            You take the princess and you go to a new place.",
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
          nume:"give phone",
          "conditie": {
            "required": true,
            "itemsRequired": ["phone",],
            "itemsReturned": [],
            "textConditieTrue":
              "You don't have any phone...",
            "textConditieFalse":
            "The princess starts texting.",
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

    //cave
    {
      "nume_cadru": "cave",
      "nrVizite": 1, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 4,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 0, x:30, y:260},
      ],
      textPrim:
        "",
      textSecund:
      "You arrived here after a 20 minutes' walk to the\
            east side of the realm. To reach the cave, you had had to climb up a\
            steep hill covered with rocks and muddy terrain. After all this\
            effort, you are now inside the cave. It is rather dark and cold,\
            so you light up a lamp to look around. Looking deeper into the cave, you notice \
            a mighty dragon. Long streams of smoke flow outside his nostrils and \
            he does not look very friendly. You start to shiver.",
      actiuni: [
        {
          nume:"fight",
          "conditie": {
            "required": true,
            "itemsRequired": ["shield",],
            "itemsReturned": ["water"],
            "textConditieTrue":
              "You attack the dragon,\
                  but he is much more powerful and agile than you. To escape\
                  his dangerous blows, you throw yourself outside the cave and\
                  down the hill. You get a couple of bruises, but you survive.",
            "textConditieFalse":
            "You attack the dragon\
                  in a valiant attempt to defeat him. The dragon is much more\
                  powerful than you, and starts throwing balls of fire.\
                  Fortunately, you are protected by your shield, and he cannot hurt you.\
                  After 15 minutes, the dragon flies away \
                  and you start searching through the rest of the cave. In one of the corners, \
                  you find some wood and a bottle full of water.",
            },
          text:
            "You get closer to the princess and talk to her.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You get closer to the princess and talk to her.",
        },
        {
          nume:"run",
          "conditie": {
            "required": false,
            "itemsRequired": [],
            "itemsReturned": [],
            "cadruReturnat": 0,
            "textConditieTrue":
              "You start running. The\
                dragon chases you, but you manage to escape!",
            "textConditieFalse":
              "You start running. The\
                dragon chases you, but you manage to escape!",
            },
          text:
            "You start running. The\
                dragon chases you, but you manage to escape!",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You start running. The\
              dragon chases you, but you manage to escape!",
        },
      ],
      items: [],
      npcs: [],
    },

    //tree
    {
      "nume_cadru": "tree",
      "nrVizite": 1, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 5,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 0, x:530, y:260},
      ],
      textPrim:
        "",
      textSecund:
      "It is where the road has brought you. You would like to advance\
            farther, but a giant tree and some luxurious vegetation are blocking\
            your way. This natural barrier creates a large area of shade. It looks\
            rather impressive and you wonder if there is any way around it...\
            On the ground, you notice a sturdy ladder.",
      actiuni: [
        {
          nume:"talk to the ladder",
          text:
            "You get closer to the ladder and start talking to her. \
            Probably, not the most intelligent action you could do...",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Probably, not the most intelligent action you could do...",
        },
        {
          nume:"climb",
          "conditie": {
            "required": true,
            "itemsRequired": ["ladder",],
            "itemsReturned": ["branches"],
            "textConditieTrue":
              "You try to climb the tree,\
                    but you slip and get to embrace mother Earth once again...\
                    There should be an easier way to get up there!",
            "textConditieFalse":
            "You climb the ladder and\
              get up in the tree. The view is beautiful... You can see the\
              entire realm from up here.",
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
            "You push the ladder against the tree.",
          items: ["ladder"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "The ladder is now standing against the tree.",
        },
        {
          nume:"push branch",
          "conditie": {
            "required": true,
            "itemsRequired": ["branches",],
            "itemsReturned": ["zapatos","phone",],
            "textConditieTrue":
              "You cannot reach the branches...",
            "textConditieFalse":
            "Moving the branches, you find a mobile phone and a\
            pair of zapatos por tango...",
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

    //castle
    {
      "nume_cadru": "castle",
      "nrVizite": 1, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 6,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
        {nr_cadru: 0, x:530, y:260},
      ],
      textPrim:
        "",
      textSecund:
      "Inside the room, there is a smooth shiny floor, which looks just perfect!\
            Los zapatos son para bailar... At the end of the room there is a large window,\
            through which you can see the view outside. Something is running in the \
            garden outside the castle. It is a white bunny.",
      actiuni: [
        {
          nume:"follow bunny",
          "conditie": {
            "required": true,
            "itemsRequired": [],
            "itemsReturned": [],
            "cadruReturnat": 7,
            "textConditieTrue":
              "You chose to follow the white\
                    bunny and the princess comes with you. That's interesting...",
            "textConditieFalse":
            "You chose to follow the white\
                  bunny and the princess comes with you. That's interesting...\
                  Chapter 1 ends here... In the next chapters, we are going\
                  to meet some other interesting characters...",
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
          nume:"admire view",
          text:
            "You chose to admire the view. Nothing interesting though...",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You chose to admire the view. Nothing interesting though...",
        },
      ],
      items: [],
      npcs: [],
    },

    //end of the chapter
    {
      "nume_cadru": "theend",
      "nrVizite": 0, //cadrul de inceput are intotdeauna 1, restul au 0
      nr_cadru: 7,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 300, //pozitia jucatorului
      pozitieIntrareY: 340,
      entries:[ //link-uri celelalte cadre - pozitia cercurilor
      ],
      textPrim:
        "You chose to follow the white\
              bunny and the princess comes with you. That's interesting...\
              Chapter 1 ends here... In the next chapters, we are going\
                    to meet some other interesting characters...",
      textSecund:
      "Chapter 1 ends here... In the next chapters, we are going\
            to meet some other interesting characters...",
      actiuni: [
      ],
      items: [],
      npcs: [],
    },


  ];
