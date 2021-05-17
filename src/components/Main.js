import React from 'react';
import HornedBeasts from './HornedBeasts';
import imgArr from './data.json';

class Main extends React.Component {

    render() {
        return (
            <main>
                {imgArr.map((element, idx) => {
                    return (
                        <HornedBeasts key={idx} imgURL={element.image_url} description={element.description} title={element.name} />
                    )
                })}
            </main>
        )
    }
}

export default Main;
