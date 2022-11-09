import { View, Text, Image, ImageBackground } from "react-native";
import styles from "./style";

const img = require('../../../assets/images/rectangle.png')
const CodeImg = require('../../../assets/images/QRImage.png')

const ContactInformation = ({ text }) => {
    return (
        <View>
            <Text style={styles.texts}>{text}</Text>
        </View>
    );
}

const Contact = () => {
    return (
        <View>
            <View>
                <ImageBackground source={img} style={styles.header}>
                    <Text style={styles.txt}>تواصل معنا</Text>
                </ImageBackground>
            </View>
            <Image source={CodeImg} style={styles.QRImg} />
            <View style={styles.ContactContainer}>
                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.headText}>تواصل معنا على:</Text>
                </View>
                <ContactInformation text="infa@afaa8.com" />
                <ContactInformation text="0096652709005" />
                <ContactInformation text="العنوان : المملكة العربية السعودية" />
            </View>
        </View>
    );
}
export default Contact;