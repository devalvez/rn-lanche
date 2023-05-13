import { StatusBar } from "expo-status-bar"
import Welcome from "./src/screens/welcome/Welcome"

export default function App() {
  return (
    <>
      <Welcome />
      <StatusBar translucent/>
    </>
  )
}
