import React from 'react';
import HornedBeasts from './HornedBeasts';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            any: 0,
            numberOfHorns : this.props.arr
        }
        console.log(props , this.state)
    }

    filterHorns = (event) => {
        let newArr =[];
        let hornNumber = event.target.value;
        if(parseInt(event.target.value) === 0) {
            this.setState({
                numberOfHorns : this.props.arr
            })
        }
        else {
        for(let i = 0 ; i < this.props.arr.length ; i++) {
            if(this.props.arr[i].horns === parseInt(hornNumber)) {
                newArr.push(this.props.arr[i]);
            }
        }
        this.setState({
            numberOfHorns : newArr
        })

    }
    }
    render() {
        return (
            <main>
                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                    onChange = {this.filterHorns}
                >
                    <option value="0">All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="100">One Hundred</option>
                </Form.Control>
                {this.state.numberOfHorns.map((element, idx) => {
                    return (
                        <HornedBeasts key={idx}
                            imgURL={element.image_url}
                            description={element.description}
                            title={element.title}
                            show={this.props.show} />
                    )
                })}
            </main>
        )
    }
}

export default Main;
