package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TestSimulation extends Simulation{

  //http conf
  val httpConf = http.baseUrl("https://reqres.in")
    .header("Accept", value = "application/json")
    .header("content-type", value = "application/json")

  //Scenario
  val scn = scenario("get user")
    .exec(http("get user request")
      .get("/api/users/2")
      .check(status is 200))

  //setup
    setUp(scn.inject(atOnceUsers(1000 ))).protocols(httpConf)

}