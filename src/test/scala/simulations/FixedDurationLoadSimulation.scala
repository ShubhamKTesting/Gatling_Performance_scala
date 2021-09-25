package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.language.postfixOps
class FixedDurationLoadSimulation extends Simulation{

  val httpConf = http.proxy(Proxy("localhost",8888))
    .baseUrl("https://reqres.in/")
    .header("accept","application/json")
    .header("content-type","application/json")

  def getAllUsersRequest() = {
    repeat(1) {
      exec(http("get all users request")
        .get("api/users?page=2")
        .check(status.is(200)))

    }
  }

  def getSingleUsersRequest() = {
    repeat(1) {
      exec(http("get single user request")
        .get("api/users/2")
        .check(status.is(200)))

    }
  }
  def addUser() = {
    repeat(1){
      exec(http("Add user request")
        .post("api/users")
        .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
        .check(status.is(201)))
    }
  }

  val scn = scenario("Fixed Duration Load simulation")
    .forever(){
      exec(getAllUsersRequest())
        .pause(2)
        .exec(getSingleUsersRequest())
        .pause(2)
        .exec(addUser())
    }
  setUp(
    scn.inject(
      nothingFor(5),
      atOnceUsers(10),
      rampUsers(50) during(30 seconds)
    ).protocols(httpConf)
  ).maxDuration(1 minute)
}
