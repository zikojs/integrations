import { tags } from "ziko/dom/tags";

export default function HelloFromZikojs(){
    return tags.h1('Hello from zikojs ..').style({
        color : 'red'
    }).onClick(() => console.log('Hello world')).useClient()
}