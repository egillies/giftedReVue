export class Gift {
    constructor(data) {
        this.url = data.url
        this.opened = data.opened || false
        this.creatorId = data.creatorId
        this.id = data.id
        this.tag = data.tag
    }
}