class App extends React.Component {
    constructor(props) {
        super(props);
        this.label = props.label;
        this.state = { date: new Date() };
    }
    render() {
        return (
            <div>
                <Welcome name="Aaron Morey" />
                <WelcomeIntro />
                <Clock label="It is currently " />
            </div>
        );
    }
}

// Using React Library for creating component - v15 react
const WelcomeIntro = React.createClass({
    render: function () {
        return (
            <div>
                Welcome to this simple react app.
            </div>
        );
    }
});

// Pure Functional Component
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// Example of using ES6 & Props
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.label = props.label;
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <h2>{this.label} {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}