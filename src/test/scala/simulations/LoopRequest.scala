package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._


class LoopRequest extends Simulation{

  val httpConf = http.baseUrl("https://reqres.in/")
    .header("accept","application/json")
    .header("content-type","application/json")

  def getAllUsersRequest() = {
    repeat(5) {
      exec(http("get all users request")
        .get("api/users?page=2")
        .check(status.is(200)))

    }
  }

    def getSingleUsersRequest() = {
      repeat(3) {
        exec(http("get single user request")
          .get("api/users/2")
          .check(status.is(200)))

      }
    }
    def addUser() = {
    repeat(8){
      exec(http("Add user request")
        .post("api/users")
        .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
        .check(status.is(201)))
    }
    }

  val scn = scenario("user request scenario")
    .exec(getAllUsersRequest())
    .pause(2)
    .exec(getSingleUsersRequest())
    .pause(2)
    .exec(addUser())


  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
}
