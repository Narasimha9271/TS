"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
//for abstract classes you can't create objects  instaed create a subclass and create object
// const nanii = new TakePhoto("test","Test")
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepiaa");
    }
}
const nanii = new Instagram("test", "Test", 9);
nanii.getReelTime();
