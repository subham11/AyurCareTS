import React, { memo } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useTranslation } from "react-i18next";
import DiseaseCategoryList from "../components/DiseaseCategoryList";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  DoctorsList: { subcategory: string };
};

type NavigationProps = StackNavigationProp<RootStackParamList, "DoctorsList">;

// ✅ Memoized ListItem to prevent unnecessary re-renders
const MemoizedDiseaseCategoryList = memo(DiseaseCategoryList);

const SearchScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{t("search")}</Text>
            <Text style={styles.subHeader}>Search for Diseases</Text>
          </View>
        }
        data={[{ key: "DiseaseCategoryList" }]} // ✅ Ensures only DiseaseCategoryList renders
        renderItem={() => <MemoizedDiseaseCategoryList navigation={navigation} />}
        keyExtractor={(item) => item.key}
        initialNumToRender={1} // ✅ Renders fewer items initially for better performance
        maxToRenderPerBatch={1} // ✅ Limits rendering batches
        updateCellsBatchingPeriod={100} // ✅ Improves batch processing
        getItemLayout={(_, index) => ({
          length: 400, // ✅ Estimated item height
          offset: 400 * index,
          index,
        })} 
        removeClippedSubviews={true} // ✅ Removes items outside viewport for better performance
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFF" },
  headerContainer: { alignItems: "center", paddingVertical: 20 },
  header: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  subHeader: { fontSize: 18, fontWeight: "600", textAlign: "center", marginBottom: 15 },
});

export default SearchScreen;
