import type { NextPage } from "next"
import { Users } from "components"
import { Template } from "template"

const Home: NextPage = () => {
  return (
    <Template>
      <Users />
    </Template>
  )
}

export default Home