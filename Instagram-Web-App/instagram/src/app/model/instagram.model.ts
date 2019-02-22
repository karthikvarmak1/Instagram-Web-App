import { ImageDetails } from './instagram.interface';

export class Instagram {
    canSubscribe: boolean;
    imageList: ImageDetails[];
    constructor() {
        this.imageList = [];
        this.canSubscribe = true;
    }
}
