var cadre_ch4 = [
  //port
  {
    nume_cadru: "watch train",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 0,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
    ],
    textPrim:
      "Continuing from last time... Apparently she had all the \
        mathematics sorted out already... There must be more then \
        what meets the eye!",
    textSecund: "",
    actiuni: [
      {
        nume: "onboard",
        conditie: {
          required: true,
          itemsRequired: [],
          itemsReturned: [],
          cadruReturnat: 1,
          textConditieTrue:
            "You go towards the spider web. It looks very peculiar from the outside.",
          textConditieFalse:
            "You onboard the train and sit down. The seats are nice and comfortable. The windows are large and clear, giving you a good view of the surroundings. At the window's sides, you notice a pair of curtains made from high-quality fabrics. Whoever designed the interior of the cabin must have very good taste. It makes you feel at ease and relaxed. Then, the train starts moving... It is a smooth ride! If it weren't for the windows and objects outside, you would not be able to tell if you are moving or holding position.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },
  //train car
  {
    nume_cadru: "train car",
    nrVizite: 0, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 1,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
    ],
    textPrim: "",
    textSecund: "",
    actiuni: [
      {
        nume: "watch princess",
        text: "The princess rests her head on your shoulder and starts dreaming. She looks serene and happy.",
        items: ["princess asleep"],
        active: true,
        numarClicks: 0,
        textSecund:
          "The princess rests her head on your shoulder and starts dreaming. She looks serene and happy.",
      },
      {
        nume: "watch window",
        conditie: {
          required: true,
          itemsRequired: [],
          itemsReturned: [],
          cadruReturnat: 15,
          textConditieTrue: "",
          textConditieFalse:
            "You look outside the window. The train passes along hills, trees, villages and towns, rivers and bridges, meadows, and lots of other beautiful scenery. Sometimes you see people that smile and wave at you. The landscape you encounter along the way is varied. This makes the trip even more interesting...",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "wake up",
        conditie: {
          required: true,
          itemsRequired: ["princess asleep"],
          itemsReturned: [],
          cadruReturnat: 2,
          textConditieTrue: "No need to do that. The princess is awake.",
          textConditieFalse:
            "Few hours pass until you get close to the outskirts of a very large city. The train is moving more slowly now and continues to advance until it reaches the central train station. It makes a quiet sound and comes to a full stop by the platform. You gently touch the princess, and she wakes up while stretching her body. You get off the train and step onto the platform.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },
  //central train station
  {
    nume_cadru: "central train station",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 2,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 3, x: 380, y: 90 },
    ],
    textPrim: "",
    textSecund: "The train has not changed position.",
    actiuni: [
      {
        nume: "watch train",
        conditie: {
          required: true,
          itemsRequired: ["train activated"],
          itemsReturned: [],
          textConditieTrue:
            "You inspect the train once more. Seems to be deactivated now.\
                    The more you watch it from the outside, the more curios\
                    you become... You continue to\
                    remain impressed with the technology that makes it work.\
                    What powers the train?",
          textConditieFalse:
            "The train is activated. You continue to remain\
                    impressed with technology behind it.  It is a marvel of\
                    modern engineering...",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "start train",
        conditie: {
          required: true,
          itemsRequired: ["train activated"],
          itemsReturned: [],
          textConditieTrue:
            "You still need to find a way to activate the train.",
          textConditieFalse:
            "Good, so the train is now working. You are set to go.\
                    You can operate it yourself\
                    and choose to go to a couple of locations.\
                    After all, you still have to find what you have been\
                    looking for...",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "use blueprint",
        conditie: {
          required: true,
          itemsRequired: ["blueprint"],
          itemsReturned: [],
          textConditieTrue: "You need to find the blueprint first.",
          textConditieFalse:
            "You take a closer look at the train and at the\
                    blueprint.\
                    You now understand how it works... It is a marvel of modern\
                    engineering.\
                    You leverage the schematics and you activate the train.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //small park
  {
    nume_cadru: "small park",
    nrVizite: 0, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 3,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
    ],
    textPrim:
      "You exit the central train station and go up.\
            You watch the surroundings to get a feeling of how the city might\
            be. The streets are very clean and tidy and\
            there are only a few cars\
            parked around. The sidewalks have trees\
            spaced evenly throughout, and the buildings are somewhat distinctive.\
            You walk up ahead and pass by a small park. Close to some\
            benches, you notice a couple of pigeons that are dressing up\
            and arranging their feathers. It is very\
            quiet and there are no people around. It is still early morning...\
            Why is it early morning?\
            ",
    textSecund: "",
    actiuni: [
      {
        nume: "walk",
        conditie: {
          required: true,
          itemsRequired: [],
          itemsReturned: [],
          cadruReturnat: 4,
          textConditieTrue:
            "You continue to walk, and as you pass the park, you start feeling a\
              strong sensation inside your chest. Something is missing...\
              when you needed her most...",
          textConditieFalse:
            "You continue to walk, and as you pass the park, you start feeling a\
            strong sensation inside your chest. Something is missing...\
            when you needed her most...",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //small park side
  {
    nume_cadru: "small park side",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 4,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 5, x: 210, y: 200 },
    ],
    textPrim: "",
    textSecund:
      "You continue to walk, and as you pass the park, you start feeling a strong sensation inside your chest. Something is missing... when you needed her most...",
    actiuni: [],
    items: [],
    npcs: [],
  },

  //part 1
  {
    nume_cadru: "part 1",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 5,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
    ],
    textPrim: "",
    textSecund: "Part One.",
    actiuni: [
      {
        nume: "continue",
        conditie: {
          required: true,
          itemsRequired: [],
          itemsReturned: [],
          cadruReturnat: 6,
          textConditieTrue:
            "You continue walking and pass a couple more intersections. The architecture of the city is really impressing. The buildings are larger and higher than what you have seen until now. More and more people start to appear on the streets and the traffic builds up. You feel a bit lost.",
          textConditieFalse:
            "You continue walking and pass a couple more intersections. The architecture of the city is really impressing. The buildings are larger and higher than what you have seen until now. More and more people start to appear on the streets and the traffic builds up. You feel a bit lost.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //city streets
  {
    nume_cadru: "city streets",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 6,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
    ],
    textPrim: "",
    textSecund: "",
    actiuni: [
      {
        nume: "ask for directions",
        conditie: {
          required: true,
          itemsRequired: [],
          itemsReturned: [],
          cadruReturnat: 7,
          textConditieTrue: "",
          textConditieFalse:
            "You ask a person on the street for some directions, and decide to take a tram to shorten your trip. You arrive at the destination and start looking around. You are close to a river that flows throughout the city. On each side of the river there are sidewalks with trees and streetlights. Looks like a good promenade area. There are several bridges allowing people to pass from one side to the other. You are right at one of them. On the left side of the bridge, you notice a row of apartment buildings and a number of trees that define the skyline. On the right side, there are many tall trees and decorative vegetation that make up a large green area. You see a long alley passing through.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //bridge
  {
    nume_cadru: "bridge",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 7,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 8, x: 100, y: 250 },
      { nr_cadru: 21, x: 260, y: 180 },
      { nr_cadru: 9, x: 500, y: 250 },
    ],
    textPrim: "",
    textSecund:
      "You are now in the bridge area. On the left side there is a row of apartment buildings, while on the right side there is a long alley passing through some large green area.",
    actiuni: [
      {
        nume: "watch river",
        conditie: {
          required: true,
          itemsRequired: ["student met"],
          itemsReturned: [],
          cadruReturnat: 30,
          textConditieTrue: "You go to the top of the bridge and watch the water flow. You have swum in much less pleasant waters... This one looks clear and deep enough. It is like having your own swimming lane in front of the house... You entertain the idea of going for a swim, and then you realize... just because you can do something, doesn't necessarily mean that you should do it, or that you are entitled to do it. It all depends on the ecology of the situation.",
          textConditieFalse:
            "The water is clear and flows smoothly. There are some ducks and seagulls swiming in it. What do the seagulls do here? \
            In the evening, this place looks rather nice with all the\
            street lights highlighting the trees on each side of the\
            river.\
            Could be an interesting photo. If only you had a camera...",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },

      {
        nume: "use seeds",
        conditie: {
          required: true,
          itemsRequired: ["seeds"],
          itemsReturned: [],
          cadruReturnat: 11,
          textConditieTrue:
            "You don't have any...",
          textConditieFalse:
            "Maybe not. It needs to stay dry.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "downtown",
        conditie: {
          required: true,
          itemsRequired: ["dance classes unlocked"],
          itemsReturned: [],
          cadruReturnat: 25,
          textConditieTrue:
            "Seems to go downtown. No time for that now. Maybe later...",
          textConditieFalse:
            "You go downtown. You have never been to this area before.\
            You are in a big city square. Not far away from the artisanal\
            fountain, there is a block of buildings. One of them has a large\
            door facing the street.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },
  //room
  {
    nume_cadru: "room",
    nrVizite: 0, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 8,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 7, x: 440, y: 300 },
    ],
    textPrim:
      "You go to one of the apartment buildings on the left side of the bridge. There, you find a nice room where you can leave your belongings and have a rest. The room is not very large, but it is quiet. You like that, it helps you focus. The room has a large window through which you can see the tall trees outside. In the middle, there is a desk and close to it some book shelves. You can put some of your things there. There are a couple of posters on the walls and furniture. The room looks especially nice in the morning, during the sunrise, as the rays of light pass through the trees outside and hit the interior of the room creating a very nice ambient with beautiful morning colors.",
    textSecund:
      "You are now in the room area. The room is not that big, but it is quiet. You like that, it helps you focus. In the middle, there is a desk and right close to it some book shelves. There are a couple of posters on the walls and furniture.",
    actiuni: [
      {
        nume: "watch posters",
        text: "You take a look at the posters. The one in the middle has a blue sky background and an air baloon rising into the air. The one on the left showcases a young female with black hair and beautiful elfine-like features. She is wearing some sort of combat outfit, similar to what an amazon, or an earth-like being would wear. Despite looking a bit dangerous, she is quite attractive. Must be a game character from a computer magazine, or something like that. The poster on the right showcases a child looking through the lens of a photo camera. The camera looks bigger than her, must be a DSLR type. She is somewhere in the nature. It is a nice calendar photo.",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund:
          "You take a look at the posters. The one in the middle has a blue sky background and an air baloon rising into the air. The one on the left showcases a young female with black hair and beautiful elfine-like features. She is wearing some sort of combat outfit, similar to what an amazon, or an earth-like being would wear. Despite looking a bit dangerous, she is quite attractive. Must be a game character from a computer magazine, or something like that. The poster on the right showcases a child looking through the lens of a photo camera. The camera looks bigger than her, must be a DSLR type. She is somewhere in the nature. It is a nice calendar photo.",
      },
      {
        nume: "watch desk",
        conditie: {
          required: true,
          itemsRequired: ["ideas written"],
          itemsReturned: [],
          cadruReturnat: 20,
          textConditieTrue:
            "It looks empty.",
          textConditieFalse:
            "You watch your desk. There are several items on it, including a list of ideas.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "use ideas",
        conditie: {
          required: true,
          itemsRequired: ["lectures attended"],
          itemsReturned: ["ideas written"],
          textConditieTrue:
            "You don't have any good ideas yet...",
          textConditieFalse:
            "You write down a list of ideas.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "use notes",
        conditie: {
          required: true,
          itemsRequired: ["notes"],
          itemsReturned: ["notes written"],
          textConditieTrue:
            "You don't have any...",
          textConditieFalse:
            "You review your class notes.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "use homework",
        conditie: {
          required: true,
          itemsRequired: ["notes"],
          itemsReturned: ["homework"],
          textConditieTrue:
            "You don't have any...",
          textConditieFalse:
            "You review your homework project. In order to complete\
            it, you would need some extra input from your colleagues,\
            unless you have done that already.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },
  //long alley
  {
    nume_cadru: "long alley",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 9,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 7, x: 50, y: 320 },
      { nr_cadru: 10, x: 180, y: 230 },
    ],
    textPrim: "",
    textSecund:
      "At the right side of the bridge there is a zebra crossing. You cross the street and enter the long alley. There are trees on each side. At the end of it, you see a large open space.",
    actiuni: [
      {
        nume: "get seeds",
        text: "You picked up some seeds.",
        items: ["seeds"],
        active: true,
        numarClicks: 0,
        textSecund: "You have enough.",
      },
    ],
    items: [],
    npcs: [],
  },
  //open space
  {
    nume_cadru: "open space",
    nrVizite: 0, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 10,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 13, x: 50, y: 270 },
      { nr_cadru: 12, x: 470, y: 290 },
      { nr_cadru: 16, x: 270, y: 200 },
      { nr_cadru: 9, x: 220, y: 330 },
    ],
    textPrim:
      "You walk up ahead and reach an open space area.\
      The area is surrounded by tall streetlights and several large buildings.\
      In the middle, there is an ornamental column.\
      You pay special attention to the building on the right side.\
      Looks exactly as you have imagined it, down to the\
      individual bricks. Must be the campus of some big university.",
    textSecund:
      "There is an ornamental column in the middle of this area. It is\
      surrounded by tall streetlights and several large buildings.",
    actiuni: [
      {
        nume: "library",
        conditie: {
          required: true,
          itemsRequired: ["library open"],
          itemsReturned: [],
          cadruReturnat: 11,
          textConditieTrue:
            "As you get closer to the building on the right side,\
            you realize it is a library that is\
            still under construction. Should be finished soon.",
          textConditieFalse:
            "Plenty of interesting books around. At one of the tables, you\
            notice the lady student you have met before.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      
    ],
    items: [],
    npcs: [],
  },

  //library
  {
    nume_cadru: "library",
    nrVizite: 0, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 11,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 10, x: 420, y: 230 },
    ],
    textPrim:
      "Seems to be open now. Plenty of interesting books around.",
    textSecund:
      "Plenty of interesting books around. At one of the tables, you\
      notice the lady student you have met before.",
    actiuni: [
      {
        nume: "study",
        conditie: {
          required: true,
          itemsRequired: [],
          itemsReturned: ["train design"],
          cadruReturnat: 23,
          textConditieTrue:
            "",
          textConditieFalse:
            "You start reading every single\
            book you can find on train design.\
            You do some in-depth research and complete a couple of\
            projects. Piles of books stack up in your room.\
            One day, as it happens to be a vacation period, and you have\
            more free time, you decide to start designing the train.\
            You use everything that you have collected so far: ideas,\
            class notes, previous projects, and all the advanced concepts\
            you have encountered in the various books you have read on\
            the subject.\
            You work on it for the entire weekend with little sleep at\
            night, taking notes after notes, and sketching dozens of images.\
            The result is quite impressive. You know fully understand\
            how that train works!",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "talk",
        conditie: {
          required: true,
          itemsRequired: ["results read"],
          itemsReturned: ["activator poster"],
          cadruReturnat: 23,
          textConditieTrue:
            "Perhaps later...",
          textConditieFalse:
            "As you still need to pass some final exams and finish a\
            couple of projects, you ask the student if she can help\
            you with one of them. She's quite good at solving problems.\
            As you\
            talk to her about various topics, you notice her gestures and\
            the way she's moving her body in a most natural way.\
            You have had this idea of learning\
            how to dance using a dance embrace for some time now...\
            Perhaps it would be interesting to go dancing together.\
            Perhaps... She seems quite excited about it, but\
            there is one little detail you might have have overlooked.\
            You might know how the train works, but you have absolutely\
            no clue how to dance in a structured manner...\
            Nevertheless, her initial reaction gives you enough motivation\
            to pursue this idea\
            further and you start looking for some dance classes.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //pub
  {
    nume_cadru: "pub",
    nrVizite: 0, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 12,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 10, x: 80, y: 240 },
    ],
    textPrim:
      "You go right, you pass under a green bolt and you reach a very\
      nice place. Must be a pub, or a coffee place.\
      There are several tables outside, and some inside.\
      Students tend to gather here.\
      Looks like a little corner of nature, with all the\
      trees, small ponds, and vegetation. It provides shelter for\
      some exotic birds and fish. This could be interesting.",
    textSecund:
      "Looks like a little corner of nature.\
      It provides shelter for some exotic birds and fish. Students tend to gather here.",
    actiuni: [
      {
        nume: "have drink",
        conditie: {
          required: true,
          itemsRequired: ["train idea"],
          itemsReturned: ["homework ready", "drink"],
          textConditieTrue:
            "No time for that now. Perhaps later.",
          textConditieFalse:
            "You talk to your colleagues about the train idea.\
            Why not design your own train? You get additional\
            insights on how to put the pieces of the puzzle\
            together. You would need to go deeper into your studies.\
            Attending the lectures may not be enough.  Your homework\
            is ready. You should be heading for your class.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "talk bird",
        conditie: {
          required: true,
          itemsRequired: ["happy bird"],
          itemsReturned: [],
          textConditieTrue:
            "Are you sure you want to do that? It would look a little bit silly,\
            wouldn't it?",
          textConditieFalse:
            "The bird tells you that it has to do with how you respond\
            to unplanned opportunities. Something to keep in mind.\
            Sometimes what stands between people and their happiness is\
                    their ego. Another thing to keep in mind.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "speak to bird",
        conditie: {
          required: true,
          itemsRequired: ["homework ready"],
          itemsReturned: [],
          textConditieTrue:
            "Are you sure you want to do that? It would look a little bit silly,\
            wouldn't it?",
          textConditieFalse:
            "No, having a drink does not give you the\
            superpower of talking to birds. Nice try though! :)",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "give seeds",
        conditie: {
          required: true,
          itemsRequired: ["seeds"],
          itemsReturned: ["happy bird"],
          textConditieTrue:
            "You have no seeds. The bird jumps on your head and starts messing with your hair...",
          textConditieFalse:
            "The bird makes a jump and starts eating from your hand. She then starts singing a happy trill.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "give ideas",
        conditie: {
          required: true,
          itemsRequired: ["ideas"],
          itemsReturned: [],
          textConditieTrue:
            "",
          textConditieFalse:
            "The bird frowns. You should probably not do that again...",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //large building
  {
    nume_cadru: "large building",
    nrVizite: 0, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 13,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 10, x: 470, y: 330 },
      { nr_cadru: 14, x: 40, y: 330 },
    ],
    textPrim:
      "You are in front of a very large building...\
      Could be described as a combination of vertical lines ending\
      in a round structure. Looks impressive!",
    textSecund:
      "You are in front of a very large building...\
      Could be described as a combination of vertical lines ending\
      in a round structure. Looks impressive!",
    actiuni: [
      {
        nume: "enter",
        conditie: {
          required: true,
          itemsRequired: ["lectures attended"],
          itemsReturned: [],
          cadruReturnat: 17,
          textConditieTrue:
            "You cannot enter. Seems to be closed now...",
          textConditieFalse:
            "You enter the large building. The first thing you notice is that there\
            is a lot of open space, and a lot of light passing\
            through the windows, making the entire place very bright.\
            The building has several floors and many rooms arranged around this\
            open space area. The ceiling is very high.\
            To the right, you see some spiral stairs going up to the 1st floor.\
            To the left, there is a large dashboard fixed on the wall.\
            In front of you, where the open space ends, there is a door.\
              ",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //basketball court
  {
    nume_cadru: "basketball court",
    nrVizite: 0, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 14,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      {nr_cadru: 13, x:460, y:320},
    ],
    textPrim:
      "You walk left until you reach a basketball court. It looks very\
      nice and modern. In the proximity there is an indoor court as well.\
      Seems to be closed now...",
    textSecund:
      "You reach a basketball court that has an indoor and an outdoor area.\
      Seems to be open. The outdoor\
      court looks very nice and modern. Must be used used during the summer\
      competitions.",
    actiuni: [
      {
        nume: "play",
        conditie: {
          required: true,
          itemsRequired: ["notes written"],
          itemsReturned: ["game played"],
          textConditieTrue: "As much as you would like to do it, you have to postpone. There\
          is no time for that now. You have other pending priorities.\
          The court looks amazing though...",
          textConditieFalse: "You find some spare time and go play a game. Your vertical\
          jump is not as high as it used to be.\
          The lack of practice shows up. Also, there are some fun\
          colleagues who jump all over you... :)  With colleagues like\
          that, no chance of playing a decent basketball game, or\
          getting better at it anytime soon... You put it on hold\
          for the time being...",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //watch window
  {
    nume_cadru: "watch window",
    nrVizite: 0, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 15,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
    ],
    textPrim: "",
    textSecund:
      "Chapter 1 ends here... In the next chapters, we are going\
            to meet some other interesting characters...",
    actiuni: [
      {
        nume: "watch inside",
        conditie: {
          required: true,
          itemsRequired: [],
          itemsReturned: [],
          cadruReturnat: 1,
          textConditieTrue: "",
          textConditieFalse: "You are inside the train car.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //signpost
  {
    nume_cadru: "signpost",
    nrVizite: 0, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 16,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      {nr_cadru: 10, x:360, y:330},
      {nr_cadru: 18, x:420, y:160},
    ],
    textPrim: "You walk up on a small alley until you encounter a signpost.",
    textSecund:
      "You walk up on a small alley until you encounter a signpost.",
    actiuni: [
      {
        nume: "look",
        conditie: {
          required: true,
          itemsRequired: ["train activated"],
          itemsReturned: ["student met"],
          textConditieTrue: "The signpost shows various directions where you can go.\
          One of them points towards the stairs going up the hill.\
          At the top of the hill, you can see the university building.\
          Looks slightly different than all the others you have\
          encountered so far.",
          textConditieFalse: "Time flies...\
          One day, as you make your way towards the university building\
          on the hill,\
          you notice a lady in front of you going into the same direction.\
          She stops by the signpost to smell a flower. She has long\
          beautiful hair. You\
          talk to her. She's a student attending some classes. She seems\
          nice and interesting. Her voice is quite familiar. Have you met\
          each other before?",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "watch signpost",
        conditie: {
          required: true,
          itemsRequired: [],
          itemsReturned: [],
          cadruReturnat: 24,
          textConditieTrue: "There's a small map next to it.",
          textConditieFalse: "There's a small map next to it.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //spiral stairs
  {
    nume_cadru: "spiral stairs",
    nrVizite: 0, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 17,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      {nr_cadru: 13, x:220, y:130},
    ],
    textPrim: "",
    textSecund:
      "",
    actiuni: [
      {
        nume: "watch dashboard",
        conditie: {
          required: true,
          itemsRequired: ["activator poster"],
          itemsReturned: ["dance classes unlocked"],
          textConditieTrue: "You go near the dashboard and scan through the contents.\
          A couple of announcements, some time tables, nothing\
          particularly interesting.",
          textConditieFalse: "There is a new poster on it. You take a closer look at it.\
          It talks about some dancing classes for begginers, taking\
          place somewhere\
          downtown. This might actually work...\
          You take note of the place and time.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "enter door",
        conditie: {
          required: true,
          itemsRequired: ["activator poster"],
          itemsReturned: [],
          textConditieTrue: "You try the door. It seems to be locked.",
          textConditieFalse: "You open the door and enter a very large and bright room.\
          Apparently there is some big event organized by some\
          important students organization. You attend a couple of\
          interesting trainings and listen to some speakers from\
          the non-academical environment. They are amazing!\
          You like what they do and how they speak...",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "climb stairs",
        conditie: {
          required: true,
          itemsRequired: [],
          itemsReturned: [],
          textConditieTrue: "",
          textConditieFalse: "It's always fun to climb and descend on these spiral stairs...",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //university
  {
    nume_cadru: "university",
    nrVizite: 0, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 18,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      {nr_cadru: 16, x:220, y:330},
    ],
    textPrim: "You go up towards the hill and climb some steps.\
    On your way up, you encounter a couple of\
    people and ask them if you are heading correctly. They say yes.\
    You reach the distinctive building at the top. There are many young people\
    around. Must be university students attending classes and lectures.",
    textSecund:
    "There are many young people\
    around. Must be university students attending classes and lectures.",
    actiuni: [
      {
        nume: "attend",
        conditie: {
          required: true,
          itemsRequired: [],
          itemsReturned: ["lectures attended", "notes"],
          cadruReturnat: 19,
          textConditieTrue: "",
          textConditieFalse: "Since you are here, why not start studying a little bit?\
          The classes look more than interesting, and the students\
          are friendly and resourceful. You get a couple of ideas\
          on what you could do.\
          Interesting lectures... As you attend more and more classes\
          and learn about the different subjects, you realize that\
          figuring out how the train works is just a matter of time.\
          You have everything you need. You take the class notes with you.\
          During the breaks, you start explaining your colleagues\
          how the different subjects could be combined.\
          During the classes, you start debating with your proffessors\
          difficult topics. At times, you challenge\
          the status-quo and some over-sized egos get a bit shaken.\
          But let's not digress... You get some extra\
          homework...\
          ",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
      nume: "attend classes",
        conditie: {
          required: true,
          itemsRequired: ["homework","game played"],
          itemsReturned: ["train idea"],
          cadruReturnat: 19,
          textConditieTrue: "There are other things to do first...",
          textConditieFalse: "Class is starting in about 2 hours. Your homework \
          is not ready yet. You have one extra hour, and decide to invite your \
          colleagues for a drink. You could finish some homework there. Unless,\
          you did that already...\
          ",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "attend advanced classes",
          conditie: {
            required: true,
            itemsRequired: ["drink"],
            itemsReturned: ["library open"],
            cadruReturnat: 19,
            textConditieTrue: "There are other things to do first...",
            textConditieFalse: "You arrive just in time for your class. It happens \
            to be an advanced calculus class. You present your homework, and start \
            filling up the blackboard. After that drink, the task at hand suddenly \
            becomes much more difficult than it should be. It's not your best \
            performance, but you make it through and your proffessor gives you a \
            good rating.\
            ",
          },
          text: "",
          items: [],
          active: true,
          numarClicks: 0,
          textSecund: "",
      },
      {
        nume: "read results",
          conditie: {
            required: true,
            itemsRequired: ["student met"],
            itemsReturned: ["results read"],
            cadruReturnat: 19,
            textConditieTrue: "No results being shown yet...",
            textConditieFalse: "The results look promising so far. Among top 10%...\
            Close to yours, you notice some other interesting names...\
            ",
          },
          text: "",
          items: [],
          active: true,
          numarClicks: 0,
          textSecund: "",
      },

    ],
    items: [],
    npcs: [],
  },

  //attend
  {
    nume_cadru: "attend",
    nrVizite: 0, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 19,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      {nr_cadru: 18, x:220, y:330},
    ],
    textPrim: "",
    textSecund:
      "",
    actiuni: [
    ],
    items: [],
    npcs: [],
  },

  //watch desk 2
  {
    nume_cadru: "watch desk 2",
    nrVizite: 0, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 20,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 8, x: 420, y: 230 },
    ],
    textPrim: "",
    textSecund:
      "",
    actiuni: [
      {
        nume: "watch desk ",
          conditie: {
            required: true,
            itemsRequired: ["train design"],
            itemsReturned: ["train blueprint"],
            cadruReturnat: 22,
            textConditieTrue: "There are some lecture notes on it...",
            textConditieFalse: "You watch the desk and then start working on the train.\
            You now have a\
            complete blueprint of the\
            train. All subsystems are described in detail and fully explained how\
            they interact with each other.\
            ",
          },
          text: "",
          items: [],
          active: true,
          numarClicks: 0,
          textSecund: "",
        },
    ],
    items: [],
    npcs: [],
  },

  //central train station 2
  {
    nume_cadru: "central train station",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 2,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 7, x: 50, y: 345 },
    ],
    textPrim: "",
    textSecund: "The train has not changed position.",
    actiuni: [
      {
        nume: "watch train",
        conditie: {
          required: true,
          itemsRequired: ["train activated"],
          itemsReturned: [],
          textConditieTrue:
            "You inspect the train once more. Seems to be deactivated now.\
                    The more you watch it from the outside, the more curios\
                    you become... You continue to\
                    remain impressed with the technology that makes it work.\
                    What powers the train?",
          textConditieFalse:
            "The train is activated. You continue to remain\
                    impressed with technology behind it.  It is a marvel of\
                    modern engineering...",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "start train",
        conditie: {
          required: true,
          itemsRequired: ["train activated"],
          itemsReturned: [],
          textConditieTrue:
            "You still need to find a way to activate the train.",
          textConditieFalse:
            "The train is activated, but there is one more place you need\
            to visit\
            and one more thing you need to do there before leaving.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "board train",
        conditie: {
          required: true,
          itemsRequired: ["seeds planted", "park photos", "river photos"],
          itemsReturned: [],
          textConditieTrue:
            "Not until you activate the train and do the last things you have to do...",
          textConditieFalse:
            "Good, so the train is now working. You are set to go.\
            You can operate it yourself\
            and choose to go to a couple of locations.\
            After all, you still have to find what you have been\
            looking for...",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "use blueprint",
        conditie: {
          required: true,
          itemsRequired: ["train blueprint"],
          itemsReturned: ["train activated"],
          textConditieTrue: "You need to find the blueprint first.",
          textConditieFalse:
            "You take a closer look at the train and at the\
                    blueprint.\
                    You now understand how it works... It is a marvel of modern\
                    engineering.\
                    You leverage the schematics and you activate the train.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "use seeds",
        conditie: {
          required: true,
          itemsRequired: ["seeds"],
          itemsReturned: [],
          textConditieTrue: "You don't have any.",
          textConditieFalse:
            "Nope... You need to come up with a better idea.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //part 2
  {
    nume_cadru: "part 2",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 22,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
    ],
    textPrim: "",
    textSecund: "Part Two.",
    actiuni: [
      {
        nume: "continue",
        conditie: {
          required: true,
          itemsRequired: [],
          itemsReturned: [],
          cadruReturnat: 8,
          textConditieTrue:
            "",
          textConditieFalse:
            "",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //library interior
  {
    nume_cadru: "library interior",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 23,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 11, x: 50, y: 345 },
    ],
    textPrim: "",
    textSecund: "",
    actiuni: [
    ],
    items: [],
    npcs: [],
  },

  //map
  {
    nume_cadru: "map",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 24,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 16, x: 50, y: 345 },
    ],
    textPrim: "",
    textSecund: "",
    actiuni: [
    ],
    items: [],
    npcs: [],
  },

  //downtown square
  {
    nume_cadru: "downtown square",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 25,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 7, x: 50, y: 345 },
      { nr_cadru: 27, x: 250, y: 145 },
    ],
    textPrim: "",
    textSecund: "You are in a big city square. Not far away from the artisanal\
      fountain, there is a block of buildings. One of them has a large\
      door facing the street.",
    actiuni: [
      {
        nume: "park",
        conditie: {
          required: true,
          itemsRequired: ["camera"],
          itemsReturned: [],
          cadruReturnat: 26,
          textConditieTrue:
            "Not now. Maybe later...",
          textConditieFalse:
            "One day you decide to go for a stroll around a nearby park.\
            It is a bright sunny day. You have never been to this one before,\
            and it looks very nice.\
            When you arrive at the entrance,\
            you notice a big classical clock and two large areas covered with\
            colorful flowers. The flowers are aranged in layers. There is one\
            one layer of tulips at the top, and one layer of chamomile underneath.\
            In the middle, there is a big lake and some wild birds that are\
            either flying above or swimming in it.\
            The surroundings are nice as well - many trees\
            and vegetation, small alleys and bridges, rocky formations, and\
            many other\
            interesting spots. The area is teeming with life. You encounter\
            bees, small animals, and various birds.\
            It is a very nice location... Quite close to the dance floor\
            as well.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "join group",
        conditie: {
          required: true,
          itemsRequired: ["dance skill 3"],
          itemsReturned: [],
          cadruReturnat: 28,
          textConditieTrue:
            "Not now. Maybe later...",
          textConditieFalse:
            "You join the group of dancers. The video spot involves a\
            flashmob. That's why it takes place in a public\
            square area. Definitely, not something you would be\
            very comfortably doing...\
            The music starts playing and people cheer up. The song sounds\
            good! It is an old one from the 70's. It's about this\
            important human emotion being in the air.\
            The camera is turned on and you are now supposed to start\
            dancing.\
            Andrenaline rushes through your body, and you start moving\
            on the music. Very much to your\
            surprize you make it! It is a different style of music than\
            what you have been dancing to until now, but it has a similar\
            musical pattern underneath. The steps you know work well on\
            it because the song has enough dynamic and energy!\
            It becomes super fun, and you have a great time during and\
            after\
            the rehearsal! Something you would definitely\
            remember...",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //park
  {
    nume_cadru: "park",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 26,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 25, x: 50, y: 345 },
    ],
    textPrim: "",
    textSecund: "",
    actiuni: [
      {
        nume: "use camera",
        conditie: {
          required: true,
          itemsRequired: ["camera"],
          itemsReturned: ["park photos"],
          textConditieTrue:
            "You need a camera...",
          textConditieFalse:
            "You take several pictures as you walk throughout the park.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "use seeds",
        conditie: {
          required: true,
          itemsRequired: ["seeds"],
          itemsReturned: ["seeds planted"],
          textConditieTrue:
            "You don't have any seeds...",
          textConditieFalse:
            "You choose to plant the seeds.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //dance floor
  {
    nume_cadru: "dance floor",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 27,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 25, x: 50, y: 345 },
    ],
    textPrim: "",
    textSecund: "You go right towards the large metal door that is facing the street.\
    You wonder if this is the right place to be.\
    You are a bit nervous, but you take a deep breath and you\
    step inside.\
    At the entrance, the light is nice and warm and you notice a\
    the small reception desk and a cozy couch. Nobody to ask around though.\
    On the walls, there\
    are a few large posters, in which you can see different groups\
    of people. From the way they pose, they must be dancers.\
    They look nice.\
    You hear some nice music in the background. It is coming from downstairs.\
    There must be a floor below.\
    A little shy at first, you take a couple of steps in the direction\
    of the music.\
    When you reach the last step, you take a look at the room in front of\
    you and you remain in total awe.\
    You are facing a big and shiny dance floor illuminated by colorful\
    spotlights. Beautifull happy music is playing, giving an overall\
    good vibe. There are many young people dancing\
    on the floor in a most beautiful and elegant manner. They are\
    holding each other's hands and forming an open type of embrace.\
    This is simply amazing! If you only knew\
    how to dance the way they do...",
    actiuni: [
      {
        nume: "dance",
        conditie: {
          required: true,
          itemsRequired: ["dance skill 1"],
          itemsReturned: ["dance skill 2"],
          textConditieTrue:
            "You get on the dancefloor and try to mimick what the others\
            are doing. You try a couple of steps, but it proves to be\
            too much... It feels so awkward and cumbersome...\
            It is so difficult to step in a pre-defined\
            pattern and follow the music at the same time. Until now\
            you have not even been aware that movement follows\
            the music. There is hope though...\
            There are a couple of nice ladies brave enough to help.\
            They seem to be experienced dancers.\
            One of them shows you how to properly embrace. The steps\
            continue to be a pain, but the embrace feels really nice...\
            You get to know a couple of friendly people from your\
            dancing class.\
            They have started dancing only 2 months ago, and they are\
            already dancing so well! Such a nice community!\
            You end up with a big smile on your face.",
          textConditieFalse:
            "While still outside your confort zone, you continue to\
            practice until you get reasonably good at it.\
            Movements get more fluid and the tension in your body\
            starts to diminish. At some point, you start to actually\
            enjoy this.\
            The songs seem to be in a foreign language. You do not\
            understand the lyrics, but the music has nice rhythm and\
            melody.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
      nume: "dance more",
        conditie: {
          required: true,
          itemsRequired: ["dance skill 2"],
          itemsReturned: [],
          textConditieTrue:
            "You are not prepared enough.",
          textConditieFalse:
            "After your class, you decide to remain longer for some more\
            dancing. You meet with your friends from the dance floor and\
            between songs you chat a bit.\
            One of them shows you some cool concept drawings. He seems\
            to be studying a branch of architecture you had no idea it\
            existed.\
            The music is great as usual, and people are having a great\
            time.\
            Tonight, you also notice one of your\
            dance instructors showing off on the dance floor. He does some\
            cool moves and patterns. He has a lot of energy and is quite\
            good!\
            After the song ends, he comes close to your group and tells\
            you about this commercial happening during the weekend.\
            There will be some dancing, and he would like all of you to\
            join.\
            Afterwards, you will be going to the beach. There\
            is some big event at the seaside...",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "practice steps 1",
        conditie: {
          required: true,
          itemsRequired: [],
          itemsReturned: ["dance skill 1"],
          textConditieTrue:
            "",
          textConditieFalse:
            "Despite the fact that you are looking like you are trying\
            to solve triple integrals, things start to work. By the end\
            of your practice session, your body learns the\
            basic sequence of steps.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
        nume: "practice steps 2",
        conditie: {
          required: true,
          itemsRequired: ["dance skill 2"],
          itemsReturned: ["dance skill 3"],
          textConditieTrue:
            "You are not ready yet",
          textConditieFalse:
            "You practice some more dance steps. Looks much better now.\
            You can do even clean pirouettes without getting dizzy.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
      {
      nume: "free dance",
        conditie: {
          required: true,
          itemsRequired: ["travel"],
          itemsReturned: ["camera"],
          cadruReturnat: 31,
          textConditieTrue:
            "You are not prepared for this yet.",
          textConditieFalse:
            "You go dancing and meet some girls from your dance classes.\
            They are good dancers, and you enjoy dancing with them.\
            They have started taking classes at a similar time.\
            While sitting, you observe the feet of one lady.\
            She has an interesting pair of dance shoes and she looks\
            cool in her pair of jeans.\
            Could be an interesting photo, albeit difficult to take\
            in such low-light conditions. You get a\
            camera and a small tripoid, and ask her to hold steady\
            for one moment, until you can take the\
            picture. You are happy with the result... The girls start\
            laughing, and they invite you on the dance floor.\
            At the end of one dance, one of them tells\
            you something that you don't know how to take.\
            She tells you that you would\
            be good for this other type of dance. Is this a compliment,\
            or a rather more realistic assessment of your current\
            dancing skills level? :)\
            You thought you were reasonably good.\
            Now you are not so sure anymore...\
            Perhaps this other type of dance might suit you better after\
            all... Tal vez... Something to keep in mind!",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

   //artizanal fountain
   {
    nume_cadru: "artizanal fountain",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 28,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
    ],
    textPrim: "",
    textSecund: "",
    actiuni: [
      {
        nume: "travel",
        conditie: {
          required: true,
          itemsRequired: [],
          itemsReturned: ["travel"],
          cadruReturnat: 29,
          textConditieTrue:
            "",
          textConditieFalse:
            "You are now in the palm beach area. Feels good\
            to be back home! The sun, the sand, the waves, the trees,\
            the seagulls, even the sand castles are still there!\
            One of the evenings, you decide to join your friends\
            from the dance school. They are here as well. You go to this open\
            bar on the\
            beach. Everyone is there and the music is playing. There are also a\
            couple of tourists having some drinks and enjoying their holidays.\
            You break the ice and invite one of the dancers. Soon\
            after, everyone is on the floor and the atmosphere becomes magical.\
            At some point during the night, you leave the bar and start walking\
            on the beach towards the sea. Feels good to breath fresh air and\
            experience the light sea wind. You are now near the water.\
            The sea is so calm and smooth tonight. You hear only the sound of\
            the water and the echo of some distant musical notes coming from\
            the bar on the beach...\
            Something is still missing... You return to your friends, and enjoy\
            the rest of the night.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //palm beach
  {
    nume_cadru: "artizanal fountain",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 29,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 25, x: 50, y: 345 },
    ],
    textPrim: "",
    textSecund: "",
    actiuni: [
    ],
    items: [],
    npcs: [],
  },
  //watch river
  {
    nume_cadru: "watch river",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 30,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 7, x: 100, y: 250 },
    ],
    textPrim: "",
    textSecund: "",
    actiuni: [
      {
        nume: "use camera",
        conditie: {
          required: true,
          itemsRequired: ["camera"],
          itemsReturned: ["river photos"],
          textConditieTrue:
            "You need a camera",
          textConditieFalse:
            "So you did remember... Nice!\
            Coming back to the story... Since you have already learnt\
            how to use your\
            camera in low light conditions, you take a picture of the\
            river. The street lights on the sides make the entire scene very\
            interesting at night.",
        },
        text: "",
        items: [],
        active: true,
        numarClicks: 0,
        textSecund: "",
      },
    ],
    items: [],
    npcs: [],
  },

  //dance 2
  {
    nume_cadru: "dance 2",
    nrVizite: 1, //cadrul de inceput are intotdeauna 1, restul au 0
    nr_cadru: 31,
    activat: false,
    vizitat: false,
    pozitieIntrareX: 300, //pozitia jucatorului
    pozitieIntrareY: 340,
    entries: [
      //link-uri celelalte cadre - pozitia cercurilor
      { nr_cadru: 27, x: 50, y: 345 },
    ],
    textPrim: "",
    textSecund: "",
    actiuni: [
    ],
    items: [],
    npcs: [],
  },
];
