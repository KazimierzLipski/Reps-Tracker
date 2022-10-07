//punkt - dzien
// punkt - tydzien
import { LineChart } from "react-native-chart-kit";
import { Dimensions, View } from "react-native";
import { Text } from "react-native";

export default function LineChartCom(props) {
  const data = {
    labels: ["1.10", "2.10", "3.10", "4.10", "5.10", "6.10", "7.10"],
    datasets: [
      {
        data: [props.weeksData[0][0].amount, 0, 60, 45, 99, 60, 100],
        color: (opacity = 1) => `rgba(76, 0, 153, ${opacity})`,
      },

      {
        data: [25, 30, 63, 35, 80, 40, 100],
        color: (opacity = 1) => `rgba(127, 0, 255, ${opacity})`,
      },
      {
        data: [30, 35, 70, 34, 87, 38, 98],
        color: (opacity = 1) => `rgba(204, 153, 255, ${opacity})`,
      },
    ],
  };




  const chartConfig = {
    //transparent robi czarne
    backgroundGradientFrom: "white",
    backgroundGradientTo: "white",
    decimalPlaces: 0,
    //opacity nic nie robi
    //color zmienia osie i tlo pod liniami
    color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    propsForBackgroundLines: {
      stroke: "rgba(235, 235, 235, 1)",
    },
  };

  return (
    <View>
    <LineChart
      data={data}
      width={Dimensions.get("window").width}
      height={330}
      chartConfig={chartConfig}
      style={{
        paddingRight: 60,
      }}
    >
      
    </LineChart>
    </View>
  );
}
