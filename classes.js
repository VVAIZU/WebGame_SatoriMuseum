class Sprite {
    constructor({
        position,
        image,
        frames = { max: 1, hold: 10 },
        sprites,
        animate = false,
        rotation = 0,
        scale = 1
    }) {
        this.position = position
        this.image = new Image()
        this.frames = { ...frames, val: 0, elapsed: 0 }
        this.image.onload = () => {
            this.width = (this.image.width / this.frames.max) * scale
            this.height = this.image.height * scale
        }
        this.image.src = image.src

        this.animate = animate
        this.sprites = sprites
        this.opacity = 1

        this.rotation = rotation
        this.scale = scale
    }

    draw() {
        c.save()
        c.translate(
            this.position.x + this.width / 2,
            this.position.y + this.height / 2
        )
        c.rotate(this.rotation)
        c.translate(
            -this.position.x - this.width / 2,
            -this.position.y - this.height / 2
        )
        c.globalAlpha = this.opacity

        const crop = {
            position: {
                x: this.frames.val * (this.width / this.scale),
                y: 0
            },
            width: this.image.width / this.frames.max,
            height: this.image.height
        }

        const image = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            width: this.image.width / this.frames.max,
            height: this.image.height
        }

        c.drawImage(
            this.image,
            crop.position.x,
            crop.position.y,
            crop.width,
            crop.height,
            image.position.x,
            image.position.y,
            image.width * this.scale,
            image.height * this.scale
        )

        c.restore()

        if (!this.animate) return

        if (this.frames.max > 1) {
            this.frames.elapsed++
            // this.position.x++
        }

        if (this.frames.elapsed % this.frames.hold === 0) {
            if (this.frames.val < this.frames.max - 1) this.frames.val++
            else this.frames.val = 0
        }
    }
}
// class Sprite {
//     constructor({
//         position,
//         velocity,
//         image,
//         frames = { max: 0, hold: 10 },
//         sprites,
//         animate = false,
//         rotation = 0,
//         scale = 1
//     }) {
//         this.position = position
//         this.image = new Image()
//         this.frames = { ...frames, val: 0, elapsed: 0 }
//         this.image.onload = () => {
//             this.width = (this.image.width / this.frames.max) * scale
//             this.height = this.image.height * scale
//         }
//         this.image.src = image.src

//         this.animate = animate
//         this.sprites = sprites
//         this.opacity = 1

//         this.rotation = rotation
//         this.scale = scale
//     }

//     draw() {
//         c.save()
//         c.translate(
//             this.position.x + this.width / 2,
//             this.position.y + this.height / 2
//         )
//         c.rotate(this.rotation)
//         c.translate(
//             -this.position.x - this.width / 2,
//             -this.position.y - this.height / 2
//         )
//         c.globalAlpha = this.opacity

//         const crop = {
//             position: {
//                 x: this.frames.val * (this.width / this.scale),
//                 y: 0
//             },
//             width: this.image.width / this.frames.max,
//             height: this.image.height
//         }
//         const image = {
//             position: {
//                 x: this.position.x,
//                 y: this.position.y
//             },
//             width: this.image.width / this.frames.max,
//             height: this.image.height
//         }

//         c.drawImage(
//             this.image,
//             crop.position.x,
//             crop.position.y,
//             crop.width,
//             crop.height,
//             image.position.x,
//             image.position.y,
//             image.width * this.scale,
//             image.height * this.scale
//         )

//         c.restore()

//         if (!this.animate) return

//         if (this.frames.max > 1) {
//             this.frames.elapsed++
//         }

//         if (this.frames.elapsed % this.frames.hold === 0) {
//             if (this.frames.val < this.frames.max - 1) this.frames.val++
//             else this.frames.val = 0
//         }
//     }
// }

class Boundary {
    static width = 48
    static height = 48
    constructor({ position }) {
        this.position = position
        this.width = 48 //tiles multiplier
        this.height = 48
    }

    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Cutscene {
    static width = 48
    static height = 48
    constructor({
        position,
        image,
        scale,
        dialogue = ['']
    }) {
        this.image = image
        
        this.position = position
        this.width = 48
        this.height = 48

        this.dialogue = dialogue
        this.dialogueIndex = 0
    }
    draw() {
        c.fillStyle = 'rgba(0, 255, 0, 0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Character extends Sprite {
    constructor({
        position,
        velocity,
        image,
        frames = { max: 1, hold: 10 },
        sprites,
        animate = false,
        rotation = 0,
        scale = 1,
        dialogue = [''],
        achieve = ''
    }) {
        super({
            position,
            velocity,
            image,
            frames,
            sprites,
            animate,
            rotation,
            scale,
            achieve
        })

        this.achieve = 'R_VN deafult achieve'
        this.dialogue = dialogue
        this.dialogueIndex = 0

        if (this.frames.max > 1 && movex === true) {
            this.position.x++
        }
    }
}