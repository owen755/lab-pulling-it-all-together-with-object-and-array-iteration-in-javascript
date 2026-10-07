function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
function numPointsScored(playerName) {
    const teams = gameObject();

    for (const teamData of Object.values(teams)) {
        if (teamData.players[playerName]) {
            return teamData.players[playerName].points;
        }
    }

    return null;
}

function shoeSize(playerName) {
    const teams = gameObject();

    for (const teamData of Object.values(teams)) {
        if (teamData.players[playerName]) {
            return teamData.players[playerName].shoe;
        }
    }

    return null;
}

function teamColors(teamName) {
    const teams = gameObject();

    for (const teamData of Object.values(teams)) {
        if (teamData.teamName === teamName) {
            return teamData.colors;
        }
    }

    return null;
}

function teamNames() {
    const teams = gameObject();

    return Object.values(teams).map((team) => team.teamName);
}

function playerNumbers(teamName) {
    const teams = gameObject();

    for (const teamData of Object.values(teams)) {
        if (teamData.teamName === teamName) {
            return Object.values(teamData.players).map((player) => player.number);
        }
    }

    return [];
}

function playerStats(playerName) {
    const teams = gameObject();

    for (const teamData of Object.values(teams)) {
        if (teamData.players[playerName]) {
            return teamData.players[playerName];
        }
    }

    return null;
}

function bigShoeRebounds() {
    const teams = gameObject();
    let largestShoe = 0;
    let rebounds = 0;

    for (const teamData of Object.values(teams)) {
        for (const player of Object.values(teamData.players)) {
            if (player.shoe > largestShoe) {
                largestShoe = player.shoe;
                rebounds = player.rebounds;
            }
        }
    }

    return rebounds;
}

function mostPointsScored() {
    const teams = gameObject();
    let highestScorer = null;
    let highestPoints = -Infinity;

    for (const teamData of Object.values(teams)) {
        for (const [playerName, playerStats] of Object.entries(teamData.players)) {
            if (playerStats.points > highestPoints) {
                highestPoints = playerStats.points;
                highestScorer = playerName;
            }
        }
    }

    return highestScorer;
}

function winningTeam() {
    const teams = gameObject();
    let winningTeamName = null;
    let highestTotal = -Infinity;

    for (const teamData of Object.values(teams)) {
        const teamTotal = Object.values(teamData.players).reduce((sum, player) => sum + player.points, 0);

        if (teamTotal > highestTotal) {
            highestTotal = teamTotal;
            winningTeamName = teamData.teamName;
        }
    }

    return winningTeamName;
}

function playerWithLongestName() {
    const teams = gameObject();
    let longestNamePlayer = null;
    let longestNameLength = -Infinity;

    for (const teamData of Object.values(teams)) {
        for (const [playerName] of Object.entries(teamData.players)) {
            if (playerName.length > longestNameLength) {
                longestNameLength = playerName.length;
                longestNamePlayer = playerName;
            }
        }
    }

    return longestNamePlayer;
}

function doesLongNameStealATon() {
    const teams = gameObject();
    const longestNamePlayer = playerWithLongestName();
    let mostSteals = -Infinity;

    for (const teamData of Object.values(teams)) {
        for (const player of Object.values(teamData.players)) {
            if (player.steals > mostSteals) {
                mostSteals = player.steals;
            }
        }
    }

    for (const teamData of Object.values(teams)) {
        if (teamData.players[longestNamePlayer]) {
            return teamData.players[longestNamePlayer].steals === mostSteals;
        }
    }

    return false;
}