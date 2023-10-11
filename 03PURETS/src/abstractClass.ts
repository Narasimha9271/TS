abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ){}

  abstract getSepia():void
  getReelTime(): number{
    //some complex calculation
    return 8
  }
}
//for abstract classes you can't create objects  instaed create a subclass and create object
// const nanii = new TakePhoto("test","Test")

class Instagram extends TakePhoto{
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){
    super(cameraMode,filter)
  }

  getSepia(): void {
    console.log("Sepiaa")
  }

}
const nanii = new Instagram("test","Test",9)

nanii.getReelTime()