const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    const img=["images/super-1.png",
    "images/super-2.png",
    "images/super-3.png",
    "images/super-4.png",
    "images/super-5.png",
    "images/super-6.png",
    "images/super-7.png",
    "images/super-8.png",
    "images/super-9.png",
    "images/super-10.png",
    "images/super-11.png",
    "images/super-12.png",
    "images/super-13.png",
    "images/super-14.png",
    "images/super-15.png",
    "images/super-16.png",
    "images/super-17.png",
    "images/super-18.png",
    "images/super-19.png",
    "images/super-20.png"
];
    for (i=0;i<PLAYERS.length;i++){
        const player = {
            name: PLAYERS[i],
            strength:getRandomStrength(),
            image: img[i],
            type: i % 2 === 0 ? 'hero' : 'villain'
        };
        detailedPlayers.push(player);
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return  Math.floor((Math.random() * 100) + 1);
}

const buildPlayers = (players, type) => {
    let fragment = '';
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for (let i = 0; i < players.length; i++) {
        if (players[i].type === type) {
            fragment += `
                <div class="player">
                    <img src="${players[i].image}">
                    <div class="name">${players[i].name}</div>
                    <div class="strength">${players[i].strength}</div>
                </div>
            `;
        }
    }

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}