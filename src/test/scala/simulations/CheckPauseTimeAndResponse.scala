package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt

class CheckPauseTimeAndResponse extends Simulation{

  val httpConf = http.baseUrl("https://reqres.in")
    .header("Accept","application/json")

  val scn = scenario("user api calls")
    .exec(http("List all Users")
      .get("/api/users?page=2")
      .check(status.is(200)))
    .pause(5)

    .exec(http("single user API")
      .get("/api/users/2")
      .check(status.in(200 to 210)))
    .pause(1,10) //random time between 1 to 10 given

    .exec(http("single user not found API")
      .get("/api/users/23")
      .check(status.not(400),status.not(500)))
    .pause(3000.milliseconds) //import scala.concurrent.duration.DurationInt

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)


}
