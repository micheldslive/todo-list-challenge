import type { GetStaticProps, NextPage } from "next"
import { Users } from "components"
import { ToDoListAPI } from "core/api/Api"
import { IListUsers } from "core/types"
import { Template } from "template"

const Home: NextPage<{ result: IListUsers[] }> = () => {
  return (
    <Template>
      <Users />
    </Template>
  )
}

export default Home
