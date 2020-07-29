import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';
import React, { Component } from 'react';

const styles = {
    menu: {
        overflow: 'hidden',
        border: '2px solid #ddd',
        width: 300,
        marginTop: 20,
    },
    selection: {
        padding: 10,
        margin: 0,
        borderBottom: '1px solid #ededed'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        cursor: 'pointer',
        width: 200,
        height: 45,
        border: 'none',
        borderRadius: 4,
        backgroundColor: '#ffc107',
    },
}

class App extends Component {
    animatedValue = new Animated.Value(0)
    animate = () => {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.elastic(1)
            }
        ).start();
    }
    render() {
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-120, 0],
        })
        return (
            <div className="App">
                <div style={styles.button} onClick={this.animate}>Animate</div>
                <Animated.div
                    style={
                        Object.assign(
                            {},
                            styles.box,
                            { opacity: this.animatedValue, marginLeft })}>
                    <p>Thanks for your submission!</p>
                </Animated.div>
            </div>
        );
    }
}

export default App;