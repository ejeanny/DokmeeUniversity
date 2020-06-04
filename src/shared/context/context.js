import React, { Component } from "react";

const DokmeeContext = React.createContext();

class DokmeeProvider extends Component {
    state = {
        isLoggedIn: false,
        userId: null,
        isInTest: false,
    };

    handleTest = () => {
        this.setState({
            isInTest: !this.state.isInTest,
        });
    };
    render() {
        return (
            <DokmeeContext.Provider
                value={{
                    ...this.state,
                    handleTest: this.handleTest,
                }}>
                {this.props.children}
            </DokmeeContext.Provider>
        );
    }
}
export function withDokmeeConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <DokmeeConsumer>
                {value => <Component {...props} context={value} />}
            </DokmeeConsumer>
        );
    };
}
const DokmeeConsumer = DokmeeContext.Consumer;
export { DokmeeProvider, DokmeeConsumer, DokmeeContext };
