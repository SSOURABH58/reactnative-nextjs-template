import React, { useState } from "react";
import {
  Button,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import type { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { ParsedUrlQuery } from "querystring";
import DateTimePicker from "@react-native-community/datetimepicker";

import { H1 } from "../components/webElements";
// import VideoPlayer from '../components/VideoPlayer'

import { config } from "../config/config";
import { MyWebDatePicker } from "../components/customeWebComp/MyWebDatePicker";

interface StartPageParams extends ParsedUrlQuery {}

interface StartPageProps extends PageMetaProps {
  serverValue: number;
}

export default function StartPage({
  serverValue,
}: StartPageProps): React.ReactElement {
  const [ShowDateTimePicker, setShowDateTimePicker] = useState(false);
  return (
    <View style={styles.container}>
      <H1 style={styles.h1}>CRM</H1>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>Text input</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
        <Text style={styles.text}>Number input</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          keyboardType="numeric"
        />
        <Text style={styles.text}>Password input</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          secureTextEntry
        />
        <Text style={styles.text}>Date Time picker input</Text>
        {Platform.OS !== "web" && (
          <Button
            title="Show Date Time Picker"
            onPress={() => setShowDateTimePicker(true)}
          />
        )}
        {/* add platform compatibility for web */}
        {Platform.OS !== "web" ? (
          ShowDateTimePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={(event, selectedDate) => {
                setShowDateTimePicker(false);
              }}
            />
          )
        ) : (
          <MyWebDatePicker />
        )}
        <Text style={styles.text}>Select input</Text>
        {/* look for packages */}
        <Text style={styles.text}>Radio input</Text>
        {/* look for packages */}
        <Text style={styles.text}>Checkbox input</Text>
        {/* look for packages */}
        <Text style={styles.text}>Switch input</Text>
        {/* look for packages */}
        <Text style={styles.text}>Slider input</Text>
        {/* look for packages */}
        <Text style={styles.text}>Video player</Text>
        {/* <VideoPlayer /> */}
        <Text style={styles.text}>Audio player</Text>
        {/* look for packages */}
        <Text style={styles.text}>Image</Text>
        {/* look for packages */}
        <Text style={styles.text}>File upload</Text>
        {/* look for packages */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 12,
  },
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
});

export async function getStaticProps({
  locale,
}: GetStaticPropsContext<StartPageParams>): Promise<
  GetStaticPropsResult<StartPageProps>
> {
  return {
    props: {
      serverValue: 12345,
    },
    revalidate: 10 * 60, // Refresh page every 10 minutes
  };
}
