var cadre = [
    //starting_place
    { nr_cadru: 0,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 1, x:10, y:200},
        {nr_cadru: 2, x:240, y:340},
        {nr_cadru: 3, x:300, y:10},
      ],
      textPrim:
        "Continuing from last time...\n\
        As you follow the white bunny, you start feeling a mild warm sensation throughout your body. Slowly, \n\
        your senses give up on you, and you lose consciousness. When you wake up, you realize you are in a \n\
        different place. There is something peculiar about it. Something has changed, but you can't put your finger \n\
        on it. For sure, the air is different. It is fresh, and you can breathe easily.You look around for the princess,\n but she's gone.\n\
        What has happened? \n\
        \n\
        Where would you like to go or do next?",
      textSecund:
        "You are now in the starting place area. It is warm and sunny outside.The wind is blowing softly. There \n\
        are several ways to go around.\n\
        Where would you like to go or do next?",
      actiuni: [
      ],
      items: [],
      npcs: [],
    },//library
    { nr_cadru: 1,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 0, x:450, y:150},
      ],
      textPrim: "",
      textSecund:
        "You pass by several house blocks and take several turns. The people you encounter along the way \n\
        seem to be occupied with their daily activities. You realize you are in a small quiet town. It feels good to be \n\
        away from the agitation of the big city. A couple more turns, and you reach what seems to be an ancient \n\
        school. Curiosity drives you in, and you find a library that is open.",
      actiuni: [
        {
          nume:"research",
          text:
            "You go to the library to do some research, but you realize that now may not be the best moment. You feel \n\
            there are some other things to attend first. You are now in the library area. There are several bookcases \n\
            standing against the wall. Books of all sizes and shapes fill the shelves.",
        },
      ],
      items: [],
      npcs: [],
    },//house
    { nr_cadru: 2,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 0, x:10, y:200},
      ],
      textPrim:
        "",
      textSecund:
        "As you walk, you find yourself in front of a small house and decide to enter. \n\
        Inside, you find a desk with a computer, a table, a bed, and a very old bookshelf that has several books.",
      actiuni: [
        {
          nume:"read",
          text:
            "You go to the bookshelf to read something. Except a couple of fairy tales, that stir your imagination, you find \n\
            most of the books plain boring, or it could be that you just don't understand them. In any case, you decide to do \n\
            something else. You are now in the house area. Everything looks fine. The room is well lit and it has a desk with \n\
            a computer, a table, a bed, and a very old bookshelf.",
        },
        {
          nume:"play",
          text:
            "You go to the desk and turn on the computer. While the computer boots up, you notice a pair of keys \n\
            next to the monitor. You start playing some video games. One of them contains a colourful map that you \n\
            can visualize in full-screen mode. You are now in the house area. Everything looks fine. The room is well \n\
            lit and it has a desk with a computer, a table, a bed, and a very old bookshelf.",
        },
      ],
      items: [],
      npcs: [],
    },//bridge end
    { nr_cadru: 3,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 0, x:200, y:350},//starting_place
        {nr_cadru: 4, x:200, y:20},
        {nr_cadru: 9, x:450, y:210},
      ],
      textPrim: "",
      textSecund:
          "You climb a small hill and reach a high land platform from which you can see the surroundings. There is a \n\
          big bridge in front of you, and at the other end, you notice an outdated car that seems to be abandoned. \n\
          In the far distance, you can see the white golden shores of the sea and a long dam extending far into the sea. \n\
          Waves of various sizes and shapes create strips of white foam as they come towards the shore. You cross the \n\
          bridge, and find yourself at the other end. This place looks like a medium sized cross-road. There is a \n\
          colourful mural nearby with some shapes engraved on it. To your right side, there is an abandoned old car.",
      actiuni: [],
      items: [],
      npcs: [],
    },//alley split
    { nr_cadru: 4,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 3, x:150, y:350},//bridge_end
        {nr_cadru: 5, x:450, y:200},
        {nr_cadru: 6, x:280, y:20},//sunny_beach
        {nr_cadru: 7, x:50, y:20},
      ],
      textPrim: "Bine ai venit! Povestea incepe aici.",
      textSecund: "Ai vizitat deja cadrul acesta.",
      actiuni: [],
      items: [],
      npcs: [],
    },//summer games
    { nr_cadru: 5,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 4, x:10, y:300},
      ],
      textPrim: "Bine ai venit! Povestea incepe aici.",
      textSecund: "Ai vizitat deja cadrul acesta.",
      actiuni: [],
      items: [],
      npcs: [],
    },//sunny_beach
    { nr_cadru: 6,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 4, x:210, y:300},
      ],
      textPrim: "Bine ai venit! Povestea incepe aici.",
      textSecund: "Ai vizitat deja cadrul acesta.",
      actiuni: [],
      items: [],
      npcs: [],
    },
    { nr_cadru: 7,//dam
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 4, x:210, y:300},
        {nr_cadru: 8, x:210, y:30},
      ],
      textPrim: "Bine ai venit! Povestea incepe aici.",
      textSecund: "Ai vizitat deja cadrul acesta.",
      actiuni: [],
      items: [],
      npcs: [],
    },
    { nr_cadru: 8,//lighthouse
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 7, x:210, y:300},
      ],
      textPrim: "Bine ai venit! Povestea incepe aici.",
      textSecund: "Ai vizitat deja cadrul acesta.",
      actiuni: [],
      items: [],
      npcs: [],
    },//drive stop
    { nr_cadru: 9,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 0, x:10, y:150},
        {nr_cadru: 10, x:210, y:10},
        {nr_cadru: 12, x:390, y:150},
      ],
      textPrim: "Bine ai venit! Povestea incepe aici.",
      textSecund: "Ai vizitat deja cadrul acesta.",
      actiuni: [],
      items: [],
      npcs: [],
    },//drive trees
    { nr_cadru: 10,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 9, x:200, y:350},
        {nr_cadru: 11, x:210, y:20},
      ],
      textPrim: "Bine ai venit! Povestea incepe aici.",
      textSecund: "Ai vizitat deja cadrul acesta.",
      actiuni: [],
      items: [],
      npcs: [],
    },
    //drive trees
    { nr_cadru: 11,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 10, x:200, y:350},
      ],
      textPrim: "Bine ai venit! Povestea incepe aici.",
      textSecund: "Ai vizitat deja cadrul acesta.",
      actiuni: [],
      items: [],
      npcs: [],
    },
    //city intersection
    { nr_cadru: 12,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 9, x:20, y:250},
        {nr_cadru: 13, x:460, y:250},
        {nr_cadru: 14, x:200, y:30},
      ],
      textPrim: "Bine ai venit! Povestea incepe aici.",
      textSecund: "Ai vizitat deja cadrul acesta.",
      actiuni: [],
      items: [],
      npcs: [],
    },
    //east city
    { nr_cadru: 13,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 12, x:20, y:250},
      ],
      textPrim: "Bine ai venit! Povestea incepe aici.",
      textSecund: "Ai vizitat deja cadrul acesta.",
      actiuni: [],
      items: [],
      npcs: [],
    },
    //port
    { nr_cadru: 14,
      activat: false,
      vizitat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 12, x:250, y:350},
      ],
      textPrim: "Bine ai venit! Povestea incepe aici.",
      textSecund: "Ai vizitat deja cadrul acesta.",
      actiuni: [],
      items: [],
      npcs: [],
    },
];

let image_strings = [
    "./img/starting_place.jpg", //0
    "./img/library.jpg",//1
    "./img/house.jpg",//2
    "./img/bridge_end.jpg",//3
    "./img/alley_split.jpg",//4
    "./img/summer_games.jpg",//5
    "./img/sunny_beach.jpg",//6
    "./img/dam.jpg",//7
    "./img/lighthouse.jpg",//8
    "./img/drive_stop.jpg",//9
    "./img/trees.jpg",//10
    "./img/palm_beach.jpg",//11
    "./img/city_intersection.jpg",//12
    "./img/east_city.jpg",//13
    "./img/port.jpg",//14
];
