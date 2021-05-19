import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            any:0
        }
        console.log(props)
    }
    render() {
        return (
            <main>

                {this.props.arr.map((element, idx) => {
                    return (
                        <HornedBeasts key={idx} 
                        imgURL={element.image_url} 
                        description={element.description} 
                        title={element.title} 
                        show ={this.props.show}/>
                    )
                })}
            </main>
        )
    }
}

export default Main;
