const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

let tg = window.Telegram.WebApp

canvas.width = 400
canvas.height = 576
// canvas.width = 1920
// canvas.height = 1080

tg.expand()

const upButton = document.getElementById('up');
const leftButton = document.getElementById('left');
const downButton = document.getElementById('down');
const rightButton = document.getElementById('right');
const usebutton = document.getElementById('use')


const collisionsMap = []
for (let i = 0; i < collisions.length; i += 70) {
    collisionsMap.push(collisions.slice(i, 70 + i))
}

// const battleZonesMap = []
// for (let i = 0; i < battleZonesData.length; i += 70) {
//     battleZonesMap.push(battleZonesData.slice(i, 70 + i))
// }

const boundaries = []
const offset = {
    x: -420,
    y: -560
}

const charactersMap = []
for (let i = 0; i < charactersMapData.length; i += 70) {
    charactersMap.push(charactersMapData.slice(i, 70 + i))
}
console.log(charactersMap)

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025)
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

// const battleZones = []

// const cutscene1bkg = new Image()
// cutscene1bkg.src = './img/battleBackground.png'

// const cutscene2bkg = new Image()
// cutscene2bkg.src = './img/battleBackground2.png'

// battleZonesMap.forEach((row, i) => {
//     row.forEach((symbol, j) => {
//         if (symbol === 1026) {
//             battleZones.push(
//                 new Cutscene({
//                     position: {
//                         x: j * Cutscene.width + offset.x,
//                         y: i * Cutscene.height + offset.y
//                     },
//                     image: cutscene1bkg,
//                     dialogue: ['...', 'first_cutscene_check']
//                 })
//                 // new Boundary({
//                 //     position: {
//                 //         x: j * Boundary.width + offset.x,
//                 //         y: i * Boundary.height + offset.y
//                 //     }
//                 // })
//             )
//         }
//         else if (symbol === 1031) {
//             battleZones.push(
//                 new Cutscene({
//                     position: {
//                         x: j * Cutscene.width + offset.x,
//                         y: i * Cutscene.height + offset.y
//                     },
//                     image: cutscene2bkg,
//                     dialogue: ['...)))', 'second_cutscene_check']
//                 })
//             )
//         }
//     })
// })

// console.log(battleZones)


const characters = []
const villagerImg = new Image()
villagerImg.src = './img/1playerDown.png'

const oldManImg = new Image()
oldManImg.src = './img/oldMan/Idle2.png'

const firstMemeImg = new Image()
firstMemeImg.src  = './img/draggleSprite.png'
// const draggleImage = new Image()
// draggleImage.src = './img/draggleSprite.png'
// const draggle = new Sprite({
//     position: {
//         x: 800,
//         y: 100
//     },
//     image: draggleImage,
//     frames: {
//         max: 4,
//         hold: 20
//     },
//     animate: true
// })

// //Cutscene Dialogues
// const cutscene1char = new Character({
//     position: {
//         x: -1,
//         y: -1
//     },
//     image: draggleImage,
//     dialogue: ['...', 'is it working?']
// })

// let cutsceneEnded = false

charactersMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        //1026 - villager
        if (symbol === 1030) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: oldManImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    meme: "<img src=\"./img/Memes/first.png\" alt=\"meme\" width=\"300px\" height=\"400px\">",
                    dialogue: ['Здравствуй, подписчик SATORI', 'Я - Кенсе. Была прошлым ботом паблика в 2022 г.', 'Добро пожаловать в музей SATORI! Именно здесь закрепятся в истории лучшие моменты паблика.', 'Новичкам - инфополе, олдам - слезу настальгии пустить. С каждым новым моментом в этом музее появится новая комната. Наслаждайся!', 'Это версия 0.1. Обновления: игра вообще создана.'],
                    achieve: 'R_VN first achieve',
                })
            )
        } 
        else if (symbol === 1025) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: oldManImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    meme: "<img src=\"./img/Memes/first.png\" alt=\"meme\" width=\"300px\" height=\"400px\">",
                    dialogue: ['Второй мем.'],
                    achieve: 'R_VN second achieve',
                })
            )
        }
        else if (symbol === 1026) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: oldManImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: ['Первый мем.'],
                    achieve: 'R_VN second achieve',
                    meme: "<img src=\"./img/Memes/first.png\" alt=\"meme\" width=\"300px\" height=\"400px\">",
                })
            )
        }
        else if (symbol === 1027) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: oldManImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: ['Первый мем.'],
                    achieve: 'R_VN second achieve',
                    meme: "<img src=\"./img/Memes/first.png\" alt=\"meme\" width=\"300px\" height=\"400px\">",
                })
            )
        }
        else if (symbol === 1028) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: oldManImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: ['Первый мем.'],
                    achieve: 'R_VN second achieve',
                    meme: "<img src=\"./img/Memes/first.png\" alt=\"meme\" width=\"300px\" height=\"400px\">",
                })
            )
        }
        else if (symbol === 1029) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: oldManImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: ['Первый мем.'],
                    achieve: 'R_VN second achieve',
                    meme: "<img src=\"./img/Memes/first.png\" alt=\"meme\" width=\"300px\" height=\"400px\">",
                })
            )
        }
        else if (symbol === 1031) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: oldManImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: ['Статуя лягушенку Пепе никогда не будет лишней!'],
                    achieve: 'R_VN second achieve',
                    meme: "<img src=\"./img/Memes/first.png\" alt=\"meme\" width=\"300px\" height=\"400px\">",
                })
            )
        }
        else if (symbol === 1032) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: oldManImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: ['Первый мем.'],
                    achieve: 'R_VN second achieve',
                    meme: "<img src=\"./img/Memes/first.png\" alt=\"meme\" width=\"300px\" height=\"400px\">",
                })
            )
        }
        else if (symbol === 1033) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: oldManImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: ['Первый мем.'],
                    achieve: 'R_VN second achieve',
                    meme: "<img src=\"./img/Memes/first.png\" alt=\"meme\" width=\"300px\" height=\"400px\">",
                })
            )
        }
        

        if (symbol !== 0) {
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
        }
    })
})

const image = new Image()
image.src = './img/Museum.png'

// const foregroundImage = new Image()
// foregroundImage.src = './img/foregroundObjects.png'

const playerDownImage = new Image()
playerDownImage.src = './img/1playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './img/1playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/1playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/1playerRight.png'


const player = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 50,
        y: canvas.height / 2 - 68 / 2
    },
    image: playerDownImage,
    frames: {
        max: 4,
        hold: 10
    },
    sprites: {
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        down: playerDownImage
    }
})

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
})

// const foreground = new Sprite({
//     position: {
//         x: offset.x,
//         y: offset.y
//     },
//     image: foregroundImage
// })

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

upButton.addEventListener('click', () => {
    keys.w.pressed = true;
});

leftButton.addEventListener('click', () => {
    keys.a.pressed = true;
});

downButton.addEventListener('click', () => {
    keys.s.pressed = true;
});

rightButton.addEventListener('click', () => {
    keys.d.pressed = true;
});

const movables = [
    background,
    // ...battleZones,
    ...boundaries,
    // foreground,
    ...characters
]

const renderables = [
    background,
    ...boundaries,
    ...characters,
    player,
    // foreground
]

// const battle = {
//     initiated: false
// }


