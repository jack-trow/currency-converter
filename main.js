import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions, TextInput } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        mainPageDisplay: 'block',
        euroPageDisplay: 'none',
        rupeePageDisplay: 'none',
        canadianPageDisplay: 'none',
        yuanPageDisplay: 'none',
        yenPageDisplay: 'none',
        mexicanPageDisplay: 'none',
        USD: 0,
        euro: 0,
        rupee: 0,
        CAD: 0,
        yuan: 0,
        yen: 0,
        peso: 0,
    }

    convert = () => {
        this.setState({ 
            euro: (this.state.USD * 0.95).toFixed(2),
            rupee: (this.state.USD * 83.27).toFixed(2),
            CAD: (this.state.USD * 1.37).toFixed(2),
            yuan: (this.state.USD * 7.30).toFixed(2),
            yen: (this.state.USD * 149.69).toFixed(2),
            peso: (this.state.USD * 17.95).toFixed(2),
        })
    }

    handleMainPagePress = () => this.setState(state => ({
        mainPageDisplay: 'block',
        euroPageDisplay: 'none',
        rupeePageDisplay: 'none',
        canadianPageDisplay: 'none',
        yuanPageDisplay: 'none',
        yenPageDisplay: 'none',
        mexicanPageDisplay: 'none',
    }));

    handleEuroPagePress = () => this.setState(state => ({
        mainPageDisplay: 'none',
        euroPageDisplay: 'block',
        rupeePageDisplay: 'none',
        canadianPageDisplay: 'none',
        yuanPageDisplay: 'none',
        yenPageDisplay: 'none',
        mexicanPageDisplay: 'none',
    }));
    
    handleRupeePagePress = () => this.setState(state => ({
        mainPageDisplay: 'none',
        euroPageDisplay: 'none',
        rupeePageDisplay: 'block',
        canadianPageDisplay: 'none',
        yuanPageDisplay: 'none',
        yenPageDisplay: 'none',
        mexicanPageDisplay: 'none',
    }));
    
    handleCanadianPagePress = () => this.setState(state => ({
        mainPageDisplay: 'none',
        euroPageDisplay: 'none',
        rupeePageDisplay: 'none',
        canadianPageDisplay: 'block',
        yuanPageDisplay: 'none',
        yenPageDisplay: 'none',
        mexicanPageDisplay: 'none',
    }));
    
    handleYuanPagePress = () => this.setState(state => ({
        mainPageDisplay: 'none',
        euroPageDisplay: 'none',
        rupeePageDisplay: 'none',
        canadianPageDisplay: 'none',
        yuanPageDisplay: 'block',
        yenPageDisplay: 'none',
        mexicanPageDisplay: 'none',
    }));
    
    handleYenPagePress = () => this.setState(state => ({
        mainPageDisplay: 'none',
        euroPageDisplay: 'none',
        rupeePageDisplay: 'none',
        canadianPageDisplay: 'none',
        yuanPageDisplay: 'none',
        yenPageDisplay: 'block',
        mexicanPageDisplay: 'none',
    }));
    
    handlePesoPagePress = () => this.setState(state => ({
        mainPageDisplay: 'none',
        euroPageDisplay: 'none',
        rupeePageDisplay: 'none',
        canadianPageDisplay: 'none',
        yuanPageDisplay: 'none',
        yenPageDisplay: 'none',
        mexicanPageDisplay: 'block',
    }));

    _handleTextChange = USD => {
        this.setState({ USD });
    };

    render() {
        return (
            <View style={styles.container}>
            
                <View style={{ display: this.state.mainPageDisplay }}>
                    <View style={styles.mainContainer}>
                        <View style={styles.otherTitleCon}>
                            <Text style={styles.title}>
                                Currency Converter
                            </Text>
                        </View>
                        <View style={styles.mainInfoCon}>
                            <Text style={styles.inputText}>
                                Input USD Value:
                            </Text>
                            <TextInput style={styles.textInput}
                                value={this.state.USD}
                                onChangeText={this._handleTextChange}
                                clearTextOnFocus={true}
                                keyboardType = 'numeric'
                            />
                            <TouchableHighlight style={styles.button}
                                onPress={this.convert}
                            >
                                <Text style={styles.buttonText}>
                                    Confirm
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.navbarContainer}>
                        <View style={styles.buttonCon}>
                            <TouchableHighlight style={styles.navButton}
                                onPress={this.handleEuroPagePress}
                            >
                                <Text style={styles.navButtonText}>
                                    Euro
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.navButton}
                                onPress={this.handleCanadianPagePress}
                            >
                                <Text style={styles.navButtonText}>
                                    Canadian Dollars
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.navButton}
                                onPress={this.handlePesoPagePress}
                            >
                                <Text style={styles.navButtonText}>
                                    Mexican Peso
                                </Text>
                            </TouchableHighlight>
                        </View>
                        
                        <View style={styles.buttonCon}>
                            <TouchableHighlight style={styles.navButton}
                                onPress={this.handleYenPagePress}
                            >
                                <Text style={styles.navButtonText}>
                                    Japanese Yen
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.navButton}
                                onPress={this.handleYuanPagePress}
                            >
                                <Text style={styles.navButtonText}>
                                    Chinese Yuan
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.navButton}
                                onPress={this.handleRupeePagePress}
                            >
                                <Text style={styles.navButtonText}>
                                    Indian Rupee
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                
                <View style={{ display: this.state.euroPageDisplay }}>
                    <View style={styles.otherMainContainer}>
                        <View style={styles.otherTitleCon}>
                            <Text style={styles.title}>
                                Currency Converter
                            </Text>
                        </View>
                        <View style={styles.convertedInfoCon}>
                            <Text style={styles.convertedInfoText}>
                                ${this.state.USD} converted to
                            </Text>
                            <Text style={styles.convertedInfoText}>
                                euros is €{this.state.euro}
                            </Text>
                        </View>
                        <View style={styles.otherButtonCon}>
                            <TouchableHighlight style={styles.button}
                                onPress={this.handleMainPagePress}
                            >
                                <Text style={styles.buttonText}>
                                    Back
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                
                <View style={{ display: this.state.rupeePageDisplay }}>
                    <View style={styles.otherMainContainer}>
                        <View style={styles.otherTitleCon}>
                            <Text style={styles.title}>
                                Currency Converter
                            </Text>
                        </View>
                        <View style={styles.convertedInfoCon}>
                            <Text style={styles.convertedInfoText}>
                                ${this.state.USD} converted to
                            </Text>
                            <Text style={styles.convertedInfoText}>
                                rupees is ₹{this.state.rupee}
                            </Text>
                        </View>
                        <View style={styles.otherButtonCon}>
                            <TouchableHighlight style={styles.button}
                                onPress={this.handleMainPagePress}
                            >
                                <Text style={styles.buttonText}>
                                    Back
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                
                <View style={{ display: this.state.canadianPageDisplay }}>
                    <View style={styles.otherMainContainer}>
                        <View style={styles.otherTitleCon}>
                            <Text style={styles.title}>
                                Currency Converter
                            </Text>
                        </View>
                        <View style={styles.convertedInfoCon}>
                            <Text style={styles.convertedInfoText}>
                                ${this.state.USD} converted to
                            </Text>
                            <Text style={styles.convertedInfoText}>
                                CAD is C${this.state.CAD}
                            </Text>
                        </View>
                        <View style={styles.otherButtonCon}>
                            <TouchableHighlight style={styles.button}
                                onPress={this.handleMainPagePress}
                            >
                                <Text style={styles.buttonText}>
                                    Back
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                
                <View style={{ display: this.state.yuanPageDisplay }}>
                    <View style={styles.otherMainContainer}>
                        <View style={styles.otherTitleCon}>
                            <Text style={styles.title}>
                                Currency Converter
                            </Text>
                        </View>
                        <View style={styles.convertedInfoCon}>
                            <Text style={styles.convertedInfoText}>
                                ${this.state.USD} converted to
                            </Text>
                            <Text style={styles.convertedInfoText}>
                                yuan is ¥{this.state.yuan}
                            </Text>
                        </View>
                        <View style={styles.otherButtonCon}>
                            <TouchableHighlight style={styles.button}
                                onPress={this.handleMainPagePress}
                            >
                                <Text style={styles.buttonText}>
                                    Back
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                
                <View style={{ display: this.state.yenPageDisplay }}>
                    <View style={styles.otherMainContainer}>
                        <View style={styles.otherTitleCon}>
                            <Text style={styles.title}>
                                Currency Converter
                            </Text>
                        </View>
                        <View style={styles.convertedInfoCon}>
                            <Text style={styles.convertedInfoText}>
                                ${this.state.USD} converted to
                            </Text>
                            <Text style={styles.convertedInfoText}>
                                yen is JP¥{this.state.yen}
                            </Text>
                        </View>
                        <View style={styles.otherButtonCon}>
                            <TouchableHighlight style={styles.button}
                                onPress={this.handleMainPagePress}
                            >
                                <Text style={styles.buttonText}>
                                    Back
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                
                <View style={{ display: this.state.mexicanPageDisplay }}>
                    <View style={styles.otherMainContainer}>
                        <View style={styles.otherTitleCon}>
                            <Text style={styles.title}>
                                Currency Converter
                            </Text>
                        </View>
                        <View style={styles.convertedInfoCon}>
                            <Text style={styles.convertedInfoText}>
                                ${this.state.USD} converted to
                            </Text>
                            <Text style={styles.convertedInfoText}>
                                Mexican pesos is Mex${this.state.peso}
                            </Text>
                        </View>
                        <View style={styles.otherButtonCon}>
                            <TouchableHighlight style={styles.button}
                                onPress={this.handleMainPagePress}
                            >
                                <Text style={styles.buttonText}>
                                    Back
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    navbarContainer: {
        height: 2*deviceHeight/5,
        width: deviceWidth,
        backgroundColor: '#3a5a40',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 5,
        borderColor: 'black',
    },
    navButton: {
        height: deviceHeight/8,
        width: deviceWidth/3.8,
        backgroundColor: '#dad7cd',
        borderColor: 'black',
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    navButtonText: {
        fontSize: deviceHeight/35,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    buttonCon: {
        flexDirection: 'row',
    },
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textInputCon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainInfoCon: {
        height: 2*deviceHeight/5,
        width: deviceWidth,
        backgroundColor: '#dad7cd',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: deviceHeight/12,
        textAlign: 'center',
        color: '#a3b18a',
        fontWeight: 'bold',
    },
    otherTitleCon: {
        height: deviceHeight/5,
        width: deviceWidth,
        backgroundColor: '#3a5a40',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderColor: 'black',
    },
    textInput: {
        height: deviceHeight/15,
        width: 9*(deviceWidth/10),
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
    },
    inputText: {
        fontSize: deviceHeight/25,
        textAlign: 'center',
    },
    button: {
        height: deviceHeight/8,
        width: deviceWidth/2.5,
        backgroundColor: '#a3b18a',
        borderColor: 'black',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    buttonText: {
        fontSize: deviceHeight/30,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    otherMainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    convertedInfoCon: {
        height: 3*deviceHeight/5,
        width: deviceWidth,
        backgroundColor: '#dad7cd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    otherButtonCon: {
        height: deviceHeight/5,
        width: deviceWidth,
        backgroundColor: '#3a5a40',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 5,
        borderColor: 'black',
    },
    convertedInfoText: {
        fontSize: deviceHeight/18,
        textAlign: 'center',
    },
});
