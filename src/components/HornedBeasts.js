import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeasts extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        vote: 0
    }
}

handleClick = () => {
    this.setState({
        vote: this.state.vote + 1,
    })
}

sendInfo = () => {
    this.props.show(this.props.title);
}

render() {
    return (
        <div >
            <Card style={{ width: '18rem' }} className="Container" >
                <Card.Img variant="top" src={this.props.imgURL} alt={this.props.title}   onClick = {this.sendInfo}/>
                <Card.Body >
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text  onClick = {this.sendInfo}>
                        {this.props.description}
                    </Card.Text>
                    <Card.Text className='vote'>
                        {this.state.vote}
                    </Card.Text>
                    <Button variant="warning" onClick={this.handleClick}>Vote</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
}

export default HornedBeasts;