function animate() {
    console.log(keys.w.pressed)
    const animationId = window.requestAnimationFrame(animate)
    gsap.to('#overlappingDiv', {
        opacity: 0,
        duration: 0.4
    })
    renderables.forEach((renderable) => {
        renderable.draw()
    })

    let moving = true
    player.animate = false

    // battleZones.forEach(battleZone => {
    //     battleZone.draw()
    // })

    // console.log(animationId)
    // if (battle.initiated) return

    //battle activation
    // if (keys.w.pressed || keys.a.pressed || keys.d.pressed || keys.s.pressed) {
    //     for (let i = 0; i < battleZones.length; i++) {
    //         const battleZone = battleZones[i]
    //         // const overlappingArea =
    //         //     (Math.min(
    //         //         player.position.x + player.width,
    //         //         battleZone.position.x + battleZone.width
    //         //     ) -
    //         //         Math.max(player.position.x, battleZone.position.x)) *
    //         //     (Math.min(
    //         //         player.position.y + player.height,
    //         //         battleZone.position.y + battleZone.height
    //         //     ) -
    //         //         Math.max(player.position.y, battleZone.position.y))
    //         if (
    //             rectangularCollision({
    //                 rectangle1: player,
    //                 rectangle2: battleZone
    //             })
    //             // && cutsceneEnded === false
    //             // overlappingArea > (player.width * player.height) / 2 &&
    //         ) {
    //             console.log('battle zone collision')
    //             player.interactionAsset = battleZone
    //             // interactingcutscene()

    //             //deactivate current animation
    //             window.cancelAnimationFrame(animationId)
    //             battle.initiated = true
    //             gsap.to('#overlappingDiv', {
    //                 opacity: 1,
    //                 yoyo: true,
    //                 duration: 1,
    //                 onComplete() {
    //                     // cutscene = true
    //                     gsap.to('#overlappingDiv', {
    //                         opacity: 1,
    //                         duration: 1,
    //                         onComplete() {
    //                             animateBattle()
    //                             gsap.to('#overlappingDiv', {
    //                                 opacity: 0,
    //                                 duration: 0.4
    //                             })
    //                         }
    //                     })

    //                     //activate a new animation loop
    //                     animateBattle()
    //                 }
    //             })
    //             break
    //         }
    //         // else {
    //         //     cutsceneEnded = false
    //         // }
    //     }
    //     // if (!rectangularCollision({
    //     //     rectangle1: player,
    //     //     rectangle2: battleZone
    //     // })){
    //     //     cutsceneEnded = false
    //     // }
    // }

    if (keys.w.pressed && lastKey === 'w') {
        player.animate = true
        player.image = player.sprites.up

        checkForCharacterCollision({
            characters,
            player,
            characterOffset: { x: 0, y: 3 }
        })

        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.y += 3
            })
    } else if (keys.a.pressed && lastKey === 'a') {
        player.animate = true
        player.image = player.sprites.left

        checkForCharacterCollision({
            characters,
            player,
            characterOffset: { x: 3, y: 0 }
        })

        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.x += 3
            })
    } else if (keys.s.pressed && lastKey === 's') {
        player.animate = true
        player.image = player.sprites.down

        checkForCharacterCollision({
            characters,
            player,
            characterOffset: { x: 0, y: -3 }
        })

        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.y -= 3
            })
    } else if (keys.d.pressed && lastKey === 'd') {
        player.animate = true
        player.image = player.sprites.right

        checkForCharacterCollision({
            characters,
            player,
            characterOffset: { x: -3, y: 0 }
        })

        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.x -= 3
            })
    }
}
animate()


// const battleBackgroundImage = new Image()
// battleBackgroundImage.src = './img/battleBackground.png'
// const battleBackground = new Sprite({
//     position: {
//         x: 0,
//         y: 0
//     },
//     image: battleBackgroundImage,
// })

// let battleAnimationId

// function animateBattle() {
//     battleAnimationId = window.requestAnimationFrame(animateBattle)
//     // battleBackground.draw()
//     // draggle.draw()
//     console.log(player.interactionAsset)
//     // c.drawImage(
//     //     player.interactionAsset.image,
//     //     0,
//     //     0

//     // )
// }

// function interactingcutscene() {
//     player.interactionAsset.draw()
//     // const firstMessage = player.interactionAsset.dialogue[0]
//     // document.querySelector('#characterDialogueBox').innerHTML = firstMessage
//     // document.querySelector('#characterDialogueBox').style.display = 'flex'
//     // player.isInteracting = true
// }
// animateBattle()

