import { View, Image, Text } from "react-native";
import styles from "./style";
const img = require('../../../assets/images/Group.png');

const HeadText = ({ text, paragraph }) => {
    return (
        <>
            <View style={styles.texrContainer}>
                <Text style={styles.txt}>{text}</Text>
            </View>
            <View style={styles.paragraphContainer}>
                <Text style={styles.paragraph}>{paragraph}</Text>
            </View>
        </>
    );
};
const Details = () => {
    return (
        <View style={styles.container}>
            <View style={styles.ImgContainer}>
                <Image source={img} style={styles.img} />
            </View>
            <HeadText text="من نحن" />
            <HeadText
                paragraph="نقوم بتنفيذ جميع مقاولات واعمال البناء بجميع المراحل بداية من 
                            اعمال الحفر للأساسات مرورا بجميع المراحل وحتى اعمال تركيب 
                            الكهرباء والسباكة والنجارة واعمال السيراميك والرخام والواجهات 
                            والدهانات."
            />
            <HeadText
                paragraph="نقدم مجموعة كبيرة ومتميزة من الافكار والتصميمات لتشطيب 
                        العقارات والوحدات السكنية والشركات والهيئات والمؤسسات 
                        الحكومية وغيرها من الوحدات وتركيب كافة الخدمات واعمال 
                        التشطيبات الكاملة.
                        "
            />
            <HeadText
                paragraph="نقدم كافة الخدمات الخاصة بتصميم الديكورات وفق احدث الاساليب 
                        المتطورة والاشكال العصرية"
            />
        </View>
    );
}
export default Details;

