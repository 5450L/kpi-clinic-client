const PHOTO_PLACEHOLDER = 'assets/images/members/member-photo-placeholder.jpg'

export class Member {
    public name: string;
    public position: string;
    public photo: string;

    constructor(name: string, position: string, photo: string = PHOTO_PLACEHOLDER) {
        this.name = name;
        this.position = position;
        this.photo = photo;
    }
}