let lastKey = ''
// window.addEventListener('keydown', (e) => {
//     if (player.isInteracting) {
//         switch (e.key) {
//             case ' ':
//                 player.interactionAsset.dialogueIndex++

//                 const { dialogueIndex, dialogue } = player.interactionAsset
//                 if (dialogueIndex <= dialogue.length - 1) {
//                     document.querySelector('#characterDialogueBox').innerHTML =
//                         player.interactionAsset.dialogue[dialogueIndex]
//                     return
//                 }

//                 // finish conversation
//                 player.isInteracting = false
//                 player.interactionAsset.dialogueIndex = 0
//                 document.querySelector('#characterDialogueBox').style.display = 'none'
//                 // if (battle.initiated === true) {
//                 //     gsap.to('#overlappingDiv', {
//                 //         opacity: 1,
//                 //         onComplete: () => {
//                 //             cancelAnimationFrame(battleAnimationId)
//                 //             battle.initiated = false
//                 //             movables.forEach((movable) => {
//                 //                 if (lastKey === 'w') {
//                 //                     movable.position.y -= 15
//                 //                 }
//                 //                 else if (lastKey === 'a') {
//                 //                     movable.position.x -= 15
//                 //                 }
//                 //                 else if (lastKey === 's') {
//                 //                     movable.position.y += 15
//                 //                 }
//                 //                 else if (lastKey === 'd') {
//                 //                     movable.position.x += 15
//                 //                 }
//                 //             })
//                 //             cutsceneEnded = true
//                 //             animate()
//                 //             gsap.to('#overlappingDiv', {
//                 //                 opacity: 0
//                 //             })
//                 //         }
//                 //     })
//                 // }

//                 break
//         }
//         return
//     }

//     switch (e.key) {
//         case ' ':
//             if (!player.interactionAsset) return

//             // beginning the conversation
//             const firstMessage = player.interactionAsset.dialogue[0]
//             document.querySelector('#characterDialogueBox').innerHTML = firstMessage
//             document.querySelector('#characterDialogueBox').style.display = 'flex'
//             player.isInteracting = true
//             break
//         case 'w':
//             keys.w.pressed = true
//             lastKey = 'w'
//             break
//         case 'a':
//             keys.a.pressed = true
//             lastKey = 'a'
//             break
//         case 's':
//             keys.s.pressed = true
//             lastKey = 's'
//             break
//         case 'd':
//             keys.d.pressed = true
//             lastKey = 'd'
//             break
//     }
// })
// window.addEventListener('keyup', (e) => {
//     switch (e.key) {
//         case 'w':
//             keys.w.pressed = false
//             break
//         case 'a':
//             keys.a.pressed = false
//             break
//         case 's':
//             keys.s.pressed = false
//             break
//         case 'd':
//             keys.d.pressed = false
//             break
//     }
// })
// // Обработчики событий нажатия на кнопки на экране
// upButton.addEventListener('click', () => {
//     handleKeyPress('w');
// });

// leftButton.addEventListener('click', () => {
//     handleKeyPress('a');
// });

// downButton.addEventListener('click', () => {
//     handleKeyPress('s');
// });

