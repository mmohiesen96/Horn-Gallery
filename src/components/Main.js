import React from 'react';
import HornedBeasts from './HornedBeasts';
import img from '../img/horn1.jpg';
import img2 from '../img/horn2.jpg';
import img3 from '../img/horn3.jpg';

class Main extends React.Component {

    render() {
        return (
            <main>
                <HornedBeasts imgURL = {img} title = {"Markhor"} description = {"The markhor, according to ARKive, lives in the mountains of central Asia, adeptly climbing craggy rocks with the grace of North America’s own mountain goat. It’s extremely endangered, with an estimated 2,500 left in the wild in part due to hunting for its absurdly spectacular corkscrewed horns, which can grow to more than five feet long."}/>
                <HornedBeasts imgURL = {img2} title = {"Scimitar-Horned Oryx"} description = {"The scimitar-horned oryx is the buffalo of north Africa: formerly widespread, roaming the savannah in huge herds, it was hunted (for its horns, rather than its meat, though it was eaten), and it disappeared. More interestingly: the oryx is extinct in the wild, only existing now in zoos. It’s not a huge animal, but the horns can reach four feet long."}/>
                <HornedBeasts imgURL = {img3} title = {"Bharal"} description = {"According to reputable sources, the bharal is also known as the Himalayan blue sheep due to a bluish tint to its fur. In the interest of journalism, we spent quite awhile looking at pictures of bharals online and are sad to say that this sheep is not really colored blue. But! It does have very good horns. Sheep horns tend to be wider and smoother than narrow, knobbly goat horns, and the bharal is in possession of some excellently wide and smooth horns."}/>
            </main>
        )
    }
}

export default Main;