var cadre = [
    //starting_place
    {
      "nume_cadru": "starting_place",
      "nrVizite": 1,
      nr_cadru: 0,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 1, x:10, y:260},
        {nr_cadru: 2, x:278, y:420},
        {nr_cadru: 3, x:330, y:10},
      ],
      textPrim:
        "Continuing from last time...\n\
        As you follow the white bunny, you start feeling a mild warm sensation \n\
        throughout  your body. Slowly, your senses give up on you, and you lose \n\
        consciousness. When you wake up, you realize you are in a different place. \n\
        There is something peculiar about it. Something has changed, but you can't \n\
        put your finger on it. For sure, the air is different. It is fresh, and \n\
        you can breathe easily.You look around for the princess, but she's gone.\n\
        What has happened? \n\
        Where would you like to go or do next?",
      textSecund:
        "You are now in the starting place area. It is warm and sunny outside.The \n\
        wind is blowing softly. There are several ways to go around.\n\
        Where would you like to go or do next?",
      actiuni: [
      ],
      items: [],
      npcs: [],
    },
    //library
    {
      "nume_cadru": "library",
      "nrVizite": 0,
      nr_cadru: 1,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 0, x:590, y:360},
      ],
      textPrim:
        "You pass by several house blocks and take several turns. The people you \n\
        encounter along the way seem to be occupied with their daily activities. \n\
        You realize you are in a small quiet town. It feels good to be away from \n\
        the agitation of the big city. A couple more turns, and you reach what \n\
        seems to be an ancient school. Curiosity drives you in, and you find a \n\
        library that is open.",
      textSecund:
        "You are now in the library area. There are several bookcases standing \n\
        against the wall. Books of all sizes and shapes fill the shelves.",
      actiuni: [
        {
          nume:"research",
          "conditie": {
            "required": true,
            "itemsRequired": ["new idea",],
            "itemsReturned": ["Francais",],
            "textConditieTrue":
              "You go to the library to do some research, but you realize that now \n\
              may not be the best moment. You feel there are some other things to \n\
              attend first.",
            "textConditieFalse":
              "You start to research the French language. You find a couple of good \n\
              books, some old lectures, some tapes, and a few filmstrips. The grammar \n\
              and sounds seem so complicated and pretentious, but you stick with it. \n\
              After a few hours, you get the basics. You can now understand and also \n\
              speak 'un peu de francais'.",
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
    //house
    {
      "nume_cadru": "house",
      "nrVizite": 0,
      nr_cadru: 2,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 0, x:450, y:170},
      ],
      textPrim:
        "As you walk, you find yourself in front of a small house and decide to \n\
        enter. Inside, you find a desk with a computer, a table, a bed, and a \n\
        very old bookshelf that has several books.",

      textSecund:
        "You are now in the house area. Everything looks fine. The room is well \n\
        lit and it has a desk with a computer, a table, a bed, and a very old \n\
        bookshelf.",
      actiuni: [
        {
          nume:"read",
          text:
            "You go to the bookshelf to read something. Except a couple of fairy \n\
            tales, that stir your imagination, you find most of the books plain \n\
            boring, or it could be that you just don't understand them. In any \n\
            case, you decide to do something else.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You go to the bookshelf to read something. Except a couple of fairy \n\
            tales, that stir your imagination, you find most of the books plain \n\
            boring, or it could be that you just don't understand them. In any \n\
            case, you decide to do something else.",
        },
        {
          nume:"play",
          "conditie": {
            "required": true,
            "itemsRequired": ["ideas"],
            "itemsReturned": [],
            "cadruReturnat": 15,
            "textConditieTrue":
              "",
            "textConditieFalse":
              "",
          },
          text:
            "You go to the desk and turn on the computer. While the computer boots \n\
            up, you notice a pair of keys next to the monitor. You start playing \n\
            some video games. One of them contains a colourful map that you \n\
            can visualize in full-screen mode.",
          items: ["keys",],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You start playing some video games. One of them contains a colourful \n\
            map that you can visualize in full-screen mode.",
        },
        {
          nume:"eat",
          "conditie": {
            "required": true,
            "itemsRequired": ["food", "new idea"],
            "itemsReturned": ["strength"],
            "textConditieTrue":
              "You are not hungry at this time of the day.",
            "textConditieFalse":
              "You feel hungry so you grab the food you got from the sailor and \n\
              prepare yourself a nice meal. You take a couple of bites. It's good, \n\
              it's tasty, in fact, it's the best food you have had lately. \n\
              Good mix of various nutrients.",
          },
          text:
            "",
          items: ["keys",],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "",
        },
      ],
      items: [],
      npcs: [],
    },
    //bridge end
    {
      "nume_cadru": "bridge_end",
      "nrVizite": 0,
      nr_cadru: 3,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 0, x:390, y:420},//starting_place
        {nr_cadru: 4, x:360, y:140},
        {nr_cadru: 9, x:580, y:370},
      ],
      textPrim:
        "You climb a small hill and reach a high land platform from which you \n\
        can see the surroundings. There is a big bridge in front of you, and at \n\
        the other end, you notice an outdated car that seems to be abandoned. \n\
        In the far distance, you can see the white golden shores of the sea and \n\
        a long dam extending far into the sea. Waves of various sizes and shapes \n\
        create strips of white foam as they come towards the shore. You cross the \n\
        bridge, and find yourself at the other end. This place looks like a \n\
        medium sized cross-road. There is a colourful mural nearby with some \n\
        shapes engraved on it. To your right side, there is an abandoned old car.",
      textSecund:
        "You are now in the bridge end area. This place looks like a medium sized \n\
        cross-road. There is a colourful mural nearby with some shapes engraved \n\
        on it. To your right side, there is an abandoned old car.",
      actiuni: [
        {
          nume:"contemplate mural",
          text:
            "You get closer to the mural. The carvings seem to depict young \n\
            people playing different sports on the beach. Some of them are \n\
            swimming, some others are playing various other games. There are a \n\
            couple of seagulls flying above in the air. Several fish schools \n\
            swim in the sea, and a group of dolphins are having fun.",
            items: [],
            "active" : true,
            "numarClicks" : 0,
            "textSecund" :
              "Text secund la actiune.",
        },
        {
          nume:"drive car",
          "conditie": {
            "required": true,
            "itemsRequired": ["keys",],
            "itemsReturned": [],
            "textConditieTrue": "You need a pair of keys in order to drive the car.",
            "textConditieFalse":
              "You get closer to the car and start inspecting it. From the \n\
              outside, it looks rather old and out-fashioned. You wonder if it \n\
              is still working. You try the keys that you have, and much to \n\
              your surprise, the door opens. Although, it's been awhile since \n\
              you last time drove, you start the car and press the gas pedal. \n\
              It's rolling!",
          },
          text:
            "",
            items: [],
            "active" : true,
            "numarClicks" : 0,
            "textSecund" :
              "Text secund la actiune.",
        },
      ],
      items: [],
      npcs: [],
    },
    //alley split
    {
      "nume_cadru": "alley_split",
      "nrVizite": 0,
      nr_cadru: 4,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 3, x:120, y:350},//bridge_end
        {nr_cadru: 5, x:470, y:140},
        {nr_cadru: 6, x:330, y:60},//sunny_beach
        {nr_cadru: 7, x:50, y:60},
      ],
      textPrim:
        "You walk along a sand alley covered by the shade of the trees which \n\
        reside on its sides. On each side, there are buckets of dandelions and \n\
        other small flowers that have yellow and blue colours. The alley splits \n\
        into 3 directions. One seems to be heading to the dam, the other one to \n\
        the sunny beach, and the third one to the summer games area.",
      textSecund:
        "You are now in the alley split area. On the sides, there are trees, \n\
        buckets of dandelions, and other small flowers that have yellow and \n\
        blue colours. The alley splits into 3 directions. One seems to be \n\
        heading to the dam, the other one to the sunny beach, and the third \n\
        one to the summer games area.",
      actiuni: [],
      items: [],
      npcs: [],
    },
    //summer games
    {
      "nume_cadru": "summer_games",
      "nrVizite": 0,
      nr_cadru: 5,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 4, x:10, y:270},
      ],
      textPrim:
        "You take the route to the right. There are several trees along the way \n\
        and colourful buildings sprinkled here and there. You reach what seems to \n\
        be an open basketball court.",
      textSecund:
        "You are now in the summer games area. In front of you there is an open \n\
        basketball court surrounded by trees.",
      actiuni: [
        {
          nume:"play",
          "conditie": {
            "required": true,
            "itemsRequired": ["basketball","good form",],
            "itemsReturned": ["understanding",],
            "textConditieTrue": "Your form may be lacking...",
            "textConditieFalse":
              "You missed playing a good game, so you decide to take a couple \n\
              of shots. Since you are in good form, you run for the final shot \n\
              towards the basketball ring, and then jump up in the air as high \n\
              as you can. This gives you a sense of freedom. You grab the ring \n\
              with the left hand and with the right hand you do a perfect slam-dunk. \n\
              You let the ring go, and land back on the ground.",
          },
          text:
            "You play a nice game of basketball.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Text secund la actiune.",
        },
      ],
      items: [],
      npcs: [],
    },
    //sunny_beach
    {
      "nume_cadru": "sunny_beach",
      "nrVizite": 0,
      nr_cadru: 6,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 4, x:230, y:340},
      ],
      textPrim:
        "You go to the sunny beach. The sand is warm, so you take your shoes off \n\
        and start walking barefoot. It feels nice. There are several people on \n\
        the beach, and they seem to be having fun. The sea waves are coming and \n\
        going. Where the sand gets wet, you notice an interesting seashell. It's \n\
        one of those big ones that always stand apart.",
      textSecund: "",
      actiuni: [
        {
          nume:"swim",
          "conditie": {
            "required": true,
            "itemsRequired": ["strength"],
            "itemsReturned": ["good form",],
            "textConditieTrue":
              "You go to swim, but the water is still cold. Perhaps you should try \n\
              again some other time.",
            "textConditieFalse":
              "You test the water with your feet. The water is good! You dive in \n\
              and go full speed ahead. The sea is calm today, and you advance \n\
              effortlessly. After a couple of minutes, you stop swimming to catch \n\
              your breath. You turn towards the shore and notice that people are \n\
              now only tiny little dots on the beach. You start floating on your \n\
              back, enjoying the weightlessness sensation, the free massage of the \n\
              water waves, and the caressing touch of the sun rays. You turn again \n\
              towards the shore and start swimming back until you can touch with \n\
              your feet solid ground underneath. The whole thing has been a bit \n\
              taxing on your body, but at the same time you feel a sense of relaxation. \n\
              You feel you are in good form now.",
          },
          text:
            "You go to swim, but the water is still cold. Perhaps you should try \n\
            again some other time.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Text secund la actiune.",
        },
        {
          nume:"pick seashell",
          text:
            "You pick the seashell and put it close to your ear. You hear the \n\
            sea waves of a distant beach and some nice tune in the background.",
          items: ["seashell"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Text secund la actiune.",
        },
      ],
      items: [],
      npcs: [],
    },
    //dam
    {
      "nume_cadru": "dam",
      "nrVizite": 0,
      nr_cadru: 7,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 4, x:210, y:300},
        {nr_cadru: 8, x:210, y:30},
      ],
      textPrim:
        "You pass by a beautiful beach with golden sand dunes. In some places, \n\
        the trees create areas of shade. The sea waves come and go. When you \n\
        reach the dam, you notice that it advances far into the sea. You walk on \n\
        it until you reach the middle. Behind the rocks, you notice the fishing \n\
        rod of a fisherman. You go to his place. He looks calm and relaxed.",
      textSecund:
        "You are now in the dam area. Behind the rocks, you notice the fishing \n\
        rod of a fisherman. You go to his place. He looks calm and relaxed.",

      actiuni: [
        {
          nume:"watch seahorses",
          text:
            "You get close to the water level to observe the seahorses. They \n\
            swim peacefully in the proximity of the algae and rocky formations. \n\
            They move in rhythmical patterns with a lot of grace and elegance by \n\
            flapping their tiny little wings, and by moving their tails up and \n\
            down. They seem not to be bothered at all by the big face that is \n\
            looking at them. Although they don't speak much, they make an \n\
            impression on you. You take a pen and some paper and do a seahorse \n\
            drawing. Looking far into the distance, you notice the end of the dam.",
          items: ["seahorse drawing",],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "The seahorses swim peacefully in the proximity of the algae and rocky \
            formations.",
        },
        {
          nume:"talk",
          text:
            "You greet the fisherman and chat a bit about the weather and the \n\
            sea. It seems that the other day, there was a thunderstorm with big \n\
            lightning bolts, which stirred the sea. Now the sea is calm, but \n\
            there are no fish around, only a couple of seahorses.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You ask the fisherman if the fish have returned. He says no, only \n\
            a couple of seahorses swim around...",
        },
      ],
      items: [],
      npcs: [],
    },
    //lighthouse
    {
      "nume_cadru": "lighthouse",
      "nrVizite": 0,
      nr_cadru: 8,//lighthouse
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 7, x:160, y:400},
      ],
      textPrim:
        "You continue your walk up the dam, and farther into the sea until you \n\
        reach a lighthouse. The lighthouse seems to be closed.",
      textSecund:
        "You are now in the lighthouse area. The lighthouse seems to be closed. \n\
        It is surrounded by rocks.",

      actiuni: [
        {
          nume:"climb",
          text:
          "You climb the rocks. From up here, you can see the open sea. The \n\
          wind blows softly and cools you off from the heat of the sun. The \n\
          sea waves hit the rocks and create big splashes. Some of the water \n\
          drips reach you; they are cold. Looking far away into the distance, \n\
          you notice a tiny dot floating above the horizon line. It must be a \n\
          ship sailing around. You get closer to the water and immerse your feet \n\
          in it. The water is still cool after yesterday's thunderstorm, but \n\
          the sensation is nice, because it is contrasting with the heat outside.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You climb the rocks. From up here, you can see the open sea. The \n\
            wind blows softly and cools you off from the heat of the sun. The \n\
            sea waves hit the rocks and create big splashes. Some of the water \n\
            drips reach you; they are cold. Looking far away into the distance, \n\
            you notice a tiny dot floating above the horizon line. It must be a \n\
            ship sailing around. You get closer to the water and immerse your feet \n\
            in it. The water is still cool after yesterday's thunderstorm, but \n\
            the sensation is nice, because it is contrasting with the heat outside.",
        },
        {
          nume:"climb higher",
          "conditie": {
            "required": true,
            "itemsRequired": ["song","lighthouse idea",],
            "itemsReturned": ["new idea",],
            "textConditieTrue":
              "Perhaps you should return here later to watch the sunset.",
            "textConditieFalse":
              "You climb the rocks. From up here, you can see the open sea. The wind is \n\
              almost totally absent. You look far into the distance. At the horizon line, \n\
              you notice many ships that are sailing towards the sunset. They have goldish/reddish \n\
              colours and they come in various shapes and sizes. The sunset rays create a warm \n\
              wonderful atmosphere. The strong heat of the day has resided and now it feels just \n\
              perfect. There are a few clouds close to the horizon. They are back-lit by the big \n\
              red ball of the sun, which is dissolving slowly into the sea. You realize it's evening \n\
              now and it's been a very long day. As you feel a bit tired, you decide to head home to \n\
              get some rest. You go inside the house and fall asleep in an instant. When you wake up \n\
              in the morning, you realize the mermaids song language is a known one. It's French! \n\
              Perhaps you should study it a little bit.",
          },
          text:
            "You climb the rocks. From up here, you can see the open sea. The \n\
            wind blows softly and cools you off from the heat of the sun. The \n\
            sea waves hit the rocks and create big splashes. Some of the water \n\
            drips reach you; they are cold. Looking far away into the distance, \n\
            you notice a tiny dot floating above the horizon line. It must be a \n\
            ship sailing around. You get closer to the water and immerse your feet \n\
            in it. The water is still cool after yesterday's thunderstorm, but \n\
            the sensation is nice, because it is contrasting with the heat outside.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Text secund la actiune.",
        },
        {
          nume:"climb highest",
          "conditie": {
            "required": true,
            "itemsRequired": ["new idea","strength"],
            "itemsReturned": ["dolphin drawing"],
            "textConditieTrue":
              "Perhaps you should return here some other day.",
            "textConditieFalse":
              "You climb the rocks and... something amazing is undergoing in \n\
              front of your eyes. A large group of dolphins are swimming together \n\
              making noises, jumping up in the air, and making big splashes when \n\
              diving back into the water. They seem happy and friendly, and make \n\
              a big impression on you. You create a drawing.",
          },
          text:
            "",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Text secund la actiune.",
        },
      ],
      items: [],
      npcs: [],
    },
    //drive stop
    {
      "nume_cadru": "drive_stop",
      "nrVizite": 0,
      nr_cadru: 9,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 3, x:20, y:270},
        {nr_cadru: 10, x:230, y:180},
        {nr_cadru: 12, x:470, y:270},
      ],
      textPrim:
        "You drive to the right. After a ten minutes' ride, you notice on the \n\
        left side of the road some trees and some dense vegetation. You can stop \n\
        near the trees, continue driving to the right side, or return to the left \n\
        side.",
      textSecund:
        "You are now in the drive stop area. You can stop near the trees, or \n\
        continue driving in the desired direction.",
      actiuni: [],
      items: [],
      npcs: [],
    },
    // trees
    {
      "nume_cadru": "trees",
      "nrVizite": 0,
      nr_cadru: 10,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 9, x:280, y:390},
        {nr_cadru: 11, x:360, y:180},
      ],
      textPrim:
        "You choose to go near the trees. The branches of the trees are adorned \n\
        with small yellow flowers that smell nice.",
      textSecund:
        "The branches of the trees are adorned with small yellow flowers that \n\
        smell nice.",

      actiuni: [
        {
          nume:"listen",
          text:
            "As you listen, you hear a low sound that seems to repeat itself. The sound \n\
            seems to originate from the area behind the trees. You realize it is the same \n\
            sound as the one you have heard in the seashell - the sea waves and sea wind \n\
            concerting together. For sure there must be a hidden beach behind this dense \n\
            vegetation. You start moving branches and make your way through until you reach \n\
            a marvellous beach. You catch your breath under the shade of a palm tree and start \n\
            noticing the surroundings. Seagulls are flying above the sea, making calls from \n\
            time to time. On the beach, there is a group of mermaids giggling. \n\
            Close to the water, you notice several sand castles. Altough fragile, \n\
            they seem to resist the sea waves that are hitting them incessantly.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Text secund la actiune.",
        },
      ],
      items: [],
      npcs: [],
    },
    //palm beach
    {
      "nume_cadru": "palm_beach",
      "nrVizite": 0,
      nr_cadru: 11,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 10, x:200, y:400},
      ],
      textPrim:
        "You are now in the palm beach area. Seagulls are flying above the sea, \n\
        making calls from time to time. On the beach, there is a group of mermaids \n\
        giggling. Close to the water, you notice several sand castles that seem \n\
        to resist all the coming waves.",
      textSecund:
        "You are now in the palm beach area. Seagulls are flying above the sea, \n\
        making calls from time to time. On the beach, there is a group of \n\
        mermaids giggling. Close to the water, you notice several sand castles \n\
        that seem to resist all the coming waves.",

      actiuni: [
        {
          nume:"watch seagulls",
          text:
            "The seagulls seem to enjoy themselves. They make big circles in the \n\
            air followed by sharp drops into the sea to catch small fish. They go \n\
            with the flow and navigate the sea winds effortlessly. The small ones \n\
            have white feathers and grey beaks; they tend to be very fast in their \n\
            aerial manoeuvres. The big ones have large wings and orange beaks; \n\
            they glide high up in the air supervising the entire shore. The \n\
            seagulls' activity makes an impression on you and you create a drawing.",
          items: ["seagull drawing"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "The seagulls seem to enjoy themselves. They make big circles in the \n\
            air followed by sharp drops into the sea to catch small fish. They go \n\
            with the flow and navigate the sea winds effortlessly. The small ones \n\
            have white feathers and grey beaks; they tend to be very fast in their \n\
            aerial manoeuvres. The big ones have large wings and orange beaks; \n\
            they glide high up in the air supervising the entire shore. The \n\
            seagulls' activity makes an impression on you and you create a drawing.",

        },
        {
          nume:"give ideas",
          text:
            "The mermaids look confused and start laughing.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Text secund la actiune.",
        },
        {
          nume:"give seashell",
          "conditie": {
            "required": true,
            "itemsRequired": ["seashell",],
            "itemsReturned": ["song"],
            "textConditieTrue": "You need to get a seashell first.",
            "textConditieFalse":
              "The mermaids take the seashell and start singing a beautiful song \n\
              in a language you don't understand. You are a bit disappointed that \n\
              you cannot grasp any of the words. You may need to explore and meet \n\
              more people.",
          },
          text:
            "The mermaids take the seashell and start singing a beautiful song \n\
            in a language you don't understand. You are a bit disappointed that \n\
            you cannot grasp any of the words. You may need to explore and meet \n\
            more people.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Text secund la actiune.",
        },


      ],
      items: [],
      npcs: [],
    },
    //city intersection
    {
      "nume_cadru": "city_intersection",
      "nrVizite": 0,
      nr_cadru: 12,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 9, x:20, y:270},
        {nr_cadru: 13, x:490, y:260},
        {nr_cadru: 14, x:250, y:60},
      ],
      textPrim:
        "You drive to the right until you reach the outskirts of another city. \n\
        The city seems to expand on a large area of land, and you wonder what you \n\
        will find here. You enter a road intersection, which has a big artisanal \n\
        fountain in the middle. From here, you can go into several directions.",
      textSecund:
        "You are now in the city intersection area. There is a big artisanal \n\
        fountain in the middle. From here, you can go into several directions.",

      actiuni: [],
      items: [],
      npcs: [],
    },
    //east city
    {
      "nume_cadru": "east_city",
      "nrVizite": 0,
      nr_cadru: 13,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 12, x:20, y:250},
      ],
      textPrim:
        "You drive to the right until you reach the east side of the city. You \n\
        stop the car and go for a stroll on the side walk. You encounter a girl \n\
        that is dressed in a white dress, and who is looking at you.",
      textSecund:
        "You are now in the east city area. A girl dressed in a white dress is \n\
        standing in front of you.",

      actiuni: [
        {
          nume:"talk",
          "conditie": {
            "required": true,
            "itemsRequired": ["Francais",],
            "itemsReturned": ["basketball", "lighthouse idea"],
            "textConditieTrue":
              "The girl has an exotic look and she is staring at you with her \n\
              beautiful light-blue eyes. She tries to tell you something in a \n\
              language that you don't understand. You are confused. Perhaps now \n\
              it would be a good time to return to the lighthouse.",
            "textConditieFalse":
              "You talk to her, and find out that her name is Alice. She's looking \n\
              for her pet. You cannot do much in that respect. After her departure, \n\
              just a few meters down the sidewalk, you find a basketball and you take \n\
              it with you.",
          },
          text:
            "The girl has an exotic look and she is staring at you with her \n\
            beautiful light-blue eyes. She tries to tell you something in a \n\
            language that you don't understand. You are confused. Perhaps now \n\
            it would be a good time to return to the lighthouse.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Text secund la actiune.",
        },
      ],
      items: [],
      npcs: [],
    },
    //port
    {
      "nume_cadru": "port",
      "nrVizite": 0,
      nr_cadru: 14,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 12, x:250, y:350},
      ],
      textPrim:
        "You take the up route and drive along the coastline until you \n\
        reach the port. To the east, you see lines of ships and big naval cranes \n\
        moving cargo around. In your area, there are mainly light vessels used by \n\
        tourists and sailing enthusiasts. You get closer to one of the ships. This \n\
        one has a tall mast and long white sails. On one of its sides there is a \n\
        shiny inscription. It says 'Princess'. You go aboard and you encounter a \n\
        sailor, who is looking far into the sea. He has a couple of drawings on his \n\
        table.",
      textSecund:
        "You are now in the port area. To the east, you see lines of ships and \n\
        big naval cranes moving cargo around. In your area, there are mainly \n\
        light vessels used by tourists and sailing enthusiasts. You get aboard \n\
        one of the ships and notice that the sailor is looking far into the sea. \n\
        He has a couple of drawings on his table.",

      actiuni: [
        {
          nume:"talk",
          "conditie": {
            "required": true,
            "itemsRequired": ["understanding","smile1","smile2","smile3"],
            "itemsReturned": [],
            "cadruReturnat": 16,
            "textConditieTrue":
              "You talk to the sailor. He has interesting stories to tell. You ask \n\
              him whether he has any food aboard and he kindly offers you some. He \n\
              has a riddle for you. He asks you 'What is freedom?' You are a bit \n\
              surprised, and don't know how to answer that. What does he mean?",
            "textConditieFalse":
              "You talk to the sailor. The sailor looks at the 3 drawings he got \n\
              from you: the one with the seagull, the one with the seahorse, and \n\
              the one with the dolphin. He smiles knowingly at you, and you smile, \n\
              because now... you know what freedom is...\n\
              You are now in the end of the chapter area. Suddenly another thought \n\
              crosses your mind: 'Ou est la princesse?' You must find her! Another \n\
              journey is about to start! \n\
              To be continued...",
            },
          text: "",
          items: ["food"],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "You talk to the sailor. He has interesting stories to tell. You \n\
            still don't know how to answer his question about what freedom is...",
        },
        {
          nume:"give seahorse drawing",
          "conditie": {
            "required": true,
            "itemsRequired": ["seahorse drawing",],
            "itemsReturned": ["smile1"],
            "textConditieTrue":
              "You don't have any seahorse drawings...",
            "textConditieFalse":
              "The sailor takes the drawing and smiles at you. He puts it down, on \n\
              the table next to him.",
            },
          text:
            "The sailor takes the drawing and smiles at you. He puts it down, on \n\
            the table next to him.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Text secund la actiune.",
        },
        {
          nume:"give seagull drawing",
          "conditie": {
            "required": true,
            "itemsRequired": ["seagull drawing",],
            "itemsReturned": ["smile2"],
            "textConditieTrue":
              "You don't have any seagull drawings...",
            "textConditieFalse":
            "The sailor takes the drawing and smiles at you. He puts it down, on \n\
            the table next to him.",
            },
          text:
            "The sailor takes the drawing and smiles at you. He puts it down, on \n\
            the table next to him.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Text secund la actiune.",
        },
        {
          nume:"give dolphin drawing",
          "conditie": {
            "required": true,
            "itemsRequired": ["dolphin drawing",],
            "itemsReturned": ["smile3"],
            "textConditieTrue":
              "You don't have any dolphin drawings...",
            "textConditieFalse":
            "The sailor takes the drawing and smiles at you. He puts it down, on \n\
            the table next to him.",
            },
          text:
            "The sailor takes the drawing and smiles at you. He puts it down, on \n\
            the table next to him.",
          items: [],
          "active" : true,
          "numarClicks" : 0,
          "textSecund" :
            "Text secund la actiune.",
        },
      ],
      items: [],
      npcs: [],
    },

    //map
    {
      "nume_cadru": "map",
      "nrVizite": 0,
      nr_cadru: 15,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 2, x:250, y:30},
      ],
      textPrim:
        "",
      textSecund:
        "Text secund harta",
      actiuni: [
      ],
      items: [],
      npcs: [],
    },

    //end of chapter
    {
      "nume_cadru": "end_of_chapter",
      "nrVizite": 0,
      nr_cadru: 16,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 2, x:250, y:30},
      ],
      textPrim:
      "You talk to the sailor. The sailor looks at the 3 drawings he got \n\
      from you: the one with the seagull, the one with the seahorse, and \n\
      the one with the dolphin. He smiles knowingly at you, and you smile, \n\
      because now... you know what freedom is...\n\
      You are now in the end of the chapter area. Suddenly another thought \n\
      crosses your mind: 'Ou est la princesse?' You must find her! Another \n\
      journey is about to start! \n\
      To be continued...",
      textSecund:
        "Text secund end of chapter",
      actiuni: [
      ],
      items: [],
      npcs: [],
    },

];

let image_strings = [
    "./img/starting_place.png", //0
    "./img/library.png",//1
    "./img/house.png",//2
    "./img/bridge_end.png",//3
    "./img/alley_split.jpg",//4
    "./img/summer_games.png",//5
    "./img/sunny_beach.jpg",//6
    "./img/dam.jpg",//7
    "./img/lighthouse.png",//8
    "./img/drive_stop.jpg",//9
    "./img/trees.png",//10
    "./img/palm_beach.png",//11
    "./img/city_intersection.jpg",//12
    "./img/east_city.jpg",//13
    "./img/port.png",//14
    "./img/map.jpg",//15
    "./img/end_of_chapter.jpg",//15
];