// rightButton.addEventListener('click', () => {
//     handleKeyPress('d');
// });
function handleKeyPress(key) {
    if (player.isInteracting) {
        // document.querySelector('#MemeImage').innerHTML = player.interactionAsset.meme
        switch (key) {
            case ' ':
                player.interactionAsset.dialogueIndex++

                const { dialogueIndex, dialogue } = player.interactionAsset
                if (dialogueIndex <= dialogue.length - 1) {
                    document.querySelector('#characterDialogueBox').innerHTML = player.interactionAsset.dialogue[dialogueIndex]
                    return
                }

                // finish conversation
                player.isInteracting = false
                player.interactionAsset.dialogueIndex = 0
                document.querySelector('#characterDialogueBox').style.display = 'none'
                document.querySelector('#MemeImage').style.display = 'none'
                // tg.sendData(player.interactionAsset.achieve)
                break;
        }
        return;
    }

    switch (key) {
        case ' ':
            if (!player.interactionAsset) return;
                if (!player.interactionAsset) return
                
                // beginning the conversation
                document.querySelector('#MemeImage').style.display = 'flex'
                document.querySelector('#MemeImage').innerHTML = player.interactionAsset.meme
                const firstMessage = player.interactionAsset.dialogue[0]
                document.querySelector('#characterDialogueBox').innerHTML = firstMessage
                document.querySelector('#characterDialogueBox').style.display = 'flex'
                player.isInteracting = true
            break;
        case 'w':
            keys.w.pressed = true;
            lastKey = 'w';
            break;
        case 'a':
            keys.a.pressed = true;
            lastKey = 'a';
            break;
        case 's':
            keys.s.pressed = true;
            lastKey = 's';
            break;
        case 'd':
            keys.d.pressed = true;
            lastKey = 'd';
            break;
    }
}

function handleKeyUp(key) {
    switch (key) {
        case 'w':
            keys.w.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 's':
            keys.s.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
    }
}

// // Обработчики событий клавиатуры
// window.addEventListener('keydown', (e) => {
//     handleKeyPress(e.key);
// });

// window.addEventListener('keyup', (e) => {
//     handleKeyUp(e.key);
// });

// Обработчики событий нажатия на кнопки на экране

usebutton.addEventListener('mousedown', () => {
    event.preventDefault();
    handleKeyPress(' ')
})
usebutton.addEventListener('touchstart', () => {
    event.preventDefault();
    handleKeyPress(' ')
})

upButton.addEventListener('mousedown', () => {
    event.preventDefault();
    handleKeyPress('w');
});
upButton.addEventListener('touchstart', () => {
    event.preventDefault();
    handleKeyPress('w');
});

upButton.addEventListener('mouseleave', () => {
    event.preventDefault();
    handleKeyUp('w');
});
upButton.addEventListener('touchend', () => {
    event.preventDefault();
    handleKeyUp('w');
});
upButton.addEventListener('mouseup', () => {
    event.preventDefault();
    handleKeyUp('w');
});

leftButton.addEventListener('mousedown', () => {
    event.preventDefault();
    handleKeyPress('a');
});
leftButton.addEventListener('touchstart', () => {
    event.preventDefault();
    handleKeyPress('a');
});


leftButton.addEventListener('mouseleave', () => {
    event.preventDefault();
    handleKeyUp('a');
});
leftButton.addEventListener('touchend', () => {
    event.preventDefault();
    handleKeyUp('a');
});
leftButton.addEventListener('mouseup', () => {
    event.preventDefault();
    handleKeyUp('a');
});

downButton.addEventListener('mousedown', () => {
    event.preventDefault();
    handleKeyPress('s');
});
downButton.addEventListener('touchstart', () => {
    event.preventDefault();
    handleKeyPress('s');
});

downButton.addEventListener('mouseleave', () => {
    event.preventDefault();
    handleKeyUp('s');
});
downButton.addEventListener('touchend', () => {
    event.preventDefault();
    handleKeyUp('s');
});
downButton.addEventListener('mouseup', () => {
    event.preventDefault();
    handleKeyUp('s');
});

rightButton.addEventListener('mousedown', () => {
    event.preventDefault();
    handleKeyPress('d');
});
rightButton.addEventListener('touchstart', () => {
    event.preventDefault();
    handleKeyPress('d');
});

rightButton.addEventListener('mouseleave', () => {
    event.preventDefault();
    handleKeyUp('d');
});
rightButton.addEventListener('touchend', () => {
    event.preventDefault();
    handleKeyUp('d');
});
rightButton.addEventListener('mouseup', () => {
    event.preventDefault();
    handleKeyUp('d');
});
