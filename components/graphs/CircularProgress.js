import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ProgressCircle from "react-native-progress-circle";

export default function CircularProgressCom() {
  return (
    <View style={styles.app}>
      <ProgressCircle
        percent={30}
        radius={180}
        borderWidth={18}
        color="#3399FF"
        shadowColor="#999"
        bgColor="black"
      >
        <ProgressCircle
          percent={20}
          radius={159}
          borderWidth={18}
          color="#3399FF"
          shadowColor="#999"
          bgColor="black"
        >
          <ProgressCircle
            percent={50}
            radius={138}
            borderWidth={18}
            color="#3399FF"
            shadowColor="#999"
            bgColor="black"
          >
            <ProgressCircle
              percent={70}
              radius={117}
              borderWidth={18}
              color="#3399FF"
              shadowColor="#999"
              bgColor="black"
            >
              <ProgressCircle
                percent={20}
                radius={96}
                borderWidth={18}
                color="#3399FF"
                shadowColor="#999"
                bgColor="black"
              >
                <ProgressCircle
                  percent={60}
                  radius={75}
                  borderWidth={18}
                  color="#3399FF"
                  shadowColor="#999"
                  bgColor="black"
                >
                  <ProgressCircle
                    percent={90}
                    radius={54}
                    borderWidth={18}
                    color="#3399FF"
                    shadowColor="#999"
                    bgColor="black"
                  >
                    <ProgressCircle
                      percent={10}
                      radius={33}
                      borderWidth={18}
                      color="#3399FF"
                      shadowColor="#999"
                      bgColor="black"
                    ></ProgressCircle>
                  </ProgressCircle>
                </ProgressCircle>
              </ProgressCircle>
            </ProgressCircle>
          </ProgressCircle>
        </ProgressCircle>
      </ProgressCircle>
      <View style={styles.status}>
        <Text style={styles.statusText}>Status:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    height: 800,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    paddingBottom: 250,
  },
  header: {
    marginBottom: 20,
    fontSize: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  status: {
    marginBottom: 20,
    marginTop: 20,
  },
  statusText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    marginRight: 35,
  },
});
