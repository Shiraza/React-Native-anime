import React, { useContext } from 'react';
import { SafeAreaView, View, Image} from 'react-native';

import BookItem from '@components/BookItem';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import homepng from "@assets/image/homepng.png";
import ThemeContext from '@context/themeContext';


const kh = 'https://www.freeiconspng.com/uploads/manga-anime-folder-icon-25.png';


function Home({navigation}){
    const {isLightTheme, toggleTheme} = useContext(ThemeContext);
    const handleHome=()=>navigation.navigate("HomeList");

    return(
        <SafeAreaView style={[styles.container, isLightTheme && styles.containerDark]}>
           <TouchableOpacity onPress={handleHome}>
                <View style={styles.firstSection}>
                    <Image style={styles.animeSection} resizeMode="contain" source={homepng} />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home;