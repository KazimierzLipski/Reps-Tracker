import "react-native-gesture-handler";
import { View, StatusBar, Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import LineChartCom from "../components/graphs/LineChart";
import CircularProgressCom from "../components/graphs/CircularProgress";
import BarChartCom from "../components/graphs/BarChart"

const DUMMY_8WEEKS_DATA = [
  [
    {
      id:'pushUps',
      amount: 0,
      date: new Date('2021-12-19'),
    },
    {
      id:'pushUps',
      amount: 560,
      date: new Date('2022-01-05'),
    },
    {
      id:'pushUps',
      amount: 665,
      date: new Date('2021-12-01'),
    },
    {
      id:'pushUps',
      amount: 540,
      date: new Date('2022-02-19'),
    },
    {
      id:'pushUps',
      amount: 700,
      date: new Date('2022-01-05'),
    },
    {
      id:'pushUps',
      amount: 700,
      date: new Date('2021-12-01'),
    },
    {
      id:'pushUps',
      amount: 693,
      date: new Date('2022-02-19'),
    },
    {
      id:'pushUps',
      amount: 590,
      date: new Date('2022-02-18'),
    }
  ],
  [
    {
    id:'dips',
    amount: 30,
    date: new Date('2021-12-19'),
  },
  {
    id:'dips',
    amount: 30,
    date: new Date('2022-01-05'),
  },
  {
    id:'dips',
    amount: 29,
    date: new Date('2021-12-01'),
  },
  {
    id:'dips',
    amount: 20,
    date: new Date('2022-02-19'),
  },
  {
    id:'dips',
    amount: 12,
    date: new Date('2022-01-05'),
  },
  {
    id:'dips',
    amount: 28,
    date: new Date('2021-12-01'),
  },
  {
    id:'dips',
    amount: 19,
    date: new Date('2022-02-19'),
  },
  {
    id:'dips',
    amount: 25,
    date: new Date('2022-02-18'),
  }
]
];

const proptext = 'XXXXXXXXXXX'

function Charts (props) {
  return (
    <TailwindProvider>
      <StatusBar barStyle="light-content" />
      <View className="flex flex-1 bg-zinc-800">
        <View className="flex flex-1 flex-row justify-between mt-6">
          <View>
            {/* <CircularProgressCom></CircularProgressCom> */}
            <BarChartCom></BarChartCom>
            <LineChartCom weeksData={DUMMY_8WEEKS_DATA}></LineChartCom>
          </View>
        </View>
      </View>
    </TailwindProvider>
  );
}

export default Charts;
